import PurchaseForm from "./PurchaseForm";
import PurchaseTable from "./PurchaseTable";
import PurchaseSum from "./PurchaseSum"
import React from 'react';
import axios from "axios";
import {toast} from "react-toastify";

const PurchaseContainer = () => {
    const [state,setState] = React.useState(0)
    const [plan,setPlan] = React.useState({
        name:"",
        desc:"",
        price:"",
        coverage:""
    })
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
    const user =JSON.parse(sessionStorage.getItem("user"))


    React.useEffect(()=>{
        if(user){
            setCustomer(user)
        }
    },[])

    const setPlanHandler = (plan)=>{
        axios.get("http://127.0.0.1:8000/api/plan/"+plan).then(res=>{
            setPlan(res.data.data)
        })
    }

    const pages = [
        <PurchaseTable data={customer}fromHandler={(e)=>fromHandler(e)} plan={plan} setPlan={(plan)=>setPlanHandler(plan)}/>,
        <PurchaseForm data={customer} fromHandler={(e)=>fromHandler(e)} plan={plan}/>,
        <PurchaseSum data={customer} plan={plan}/>,
    ]


    const submitHandler = ()=>{
        toast.promise(
            axios.post("http://127.0.0.1:8000/api/insurance/",customer)
            ,{
                pending: 'Purchases is pending',
                success: {
        render(){
          return 'Purchases resolved 👌'
        },
        onClose: () => {
        window.location.href = user?'/myinsurance':"/login";
      }
      } ,
                error: 'Purchases rejected 🤯'
            }
        )
    }
    const fromHandler = (e)=>{
        setCustomer(prev=>{
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


    return (   
    <div className="container py-5 overflow-scroll">
    
        <dev className="text-center"><h1>Purchases</h1></dev>
        <ul className="pagination justify-content-center">
            <li className="page-item rounded-circle" ><p className={state===0?"page-link  active":"page-link"} onClick={()=>setState(0)}>Choose Plan</p></li>
            <li className="page-item rounded-circle"><p className={state===1?"page-link active":"page-link"} onClick={()=>setState(1)}>Submit Plan</p></li>
            <li className="page-item rounded-circle"><p className={state===2?"page-link active":"page-link"} onClick={()=>setState(2)}>Summary</p></li>
        </ul>
       {pages[state]}
       <div className="my-3 mx-auto d-flex justify-content-between col-lg-4 col-md-6 col-sm-12">
            {state>=1&&<button className="btn btn-primary" type="button" onClick={()=>setState(prev=>prev-=1)} >Previous</button>}
            {state<2&&<button className="btn btn-primary" type="button" onClick={()=>setState(prev=>prev+=1)} >Next</button>}
            {state===2&&<button className="btn btn-success" type="button" onClick={()=>submitHandler()} >Submit</button>}
        </div>
    </div> 
    );
}
 
export default PurchaseContainer;