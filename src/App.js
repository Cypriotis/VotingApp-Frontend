// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AuthService from './authService';
import RegistrationForm from './components/register/RegistrationForm';
import LoginForm from './components/login/LoginForm';

const Home = () => <h2>Home</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const Login = ({ navigate }) => (
  <div>
    <h2>Login</h2>
    <button onClick={() => { AuthService.login(); navigate('/register'); }}>Login</button>
  </div>
);
const Logout = () => (
  <div>
    <h2>Logout</h2>
    <button onClick={AuthService.logout}>Logout</button>
  </div>
);

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm  />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
