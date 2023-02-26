import { Link } from "react-router-dom";


const NavbarUserPanel = (props) => {
    return ( 
     <div  id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown ">
             <Link className="nav-link dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">Welcome {props.authUser&&props.authUser.firstname} </Link>
          <ul className="dropdown-menu dropdown-menu-dark bg-blue dropdown-menu-end position-absolute" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><Link to="/myprofile" className="dropdown-item">My Profile</Link></li>
            <li><Link to="/myinsurance" className="dropdown-item">My Insurances</Link></li>
            <li><Link to="/password" className="dropdown-item">Change Password</Link></li>
            <hr />
            <li><Link to="/purchases" className="dropdown-item">Buy Insurance</Link></li>
            <hr />
            <li><Link onClick={()=>{
              document.cookie = `tip_jwt=;Expires=Thu, 01 Jan 1970 00:00:01 GMT;`
              props.setAuthUser()
              }} className="dropdown-item">Logout</Link></li>
          </ul>
        </li>
      </ul>
    </div>
     );
}
 
export default NavbarUserPanel;