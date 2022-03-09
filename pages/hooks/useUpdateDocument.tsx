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
const useUpdateDocument = async (studentID : number, pickupLocation: string, requestTime : number, offCampus? : boolean, name? : string, email? : string) => {
    try{
        let requestObject : requestObj= {
            studentID : studentID,
            pickupLocation : pickupLocation,
            requestTime : requestTime
        }
        offCampus != undefined ? requestObject.offCampus = offCampus : '';
        name ? requestObject.name = name : '';
        email ? requestObject.email = email : '';
        console.log(requestObject)
        await setDoc(doc(db, "passes", studentID.toString()), requestObject)
    }catch{
        return false
    }
    return true
}

export default useUpdateDocument