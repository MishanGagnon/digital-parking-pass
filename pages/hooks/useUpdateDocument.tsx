import { setDoc, doc } from "firebase/firestore"
import { off } from "process"
import { db } from "../../firebase/clientApp"

interface requestObj {
    studentID : number,
    pickupLocation : string,
    requestTime : number,
    offCampus? : boolean,
    name? : string, 
    email? : string
}
const useUpdateDocument = async (updateObj : requestObj) => {
    try{
        let requestObject : requestObj= {
            studentID : updateObj.studentID,
            pickupLocation : updateObj.pickupLocation,
            requestTime : updateObj.requestTime
        }
        updateObj.offCampus != undefined ? requestObject.offCampus = updateObj.offCampus : '';
        updateObj.name ? requestObject.name = updateObj.name : '';
        updateObj.email ? requestObject.email = updateObj.email : '';
        console.log(requestObject)
        await setDoc(doc(db, "passes", updateObj.studentID.toString()), requestObject)
    }catch{
        return false
    }
    return true
}

export default useUpdateDocument