import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerRegistration from './pages/CustomerRegistration';
import AdminRegistration from './pages/AdminRegistration';
import AdminLoginForm from './components/AdminLoginForm';
import PrivateRoute from './components/PrivateRoute';
import AdminDashboard from './pages/AdminDashboard';
import PublicPage from './components/PublicPage';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<PublicPage />} />
        <Route path="/customer-register" element={<CustomerRegistration />} />
        <Route path="/admin-register" element={<AdminRegistration />} />
        <Route path="/admin-login" element={<AdminLoginForm />} />
        <Route
          path="/admin-dashboard"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
