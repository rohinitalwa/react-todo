import React, { useState } from "react";

const Login = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  function login(e) {
    e.preventDefault();
    console.log(formData);
  }

  function handleChange(e) {
    setformData((curVal) => ({ ...curVal, [e.target.name]: e.target.value }));
  }

  return (
    <div>
      <form action="" onSubmit={login}>
        <div>
          <label htmlFor="">email</label>
          <input
            type="email"
            placeholder="enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">password</label>
          <input
            type="password"
            placeholder="enter password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
