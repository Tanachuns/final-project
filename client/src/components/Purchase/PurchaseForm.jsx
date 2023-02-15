import React from 'react';

const PurchaseForm = (props) => {
 
    const beneficiaryForm = (<>
    <h3>Beneficiary Details</h3>
       <div className="form-floating mb-3">
            <select className="form-select" id="beneficiary_relation" aria-label="Realtion" name="beneficiary_relation" defaultValue={props.data.beneficiary_relation} required onChange={(e)=>props.fromHandler(e)}>
                <option selected disabled>Relation</option>
                <option value="​carried couple">​Married Couple</option>
                <option value="partner">Partner</option>
                <option value="child">Child</option>
                <option value="others">Others</option>
            </select>
            <label for="relation">Relation</label>
        </div>
        <div className="form-floating mb-3">
            <select className="form-select" id="beneficiary_title" aria-label="Title" name="beneficiary_title" defaultValue={props.data.beneficiary_title} required onChange={(e)=>props.fromHandler(e)}>
                <option selected disabled>Title</option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Miss.">Miss.</option>
            </select>
            <label for="beneficiary_title">Title</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="beneficiary_firstname" type="text" placeholder="Firstname" name="beneficiary_firstname" defaultValue={props.data.beneficiary_firstname} required onChange={(e)=>props.fromHandler(e)} />
            <label for="beneficiary_firstname">Firstname</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="beneficiary_lastname" type="text" placeholder="Lastname"name="beneficiary_lastname" defaultValue={props.data.beneficiary_lastname} required onChange={(e)=>props.fromHandler(e)} />
            <label for="beneficiary_lastname">Lastname</label>
        </div> 
        </>)



    return ( <>
    <form className="m-auto" id="contactForm" style={{minWidth:"50%"}} >
        <h3>Customer Details</h3>
       
        <div className="form-floating mb-3">
            <select className="form-select" id="title" aria-label="Title" name="title" defaultValue={props.data.title} required onChange={(e)=>props.fromHandler(e)}>
                <option selected disabled value={""}>Title</option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Miss.">Miss.</option>
            </select>
            <label for="title">Title</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="firstname" type="text" placeholder="Firstname" name="firstname" defaultValue={props.data.firstname} required onChange={(e)=>props.fromHandler(e)} />
            <label for="firstname">Firstname</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="lastname" type="text" placeholder="Lastname"name="lastname" defaultValue={props.data.lastname} required onChange={(e)=>props.fromHandler(e)} />
            <label for="lastname">Lastname</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="birth_date" type="date" placeholder="Birth Date" name="birth_date" defaultValue={props.data.birth_date} required onChange={(e)=>props.fromHandler(e)} />
            <label for="birth_date">BirthDate</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="citizenId" type="text" placeholder="Citizen ID" name="citizenId" defaultValue={props.data.citizenId} required onChange={(e)=>props.fromHandler(e)} />
            <label for="citizenId">Citizen ID</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="email" type="text" placeholder="Email" name="email" defaultValue={props.data.email} required onChange={(e)=>props.fromHandler(e)} />
            <label for="email">Email</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="phone_number" type="text" placeholder="Phone Number" name="phone_number" defaultValue={props.data.phone_number} required onChange={(e)=>props.fromHandler(e)} />
            <label for="phone_number">Phone Number</label>
        </div>
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" name='beneficiary' checked={props.data.beneficiary}   onChange={(e)=>{
                props.fromHandler(e)
                }} />
            <label className="form-check-label" for="flexSwitchCheckDefault">Other Beneficiary</label>
        </div>

        {props.data.beneficiary&&beneficiaryForm}

        <h3>Address</h3>
        <div className="form-floating mb-3">
            <input className="form-control" id="houseNumber" type="text" placeholder="House Number"name="address_houseNumber" defaultValue={props.data.address_houseNumber} required onChange={(e)=>props.fromHandler(e)} />
            <label for="houseNumber">House Number</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="moo" type="text" placeholder="Moo"name="address_moo" defaultValue={props.data.address_moo} required onChange={(e)=>props.fromHandler(e)} />
            <label for="moo">Moo</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="buildingVillage" type="text" placeholder="Building/Village"name="address_village" defaultValue={props.data.address_village} required onChange={(e)=>props.fromHandler(e)} />
            <label for="buildingVillage">Building/Village</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="soi" type="text" placeholder="Soi"name="address_soi" defaultValue={props.data.address_soi} required onChange={(e)=>props.fromHandler(e)} />
            <label for="soi">Soi</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="road" type="text" placeholder="Road"name="address_road" defaultValue={props.data.address_road} required onChange={(e)=>props.fromHandler(e)} />
            <label for="road">Road</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="amphur" type="text" placeholder="Amphur"name="address_amphur" defaultValue={props.data.address_aumphur} required onChange={(e)=>props.fromHandler(e)} />
            <label for="amphur">Amphur</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="tumbon" type="text" placeholder="Tumbon"name="address_tumbon" defaultValue={props.data.address_tumbon} required onChange={(e)=>props.fromHandler(e)} />
            <label for="tumbon">Tumbon</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="province" type="text" placeholder="Province"name="address_province" defaultValue={props.data.province} required onChange={(e)=>props.fromHandler(e)} />
            <label for="province">Province</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="zipcode" type="text" placeholder="Zipcode"name="address_zipcode" defaultValue={props.data.address_zipcode} required onChange={(e)=>props.fromHandler(e)} />
            <label for="zipcode">Zipcode</label>
        </div>
        

        <h3>Plan Details</h3>
         <div className="form-floating mb-3">
            <input className="form-control" id="plan_name" type="text" placeholder="Plan Name"name="plan_name" defaultValue={props.data.plan_name} disabled onChange={(e)=>props.fromHandler(e)} />
            <label for="plan_name">Plan Name</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="plan_desc" type="text" placeholder="Plan Description"name="plan_desc" defaultValue={props.data.plan_desc} disabled onChange={(e)=>props.fromHandler(e)} />
            <label for="plan_desc">Plan Description</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="plan_price" type="text" placeholder="Plan Price"name="plan_price" defaultValue={props.data.plan_price} disabled onChange={(e)=>props.fromHandler(e)} />
            <label for="plan_price">Plan Price</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="start_date" type="date" placeholder="Coverage Start Date"name="start_date" defaultValue={props.data.start_date} required onChange={(e)=>props.fromHandler(e)} />
            <label for="start_date">Coverage Start Date</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="end_date" type="date" placeholder="Coverage End Date"name="end_date" defaultValue={props.data.end_date} required onChange={(e)=>props.fromHandler(e)} />
            <label for="end_date">Coverage End Date</label>
        </div>
        
        {/* <h3>Agent Details</h3>
         <div className="mb-3">
            <label className="form-label d-block">Type</label>
            <div className="form-check form-check-inline">
                <input className="form-check-input" id="agent" type="radio" name="type"name="" required onChange={(e)=>props.fromHandler(e)} />
                <label className="form-check-label" for="agent">Agent</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" id="broker" type="radio" name="type"name="" required onChange={(e)=>props.fromHandler(e)} />
                <label className="form-check-label" for="broker">Broker</label>
            </div>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="licenseNo" type="text" placeholder="License Number"name="" required onChange={(e)=>props.fromHandler(e)} />
            <label for="licenseNo">License Number</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="licenseExpDate" type="date" placeholder="License Exp Date"name="" required onChange={(e)=>props.fromHandler(e)} />
            <label for="licenseNo">License Exp Date</label>
        </div>
        <hr /> */}

      
        

    </form>
    </>
     );
}
 
export default PurchaseForm;