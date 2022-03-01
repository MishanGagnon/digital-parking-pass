import type { NextPage } from 'next'
import React, { ReactElement, useEffect, useState } from 'react';
import { Group, Input } from '@mantine/core';
import Form from 'components/Form';
import StudentCard from 'components/StudentCard';



interface studentPassRequest{ 
  studentID : number, 
  pickupLocation : string
  requestTime : number | null
}


const Home: NextPage = () => {
  const [studentPassRequest, setStudentPassRequest] = useState<studentPassRequest>({studentID : 0, pickupLocation : "", requestTime : null})
  const [passRequested, setPassRequested] = useState<boolean>(false)
  return (
    <div>
      <Group direction = "column" position = "center">
        <Form setStudentPassRequest = {setStudentPassRequest} setPassRequested = {setPassRequested} />
        {passRequested ? <StudentCard studentPassRequest = {studentPassRequest}/> : ''}
      </Group>
    </div>
  )
}

export default Home
