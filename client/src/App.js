import "./App.css";
import { Routes, Route } from "react-router-dom";
import PurchaseContainer from "./components/Purchase/PurchaseContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Edit from "./components/Edit/Edit";
import FooterContainer from "./components/Footer/FooterContainer";
import RegisterContainer from "./components/Register/RegisterContainer";
import LoginContainer from "./components/Login/LoginContainer";
import HomeContainer from "./components/Home/HomeContainer";

function App() {
  return (
    <>
      <nav>
        <NavbarContainer />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/purchases" element={<PurchaseContainer />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/register" element={<RegisterContainer />} />
          <Route path="/login" element={<LoginContainer />} />
        </Routes>
      </main>
      <footer>
        <FooterContainer />
      </footer>
    </>
  );
}

export default App;
