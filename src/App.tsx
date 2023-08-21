/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Home, Register, About, ProtectedRoute } from "./Pages";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/about"
        element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        }
      />

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
