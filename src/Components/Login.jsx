import React, { useContext, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  function login(e) {
    e.preventDefault();
    loginUser(formData);
  }

  function handleChange(e) {
    setformData((curVal) => ({ ...curVal, [e.target.name]: e.target.value }));
  }

  return (
    <div>
      <form action="" onSubmit={login}>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            placeholder="enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            placeholder="enter password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            id="password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
