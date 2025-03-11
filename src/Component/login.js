import React, { useState } from 'react';
import "../Component/login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // // Show alert only once when the page loads
  // useEffect(() => {
  //   setTimeout(() => {
  //     alert("Welcome to the Ad Agent Login Page!");
  //   }, 100); // Small delay to ensure smoother user experience
  // }, []);

  function handleLogin() {
    if (username === 'vicky' && password === 'pass') {
      sessionStorage.setItem("islogin", 'true');
      navigate('/bookingdb');
    } else {
      alert('Wrong Credentials');
    }
  }

  return (
    <div className="login-box">
      {/* Sidebar */}
      <div className="sidebar">
        <h1>Logo</h1>
        <p>Advertisements Portal</p>
      </div>

      {/* Login Form */}
      <div className="form-container">
        <div className='form-center'>
          <h2>Ad Agent Login</h2>

          <div className="input-group-login">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="user@example.com"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              onKeyDown={(e) => e.key === "Enter" && handleLogin()} // Press Enter to Login
            />
          </div>

          <div className="input-group-login">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="password123"
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required
              onKeyDown={(e) => e.key === "Enter" && handleLogin()} // Press Enter to Login
            />
          </div>

          <button className="button-login" onClick={handleLogin}>Login</button>

          <p>
            Don't have an account? <Link to="/signup">Sign-Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
