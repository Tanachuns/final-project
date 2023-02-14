import "./App.css";
import { Routes, Route } from "react-router-dom";
import PurchaseContainer from "./components/Agent/Purchase/PurchaseContainer";

function App() {
  return (
    <>
      <nav></nav>
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
