import PurchaseForm from "./PurchaseForm";
import PurchaseTable from "./PurchaseTable";
import PurchaseSum from "./PurchaseSum"
import React from 'react';

const PurchaseContainer = () => {
    const [state,setState] = React.useState(0)
    
    const [customer,setCustomer] = React.useState(
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
        address_zipcode:"",
        beneficiary:false
}
    )

    const pages = [
        <PurchaseTable fromHandler={(e)=>fromHandler(e)}/>,
        <PurchaseForm data={customer} fromHandler={(e)=>fromHandler(e)}/>,
        <PurchaseSum data={customer} />,
    ]

    const fromHandler = (e)=>{
        setCustomer(prev=>{
            console.log(e.target.value)
            if(e.target.name ==="beneficiary"){
               if(e.target.checked===false){
                return {
                    ...prev,
                    [e.target.name]:e.target.checked,
                    beneficiary_firstname:"",
                    beneficiary_lastname:"",
                    beneficiary_relation:"",
                    beneficiary_title:""
                }
               }
                return {
                ...prev,
                [e.target.name]:e.target.checked
            }
            }
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
    return (   
    <div className="container my-5 ">
       {pages[state]}
       <div className="my-3 d-flex justify-content-between">
            {state>=1&&<button className="btn btn-primary" type="button" onClick={()=>setState(prev=>prev-=1)} >Previous</button>}
            {state<2&&<button className="btn btn-primary" type="button" onClick={()=>setState(prev=>prev+=1)} >Next</button>}
            {state===2&&<button className="btn btn-success" type="button" onClick={()=>setState(prev=>prev+=1)} >Submit</button>}
        </div>
    </div> 
    );
}
 
export default PurchaseContainer;