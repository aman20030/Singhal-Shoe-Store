import React, { useState } from 'react';
import '../styles/Auth.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch('http://localhost:5000/api/auth/login', {  // backend URL sahi dalna
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/');
    } else {
      alert(data.message || 'Invalid credentials');
    }
  } catch (error) {
    console.error('Login error:', error);
    alert('Something went wrong');
  }
};


  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>
      </form>

      <p className="auth-text">
        Don't have an account?{' '}
        <Link to="/register" className="auth-link">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default Login;
