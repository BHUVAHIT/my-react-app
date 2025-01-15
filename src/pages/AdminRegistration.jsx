import React from 'react';
import RegistrationForm from '../components/RegistrationForm';

const AdminRegistration = () => {
  return (
    <div>
      <h2>Admin Registration</h2>
      <RegistrationForm role="admin" />
    </div>
  );
};

export default AdminRegistration;
