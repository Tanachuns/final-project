import { Link } from "react-router-dom";
const NavbarContainer = () => {
    return ( <>
    <nav class="navbar navbar-expand-lg bg-blue">
      <div class="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          <img src="https://www.dhipaya.co.th/assets/img/logo.png" alt="home" height={50} />
        </Link>
        <button class="navbar-toggler text-red bg-red" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link className="navbar-brand text-white" to="/purchases">Home</Link>
            </li>
            <li class="nav-item">
             <Link className="navbar-brand text-white" to="/">About</Link>
            </li>
            <li class="nav-item">
             <Link className="navbar-brand text-white" to="/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </> );
}
 
export default NavbarContainer;