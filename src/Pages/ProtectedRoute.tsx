import React from "react";
import { Navigate } from "react-router-dom";
import { ProtectedRouteProps } from "../@types";

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isUserRegistered = localStorage.getItem("userRegistered") === "true";
  if (!isUserRegistered) {
    return <Navigate to="/register" />;
  }
  return children;
};

export default ProtectedRoute;
