import React from 'react';
import { useNavigate } from 'react-router-dom';

const PublicPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Public Page</h1>
      <p>Please select an option to continue:</p>
      <div style={{ marginTop: '20px' }}>
        <button
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            margin: '10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
          onClick={() => navigate('/customer-register')}
        >
          Customer Registration
        </button>
        <button
          style={{
            backgroundColor: '#f44336',
            color: 'white',
            padding: '10px 20px',
            margin: '10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
          onClick={() => navigate('/admin-register')}
        >
          Admin Registration
        </button>
      </div>
    </div>
  );
};

export default PublicPage;
