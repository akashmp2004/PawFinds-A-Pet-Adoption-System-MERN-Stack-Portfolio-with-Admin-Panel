import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const users = {
    akash: "123",
    ajaz: "456",
  };

  const handleLogin = () => {
    if (users[username] && users[username] === password) {
      localStorage.setItem("loggedInUser", username); // Store logged-in user
      navigate("/"); // Redirect to Home
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-body">
        <div className="login-container">
        <h2>Login</h2>
        <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={handleLogin}>Login</button>
        <p>Don't have an account? <button onClick={() => navigate("/signup")}>Sign Up</button></p>
        </div>
    </div>
  );
};

export default Login;
