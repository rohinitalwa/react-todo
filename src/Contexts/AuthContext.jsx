import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();
import React from "react";

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function loginUser({ email, password }) {
    setIsLoggedIn(true);
    localStorage.setItem("loggedInUser", email);
  }

  useEffect(() => {
    if (localStorage.getItem("loggedInUser")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ loginUser, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
