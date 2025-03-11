import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [fadeOutWelcome, setFadeOutWelcome] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOutWelcome(true);
      setTimeout(() => {
        setShowWelcome(false);
        setFadeIn(true);
      }, 1000);
    }, 2000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="page-background">
      {/* Welcome Message */}
      {showWelcome && (
        <div className={`welcome-screen ${fadeOutWelcome ? "fade-out" : ""}`}>
          <h1 className="welcome-text">Welcome to Shopping List</h1>
        </div>
      )}

      {/* Login Screen */}
      <div className={`d-flex justify-content-center align-items-center vh-100 login-container ${fadeIn ? "fade-in" : ""}`}>
        <div className="card p-4 shadow-lg login-box">
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-envelope"></i></span>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Type email here"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-lock"></i></span>
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Type password here"
                  required
                />
                <button 
                  type="button" 
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100" style={{
              transition: "0.3s",
              fontWeight: "bold",
              borderRadius: "8px"
            }}>Login</button>
          </form>
          <hr />
          <button className="btn btn-outline-secondary w-100" style={{
            transition: "0.3s",
            fontWeight: "bold",
            borderRadius: "8px"
          }}>Create Account</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
