import { Link } from "react-router-dom";
import React from 'react';
import { toast } from "react-toastify";
import axios from "axios";


const LoginContainer = (props) => {
    const [data,setData] = React.useState()

   const submitHandler = () =>{
    toast.promise(
    axios.post("http://127.0.0.1:8000/api/login/",data).then(res=>{
            sessionStorage.setItem("user", JSON.stringify(res.data.data) );
        }),
        {
        pending: {
        render(){
          return 'Login is pending'
        },
      },
        success:{
        render(){
          return 'Login resolved 👌'
        },
        onClose: () => {
        window.location.href = '/';
      }
      } 
        ,
        error: 'Login rejected 🤯'
        },
    )
        
    }

    return ( <>
    <div className="container py-5 ">
        <div className="text-center"><h1>Login</h1></div>
        <div  className="m-auto col-lg-4 col-md-6 col-sm-12 ">
            <input type="email" className="form-control mb-2 mr-sm-2" placeholder="Email" name="email" onChange={(e)=>setData(prev=>{
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
            
           <p>or <Link to="/register" className="text-blue">Register</Link></p>    
        </div>
    </div> 
    </> );
}
 
export default LoginContainer;