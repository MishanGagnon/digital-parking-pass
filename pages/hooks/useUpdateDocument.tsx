import { setDoc, doc } from "firebase/firestore"
import { off } from "process"
import { db } from "../../firebase/clientApp"

const useUpdateDocument = async (studentID : number, pickupLocation: string, requestTime : number, offCampus : boolean) => {
    try{
        await setDoc(doc(db, "passes", studentID.toString()), {
            studentID : studentID,
            pickupLocation : pickupLocation,
            requestTime : requestTime,
            offCampus : offCampus
          })
    }catch{
        return false
    }
    return true
}

export default useUpdateDocument