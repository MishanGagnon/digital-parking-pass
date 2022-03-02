import { CloseButton, Group } from '@mantine/core'
import { ActionIcon } from '@mantine/core'
import StudentCard from 'components/StudentCard'
import { collection, doc, getDocs, onSnapshot, query, where } from 'firebase/firestore'
import useUpdateDocument from 'hooks/useUpdateDocument'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/clientApp'

interface studentPassRequest{ 
    studentID : number, 
    pickupLocation : string
    requestTime : number
  }



const passesCollectionRef = query(collection(db, "passes"), where("offCampus", "==", true))
const Index = () => {
    const [firebaseData, setFirebaseData] = useState<studentPassRequest[] | any>([])
    const [recievedData, setRecievedData] = useState(false)


    const handleDelete = (studentPass: studentPassRequest ) => {
        useUpdateDocument(studentPass.studentID, studentPass.pickupLocation, studentPass.requestTime, false)
        setFirebaseData(firebaseData.filter((student : studentPassRequest) => {return studentPass.studentID != student.studentID}))
    }

    //loads doc from firebase and marks data as recieved for condit render
    useEffect(()=>{
        const getStudents = async () => {
            /* const data = await getDocs(passesCollectionRef)
            data.docs.map(doc => setFirebaseData((prevState: any) => [...prevState, doc.data()]))
            setRecievedData(true) */
            const q = query(collection(db, "passes"), where("offCampus", "==", true));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
            querySnapshot.docChanges().forEach((change) => {
                    if (change.type === "added") {
                        setFirebaseData((prevState: any) => [...prevState, change.doc.data()])
                    }
                    if (change.type === "modified" ) {
                        console.log(firebaseData,"firebase data")
                        console.log([...firebaseData.filter((student : studentPassRequest) => {return change.doc.data().studentID != student.studentID}), change.doc.data()],"array")
                        setFirebaseData([...firebaseData.filter((student : studentPassRequest) => {return change.doc.data().studentID != student.studentID}), change.doc.data()])
                    }
                });
            }); 
            setRecievedData(true)
        }
        getStudents()
    },[])


    return(
        <>
            <h1>Students Currently off Campus </h1>
            {recievedData && firebaseData.length != 0 ? (firebaseData.map((student : studentPassRequest) => 
        (

                // maps through firebase document and loads all students

            <Group direction = "row" key={student.studentID} position = "center" >
                <StudentCard studentPassRequest = {student}/>
                <CloseButton size = 'xl' color = 'red' variant = 'filled' onClick = {() => handleDelete(student)}/>
            </Group>
        )
        )) : ""}
        </>
    )
}

export default Index
