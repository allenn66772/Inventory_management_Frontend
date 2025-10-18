import commonAPI from "./commonAPI"
import BASEURL from "./serviceURL" 


//ADD data
export const addDataAPI= async(reqBody)=>{
    return await commonAPI("POST",`${BASEURL}/all-data`,reqBody)
}
//GET Data
export const getDataAPI =async(id)=>{
    return await commonAPI("GET",`${BASEURL}/all-data/${id}`,{})
}
//GET AllAPIdata
export const  allDataAPI = async()=>{
    return await commonAPI("GET",`${BASEURL}/all-data`)
}