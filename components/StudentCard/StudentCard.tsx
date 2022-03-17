import { Accordion, AccordionItem, ActionIcon, Badge, Button, Card, CloseButton, Container, Group, Image, Mark, Modal, NativeSelect, Text, Transition } from "@mantine/core"
import { NextPage } from "next"
import React, { useEffect, useState } from "react"
import { AiOutlineBarcode, AiOutlinePlus } from 'react-icons/ai';
import stylesCss from '../component.module.css'
import Barcode from "react-barcode"
import StudentCardDetails from "./StudentCardDetails";
import StudentCardButtons from "./StudentCardButtons";
import StudentCardBadge from "./StudentCardBadge";

interface studentPassRequest {
  studentID: number,
  pickupLocation: string,
  requestTime: number
  offCampus: boolean
  name: string 
  email: string
  isPassApprovalRequested: boolean,
  isPassApproved: boolean,
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
  const [barcodeModalOpen, setBarcodeModalOpen] = useState(false)

  useEffect(() => {
    if(props.studentPassType && props.setStudentPassRequest != undefined){
      props.setStudentPassRequest((prevState) => {prevState.pickupLocation = 'LaSalle'; return prevState})
    }
    setMounted((true))
  }, [])

  const exitFunction = () => {
    props.buttonFunction(props.studentPassRequest)
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
          </Card>

        )}
      </Transition>
    </div>
  )
}

export default StudentCard