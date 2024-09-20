/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
import PropTypes from "prop-types";


export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const initialUserState =
    Cookies.get("jwt") || localStorage.getItem("CHAT-APP");

  // parse the user data and storing in state.
  const [authUser, setAuthUser] = useState(
    initialUserState ? JSON.parse(initialUserState) : undefined
  );
  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is provided
};


export const useAuth = () => useContext(AuthContext);
