import { Button, NumberInput, InputWrapper, NativeSelect, Group } from "@mantine/core"
import { useInputState } from '@mantine/hooks';
import useGetName from "hooks/useGetName";
import { NextPage } from "next"
import React, {useRef, useState} from "react"
import { db } from "../../firebase/clientApp";
import { collection, getDocs, query, where, setDoc, doc } from 'firebase/firestore'
import styles from '../components/component.module.css'
import useUpdateDocument from "hooks/useUpdateDocument";

interface Props {
  setStudentPassRequest: React.Dispatch<React.SetStateAction<any>>;
  setPassRequested: React.Dispatch<React.SetStateAction<any>>;
}
const passesCollectionRef = collection(db, "passes")



const Form: NextPage<Props> = (props) => {
    const [studentIdInput, setStudentIdInput] = useInputState<number | undefined>(undefined)
    const [error, setError] = useState("")

    
    const submitHandler = async () => { 
      if(studentIdInput === 69){
        setError(()=>"nice")
        return
      }
      if(studentIdInput != undefined && useGetName(studentIdInput) === undefined){
        setError(()=>"Enter valid student ID")
        return
      }
      setError("")
      useUpdateDocument(studentIdInput, "not selected", getTime())
      const userDoc = query(passesCollectionRef, where("studentID", "==",studentIdInput))
      await (await getDocs(userDoc)).forEach(user => {
        console.log(user.data())
        props.setStudentPassRequest(user.data()) 
      })
      props.setPassRequested(true)
    }
    
    const getTime = () : number => {
      return new Date().getTime()
    }
    
    //dont auto submit the form, show the student card and show the status of whether or not 
    // pass was accepted or rejected and then allow the student to request a new pass from there

    return (
      <div className = {styles.container}>
        <Group position = "center">
            <InputWrapper
            id="student-id"
            required
            label="Student ID"
            error = {error}
            >
            <NumberInput id="input-demo" placeholder="Your student ID number" value = {studentIdInput} onChange = {setStudentIdInput}/>
          </InputWrapper>
          <Button onClick = {submitHandler}>Submit
          </Button>
        </Group>
      </div>
    )
  }
  
  export default Form