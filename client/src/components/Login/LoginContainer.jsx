import { Link } from "react-router-dom";
const LoginContainer = () => {
    return ( <>
    <div className="container py-5 ">
        <div className="text-center"><h1>Login</h1></div>
        <div  className="m-auto col-lg-4 col-md-6 col-sm-12 ">
            <input type="email" className="form-control mb-2 mr-sm-2" placeholder="Email" name="email"/>
            <input type="password" className="form-control mb-2 mr-sm-2" placeholder="Password" name="password"/>
            <button className="btn btn-primary" type="button">Login</button>
            
           <p>or <Link to="/register" className="text-blue">Register</Link></p>    
        </div>
    </div> 
    </> );
}
 
export default LoginContainer;