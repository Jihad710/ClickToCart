import React from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/user";

export default function PrivateRoute({ children, ...rest }) {
  const { user } = React.useContext(UserContext);

  if (!user) {
    return <Navigate to='/' />;
  }
  return children;
  
}
