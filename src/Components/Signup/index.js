import React, { useState } from "react";
function SignUp() {
  const [userData, setuserData] = useState({
    email: "",
    password: "",
    name : ""
  });
  const api = useApi();

  async function handleSubmit(e) {
    e.preventDefault();
    const url = ""
    // change url
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
        <h3>Create Account</h3>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Name"
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={userData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
        <p className="login-redirect text-center">
          Already have an account <a href="/sign-in">Login</a>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
