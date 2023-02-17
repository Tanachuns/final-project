import { Link } from "react-router-dom";
import React from 'react';
import axios from "axios";
import { toast } from "react-toastify";

const RegisterContainer = (props) => {
    const [data,setData] = React.useState()

    const changeHandler = (e) => {
        setData(prev => {
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }

    const submitHandler = () =>{
        toast.promise(
    axios.post("http://127.0.0.1:8000/api/register/",data).then(res=>{
        }),
    {
      pending: 'Register is pending',
      success: 'Register resolved 👌',
      error: 'Register rejected 🤯'
    }
)
        
    }
    console.log(data);
    return ( <>
    <div className="container py-5 ">
        <dev className="text-center"><h1>Register</h1></dev>
        <form className="col-lg-4 col-md-6 col-sm-12 m-auto">
             <h3>Customer Details</h3>
       
        <div className="form-floating mb-3">
            <select className="form-select" id="title" aria-label="Title" name="title" required onChange={(e)=>changeHandler(e)} >
                <option selected disabled value={""}>Title</option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Miss.">Miss.</option>
            </select>
            <label for="title">Title</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="firstname" type="text" placeholder="Firstname" name="firstname" required onChange={(e)=>changeHandler(e)}/>
            <label for="firstname">Firstname</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="lastname" type="text" placeholder="Lastname"name="lastname" required  onChange={(e)=>changeHandler(e)}/>
            <label for="lastname">Lastname</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="birth_date" type="date" placeholder="Birth Date" name="birth_date" required onChange={(e)=>changeHandler(e)}/>
            <label for="birth_date">BirthDate</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="citizenId" type="text" placeholder="Citizen ID" name="citizenId" required  onChange={(e)=>changeHandler(e)}/>
            <label for="citizenId">Citizen ID</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="email" type="text" placeholder="Email" name="email"  required onChange={(e)=>changeHandler(e)} />
            <label for="email">Email</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="phone_number" type="text" placeholder="Phone Number" name="phone_number" required onChange={(e)=>changeHandler(e) }/>
            <label for="phone_number">Phone Number</label>
        </div>
       <h3>Address</h3>
        <div className="form-floating mb-3">
            <input className="form-control" id="houseNumber" type="text" placeholder="House Number"name="address_houseNumber" required onChange={(e)=>changeHandler(e)}/>
            <label for="houseNumber">House Number</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="moo" type="text" placeholder="Moo"name="address_moo" required onChange={(e)=>changeHandler(e) }/>
            <label for="moo">Moo</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="buildingVillage" type="text" placeholder="Building/Village"name="address_village" required onChange={(e)=>changeHandler(e) }/>
            <label for="buildingVillage">Building/Village</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="soi" type="text" placeholder="Soi"name="address_soi"  required onChange={(e)=>changeHandler(e)} />
            <label for="soi">Soi</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="road" type="text" placeholder="Road"name="address_road"  required onChange={(e)=>changeHandler(e)}/>
            <label for="road">Road</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="amphur" type="text" placeholder="Amphur"name="address_amphur" required onChange={(e)=>changeHandler(e)}/>
            <label for="amphur">Amphur</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="tumbon" type="text" placeholder="Tumbon"name="address_tumbon" required  onChange={(e)=>changeHandler(e)}/>
            <label for="tumbon">Tumbon</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="province" type="text" placeholder="Province"name="address_province" required onChange={(e)=>changeHandler(e)}/>
            <label for="province">Province</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="zipcode" type="text" placeholder="Zipcode"name="address_zipcode" required  onChange={(e)=>changeHandler(e)}/>
            <label for="zipcode">Zipcode</label>
        </div>
        <button className="btn btn-success" type="button" onClick={()=>submitHandler()}>Submit</button>
        <p>or <Link to="/login" className="text-blue">Login</Link></p>    
        </form>
    </div> 
    </> );
}
 
export default RegisterContainer;