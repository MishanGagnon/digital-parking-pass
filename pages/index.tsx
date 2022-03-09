import type { NextPage } from 'next'
import React, { ReactElement, useEffect, useState } from 'react';
import { Group, Input, Title } from '@mantine/core';
import Form from 'components/Form';
import StudentCard from 'components/StudentCard';
import useAddAllUsers from 'hooks/useAddAllUsers';
import useUpdateDocument from 'hooks/useUpdateDocument';
import { collection, getDocs, where, setDoc, doc, Query } from 'firebase/firestore'
import LogIn from 'components/logIn';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase/clientApp';
import { query } from 'firebase/firestore';
import { FirebaseError } from 'firebase/app';

interface studentPassRequest {
  studentID: number,
  pickupLocation: string
  requestTime: number | null
  offCampus: boolean
  name: string
  email: string
}


const Home: NextPage = () => {
  const [studentPassRequest, setStudentPassRequest] = useState<studentPassRequest>({ studentID: 0, pickupLocation: "", requestTime: null, offCampus: false, name: "", email: "" })
  const [passRequested, setPassRequested] = useState<boolean>(false)
  const [user, loading, error] = useAuthState(auth)

  useEffect(() => {
    console.log(typeof user, "user type")
    if (loading) { console.log(loading, "loading"); return }
    if (error) { console.log(error, "error"); return }
    if (user) {
      getDocument(user)
    }
  }, [user])

  const getDocument = async (user: User) => {
    let userDoc = await query(collection(db, "passes"), where("email", "==", user.email))
    let studentDoc = await getDocs(userDoc)
    studentDoc.forEach(student => {
      console.log(student.data(), "get doc user data")
      setStudentPassRequest((prevState) => prevState = student.data())
    })
    setPassRequested(true)
  }
  const handleDelete = (studentPass: studentPassRequest) => {
    if (studentPass.requestTime === null) { return }
    setStudentPassRequest((prevState) => prevState = { studentID: studentPass.studentID, pickupLocation: studentPass.pickupLocation, requestTime: studentPass.requestTime, offCampus: false, name: studentPass.name, email: studentPass.email })
    useUpdateDocument(studentPass.studentID, studentPass.pickupLocation, studentPass.requestTime, false, studentPass.name, studentPass.email)
  }

  const handleRequestPassButton = (studentPass: studentPassRequest) => {
    if (studentPass.requestTime === null) { return }
    let passRequestTime = new Date().getTime()
    useUpdateDocument(studentPass.studentID, studentPass.pickupLocation, passRequestTime, true, studentPass.name, studentPass.email)
    setStudentPassRequest({ studentID: studentPass.studentID, pickupLocation: studentPass.pickupLocation, requestTime: passRequestTime, offCampus: true, name: studentPass.name, email: studentPass.email })
  }

  const emailCheck = () => {
    if (user) {
      if (user.email.split('@')[1] === "shcp.edu") {
        return (<>{passRequested ? <StudentCard setStudentPassRequest={setStudentPassRequest} studentPassRequest={studentPassRequest} studentPassType buttonFunction={handleDelete} requestPassButton={handleRequestPassButton} /> : ""}</>)
      } else {
        return (<Title align = "center">Use SHC student gmail account get a pass</Title>)
      }
    }
  }

  return (
      <LogIn>
        {emailCheck()}
      </LogIn>  
  )
}

export default Home
