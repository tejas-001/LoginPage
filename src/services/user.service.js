import axios from "axios"
import { settings  } from "../config"

export const signup = async (firstName, lastName, age, dob, address) => {
     console.log(firstName)
     const url = settings.server + '/user/signup'
     let result 
     try {
         result = await axios.post(url, {
            firstName, 
            lastName,
            age, 
            dob, 
            address,
         })
     } catch (ex) {
         result = ex
         return null
     }
     return result;
 }


 export const getAll = async () => {
    const url = settings.server + '/user/getall'
    let result
    try {
        result = await axios.get(url)
        result = result.data
    }
    catch (ex) {
        console.log(ex)
    }
    return result;
}

export const getByID = async (id) => {
    const url = settings.server + `/user/getbyid/${id}`
    let result
    try {
        result = await axios.get(url)
        result = result.data
    }
    catch (ex) {
        console.log(ex)
    }
    return result;
}

export const EditUser = async (id, firstName, lastName, age, dob, address) => {
    const url = settings.server + `/user/update/${id}`
    
    try {
        await axios.put(url,{
            firstName,
            lastName,
            age,
            dob,
            address
        })
    }
    catch (ex) {
        console.log(ex)
    }

}

export const DeleteUser = async (id) => {
    const url = settings.server + `/user/delete/${id}`
    try {
        await axios.delete(url)
    }
    catch (ex) {
        console.log(ex)
    }
}

export const getSearch = async (search) => {
    const url = settings.server + `/user/search/${search}`
    console.log(`${search} form user service`)
    let result
    try {
        result = await axios.get(url,{search})
        console.log(result)
        result = result.data
    }
    catch (ex) {
        console.log(ex)
    }
    return result
}