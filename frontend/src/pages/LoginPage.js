import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import standingGymMan from '../assets/images/standingGymMan.jpeg'
import Input from "../components/Input";
import { Mail, Lock, Loader } from "lucide-react";
import "./LoginPage.css";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, error } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
      toast.success('Logged in successfully!')
    } catch (e) {
      toast.error(error?.message || "error Logging in");
    }
  };

  return (
    <div className="main-container">

      <div className="man-img">
        <img src={standingGymMan} alt="gym-man"/>
      </div>

      <div className="container-login">

        <div className="content">

          <h2 className="heading">Welcome Back</h2>
          
          <form onSubmit={handleLogin}>
            <Input
              icon={Mail}
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              icon={Lock}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="forgot-password">
              <Link to="/forgot-password" className="forgot-link">
              Forgot password?
              </Link>
            </div>

            {error && <p className="error-message">{error}</p>}

            <button
              className="login-button"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <Loader className="loader" /> : "Login"}
            </button>

          </form>
        </div>

        <div className="footer">
          <p className="footer-text">
            Don't have an account?{" "}
            <Link to={"/signup"} className="signup-link">
              Sign Up
            </Link>
          </p>
        </div>

      </div>

    </div>
  );
};

export default LoginPage;
