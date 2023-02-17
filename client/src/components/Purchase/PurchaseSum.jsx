import React from 'react';
// import axios from "axios";
const PurchaseTable = (props) => {
    // const [plan,setPlan] = React.useState()
    const plan = {
        plan_name:"Premium",
        plan_coverage:"200000thb",
        plan_desc:"Help your health",
        plan_price:120000
    }
    React.useEffect(()=>{

    },[])
    const beneficiaryTable = (<>
    <h3>Beneficiary Details</h3>
        <tbody>
            <tr >
                <th>Relation</th>
                <td>{props.data.beneficiary_relation}</td>
            </tr>
            <tr >
                <th>Title</th>
                <td>{props.data.beneficiary_title}</td>
            </tr>
             <tr >
                <th>Firstname</th>
                <td>{props.data.beneficiary_firstname}</td>
            </tr>
             <tr >
                <th>Lastname</th>
                <td>{props.data.beneficiary_lastname}</td>
            </tr>
            <br />
            </tbody>
    </>)
    return ( <div className="col-lg-6 col-md-6 col-sm-12 m-auto">
    <h3>Customer Details</h3>
    <table className="table">
        <tbody>
            <tr>
                <th>Title</th>
                <td>{props.data.title}</td>
            </tr>
             <tr >
                <th>Firstname</th>
                <td>{props.data.firstname}</td>
            </tr>
             <tr >
                <th>Lastname</th>
                <td>{props.data.lastname}</td>
            </tr>
             <tr >
                <th>Citizen ID</th>
                <td>{props.data.citizenId}</td>
            </tr>
             <tr >
                <th>Email</th>
                <td>{props.data.email}</td>
            </tr>
            <tr >
                <th>Phone Number</th>
                <td>{props.data.phone_number}</td>
            </tr>
            <br />
             </tbody>
            {props.data.beneficiary&&beneficiaryTable}
        <h3>Address</h3>
        <tbody>
            <tr >
                <th>House Number</th>
                <td>{props.data.address_houseNumber}</td>
            </tr>
            <tr >
                <th>Moo</th>
                <td>{props.data.address_moo}</td>
            </tr>
            <tr >
                <th>Building/Village</th>
                <td>{props.data.address_village}</td>
            </tr>
            <tr >
                <th>Soi</th>
                <td>{props.data.address_soi}</td>
            </tr>
            <tr >
                <th>Road</th>
                <td>{props.data.address_road}</td>
            </tr>
            <tr >
                <th>Amphur</th>
                <td>{props.data.address_amphur}</td>
            </tr>
            <tr >
                <th>Tumbon</th>
                <td>{props.data.address_tumbon}</td>
            </tr>
            <tr >
                <th>Province</th>
                <td>{props.data.address_province}</td>
            </tr>
            <tr >
                <th>Zipcode</th>
                <td>{props.data.address_zipcode}</td>
            </tr>
            <br/>
             </tbody>
        <h3>Plan</h3>
        <tbody>
            <tr >
                <th>Name</th>
                <td>{plan.plan_name}</td>
            </tr>
            <tr >
                <th>Desc</th>
                <td>{plan.plan_desc}</td>
            </tr>
            <tr >
                <th>Coverage</th>
                <td>{plan.plan_coverage}</td>
            </tr>
            <tr >
                <th>Price</th>
                <td>{plan.plan_price}</td>
            </tr>
        </tbody>
    </table>
    </div> );
}
 
export default PurchaseTable;