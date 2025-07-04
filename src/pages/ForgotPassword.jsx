import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Password reset link has been sent to your email!");
  };

  return (
    <div className="forgot-container">
      <form onSubmit={handleSubmit} className="forgot-box">
        <p className="forgot-message">
          Don’t worry, Enter your email below and we will <br />
          send you a link to change password.
        </p>

        <input
          type="email"
          placeholder="Email"
          className="forgot-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="forgot-buttons">
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <button
            type="button"
            className="signin-btn"
            onClick={() => navigate("/")}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
