/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { Home, Register, About } from "./Pages";

const AppRoutes: React.FC = () => {
  // Check if the user is registered
  // const isUserRegistered = localStorage.getItem("userRegistered") === "true";

  // const ProtectedRoute: React.FC<{
  //   path: string;
  //   element: React.ReactNode;
  // }> = ({ path, element }) => {
  //   return isUserRegistered ? (
  //     <Route path={path} element={element} />
  //   ) : (
  //     <Navigate to="/register" />
  //   );
  // };

  return (
    <Routes>
      {/* <ProtectedRoute path="/" element={<Home />} />
      <ProtectedRoute path="/about" element={<About />} /> */}
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
