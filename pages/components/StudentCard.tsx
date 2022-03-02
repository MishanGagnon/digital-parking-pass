import { Group, Image } from "@mantine/core"
import { NextPage } from "next"
import React from "react"
import styles from '../components/component.module.css'
import useGetName from "hooks/useGetName"

interface Props {
  studentPassRequest : { 
    studentID : number, 
    pickupLocation : string,
    requestTime : number | null
  }
}

const StudentCard: NextPage<Props> = (props) => {
    return (
      <div className = {styles.container}>
        <Group>
          <Image
            width = {120}
            radius="md"
            src={`/images/${props.studentPassRequest.studentID}.jpg`}
            alt="Random unsplash image"
            />
            <Group direction = "column" spacing = "xs">
              {props.studentPassRequest.requestTime ?  
              
              (<div>
                  <h1>{useGetName(props.studentPassRequest.studentID)}</h1>
                  <p>Requested at {new Date(props.studentPassRequest.requestTime * 1000).toLocaleTimeString()}</p>
                  <p>Pickup at {props.studentPassRequest.pickupLocation}</p>
              </div>
              )
              : ""}
            </Group>
        </Group>
      </div>
    )
  }
  
  export default StudentCard