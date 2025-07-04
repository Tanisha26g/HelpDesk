import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./SignIn.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Infer role based on email
    const lowerEmail = email.toLowerCase();

    if (lowerEmail === "admin@helpdesk.com") {
      navigate("/admin");
    } else if (lowerEmail === "operations@helpdesk.com") {
      navigate("/operations");
    } else if (lowerEmail === "techsupport@helpdesk.com") {
      navigate("/technical");
    } else {
      navigate("/student");
    }
  };

  return (
    <div className="signin-container">
      <form onSubmit={handleSubmit} className="signin-box">
        <h2 className="signin-title">HELPDESK SYSTEM</h2>

        <input
          type="email"
          placeholder="Email"
          className="signin-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="signin-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="signin-button">
          Sign In
        </button>

        <div className="signin-footer">
          <span
            className="forgot-password"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password?
          </span>
          <span
            onClick={() => navigate("/signup")}
            className="signup-link"
          >
            Sign Up
          </span>
        </div>
      </form>
    </div>
  );
}
