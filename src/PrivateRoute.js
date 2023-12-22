// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import authService from './authService'; // Replace with your authentication service

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = authService.isAuthenticated();

  return isAuthenticated ? (
    <Route element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
