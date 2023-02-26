import { Link } from "react-router-dom";
const NavbarPanel = () => {
    return ( <>
    <div className="">
        <Link to="/"><button className="btn btn-success mx-2" type="button">Login</button></Link>
        <Link to="/register"><button className="btn btn-warning mx-2" type="button">Register</button></Link>
    </div>
    </> );
}
 
export default NavbarPanel;