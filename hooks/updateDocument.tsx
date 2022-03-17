import { setDoc, doc } from "firebase/firestore"
import { off } from "process"
import { db } from "../firebase/clientApp"

interface requestObj {
    studentID : number,
    pickupLocation : string,
    requestTime : number,
    offCampus? : boolean,
    name? : string, 
    email? : string,
    isPassApprovalRequested? : boolean,
    isPassApproved? : boolean
}
export const updateDocument = async (updateObj : requestObj) => {
    console.log(updateObj, "updateObj")
    try{
        let requestObject : requestObj= {
            studentID : updateObj.studentID,
            pickupLocation : updateObj.pickupLocation,
            requestTime : updateObj.requestTime
        }
        updateObj.offCampus != undefined ? requestObject.offCampus = updateObj.offCampus : '';
        updateObj.name ? requestObject.name = updateObj.name : '';
        updateObj.email ? requestObject.email = updateObj.email : '';
        updateObj.isPassApprovalRequested != undefined ? requestObject.isPassApprovalRequested = updateObj.isPassApprovalRequested:  ''
        updateObj.isPassApproved != undefined ? requestObject.isPassApproved = updateObj.isPassApproved : ''
        console.log(requestObject, "request")
        await setDoc(doc(db, "passes", updateObj.studentID.toString()), requestObject)
    }catch{
        return false
    }
    return true
}