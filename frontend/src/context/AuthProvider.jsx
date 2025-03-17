import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const storedUser = Cookies.get("jwt") || localStorage.getItem("userInfo");

  let parsedUser = null;
  try {
    parsedUser = storedUser ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error("Error parsing stored user:", error);
    parsedUser = null;
  }

  const [authUser, setAuthUser] = useState(parsedUser);

  useEffect(() => {
    console.log("Auth user updated:", authUser);
  }, [authUser]);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
