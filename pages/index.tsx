import type { NextPage } from 'next'
import React, { ReactElement, useEffect, useState } from 'react';
import { Title } from '@mantine/core';
import StudentCard from '../components/StudentCard/StudentCard';
import { updateDocument } from '../hooks/updateDocument';
import { collection, getDocs, where, setDoc, doc, Query, onSnapshot } from 'firebase/firestore'
import LogIn from '../components/logIn';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase/clientApp';
import { query } from 'firebase/firestore';
import Head from 'next/head';
import StudentPassRequest from '../components/StudentCard/StudentCard'

export interface studentPassRequestInterface {
  studentID: number,
  pickupLocation: string,
  requestTime: number
  offCampus: boolean
  name: string 
  email: string
  isPassApprovalRequested: boolean,
  isPassApproved: boolean,
}


const Home: NextPage = () => {
  const [studentPassRequest, setStudentPassRequest] = useState<studentPassRequestInterface>({ studentID: 0, pickupLocation: "", requestTime: 0, offCampus: false, name: "", email: "", isPassApprovalRequested : false, isPassApproved : false})
  const [passRequested, setPassRequested] = useState<boolean>(false)
  const [user, loading, error] = useAuthState(auth)

  useEffect(() => {
    console.log(typeof user, "user type")
    if (loading) { console.log(loading, "loading"); return }
    if (error) { console.log(error, "error"); return }
    if (user) {
      getStudents()
      }
  }, [user])

  useEffect(()=>{
    if(studentPassRequest.studentID != 0){
      setPassRequested(true)
    }
  },[studentPassRequest])
  const getDocument = async (user: User) => {
    let userDoc = await query(collection(db, "passes"), where("email", "==", user.email))
    let studentDoc = await getDocs(userDoc)
    studentDoc.forEach(student => {
      console.log(student.data(), "get doc user data")
      setStudentPassRequest((prevState) => prevState = student.data() as studentPassRequestInterface)
    })
    setPassRequested(true)
  }
  const getStudents = async () => {
    //add where for where pass requested
    if(user){
      const q1 = query(collection(db, "passes"), where("email", "==", user.email));
          const unsubscribe1 = onSnapshot(q1, (querySnapshot) => {
          querySnapshot.docChanges().forEach((change) => {
            console.log(typeof change.doc.data(),"hi")
                  if (change.type === "added") {
                    setStudentPassRequest((prevState) => prevState = change.doc.data() as studentPassRequestInterface)
                  }
                  if (change.type === "modified") {
                    setStudentPassRequest((prevState) => prevState = change.doc.data() as studentPassRequestInterface)
                  }
                  if(change.type === "removed") { 
                    setStudentPassRequest((prevState) => prevState = change.doc.data() as studentPassRequestInterface)
                  }
              });
          }); 
        }
    }
  const handleDelete = (studentPass: studentPassRequestInterface) => {
    if (studentPass.requestTime === null) { return }
    setStudentPassRequest((prevState) => prevState = { studentID: studentPass.studentID, pickupLocation: studentPass.pickupLocation, requestTime: studentPass.requestTime, offCampus: false, name: studentPass.name, email: studentPass.email, isPassApprovalRequested : studentPass.isPassApprovalRequested, isPassApproved : studentPass.isPassApproved })
    studentPass.offCampus = false
    updateDocument({ ...studentPass })
  }

  const handleRequestPassButton = (studentPass: studentPassRequestInterface) => {
    console.log(studentPass, "studentPass")
    if (studentPass.requestTime === null) { return }
    let passRequestTime = new Date().getTime()
    setStudentPassRequest((prevState) => prevState = { studentID: studentPass.studentID, pickupLocation: studentPass.pickupLocation, requestTime: passRequestTime, offCampus: studentPass.offCampus, name: studentPass.name, email: studentPass.email, isPassApprovalRequested : true, isPassApproved : studentPass.isPassApproved })
    studentPass.isPassApprovalRequested = true
    /* setStudentPassRequest((prevState) => prevState = { studentID: studentPass.studentID, pickupLocation: studentPass.pickupLocation, requestTime: passRequestTime, offCampus: true, name: studentPass.name, email: studentPass.email, isPassApprovalRequested : studentPass.isPassApprovalRequested, isPassApproved : studentPass.isPassApproved })
    studentPass.offCampus = true */
    updateDocument({ ...studentPass })
  }

  const emailCheck = () => {
    if (user) {
      let userEmail = user.email
      if(userEmail == null){return}
      if (userEmail.split('@')[1] === "shcp.edu") {
        return (<>{passRequested ? <StudentCard setStudentPassRequest={setStudentPassRequest} studentPassRequest={studentPassRequest} studentPassType buttonFunction={handleDelete} requestPassButton={handleRequestPassButton} /> : ""}</>)
      } else {
        return (<Title align="center">Use SHC student gmail account get a pass</Title>)
      }
    }
  }

  return (
    <>
    <LogIn>
      {emailCheck()}
    </LogIn>
    </>
  )
}

export default Home
