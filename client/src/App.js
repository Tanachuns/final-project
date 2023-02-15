import "./App.css";
import { Routes, Route } from "react-router-dom";
import PurchaseContainer from "./components/Purchase/PurchaseContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Edit from "./components/Edit/Edit";
import FooterContainer from "./components/Footer/FooterContainer";

function App() {
  return (
    <>
      <nav>
        <NavbarContainer />
      </nav>
      <main>
        <Routes>
          <Route path="/purchases" element={<PurchaseContainer />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </main>
      <footer>
        <FooterContainer />
      </footer>
    </>
  );
}

export default App;
