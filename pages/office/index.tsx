import { CloseButton, Divider, Group, Select, TextInput, Title } from '@mantine/core'
import { ActionIcon } from '@mantine/core'
import StudentCard from '../../components/StudentCard'
import { collection, doc, getDocs, onSnapshot, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../firebase/clientApp'
import { motion } from "framer-motion"
import { updateDocument } from '../../hooks/updateDocument'
import { useAuthState } from 'react-firebase-hooks/auth'
import LogIn from '../../components/logIn'
interface studentPassRequest{ 
    studentID : number, 
    pickupLocation : string
    requestTime : number
    offCampus : boolean
    name : string
    email : string
  }


const passesCollectionRef = query(collection(db, "passes"), where("offCampus", "==", true))
const Index = () => {
    const [firebaseData, setFirebaseData] = useState<studentPassRequest[] | any>([])
    const [recievedData, setRecievedData] = useState(false)
    const [campusSelect, setCampusSelect] = useState("")
    const [studentSearch, setStudentSeach] = useState("")
    const [user, loading, error] = useAuthState(auth)
    const variants = {
        show: {
          opacity: 1,
          y: 0,
          transition: {
            ease: 'easeOut',
            duration: 0.3
          }
        },
        hide: {
          y: -20,
          opacity: 0
        }
      }

    const handleDelete = (studentPass: studentPassRequest ) => {
        studentPass.offCampus = false
        updateDocument({...studentPass})
    }


    //subscribes to collection query for what students are off campus

    useEffect(()=>{
        
        //turn this into a hook somehow?
        const getStudents = async () => {
            const q = query(collection(db, "passes"), where("offCampus", "==", true));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
            querySnapshot.docChanges().forEach((change) => {
                    if (change.type === "added") {
                        setFirebaseData((prevState: any) => [...prevState, change.doc.data()])
                    }
                    if (change.type === "modified") {
                        setFirebaseData((prevState : studentPassRequest[]) => {return [...prevState.filter((student : studentPassRequest) => {return change.doc.data().studentID != student.studentID}), change.doc.data()]})
                    }
                    if(change.type === "removed") { 
                        setFirebaseData((prevState : studentPassRequest[]) => {return [...prevState.filter((student : studentPassRequest) => {return change.doc.data().studentID != student.studentID})]})
                    }
                });
            }); 
            setRecievedData(true)
        }
        getStudents()
    },[])

    const emailCheck = () => {
        if (user) {
          let userEmail = user.email
          if(userEmail == null){return}
          if (userEmail.split('@')[1] === "shcp.edu" && (parseInt(userEmail.slice(0,3)) === NaN || userEmail === "22mgagnon@shcp.edu")) {
            return (
            <Group direction = "column" position = "center" style = {{backgroundColor  : ""}}>
            <h1 style = {{textAlign : "center"}}>Students Currently off Campus </h1>
            <Group direction = "row">
                <TextInput label="Student Search" onChange = {(e) => {setStudentSeach(e.target.value)}}/>
                <Select
                label="Select campus passes to view"
                placeholder="select"
                data={[
                    { value: 'DePaul', label: 'DePaul' },
                    { value: 'LaSalle', label: 'LaSalle' }
                ]}
                onChange = {(val)=>{if(val){setCampusSelect(val)}}}
                />
            </Group>
                {recievedData && firebaseData.length != 0 ? (firebaseData.filter((student: studentPassRequest) => {
                    if(campusSelect === ""){return student}
                    return student.pickupLocation === campusSelect
                })
                .filter((student : studentPassRequest)=>{
                    if(studentSearch === ""){return student}
                    return student.name.toLowerCase().includes(studentSearch.toLowerCase())
                })
                .reverse()
                .map((student : studentPassRequest) => 
            (
                    // maps through firebase document and loads all students
                    <Group direction = "row" key={student.studentID} position = "center" >
                        <StudentCard studentPassType = {false} studentPassRequest = {student} buttonFunction = {handleDelete}/>
                    </Group>
            )
            )) : ""}
            </Group>)
          } else {
            return (<Title align="center">Use SHC faculty account to access</Title>)
          }
        }
      }
      
    return(
        <>
        <LogIn>
            {emailCheck()}
        </LogIn>
        </>
    )
}

export default Index
