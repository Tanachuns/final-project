import { Link } from "react-router-dom";
const NotFound = () => {
    return ( <>
    <div class="container d-flex mx-auto justify-content-center " style={{height:"100%"}}>
      <div className="p-5">
        <h1 class="text-center">Unauthorized - Error 401</h1>
        <p class="text-center">click the button below to return to the login page.</p>
        <div class="text-center">
            <Link className="text-blue" to="/login">Return to Login Page</Link> 
        </div>
      </div>
    </div>
    </> );
}
 
export default NotFound;