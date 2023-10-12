import React, { Component, ReactNode } from "react";
import useAuth from "../Hooks/useAuth";
import Login from "./Login";

export interface ErrorType {
  hasError: boolean;
}

export interface Prop {
  children: ReactNode | ReactNode[];
}
function ProtectedRoute(props: Prop) {
  const {addUser, logOut, state} = useAuth();
  let  isAuthenticated = state.user.trim().length > 1;
  return(
    <div>
      {isAuthenticated ? props.children : <Login/>}
    </div>
  )
  
}

export default ProtectedRoute;
