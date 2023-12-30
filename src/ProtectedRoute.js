// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuth from './useAuth';

const ProtectedRoute = ({ element }) => {
  const isLoggedIn = useAuth();

  if (isLoggedIn === null) {
    // Still checking authentication status, you can show a loading indicator or redirect to a loading page
    return <div>Loading...</div>;
  }

  return isLoggedIn ? element : <Navigate to="/notloggedin" />;
};

export default ProtectedRoute;
