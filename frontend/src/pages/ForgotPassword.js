import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect this to backend reset-password API once it's ready
    setSubmitted(true);
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        {submitted ? (
          <p className="auth-success">
            If an account exists for {email}, a reset link has been sent.
          </p>
        ) : (
          <>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Send Reset Link</button>
          </>
        )}
        <p className="auth-link">
          <Link to="/signin">Back to Sign In</Link>
        </p>
      </form>
    </div>
  );
}
