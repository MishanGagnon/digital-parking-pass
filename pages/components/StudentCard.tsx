import { Accordion, AccordionItem, Badge, Card, CloseButton, Container, Group, Image, Mark, NativeSelect, Text, Transition } from "@mantine/core"
import { NextPage } from "next"
import React, { useEffect, useState } from "react"
import stylesCss from '../components/component.module.css'
import useGetName from "hooks/useGetName"


interface studentPassRequest{ 
  studentID : number, 
  pickupLocation : string,
  requestTime : number | null
  offCampus : boolean
}
interface Props {
  studentPassRequest : studentPassRequest
  studentPassType : boolean
  buttonFunction : any
  requestPassButton? : any
  setStudentPassRequest : React.Dispatch<React.SetStateAction<studentPassRequest>>
}


const StudentCard: NextPage<Props> = (props) => {
    console.log(props.studentPassType,"top")
    const [mounted, setMounted] = useState(false)
    useEffect(()=>{
      setMounted((true))
    },[])

    const exitFunction = () => { 
      props.buttonFunction(props.studentPassRequest)
    }

    const formChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
      props.setStudentPassRequest((prevState)=> prevState = {studentID : props.studentPassRequest.studentID, pickupLocation : e.target.value, requestTime : props.studentPassRequest.requestTime, offCampus : props.studentPassRequest.offCampus})
    }
    //add student id to student card
    return (
      <div className = {stylesCss.container}>
        <Transition mounted={mounted} onExited = {()=> {exitFunction()}} transition="slide-right" duration={400} timingFunction="ease">
        {(styles) => (
            <Card shadow = 'lg' className = {stylesCss.card} style = {styles} >

                <Accordion initialItem = {props.studentPassType ? 0 : -1}>
                <AccordionItem label  =  {useGetName(props.studentPassRequest.studentID) + " : " + props.studentPassRequest.studentID}>
                  <Group>
                    <Image
                      width = {120}
                      radius="md"
                      src={`/images/${props.studentPassRequest.studentID}.jpg`}
                      alt="Random unsplash image"
                      />
                      <Group direction = "column" spacing = "xs">
                        {props.studentPassRequest.requestTime ?  
                        
                        (
                        <Group direction = "row">  
                          <div>
                              <h2>{useGetName(props.studentPassRequest.studentID)}</h2>
                              <Text>Requested at {new Date(props.studentPassRequest.requestTime * 1000).toLocaleTimeString()}</Text>
                              <Text>Pickup at {props.studentPassRequest.pickupLocation}</Text>
                              <Text>Currently <Badge color = {props.studentPassRequest.offCampus ? "red" : "green"}>{props.studentPassRequest.offCampus ? "off campus" : "on campus"}</Badge></Text>
                          </div>

                          {/* onlclick for button sets the unmount which fires the student removal*/}
                          {console.log(props.studentPassType, !props.studentPassRequest.offCampus, "hi")}
                          {
                            (props.studentPassType && !props.studentPassRequest.offCampus) ? 
                            (<>
                            <NativeSelect
                              data={[
                                { value: 'LaSalle', label: 'LaSalle' },
                                { value: 'DePaul', label: 'DePaul' }
                              ]}
                              onChange = {(e)=>formChangeHandler(e)}
                              placeholder="Pick one"
                              label="Select campus to pick up pass"
                              radius="xs"
                              />
                              <CloseButton size = 'xl' color = 'green' variant = 'filled' onClick = {()=> {props.requestPassButton(props.studentPassRequest)}}/>
                            </>
                            )
                            : 
                            (<CloseButton size = 'xl' color = 'red' variant = 'filled' onClick = {()=> {setMounted(false)}}/>)
                          }
                        </Group>
                        )
                        : ""}
                      </Group>
                  </Group>
                </AccordionItem>
                </Accordion>
            </Card>

        )}
        </Transition>
      </div>
    )
  }
  
  export default StudentCard