import {
  ActionIcon,
  Badge,
  CloseButton,
  Group,
  Modal,
  NativeSelect,
  Text,
} from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { studentPassRequestInterface } from "index";
import { NextComponentType } from "next";
import React, { ReactElement } from "react";
import { AiOutlineBarcode, AiOutlinePlus } from "react-icons/ai";
import { updateDocument } from "../../hooks/updateDocument";

interface Props {
  studentPassRequest: studentPassRequestInterface;
  studentPassType: boolean;
  setStudentPassRequest: React.Dispatch<React.SetStateAction<studentPassRequestInterface>> | undefined
  requestPassButton: any;
  setMounted: React.Dispatch<React.SetStateAction<boolean>>;
  buttonFunction: any;
}

export default function StudentCardDetails(props: Props): ReactElement {
const clipboard = useClipboard({ timeout: 500 });

  const formChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (props.setStudentPassRequest === undefined) {
      return;
    }
    props.setStudentPassRequest((prevState) => {
      prevState.pickupLocation = e.target.value;
      return prevState;
    });
  };

  const conditionalExitHandler = () => {
    console.log("ran");
    if (!props.studentPassType) {
      props.setMounted(false);
    } else {
      props.buttonFunction(props.studentPassRequest);
    }
  };

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

  function Student(): ReactElement {
    return (
      <Group direction = 'row'>
        {!props.studentPassRequest.offCampus && !props.studentPassRequest.isPassApprovalRequested ? (
          <>
            <NativeSelect
              data={[
                { value: "LaSalle", label: "LaSalle" },
                { value: "DePaul", label: "DePaul" },
              ]}
              onChange={(e) => formChangeHandler(e)}
              placeholder="Pick one"
              label="Select campus to pick up pass"
              radius="xs"
            />
            <ActionIcon
              size="xl"
              color="green"
              onClick={() => {
                props.requestPassButton(props.studentPassRequest);
              }}
              variant="filled"
            >
              <AiOutlinePlus style={{ width: "26px", height: "26px" }} />
            </ActionIcon>{" "}
          </>
        ) :
        (
            <CloseButton
              size="xl"
              color="red"
              variant="filled"
              onClick={() => {
                conditionalExitHandler();
              }}
            />
        )}
      </Group>
    );
  }

  function Faculty(): ReactElement {

    return (
        
      <div>
        {!props.studentPassRequest.isPassApprovalRequested ? (
          <>
              <>
                <ActionIcon
                  size="xl"
                  color="gray"
                  onClick={() => {
                    clipboard.copy(`${props.studentPassRequest.studentID}\r\n`)
                  }}
                  variant="filled"
                >
                  <AiOutlineBarcode style={{ width: "26px", height: "26px" }} />
                </ActionIcon>
              </>
            <CloseButton
              size="xl"
              color="red"
              variant="filled"
              onClick={() => {
                conditionalExitHandler();
              }}
            />
          </>
        )
        : 
        (
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
        )}
      </div>
    );
  }

  return <div>{props.studentPassType ? <Student /> : <Faculty />}</div>;
}
