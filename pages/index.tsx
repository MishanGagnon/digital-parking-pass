import type { NextPage } from 'next'
import React, { ReactElement, useEffect, useState } from 'react';
import { Group, Input } from '@mantine/core';
import Form from 'components/Form';
import StudentCard from 'components/StudentCard';
import useAddAllUsers from 'hooks/useAddAllUsers';
import useUpdateDocument from 'hooks/useUpdateDocument';



interface studentPassRequest{ 
  studentID : number, 
  pickupLocation : string
  requestTime : number | null
  offCampus : boolean
}


const Home: NextPage = () => {
  const [studentPassRequest, setStudentPassRequest] = useState<studentPassRequest>({studentID : 0, pickupLocation : "", requestTime : null, offCampus : false})
  const [passRequested, setPassRequested] = useState<boolean>(false)


  const handleDelete = (studentPass: studentPassRequest ) => {
    if(studentPass.requestTime === null){return}
    useUpdateDocument(studentPass.studentID, studentPass.pickupLocation, studentPass.requestTime, false)
    setPassRequested(false)
  }

  const handleRequestPassButton = (studentPass : studentPassRequest) => { 
    if(studentPass.requestTime === null){return}
    useUpdateDocument(studentPass.studentID, studentPass.pickupLocation, studentPass.requestTime, true)
    setStudentPassRequest({studentID : studentPass.studentID, pickupLocation : studentPass.pickupLocation, requestTime : studentPass.requestTime, offCampus : true})
  }

  return (
    <div>
      <Group direction = "column" position = "center" >
        {passRequested ? '' : <Form setStudentPassRequest = {setStudentPassRequest} setPassRequested = {setPassRequested} />}
        {passRequested ? <StudentCard setStudentPassRequest = {setStudentPassRequest} studentPassRequest = {studentPassRequest} studentPassType buttonFunction = {handleDelete} requestPassButton = {handleRequestPassButton}/>: ''}
      </Group>
    </div>
  )
}

export default Home
