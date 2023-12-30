// useAuth.js
import { useEffect, useState } from 'react';
import authService from './authService';

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const isAuthenticated = await authService.isAuthenticated();
        setIsLoggedIn(isAuthenticated);
      } catch (error) {
        console.error('Error checking authentication status:', error);
        setIsLoggedIn(false);
      }
    };

    checkAuthentication();
  }, []);

  return isLoggedIn;
};

export default useAuth;
