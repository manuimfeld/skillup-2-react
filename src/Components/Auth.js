import React from "react";
import { Navigate } from "react-router-dom";

const Auth = ({ children }) => {
  if (localStorage.getItem("token") === null) {
    // console.log(localStorage.getItem("logged"),"no estás loggeado",children.type.name)
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default Auth;
