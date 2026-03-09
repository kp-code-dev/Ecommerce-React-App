import { useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useAuth } from "../../context/authContext";
import "../css/modal.css";

function Modal({ open, onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const { login, redirectPath } = useAuth();
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    login({ email: "demo", password: "demo" });
    if (redirectPath) {
      navigate(redirectPath);
    }
  };

  if (!open) return null;
  return createPortal(
    <>
      <div className="overlay" onClick={onClose}>
        <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
          <div className="auth-modal-header">
            <h2>{isSignUp ? "Sign Up" : "Log In"}</h2>
            <button className="close-btn" onClick={onClose}>
              &times;
            </button>
          </div>
          <div className="auth-modal-content">
            {isSignUp ? (
              <>
                <p>Create your account to join the elite.</p>
                <form className="auth-modal-form" onSubmit={handleAuth}>
                  <input type="text" placeholder="Full Name" required />
                  <input type="email" placeholder="Email Address" required />
                  <div className="password-container">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      required
                    />
                    <button
                      type="button"
                      className="eye-icon"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
                    </button>
                  </div>
                  <div className="password-container">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      required
                    />
                    <button
                      type="button"
                      className="eye-icon"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <IoEyeSharp />}
                    </button>
                  </div>
                  <p className="toggle-text">
                    Already have an account?{" "}
                    <span onClick={() => setIsSignUp(false)}>Log In</span>
                  </p>
                  <button className="auth-modal-btn" type="submit">
                    Sign Up
                  </button>
                </form>
              </>
            ) : (
              <>
                <p>Welcome back, Gamer!</p>
                <p>Enter your credentials to access your account.</p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#FF5722",
                    marginBottom: "15px",
                  }}
                >
                  Demo credentials will be automatically simulated.
                </p>
                <form className="auth-modal-form" onSubmit={handleAuth}>
                  <input
                    type="text"
                    placeholder="Email/Mobile Number"
                    required
                  />
                  <div className="password-container">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      required
                    />
                    <button
                      type="button"
                      className="eye-icon"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <IoEyeSharp />}
                    </button>
                  </div>
                  <p className="toggle-text">
                    Don't Have Account?{" "}
                    <span onClick={() => setIsSignUp(true)}>Sign Up</span>
                  </p>
                  <button className="auth-modal-btn" type="submit">
                    Log in
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
}

export default Modal;
