// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import AuthService from './authService';
import RegistrationForm from './components/register/RegistrationForm';
import LoginForm from './components/login/LoginForm';
import ElectionsReg from './components/electionRegistry/electionRegForm';
import CreateElection from './components/electionCreate/electionCreate';
import CandidateForm from './components/candidateList/candidateForm';
import CandidateAdd from './components/candidateAdd/candidateAdd';
import ParentComponent from './components/electionList/parentComp';
import ErrorPage from './ErrorPage';
import NotLoggedIn from './notLoggedin'; // Import the NotLoggedIn component

const Home = () => <h2>Home</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const Login = () => <LoginForm />;
const Logout = () => (
  <div>
    <h2>Logout</h2>
    <button onClick={AuthService.logout}>Logout</button>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/electionreg" element={<ProtectedRoute element={<ElectionsReg />} />} />
        <Route path="/electionslist" element={<ProtectedRoute element={<ParentComponent />} />} />
        <Route path="/create" element={<ProtectedRoute element={<CreateElection />} />} />
        <Route path="/candform" element={<ProtectedRoute element={<CandidateForm />} />} />
        <Route path="/candadd" element={<ProtectedRoute element={<CandidateAdd />} />} />
        <Route path="/notloggedin" element={<NotLoggedIn />} />
      </Routes>
    </Router>
  );
};

export default App;
