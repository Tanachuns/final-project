import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeContainer from "./components/Home/HomeContainer";
import PurchaseContainer from "./components/Purchase/PurchaseContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";

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
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
