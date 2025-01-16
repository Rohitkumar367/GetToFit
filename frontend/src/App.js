import React, { useEffect, useState } from 'react'
import './App.css' 
import ExerciseDetail from './pages/ExerciseDetail'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomeParallax from './pages/HomeParallax'
import HomeNormal from './pages/HomeNormal'
import MainPage from './pages/MainPage'
import Navbar from './components/Navbar'
import Exercises from './components/Exercises'
import {useAuthStore} from './store/authStore'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import EmailVerificationPage from './pages/EmailVerificationPage'
import toast, { Toaster } from 'react-hot-toast'
import Spinner from './components/Spinner'
import WishList from './pages/WishList'

// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (!isAuthenticated) {
    toast.error('You are not logged in!');
		return <Navigate to='/login' replace />;
	}

	if (!user.isVerified) {
    toast.error('your email has not verified yet!')
		return <Navigate to='/verify-email' replace />;
	}

	return children;
};

// redirect authenticated users to home page
const RedirectAuthenticatedUser = ({children}) => {
  const { isAuthenticated, user } = useAuthStore();

	if (isAuthenticated && user.isVerified) {
		return <Navigate to='/' replace />;
	}

	return children;
}

const App = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])
  const [change, setChange] = useState("");

  const [isMobile, setIsMobile] = useState(false);

  const {isCheckingAuth, checkAuth} = useAuthStore();

  useEffect(() => {
    setIsMobile(window.innerWidth <= 300)
    checkAuth();
  }, [checkAuth])

  if(isCheckingAuth) return <Spinner/>

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path='/' element={ isMobile ? <HomeNormal/> : <HomeParallax/>}></Route>

        <Route path='/exercise' element={<MainPage bodyPart={bodyPart} setChange={setChange} setBodyPart={setBodyPart}/>} ></Route>

        <Route path='/exercise/:search' element={<Exercises exercises={exercises} setExercises={setExercises} change={change} setChange={setChange} />}></Route>

        <Route path='/exercise/:search/:id' element={<ExerciseDetail/>} />

        <Route path='/wishlist' element={
          <ProtectedRoute>
            <WishList/>
          </ProtectedRoute>
          }
        />

        <Route path='/signup' element={
          <RedirectAuthenticatedUser>
            <SignUpPage/>
          </RedirectAuthenticatedUser>
          }
        />

        <Route path='/login' element={
          <RedirectAuthenticatedUser>
            <LoginPage/>
          </RedirectAuthenticatedUser>
          }
        />

        <Route path='/verify-email' element={<EmailVerificationPage/>}/>

        <Route path='/forgot-password' element={
          <RedirectAuthenticatedUser>
            <ForgotPasswordPage/>
          </RedirectAuthenticatedUser>
          }
        />

        <Route path='/reset-password/:token' element={
          <RedirectAuthenticatedUser>
            <ResetPasswordPage/>
          </RedirectAuthenticatedUser>
          }
        />

        <Route path='*' element={
            <Navigate to='/' replace/>
          }
        />

      </Routes>
      <Toaster position='top-right' reverseOrder={false}/>
    </BrowserRouter>
  )
}

export default App
