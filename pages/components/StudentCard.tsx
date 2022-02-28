import { Group, Image } from "@mantine/core"
import { NextPage } from "next"
import React from "react"
import styles from '../components/component.module.css'
import image from '.../public/images/222232.jpg'
import useGetName from "hooks/useGetName"

interface Props {
  studentPassRequest : { 
    studentID : number, 
    pickupLocation : string,
    requestTime : Date | null
  }
}

const StudentCard: NextPage<Props> = (props) => {
    return (
      <div className = {styles.container}>
        <Group>
          <Image
            radius="md"
            src={`/images/${props.studentPassRequest.studentID}.jpg`}
            alt="Random unsplash image"
            />
            <Group direction = "column" spacing = "xs">
              <h1>{useGetName(props.studentPassRequest.studentID)}</h1>
              <p>Requested at {props.studentPassRequest.requestTime.toLocaleString()}</p>
              <p>Pickup at {props.studentPassRequest.pickupLocation}</p>
            </Group>
        </Group>
      </div>
    )
  }
  
  export default StudentCard