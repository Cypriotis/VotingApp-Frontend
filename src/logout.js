import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from './authService';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthService.logout();
    // Redirect to the /login route after successful logout
    navigate('/login');
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
