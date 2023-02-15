import React from 'react';
import axios from 'axios';
import { redirect } from "react-router-dom";

const Edit = () => {
    const [data,setData] = React.useState([])
    const [id,setId] = React.useState(1)

    React.useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/register/"+id).then((res)=>{
            setData(res.data.data)
        }).catch(()=>{
            
        })
    },[id])

    const clickHandler = ()=>{
        axios.put("http://127.0.0.1:8000/api/register/"+id,data).then((res)=>{
            return redirect("/purchases")
        })

    }

    console.log(id);

    return ( <div className="container text-center my-5">
        <form action="">
        <label htmlFor="id">ID: </label>
        <input type="text" name="number" id="id"  onChange={(e)=>setId(e.target.value)} defaultValue={id}/>
        <div >
            <label htmlFor="firstname">Firstname: </label>
            <input type="text" name="firstname" id="firstname" placeholder="firstname" onChange={(e)=>setData(prev=>{
                return {
                    ...prev,
                    [e.target.name]:e.target.value
                }
            })} defaultValue={data.firstname} />
        </div>

         <div >
            <label htmlFor="lastname">Lastname: </label>
          <input type="text" name="lastname" id="lastname" placeholder="lastname" onChange={(e)=>setData(prev=>{
                return {
                    ...prev,
                    [e.target.name]:e.target.value
                }
            })} defaultValue={data.lastname}/>
        </div>
        <button className="btn btn-warning" type="button" onClick={()=>clickHandler()}>Edit</button>
    </form>
    </div> );
}
 
export default Edit;