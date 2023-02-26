import "./App.css";
import { Routes, Route } from "react-router-dom";
import PurchaseContainer from "./components/Purchase/PurchaseContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import FooterContainer from "./components/Footer/FooterContainer";
import RegisterContainer from "./components/Register/RegisterContainer";
import LoginContainer from "./components/Login/LoginContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import NotFound from "./components/NotFound/NotFound";
import MyInsuranceContainer from "./components/MyInsurance/MyInsuranceContainer";
import MyProfileContainer from "./components/MyProfile/MyProfileContainer";
import ChangPasswordContainer from "./components/ChangePassword/ChangPasswordContainer";
import jwt_decode from "jwt-decode";
function App() {
  const [authUser, setAuthUser] = React.useState();
  const [token, setTotken] = React.useState();
  React.useEffect(() => {
    if (document.cookie.indexOf("tip_jwt=") > 0) {
      const token = document.cookie.slice(
        document.cookie.indexOf("tip_jwt=") + 8
      );
      setAuthUser(jwt_decode(token).user);
      setTotken(token);
    }
  }, []);
  return (
    <>
      <ToastContainer />
      <nav>
        <NavbarContainer authUser={authUser} setAuthUser={setAuthUser} />
      </nav>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              authUser ? (
                <PurchaseContainer user={authUser} jwt={token} />
              ) : (
                <LoginContainer />
              )
            }
          />
          <Route
            path="/purchases"
            element={<PurchaseContainer user={authUser} jwt={token} />}
          />
          <Route
            path="/register"
            element={
              authUser ? (
                <MyProfileContainer user={authUser} jwt={token} />
              ) : (
                <RegisterContainer />
              )
            }
          />
          {/* auth routes */}

          <Route
            path="/myinsurance"
            element={
              !authUser ? (
                <NotFound />
              ) : (
                <MyInsuranceContainer user={authUser} jwt={token} />
              )
            }
          />
          <Route
            path="/myprofile"
            element={
              !authUser ? (
                <NotFound />
              ) : (
                <MyProfileContainer user={authUser} jwt={token} />
              )
            }
          />
          <Route
            path="/password"
            element={
              !authUser ? (
                <NotFound />
              ) : (
                <ChangPasswordContainer
                  user={authUser}
                  jwt={token}
                  setAuthUser={setAuthUser}
                />
              )
            }
          />
          {/* Agent routes */}
        </Routes>
      </main>
      <footer>
        <FooterContainer />
      </footer>
    </>
  );
}

export default App;
