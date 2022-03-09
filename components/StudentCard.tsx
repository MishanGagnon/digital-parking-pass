import { Accordion, AccordionItem, ActionIcon, Badge, Card, CloseButton, Container, Group, Image, Mark, NativeSelect, Text, Transition } from "@mantine/core"
import { NextPage } from "next"
import React, { useEffect, useState } from "react"
import { AiOutlinePlus } from 'react-icons/ai';
import stylesCss from '../components/component.module.css'


interface studentPassRequest {
  studentID: number,
  pickupLocation: string,
  requestTime: number
  offCampus: boolean
  name: string 
  email: string
}
interface Props {
  studentPassRequest: studentPassRequest
  studentPassType: boolean
  buttonFunction: any
  requestPassButton?: any
  setStudentPassRequest?: React.Dispatch<React.SetStateAction<studentPassRequest>>
}


const StudentCard: NextPage<Props> = (props) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    if(props.studentPassType && props.setStudentPassRequest != undefined){
      props.setStudentPassRequest((prevState) => {prevState.pickupLocation = 'LaSalle'; return prevState})
    }
    setMounted((true))
  }, [])

  const exitFunction = () => {
    props.buttonFunction(props.studentPassRequest)
  }
  const conditionalExitHandler = () => {
    console.log('ran')
    if (!props.studentPassType) {
      setMounted(false)
    } else {
      props.buttonFunction(props.studentPassRequest)
    }
  }

  const formChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if(props.setStudentPassRequest === undefined){return}
    props.setStudentPassRequest((prevState) => {prevState.pickupLocation = e.target.value; return prevState})
  }
  //add student id to student card
  return (
    <div className={stylesCss.container}>
      <Transition mounted={mounted} onExited={() => { exitFunction() }} transition="slide-right" duration={400} timingFunction="ease">
        {(styles) => (
          <Card shadow='lg' className={stylesCss.card} style={styles} >

            <Accordion initialItem={props.studentPassType ? 0 : -1}>
              <AccordionItem label={props.studentPassRequest.name + " : " + props.studentPassRequest.studentID}>
                <Group>
                  <Image
                    width={120}
                    radius="md"
                    src={`/images/${props.studentPassRequest.studentID}.jpg`}
                    alt="Random unsplash image"
                  />
                  <Group direction="column" spacing="xs">
                    {props.studentPassRequest.requestTime ?

                      (
                        <Group direction="row">
                          <div>
                            <h2>{props.studentPassRequest.name}</h2>
                            {props.studentPassRequest.offCampus ? (
                              <>
                                <Text>Requested at {new Date(props.studentPassRequest.requestTime).toLocaleTimeString()}</Text>
                                <Text>Pickup at {props.studentPassRequest.pickupLocation}</Text>
                              </>
                            ) : ""}
                            <Text>Currently <Badge color={props.studentPassRequest.offCampus ? "red" : "green"}>{props.studentPassRequest.offCampus ? "off campus" : "on campus"}</Badge></Text>
                          </div>

                          {/* onlclick for button sets the unmount which fires the student removal*/}
                          {
                            (props.studentPassType && !props.studentPassRequest.offCampus) ?
                              (<>
                                <NativeSelect
                                  data={[
                                    { value: 'LaSalle', label: 'LaSalle' },
                                    { value: 'DePaul', label: 'DePaul' }
                                  ]}
                                  onChange={(e) => formChangeHandler(e)}
                                  placeholder="Pick one"
                                  label="Select campus to pick up pass"
                                  radius="xs"
                                />
                                <ActionIcon size='xl' color='green' onClick={() => { props.requestPassButton(props.studentPassRequest) }} variant="filled"><AiOutlinePlus style={{ width: '26px', height: '26px' }} /></ActionIcon>                            </>
                              )
                              :
                              (<CloseButton size='xl' color='red' variant='filled' onClick={() => { conditionalExitHandler() }} />)
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