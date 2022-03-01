import { Button, NumberInput, InputWrapper, NativeSelect, Group } from "@mantine/core"
import { useInputState } from '@mantine/hooks';
import useGetName from "hooks/useGetName";
import { NextPage } from "next"
import React, {useRef, useState} from "react"
import styles from '../components/component.module.css'

interface Props {
  setStudentPassRequest: React.Dispatch<React.SetStateAction<any>>;
  setPassRequested: React.Dispatch<React.SetStateAction<any>>;
}




const Form: NextPage<Props> = (props) => {
    const [studentIdInput, setStudentIdInput] = useInputState<number | undefined>(undefined)
    const [campus, setCampus] = useState("LaSalle")
    const [error, setError] = useState("")

    
    const submitHandler = () => { 
      if(studentIdInput != undefined && useGetName(studentIdInput) === undefined){
        setError(()=>"Enter valid student ID")
        return
      }
      setError("")
      props.setPassRequested(true)
      props.setStudentPassRequest({studentID : studentIdInput, pickupLocation : campus, requestTime : getTime()}) 
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