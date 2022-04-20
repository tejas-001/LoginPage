import { useEffect, useState } from "react";
import FormComponent from "../components/form.component";
import { RowComponent } from "../components/tablerow.component";
import { getAll, getSearch } from "../services/user.service";

export const Page1 = (props) => {

//  const onSubmit = () => {
//      localStorage.setItem(`${id}`,JSON.stringify({ id:`${id}`, firstName:`${firstName}`, lastName:`${lastName}`, age:`${age}`, dob:`${dob}`, address:`${address}`}))

//  }
var [ r, setR ] = useState([]);
const [search, setSearch ] = useState("");
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
//  const loadSearch = async(func) => {
//    const result = await getSearch(search)
//    console.log(result.data)
//    if(result != null) {
//      func(result)
//      console.log(result)
//    }
//  }
 const onEdit = async(id) => {
      console.log(id)
 }

 const onSearch = async() => {
   const result = await getSearch(search)
   setR(result)
 }
 return (
     <div >
       <FormComponent/>
      
       <input type="text" placeholder="Search with First Name" 
       onChange={e=> {
         setSearch(e.target.value);
       }}/>
       <button onClick={onSearch}>Search</button>

       <RowComponent result = {r} onEdit = {onEdit} onSearch = {onSearch}/>
    </div>
    );
}
export default Page1