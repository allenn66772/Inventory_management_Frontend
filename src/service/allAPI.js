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
//Update Data
export const updateDataAPI = async (id, reqBody) => {
  return await commonAPI("PUT", `${BASEURL}/all-data/${id}`, reqBody);
};


// Delete Data
export const deleteAllData = async(id)=> {
    return await commonAPI("delete",`${BASEURL}/all-data/${id}`)
}
