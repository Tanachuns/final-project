import { Link } from "react-router-dom";
const RegisterContainer = (props) => {
    return ( <>
    <div className="container py-5 ">
        <dev className="text-center"><h1>Register</h1></dev>
        <form className="col-lg-4 col-md-6 col-sm-12 m-auto">
             <h3>Customer Details</h3>
       
        <div className="form-floating mb-3">
            <select className="form-select" id="title" aria-label="Title" name="title" required >
                <option selected disabled value={""}>Title</option>
                <option value="Mr.">Mr.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Miss.">Miss.</option>
            </select>
            <label for="title">Title</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="firstname" type="text" placeholder="Firstname" name="firstname" required />
            <label for="firstname">Firstname</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="lastname" type="text" placeholder="Lastname"name="lastname" required  />
            <label for="lastname">Lastname</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="birth_date" type="date" placeholder="Birth Date" name="birth_date" required />
            <label for="birth_date">BirthDate</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="citizenId" type="text" placeholder="Citizen ID" name="citizenId" required  />
            <label for="citizenId">Citizen ID</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="email" type="text" placeholder="Email" name="email"  required  />
            <label for="email">Email</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="phone_number" type="text" placeholder="Phone Number" name="phone_number" required  />
            <label for="phone_number">Phone Number</label>
        </div>
       <h3>Address</h3>
        <div className="form-floating mb-3">
            <input className="form-control" id="houseNumber" type="text" placeholder="House Number"name="address_houseNumber" required />
            <label for="houseNumber">House Number</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="moo" type="text" placeholder="Moo"name="address_moo" required  />
            <label for="moo">Moo</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="buildingVillage" type="text" placeholder="Building/Village"name="address_village" required  />
            <label for="buildingVillage">Building/Village</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="soi" type="text" placeholder="Soi"name="address_soi"  required  />
            <label for="soi">Soi</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="road" type="text" placeholder="Road"name="address_road"  required />
            <label for="road">Road</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="amphur" type="text" placeholder="Amphur"name="address_amphur" required />
            <label for="amphur">Amphur</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="tumbon" type="text" placeholder="Tumbon"name="address_tumbon" required  />
            <label for="tumbon">Tumbon</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="province" type="text" placeholder="Province"name="address_province" required />
            <label for="province">Province</label>
        </div>
        <div className="form-floating mb-3">
            <input className="form-control" id="zipcode" type="text" placeholder="Zipcode"name="address_zipcode" required  />
            <label for="zipcode">Zipcode</label>
        </div>
        <button className="btn btn-success" type="button">Submit</button>
        <p>or <Link to="/login" className="text-blue">Login</Link></p>    
        </form>
    </div> 
    </> );
}
 
export default RegisterContainer;