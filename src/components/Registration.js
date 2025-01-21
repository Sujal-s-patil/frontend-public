import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    aadharCardNo: '',
    email: '',
    phoneNo: '',
    address: '',
    city: '',
    state: '',
    password: '',
    confirmPassword: '',
    photo: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'photo') {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch('http://localhost:5500/register', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        alert('Registration successful!');
        navigate('/'); // Redirect to login after successful registration
      } else {
        alert('Failed to register.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred.');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', textAlign: 'center' }}>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        {[
          { label: 'Full Name', name: 'fullName', type: 'text' },
          { label: 'Aadhar Card No', name: 'aadharCardNo', type: 'text' },
          { label: 'Email', name: 'email', type: 'email' },
          { label: 'Phone No', name: 'phoneNo', type: 'tel' },
          { label: 'Address', name: 'address', type: 'text' },
          { label: 'City', name: 'city', type: 'text' },
          { label: 'State', name: 'state', type: 'text' },
          { label: 'Password', name: 'password', type: 'password' },
          { label: 'Re-enter Password', name: 'confirmPassword', type: 'password' },
        ].map((input) => (
          <div key={input.name} style={{ marginBottom: '15px' }}>
            <input
              type={input.type}
              name={input.name}
              placeholder={input.label}
              value={formData[input.name] || ''}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                boxSizing: 'border-box',
              }}
            />
          </div>
        ))}
        <div style={{ marginBottom: '15px' }}>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            style={{ width: '100%', padding: '10px' }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
            marginBottom: '15px',
          }}
        >
          Register
        </button>
      </form>
      <button
        onClick={() => navigate('/')}
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#6C757D',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '5px',
        }}
      >
        Back to Login
      </button>
    </div>
  );
};

export default Registration;
