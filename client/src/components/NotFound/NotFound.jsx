import { Link } from "react-router-dom";
const NotFound = () => {
    return ( <>
    <div class="container d-flex mx-auto justify-content-center " style={{height:"100%"}}>
      <div className="p-5">
        <h1 class="text-center">Page Not Found - Error 404</h1>
        <p class="text-center">The page you are looking for doesn't exist.</p>
        <p class="text-center">Please check the URL and try again, or click the button below to return to the home page.</p>
        <div class="text-center">
            <Link className="text-blue" to="/">Return to Home Page</Link> 
        </div>
      </div>
    </div>
    </> );
}
 
export default NotFound;