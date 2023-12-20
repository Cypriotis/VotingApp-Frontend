// authService.js
const AuthService = {
    isAuthenticated: false,
    login: () => {
      AuthService.isAuthenticated = true;
    },
    logout: () => {
      AuthService.isAuthenticated = false;
    },
  };
  
  export default AuthService;
  