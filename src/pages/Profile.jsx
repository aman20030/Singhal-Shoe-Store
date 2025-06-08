import React from 'react';
import { useNavigate } from 'react-router-dom';  // redirect ke liye
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();

  // Example user data (replace with real auth data)
  const user = {
    name: "Aman Singhal",
    email: "aman.singhal@example.com"
  };

  const handleLogout = () => {
    // 1. Clear localStorage/sessionStorage or auth token
    localStorage.removeItem('token');  // agar token saved hai toh
    localStorage.removeItem('user');   // agar user data saved hai toh

    // 2. Redirect user to login page
    navigate('/login');
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <div className="profile-info">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
