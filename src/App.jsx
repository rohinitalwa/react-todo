import React, { useState } from "react";
import Login from "./Components/Login";
import Home from "./Components/Home";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>{isLoggedIn ? <Home /> : <Login setIsLoggedIn={setIsLoggedIn} />}</div>
  );
};

export default App;
