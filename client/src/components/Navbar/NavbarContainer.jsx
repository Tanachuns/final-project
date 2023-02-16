import { Link } from "react-router-dom";
import NavbarPanel from "./NavbarPanel";
import NavbarUserPanel from "./NavbarUserPanel";
const NavbarContainer = () => {
    return ( <>
    
    <nav class="navbar navbar-dark navbar-expand-lg bg-blue ">
      <div class="container-fluid d-flex justify-content-between">
        <Link className="navbar-brand text-white" to="/">
         <Link style={{textDecoration:"none"}} to="/"> <h2 >TIP</h2></Link>
        </Link>
        <NavbarPanel/>
         <NavbarUserPanel/>
      </div>
    </nav>

    </> );
}
 
export default NavbarContainer;