import { Link } from "react-router-dom";
import NavbarPanel from "./NavbarPanel";
import NavbarUserPanel from "./NavbarUserPanel";
const NavbarContainer = (props) => {
  const user =JSON.parse(sessionStorage.getItem("user"))
    return ( <>
    
    <nav class="navbar navbar-dark navbar-expand-lg bg-blue ">
      <div class="container-fluid d-flex justify-content-between">
        <Link className="navbar-brand text-white" to="/">
         <Link style={{textDecoration:"none"}} to="/"> <h2 >TIP</h2></Link>
        </Link>
        {user?<NavbarUserPanel auth={props.auth} setAuth={()=>props.setAuth()}/>: <NavbarPanel/>}
      </div>
    </nav>

    </> );
}
 
export default NavbarContainer;