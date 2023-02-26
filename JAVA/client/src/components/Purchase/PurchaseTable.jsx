import axios from "axios"
import React from 'react';

const PurchaseTable = (props) => {
    const [data,setData] = React.useState([])
    const [filter,setFilter] = React.useState("")
    React.useEffect(()=>{
      axios.get("http://localhost:8080/plan/").then((res)=>{
        setData(res.data)
      })
    },[])

    const planRecords = data.filter((item)=>{
      if(filter!==""&&item.name){
        return item.name.toLowerCase().includes(filter.toLowerCase())
      }
      else {
        return item
      }
       
      }
    ).map((item)=>{
      console.log(parseInt(props.data.plan_id),item.id);
      return (<tr>
      <th scope="row"><input className="form-check-input" checked={parseInt(props.data.plan_id)===item.id} type="radio" name="plan_id"  value={item.id} onChange={(e)=>{
        props.fromHandler(e)
        props.setPlan(e.target.value)
        }} /></th>
      <td>{item.name}</td>
      <td>{item.desc}</td>
      <td>{item.coverage}</td>
      <td>{item.price} THB/Month</td>
    </tr>)
    })
    return ( <>
    <input type="text" name="search" id="search" onChange={(e)=>setFilter(e.target.value)} />
        <table className="table ">
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
    
    
    { data.length>0?planRecords:<p>Plan not found</p>}
    
  </tbody>
</table>
    </> );
}
 
export default PurchaseTable;