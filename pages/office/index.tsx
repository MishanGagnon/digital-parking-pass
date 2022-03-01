import StudentCard from 'components/StudentCard'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/clientApp'

interface studentPassRequest{ 
    studentID : number, 
    pickupLocation : string
    requestTime : number | null
  }

const passesCollectionRef = collection(db, "passes")
const Index = () => {
    const [firebaseData, setFirebaseData] = useState<studentPassRequest[] | any>([])
    const [recievedData, setRecievedData] = useState(false)

    // maps through firebase document and loads all students
    const activeStudentCards = () => {
        return firebaseData.map((student : studentPassRequest) => <StudentCard key={student.studentID} studentPassRequest = {student}/>)
    }

    //loads doc from firebase and marks data as recieved for condit render
    useEffect(()=>{
        const getStudents = async () => {
        const data = await getDocs(passesCollectionRef)
        data.docs.map(doc => setFirebaseData((prevState: any) => [...prevState, doc.data()]))
        setRecievedData(true)
        }
        getStudents()
    },[])


    return(
        <>
            {recievedData ? activeStudentCards() : ""}
        </>
    )
}

export default Index
