import React, { useContext } from "react";
import Login from "./Components/Login";
import Home from "./Components/Home";
import { AuthContext } from "./Contexts/AuthContext";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return <div>{isLoggedIn ? <Home /> : <Login />}</div>;
};

export default App;
