import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { DeleteUser, getAll } from "../services/user.service";
// import { onEdit } from '../pages/page1.page'
export const RowComponent = (props) => {
    var { result } = props
   
    let l = result.length
   
const navigate = useNavigate()

const onDelete = async(i) => {
    const result = await DeleteUser(i)
    window.location.reload(false)
}

    
    return (
        <div>
            <h3> List of all Users </h3>
            <br></br>
            <table >
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Address</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                {result.map((e)=>{
                    return (
                        <tbody>
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.firstName}</td>
                                <td>{e.lastName}</td>
                                <td>{e.age}</td>
                                <td>{e.dob}</td>
                                <td>{e.address}</td>
                                <td><button onClick={()=>{
                                    sessionStorage.setItem('id', e.id)
                                    window.location.reload(false)
                                }} type="button" class="btn btn-info">Edit</button></td>
                                <td><button onClick={()=>{
                                    onDelete(e.id)
                                    
                                }} type="button" class="btn btn-danger">Delete</button></td>
                            </tr>
                        </tbody>
                    )
                })
                
                }
               
            </table>
            {/* <button onClick={onEdit}> Edit </button> */}

        </div>
    );

}