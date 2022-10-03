import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import PlanSelection from "./Components/PlanSelection";
import MySubscription from "./Components/MySubscription";
import useApi, { isAuthenticated } from "./hooks/useApi";
function App() {
  const userAuthenticated = isAuthenticated();
  const api = useApi();

  const logout = () => {
    console.log("here")
    api.post("users/account/logout").then((res) => {
      localStorage.removeItem("access_token");
      window.location.href = "/sign-in";
    });
  };

  return (
    <Router>
      <div className="App">
        <br />
        {userAuthenticated && (
          <>
            <a
              style={{ color: "#fff", padding: "10px" }}
              href="/my-subscription"
            >
              My Subs
            </a>
            <a style={{ color: "#fff", padding: "10px" }} href="/plans">
              Plans
            </a>
              <span style={{ color: "#fff", padding: "10px", cursor: "pointer" }} onClick={() => logout()}>Logout</span>
          </>
        )}
        <div className="auth-wrapper">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/my-subscription" element={<MySubscription />} />
            <Route path="/plans" element={<PlanSelection />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
