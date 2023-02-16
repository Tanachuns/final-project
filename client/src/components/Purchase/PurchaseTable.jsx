import axios from "axios"
import React from 'react';

const PurchaseTable = (props) => {
    const [plan,setPlan] = React.useState([])
    const [filter,setFilter] = React.useState("")
    React.useState(()=>{
      axios.get("http://127.0.0.1:8000/api/register").then((res)=>{
        setPlan(res.data.data)
       
      })
    })

    const planRecords = plan.filter((item)=>{
      if(filter!==""&&item.firstname){
        return item.firstname.toLowerCase().includes(filter.toLowerCase())
      }
      else {
        return item
      }
       
      }
    ).map((item)=>{
      return (<tr>
      <th scope="row"><input className="form-check-input" type="radio" name="plan_id" id="" value={item.id} onChange={(e)=>props.fromHandler(e)} /></th>
      <td>{item.firstname}</td>
      <td>{item.lastname}</td>
      <td>{item.email}</td>
      <td>{item.phone_number}</td>
    </tr>)
    })

    return ( <>
    <input type="text" name="search" id="search" onChange={(e)=>setFilter(e.target.value)} />
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Coverage</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    
    
    {plan.length>0?planRecords:<p>Plan not found</p>}
    
  </tbody>
</table>
    </> );
}
 
export default PurchaseTable;