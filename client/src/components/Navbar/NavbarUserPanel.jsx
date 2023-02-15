import { Link } from "react-router-dom";

const NavbarUserPanel = () => {
    return ( 
     <div  id="navbarNavDarkDropdown">
      <ul className="navbar-nav">
        <li className="nav-item dropdown ">
             <Link className="nav-link dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">Welcome User</Link>
          <ul className="dropdown-menu dropdown-menu-dark bg-blue dropdown-menu-end position-absolute" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><Link className="dropdown-item">My Profile</Link></li>
            <li><Link className="dropdown-item">My Insurances</Link></li>
            <hr />
            <li><Link to="/purchases" className="dropdown-item">Test Purchases</Link></li>
            <li><Link to="/edit" className="dropdown-item">Test Edit</Link></li>
            <hr />
            <li><Link className="dropdown-item">Logout</Link></li>
          </ul>
        </li>
      </ul>
    </div>
     );
}
 
export default NavbarUserPanel;