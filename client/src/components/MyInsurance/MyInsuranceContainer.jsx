import axios from "axios"
import React from 'react';

const MyInsuranceContainer = (props) => {
    const [insurance,setInsurance] = React.useState([])
     const user =JSON.parse(sessionStorage.getItem("user"))
    React.useEffect(()=>{
        axios.get("http://127.0.0.1:8000/api/user/insurance/"+user.id).then(res=>{
            setInsurance(res.data.data)
            console.log(res,user.id);
        })
    },[user])


const ins = insurance.map((item)=>{
      return (<tr>
      <td>{item.plan.name}</td>
      <td>{item.cover_start_date}</td>
      <td>{item.cover_end_date}</td>
      <td>{item.plan.price} THB/Month</td>
      <td>{item.beneficiary_relation||"-"}</td>
      <td>{item.beneficiary_firstname||"-"}</td>

      
    </tr>)
    })

    return ( <>
   <div className="container py-5">
    <h1>My Insurances</h1>
    <table className="table ">
    <thead>
        <tr>
        <th scope="col">Plan</th>
        <th scope="col">Coverage Start</th>
        <th scope="col">Coverage End</th>
        <th scope="col">Price</th>
        <th scope="col">Beneficiary Relation</th>
        <th scope="col">Beneficiary Name</th>
        
        </tr>
    </thead>
    <tbody>
        
        {insurance&&ins}
        
    </tbody>
    </table>
   </div>
    </> );
}
 
export default MyInsuranceContainer;