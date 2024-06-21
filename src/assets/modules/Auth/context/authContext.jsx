import React, { createContext } from "react";
import { getCurrentUser } from "../Api";
import useGetCurrentUser from "../hooks/useGetCurrentUser";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const { currentUserLoggedIn, user } = useGetCurrentUser();
  return (
    <AuthContext.Provider value={{ currentUserLoggedIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
