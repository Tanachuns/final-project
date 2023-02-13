const PurchaseForm = (props) => {
    return ( <>
    <form className="m-auto" id="contactForm" style={{minWidth:"50%"}} >
        <h3>Customer Details</h3>
       
        <div class="form-floating mb-3">
            <select class="form-select" id="title" aria-label="Title" name="title" defaultValue={props.data.title} required onChange={(e)=>props.fromHandler(e)}>
                <option selected disabled>Title</option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Miss.">Miss.</option>
            </select>
            <label for="title">Title</label>
        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="firstname" type="text" placeholder="Firstname" name="firstname" defaultValue={props.data.firstname} required onChange={(e)=>props.fromHandler(e)} />
            <label for="firstname">Firstname</label>
        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="lastname" type="text" placeholder="Lastname"name="lastname" defaultValue={props.data.lastname} required onChange={(e)=>props.fromHandler(e)} />
            <label for="lastname">Lastname</label>
        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="citizenId" type="text" placeholder="Citizen ID" name="citizenId" defaultValue={props.data.citizenId} required onChange={(e)=>props.fromHandler(e)} />
            <label for="citizenId">Citizen ID</label>
        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="email" type="text" placeholder="Email" name="email" defaultValue={props.data.email} required onChange={(e)=>props.fromHandler(e)} />
            <label for="email">Email</label>
        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="phone_number" type="text" placeholder="Phone Number" name="phone_number" defaultValue={props.data.phone_number} required onChange={(e)=>props.fromHandler(e)} />
            <label for="phone_number">Phone Number</label>
        </div>

        <h3>Address</h3>
        <div class="form-floating mb-3">
            <input class="form-control" id="houseNumber" type="text" placeholder="House Number"name="address_houseNumber" defaultValue={props.data.address_houseNumber} required onChange={(e)=>props.fromHandler(e)} />
            <label for="houseNumber">House Number</label>
        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="moo" type="text" placeholder="Moo"name="address_moo" defaultValue={props.data.address_moo} required onChange={(e)=>props.fromHandler(e)} />
            <label for="moo">Moo</label>
        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="buildingVillage" type="text" placeholder="Building/Village"name="address_village" defaultValue={props.data.address_village} required onChange={(e)=>props.fromHandler(e)} />
            <label for="buildingVillage">Building/Village</label>
        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="soi" type="text" placeholder="Soi"name="address_soi" defaultValue={props.data.address_soi} required onChange={(e)=>props.fromHandler(e)} />
            <label for="soi">Soi</label>
        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="road" type="text" placeholder="Road"name="address_road" defaultValue={props.data.address_road} required onChange={(e)=>props.fromHandler(e)} />
            <label for="road">Road</label>
        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="amphur" type="text" placeholder="Amphur"name="address_amphur" defaultValue={props.data.address_aumphur} required onChange={(e)=>props.fromHandler(e)} />
            <label for="amphur">Amphur</label>
        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="tumbon" type="text" placeholder="Tumbon"name="address_tumbon" defaultValue={props.data.address_tumbon} required onChange={(e)=>props.fromHandler(e)} />
            <label for="tumbon">Tumbon</label>
        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="province" type="text" placeholder="Province"name="address_province" defaultValue={props.data.province} required onChange={(e)=>props.fromHandler(e)} />
            <label for="province">Province</label>
        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="zipcode" type="text" placeholder="Zipcode"name="address_zipcode" defaultValue={props.data.address_zipcode} required onChange={(e)=>props.fromHandler(e)} />
            <label for="zipcode">Zipcode</label>
        </div>
        
        {/* <h3>Agent Details</h3>
         <div class="mb-3">
            <label class="form-label d-block">Type</label>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="agent" type="radio" name="type"name="" required onChange={(e)=>props.fromHandler(e)} />
                <label class="form-check-label" for="agent">Agent</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" id="broker" type="radio" name="type"name="" required onChange={(e)=>props.fromHandler(e)} />
                <label class="form-check-label" for="broker">Broker</label>
            </div>
        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="licenseNo" type="text" placeholder="License Number"name="" required onChange={(e)=>props.fromHandler(e)} />
            <label for="licenseNo">License Number</label>
        </div>
        <div class="form-floating mb-3">
            <input class="form-control" id="licenseExpDate" type="date" placeholder="License Exp Date"name="" required onChange={(e)=>props.fromHandler(e)} />
            <label for="licenseNo">License Exp Date</label>
        </div>
        <hr /> */}

      
        

    </form>
    </>
     );
}
 
export default PurchaseForm;