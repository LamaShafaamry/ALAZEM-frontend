import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { authenticated, role } = useSelector((state) => state.auth);
  const location = useLocation();

  console.log(allowedRoles)

  // Check if authenticated
  if (!authenticated) {
    return <Navigate to="/signin" replace />
  }

  // Check if the user's role matches any of the allowed roles
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/" replace /> // Redirect or stay on the same page
  }

  // If authenticated and role matches, render the children
  return children
};

export default ProtectedRoute;