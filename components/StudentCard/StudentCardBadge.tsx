import { Badge, Text } from "@mantine/core";
import { studentPassRequestInterface } from "index";
import React, { ReactElement } from "react";

interface Props {
    studentPassRequest : studentPassRequestInterface
}

export default function StudentCardDetails(props : Props): ReactElement {
    let color = props.studentPassRequest.offCampus ? "red" : "green"
    let text = props.studentPassRequest.offCampus ? "off campus" : "on campus"
    if(props.studentPassRequest.isPassApprovalRequested){
        color = 'yellow'
        text = 'pass requested'
    }
    

  return (
    <div>
      <Text>
        Currently{" "}
        <Badge size = 'lg' color={color}>
          {text}
        </Badge>
      </Text>
    </div>
  );
}
