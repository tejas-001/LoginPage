import { useEffect, useState } from "react";
import FormComponent from "../components/form.component";
import { RowComponent } from "../components/tablerow.component";
import { getAll } from "../services/user.service";

export const Page1 = (props) => {

//  const onSubmit = () => {
//      localStorage.setItem(`${id}`,JSON.stringify({ id:`${id}`, firstName:`${firstName}`, lastName:`${lastName}`, age:`${age}`, dob:`${dob}`, address:`${address}`}))

//  }
const [ r, setR ] = useState([])
 useEffect(()=>{
   loadUsers(setR)
 },[])
 
 const loadUsers = async(func) => {
   const result = await getAll()
   if(result != null) {
     func(result)
    //  console.log(result)
   }
 }
 const onEdit = async(id) => {
      console.log(id)
 }
 return (
     <div >
       <FormComponent/>
       <RowComponent result = {r} onEdit = {onEdit}/>
    </div>
    );
}
export default Page1