import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./SignUp.css";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created successfully!");
    navigate("/");
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-box">
        <h2 className="signup-main-title">HELPDESK SYSTEM</h2>
        <h3 className="signup-subtitle">Sign up here</h3>

        <input
          type="text"
          placeholder="Username"
          className="signup-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="signup-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="signup-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="signup-button">
          Sign Up
        </button>

        <div className="signup-footer">
        <span className="forgot-password" onClick={() => navigate("/forgot-password")}>
            Forgot Password?
        </span>
          <span onClick={() => navigate("/")} className="signin-link">
            Sign In
          </span>
        </div>
      </form>
    </div>
  );
}
