import { Badge, Text } from "@mantine/core";
import { studentPassRequestInterface } from "index";
import React, { ReactElement } from "react";

interface Props {
    studentPassRequest : studentPassRequestInterface
}

export default function StudentCardDetails(props : Props): ReactElement {
  return (
    <div>
      <h2>{props.studentPassRequest.name}</h2>
      {props.studentPassRequest.offCampus && (
        <>
          <Text>
            Requested at{" "}
            {new Date(
              props.studentPassRequest.requestTime
            ).toLocaleTimeString()}
          </Text>
          <Text>Pickup at {props.studentPassRequest.pickupLocation}</Text>
        </>
      )}
    </div>
  );
}
