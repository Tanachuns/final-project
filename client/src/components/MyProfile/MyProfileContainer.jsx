import React from 'react';
import axios from 'axios';
import {toast} from "react-toastify";
const MyProfileContainer = (props) => {
    const [data,setData]  = React.useState()
         const user = props.user


    React.useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/user/"+user.id,{
            headers: {Authorization: "Bearer " + props.jwt}
        }).then((res)=>{
            console.log(res);
            setData(res.data.user)
        })
    },[])
    const changeHandler=(e)=>{
        setData(prev=>{
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }

    const editHandler = () =>{
        toast.promise(
            axios.put("http://127.0.0.1:8000/api/user/"+user.id,data,{
            headers: {Authorization: "Bearer " + props.jwt}
        })
            ,{
                pending: 'Edit is pending',
                success: {
        render(){
          return 'Edit resolved 👌'
        },
        onClose: () => {
        window.location.href ='./myprofile';
      }
      } ,
                error: 'Edit rejected 🤯'
            }
        )
    }
    return ( <>
    <div className="container py-5">
        <h1>My Profile</h1>
        <form className="m-auto col-lg-4 col-md-6 col-sm-12" id="contactForm" style={{minWidth:"50%"}} >
        <h3>Customer Details</h3>
       
        <div className="form-floating mb-3 ">
            <select className="form-select" id="title" aria-label="Title" name="title" value={data&&data.title} onChange={(e)=>changeHandler(e)}>
                <option selected disabled value={""}>Title</option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Miss.">Miss.</option>
            </select>
            <label for="title">Title</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="firstname" type="text" placeholder="Firstname" name="firstname"  defaultValue={data&&data.firstname} onChange={(e)=>changeHandler(e)}/>
            <label for="firstname">Firstname</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="lastname" type="text" placeholder="Lastname"name="lastname" defaultValue={data&&data.lastname} onChange={(e)=>changeHandler(e)}/>
            <label for="lastname">Lastname</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="birth_date" type="date" placeholder="Birth Date" name="birth_date"defaultValue={data&&data.birth_date} onChange={(e)=>changeHandler(e)} />
            <label for="birth_date">BirthDate</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="citizen_id" type="text" placeholder="Citizen ID" name="citizen_id"defaultValue={data&&data.citizen_id} onChange={(e)=>changeHandler(e)} />
            <label for="citizen_id">Citizen ID</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="email" type="text" placeholder="Email" name="email" defaultValue={data&&data.email} onChange={(e)=>changeHandler(e)} />
            <label for="email">Email</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="phone_number" type="text" placeholder="Phone Number" name="phone_number" defaultValue={data&&data.phone_number} onChange={(e)=>changeHandler(e)}/>
            <label for="phone_number">Phone Number</label>
        </div>


        <h3>Address</h3>
        <div className="form-floating mb-3">
            <input className="form-control" id="house_number" type="text" placeholder="House Number"name="address_house_number" defaultValue={data&&data.address_houseNumber} onChange={(e)=>changeHandler(e)}/>
            <label for="houseNumber">House Number</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="moo" type="text" placeholder="Moo"name="address_moo"  defaultValue={data&&data.address_moo} onChange={(e)=>changeHandler(e)} />
            <label for="moo">Moo</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="buildingVillage" type="text" placeholder="Building/Village"name="address_village" defaultValue={data&&data.address_village} onChange={(e)=>changeHandler(e)} />
            <label for="buildingVillage">Building/Village</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="soi" type="text" placeholder="Soi"name="address_soi" defaultValue={data&&data.address_soi} onChange={(e)=>changeHandler(e)} />
            <label for="soi">Soi</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="road" type="text" placeholder="Road"name="address_road"  defaultValue={data&&data.address_road} onChange={(e)=>changeHandler(e)}/>
            <label for="road">Road</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="amphur" type="text" placeholder="Amphur"name="address_amphur" defaultValue={data&&data.address_amphur} onChange={(e)=>changeHandler(e)}/>
            <label for="amphur">Amphur</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="tumbon" type="text" placeholder="Tumbon"name="address_tumbon" defaultValue={data&&data.address_tumbon} onChange={(e)=>changeHandler(e)} />
            <label for="tumbon">Tumbon</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="province" type="text" placeholder="Province"name="address_province" defaultValue={data&&data.address_province} onChange={(e)=>changeHandler(e)} />
            <label for="province">Province</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="zipcode" type="text" placeholder="Zipcode"name="address_zipcode"  defaultValue={data&&data.address_zipcode} onChange={(e)=>changeHandler(e)}/>
            <label for="zipcode">Zipcode</label>
        </div>
        <button className="btn btn-warning" type="button" onClick={()=>editHandler()}>Edit</button>
    </form>

    </div>
    </> );
}
 
export default MyProfileContainer;