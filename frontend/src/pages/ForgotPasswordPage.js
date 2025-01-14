
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import Input from "../components/Input";
import { ArrowLeft, Loader, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css"

const ForgotPasswordPage = () => {
	const [email, setEmail] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);

	const { isLoading, forgotPassword } = useAuthStore();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await forgotPassword(email);
		setIsSubmitted(true);
	};

	return (
		<div className="forgot-container">
			<div className='content'>

				<h2 className='heading'>
					Forgot Password
				</h2>

				{!isSubmitted ? (
					<form onSubmit={handleSubmit}>
						<p className='reset-info-text'>
							Enter your email address and we'll send you a link to reset your password.
						</p>
						<Input
							icon={Mail}
							type='email'
							placeholder='Email Address'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<button type='submit' className="reset-button">
							{isLoading ? <Loader className='loader' /> : "Send Reset Link"}
						</button>
					</form>
				) : (
					<div className='text-center'>
						<div class="reset-icon-container">
  							<div class="reset-icon">
  						  		<Mail class="reset-icon-img" />
  							</div>
						</div>
						<p className='reset-message'>
							If an account exists for {email}, you will receive a password reset link shortly.
						</p>
					</div>
				)}
				
			</div>

			<div className='footer-container'>
				<Link to={"/login"} className='back-link'>
					<ArrowLeft className='arrow-left-icon' /> Back to Login
				</Link>
			</div>

		</div>
	);
};

export default ForgotPasswordPage;

