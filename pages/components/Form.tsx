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
    const [campus, setCampus] = useState("LaSalle")
    const [error, setError] = useState("")

    
    const submitHandler = async () => { 
      if(studentIdInput != undefined && useGetName(studentIdInput) === undefined){
        setError(()=>"Enter valid student ID")
        return
      }
      setError("")
      useUpdateDocument(studentIdInput, campus, getTime(), true)
      const userDoc = query(passesCollectionRef, where("studentID", "==",studentIdInput))
      await (await getDocs(userDoc)).forEach(user => {
        props.setStudentPassRequest(user.data()) 
      })
      props.setPassRequested(true)
    }
    
    const getTime = () : number => {
      return new Date().getTime()
    }
    
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
          <NativeSelect
          data={[
            { value: 'LaSalle', label: 'LaSalle' },
            { value: 'DePaul', label: 'DePaul' }
          ]}
          onChange = {e => setCampus(e.target.value)}
          placeholder="Pick one"
          label="Select campus to pick up pass"
          radius="xs"
          />
          <Button onClick = {submitHandler}>Submit
          </Button>
        </Group>
      </div>
    )
  }
  
  export default Form