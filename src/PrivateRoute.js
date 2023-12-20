// PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthService from './authService';

const PrivateRoute = ({ path, element }) => {
  return AuthService.isAuthenticated ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
