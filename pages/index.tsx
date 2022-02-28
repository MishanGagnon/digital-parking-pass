import type { NextPage } from 'next'
import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Group, Input } from '@mantine/core';
import { InputWrapper, Button, NativeSelect } from '@mantine/core';
import Form from 'components/Form';
import StudentCard from 'components/StudentCard';


interface studentPassRequest{ 
  studentID : number, 
  pickupLocation : string
  requestTime : Date | null
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
