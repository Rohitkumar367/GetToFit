import React, { useState } from 'react'
import Input from '../components/Input';
import {Link, useNavigate} from 'react-router-dom'
import {User, Mail, Lock, Loader} from 'lucide-react'
import { useAuthStore } from '../store/authStore';
import "./SignUpPage.css"
import standingGymMan from '../assets/images/standingGymMan.jpeg'

const SignUpPage = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const {signup, error, isLoading} = useAuthStore();

    const handleSigup = async (e) =>{
        e.preventDefault();
        try {
            await signup(email, password, name);
            navigate("/verify-email")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="signup-container">

        <div className="man-img">
          <img src={standingGymMan} alt="gym-man"/>
        </div>
  
        <div className="container-signup">
  
          <div className="content">
            <h2 className="heading">Create Account</h2>
            <form onSubmit={handleSigup}>
              <Input
                icon={User}
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
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

              {error && <p className="error-message">{error}</p>}

              <button
                className="login-button"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? <Loader className="loader" /> : "SignUp"}
              </button>
            </form>
          </div>
  
          <div className="footer">
            <p className="footer-text">
              Already have an account?{" "}
              <Link to={"/login"} className="signup-link">
                Login
              </Link>
            </p>
          </div>
  
        </div>
  
      </div>
    )
}

export default SignUpPage
