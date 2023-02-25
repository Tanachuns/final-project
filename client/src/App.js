import "./App.css";
import { Routes, Route } from "react-router-dom";
import PurchaseContainer from "./components/Purchase/PurchaseContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import FooterContainer from "./components/Footer/FooterContainer";
import RegisterContainer from "./components/Register/RegisterContainer";
import LoginContainer from "./components/Login/LoginContainer";
import HomeContainer from "./components/Home/HomeContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AgentContainer from "./components/Agent/AgentContainer";
import React from "react";
import NotFound from "./components/NotFound/NotFound";
import MyInsuranceContainer from "./components/MyInsurance/MyInsuranceContainer";
import Auth from "./components/NotFound/Auth";
import MyProfileContainer from "./components/MyProfile/MyProfileContainer";
import ChangPasswordContainer from "./components/ChangePassword/ChangPasswordContainer";
import axios from "axios";
function App() {
  return (
    <>
      <ToastContainer />
      <nav>
        <NavbarContainer />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/purchases" element={<PurchaseContainer />} />
          <Route path="/agent" element={<AgentContainer />} />
          {/* auth routes */}
          <Route
            path="/register"
            element={
              sessionStorage.getItem("user") ? <Auth /> : <RegisterContainer />
            }
          />
          <Route
            path="/login"
            element={
              sessionStorage.getItem("user") ? <Auth /> : <LoginContainer />
            }
          />
          <Route
            path="/myinsurance"
            element={
              !sessionStorage.getItem("user") ? (
                <NotFound />
              ) : (
                <MyInsuranceContainer />
              )
            }
          />
          <Route
            path="/myprofile"
            element={
              !sessionStorage.getItem("user") ? (
                <NotFound />
              ) : (
                <MyProfileContainer />
              )
            }
          />
          <Route
            path="/password"
            element={
              !sessionStorage.getItem("user") ? (
                <NotFound />
              ) : (
                <ChangPasswordContainer />
              )
            }
          />
        </Routes>
      </main>
      <footer>
        <FooterContainer />
      </footer>
    </>
  );
}

export default App;
