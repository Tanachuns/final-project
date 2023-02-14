import "./App.css";
import { Routes, Route } from "react-router-dom";
import PurchaseContainer from "./components/Agent/Purchase/PurchaseContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";

function App() {
  return (
    <>
      <nav>
        <NavbarContainer />
      </nav>
      <main>
        <Routes>
          <Route path="/purchases" element={<PurchaseContainer />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
