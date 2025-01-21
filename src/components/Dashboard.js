import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
      <h2>Dashboard</h2>
      <p>Welcome to the Dashboard. Please select an action:</p>
      <div style={{ margin: '20px 0' }}>
        <button
          /* onClick={() => navigate('/check-complaint')} */
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Check Complaint
        </button>
        <button
          /* onClick={() => navigate('/file-complaint')} */
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#28A745',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          File a Complaint
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
