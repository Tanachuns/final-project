import PurchaseForm from "./PurchaseForm";
import PurchaseTable from "./PurchaseTable";
import PurchaseSum from "./PurchaseSum"
import React from 'react';
import axios from "axios";


const PurchaseContainer = () => {
    const [state,setState] = React.useState(0)
    
    const [customer,setCustomer] = React.useState([
        {
        title:"",
        firstname:"",
        lastname:"",
        citizenId:"",
        email:"",
        phone_number:"",
        address_houseNumber:"",
        address_moo:"",
        address_village:"",
        address_soi:"",
        address_road:"",
        address_amphur:"",
        address_tumbon:"",
        address_province:"",
        address_zipcode:""
}
    ])

    const pages = [
        <PurchaseTable/>,
        <PurchaseForm data={customer} fromHandler={(e)=>fromHandler(e)}/>,
        <PurchaseSum data={customer}/>,
    ]

    const fromHandler = (e)=>{
        setCustomer(prev=>{
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }


    // const clickHandler=()=>{
    //     axios.post('http://127.0.0.1:8000/api/register',customer).then(res=>{
    //         console.log(res)
    //     })
    // }
    console.log(customer)
    return (   
    <div className="container my-5 ">
       {pages[state]}
       <div className="my-3 d-flex justify-content-between">
            {state>=1&&<button className="btn btn-success" type="button" onClick={()=>setState(prev=>prev-=1)} >Prevous</button>}
            {state<2&&<button className="btn btn-success" type="button" onClick={()=>setState(prev=>prev+=1)} >Next</button>}
        </div>
    </div> 
    );
}
 
export default PurchaseContainer;