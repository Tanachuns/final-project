import { Link } from "react-router-dom";
const Auth = () => {
    return ( <>
    <div class="container d-flex mx-auto justify-content-center " style={{height:"100%"}}>
      <div className="p-5">
        <h1 class="text-center">You're already logged in</h1>
        <p class="text-center">click the button below to return to the home page.</p>
        <div class="text-center">
            <Link className="text-blue" to="/">Return to Home Page</Link> 
        </div>
      </div>
    </div>
    </> );
}
 
export default Auth;