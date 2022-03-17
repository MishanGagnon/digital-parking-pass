import { Accordion, AccordionItem, ActionIcon, Badge, Button, Card, CloseButton, Container, Group, Image, Mark, Modal, NativeSelect, Text, Transition } from "@mantine/core"
import { NextPage } from "next"
import React, { useEffect, useState } from "react"
import { AiOutlineBarcode, AiOutlinePlus } from 'react-icons/ai';
import stylesCss from '../component.module.css'
import Barcode from "react-barcode"
import StudentCardDetails from "./StudentCardDetails";
import StudentCardButtons from "./StudentCardButtons";
import StudentCardBadge from "./StudentCardBadge";
import { studentPassRequestInterface } from "index";
import { updateDocument } from "../../hooks/updateDocument";


interface Props {
  studentPassRequest: studentPassRequestInterface
  studentPassType: boolean
  buttonFunction: any
  requestPassButton?: any
  setStudentPassRequest?: React.Dispatch<React.SetStateAction<studentPassRequestInterface>>
}


const StudentCard: NextPage<Props> = (props) => {
  const [mounted, setMounted] = useState(false)
  const [barcodeModalOpen, setBarcodeModalOpen] = useState(false)
  const [isAccordianOpen, setIsAccordionOpen] = useState(false)
  useEffect(() => {
    if(props.studentPassType && props.setStudentPassRequest != undefined){
      props.setStudentPassRequest((prevState) => {prevState.pickupLocation = 'LaSalle'; return prevState})
    }
    setMounted((true))
  }, [])

  const exitFunction = () => {
    props.buttonFunction(props.studentPassRequest)
  }

  const submitPassRequest = (studentPass: studentPassRequestInterface) => {
    let passRequestTime = new Date().getTime()
    studentPass.isPassApprovalRequested = false
    studentPass.offCampus = true
    studentPass.requestTime = passRequestTime
    updateDocument({ ...studentPass })
  }
  const declinePassRequest = (studentPass: studentPassRequestInterface) => {
    let passRequestTime = new Date().getTime()
    studentPass.isPassApprovalRequested = false
    studentPass.offCampus = false
    studentPass.requestTime = passRequestTime
    updateDocument({ ...studentPass })
  }

  //add student id to student card
  return (
    <div className={stylesCss.container}>
      <Transition mounted={mounted} onExited={() => { exitFunction() }} transition="slide-right" duration={400} timingFunction="ease">
        {(styles) => (
          <Card sx = {{backgroundColor : props.studentPassRequest.isPassApprovalRequested ? '#fcffdf' : undefined}} shadow='lg' className={stylesCss.card} style={styles} >

            <Accordion  initialItem={props.studentPassType ? 0 : -1} onChange = {()=>{setIsAccordionOpen((prevState)=> prevState = !prevState)}}>
              <AccordionItem  label={props.studentPassRequest.name + " : " + props.studentPassRequest.studentID}>
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
                            <Group direction = {"column"}>
                              <StudentCardDetails studentPassRequest = {props.studentPassRequest}/>
                              <StudentCardBadge studentPassRequest = {props.studentPassRequest}/>
                            </Group>
                            <StudentCardButtons setMounted = {setMounted} buttonFunction = {props.buttonFunction} requestPassButton = {props.requestPassButton} studentPassRequest = {props.studentPassRequest} studentPassType = {props.studentPassType} setStudentPassRequest = {props.setStudentPassRequest}/>
                        </Group>
                      )
                      : ""}
                  </Group>
                </Group>
              </AccordionItem>
            </Accordion>
            <Group direction = 'row'>
            {!props.studentPassType && props.studentPassRequest.isPassApprovalRequested && !isAccordianOpen ? (
              <>
              <ActionIcon
                size="xl"
                color="green"
                onClick={() => {
                  submitPassRequest(props.studentPassRequest);
                }}
                variant="filled"
              >
                <AiOutlinePlus style={{ width: "26px", height: "26px" }} />
              </ActionIcon>
                  <CloseButton
                size="xl"
                color="red"
                variant="filled"
                onClick={() => {
                  declinePassRequest(props.studentPassRequest);
                }}
              />
              </>
            ) : 
            ''}
            </Group>
          </Card>
        )}
      </Transition>
    </div>
  )
}

export default StudentCard