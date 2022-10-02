import React, { Component, useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { setTokenLocal } from "../../utils/localStorage";
function Login() {
  const [userData, setuserData] = useState({
    email: "",
    password: "",
  });
  const api = useApi();

  async function handleSubmit(e) {
    e.preventDefault();
    const url = ""
    const res = await api.post(url, userData);
    if (res.data.success) {
      setTokenLocal(res.data.data.token);
    }
  }

  function handleChange(e) {
    const val = e.target.value;
    setuserData({
      ...userData,
      [e.target.name]: val,
    });
  }
  return (
    <div className="auth-inner">
      <form>
        <h3>Login to your account</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="sahil@richpanel.com"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
        <p className="login-redirect text-center ">
          New to MyApp? <a href="/sign-up">Signup</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
