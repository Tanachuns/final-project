import {Link} from "react-router-dom"
const NavbarContainer = () => {
    return ( <>
    <nav class="navbar bg-blue ">
        <div class="container">
            <Link className="navbar-brand text-light" to="/">TIP</Link>
            <Link className="navbar-brand text-light" to="/purchases">Pur</Link>
        </div>
    </nav>
    </> );
}
 
export default NavbarContainer;