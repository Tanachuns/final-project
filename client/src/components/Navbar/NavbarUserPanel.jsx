import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const NavbarUserPanel = (props) => {
  const user =JSON.parse(sessionStorage.getItem("user"))
    return ( 
     <div  id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown ">
             <Link className="nav-link dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">Welcome {user.firstname}</Link>
          <ul className="dropdown-menu dropdown-menu-dark bg-blue dropdown-menu-end position-absolute" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><Link to="/myprofile" className="dropdown-item">My Profile</Link></li>
            <li><Link to="/myinsurance" className="dropdown-item">My Insurances</Link></li>
            <hr />
            <li><Link onClick={()=>{
              sessionStorage.removeItem("user")
              toast.success("Hello").then(()=>{
              window.location.href="/"
            })
              sessionStorage.removeItem("user")
              }} className="dropdown-item">Logout</Link></li>
          </ul>
        </li>
      </ul>
    </div>
     );
}
 
export default NavbarUserPanel;