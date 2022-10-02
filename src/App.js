import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import PlanSelection from "./Components/PlanSelection";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            <Route path="/plans" element={<PlanSelection />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
