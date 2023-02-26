import axios from "axios"
import React from 'react';

const MyInsuranceContainer = (props) => {
    const [filter,setFilter] = React.useState("")
    const [insurance,setInsurance] = React.useState([])
     const user = props.user
    React.useEffect(()=>{
        axios.get("http://localhost:8080/user/"+user.id+"/order",{
            headers: {Authorization: "Bearer " + props.jwt}
        }).then(res=>{
            setInsurance(res.data)
            console.log(res);
        })
    },[])


    console.log(insurance);

const ins = insurance.filter((item)=>{
      if(filter!==""&&item.firstname){
        return item.firstname.toLowerCase().includes(filter.toLowerCase())
      }
      else {
        return item
      }
       
      }
    ).map((item)=>{
      return (<tr>
      <td>{item.agent.firstname}</td>
      <td>{item.firstname}</td>
      <td>{item.plan.name}</td>
      <td>{item.cover_start_date.split("T")[0]}</td>
      <td>{item.cover_end_date.split("T")[0]}</td>
      <td>{item.plan.price} THB/Month</td>
      <td>{item.beneficiary_relation||"-"}</td>
      <td>{item.beneficiary_firstname||"-"}</td>
      <td><a href={"http://127.0.0.1:8000/api/loadPdf/"+item.id}><img src="/images/pdf.png" alt="download pdf" height={25} /></a></td>
    </tr>)
    })

    return ( <>
   <div className="container py-5">
    <h1>My Insurances</h1>
      <input type="text" name="search" id="search"  onChange={(e)=>setFilter(e.target.value)}/>
    <table className="table ">
    <thead>
        <tr>
        <th scope="col">Agent</th>
        <th scope="col">Customer</th>
        <th scope="col">Plan</th>
        <th scope="col">Coverage Start</th>
        <th scope="col">Coverage End</th>
        <th scope="col">Price</th>
        <th scope="col">Beneficiary Relation</th>
        <th scope="col">Beneficiary Name</th>
        <th scope="col">PDF</th>

        
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