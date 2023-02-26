import React from 'react';
import { toast } from "react-toastify";
import axios from "axios";
const ChangPasswordContainer = (props) => {
    const [data,setData] = React.useState()
    const user = props.user

    const submitHandler = () =>{
            toast.promise(
            axios.put("http://127.0.0.1:8000/api/user/"+user.id,data,{
            headers: {Authorization: "Bearer " + props.jwt}
        }).then(res=>{
                     console.log(res);
                }),
                {
                pending: {
                render(){
                return 'Password is changing'
                },
            },
                success:{
                render(){
                return 'Password changed 👌'
                },
                onClose: () => {
                window.location.href = '/';
            }
            } 
                ,
                error: 'Password change rejected 🤯'
                },
        )    
    }

    return ( <div className="container py-5">
        <div className="text-center"><h1>Change Password</h1></div>
        <div  className="m-auto col-lg-4 col-md-6 col-sm-12 ">
            <input type="password" className="form-control mb-2 mr-sm-2" placeholder="Current password" name="current_password" onChange={(e)=>setData(prev=>{
                return {
                    ...prev,
                    [e.target.name]:e.target.value
                }
            })}/>
            <input type="password" className="form-control mb-2 mr-sm-2" placeholder="Password" name="password" onChange={(e)=>setData(prev=>{
                return {
                    ...prev,
                    [e.target.name]:e.target.value
                }
            })}/>
            <button className="btn btn-primary" type="button" onClick={()=>submitHandler()}>Login</button>
        </div>
    </div> );
}
 
export default ChangPasswordContainer;