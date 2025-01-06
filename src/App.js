import React, { useEffect, useState } from 'react'
import './App.css' 
import ExerciseDetail from './pages/ExerciseDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeParallax from './pages/HomeParallax'
import HomeNormal from './pages/HomeNormal'
import MainPage from './pages/MainPage'
import Navbar from './components/Navbar'

const App = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 300);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 300);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, [])

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={ isMobile ? <HomeNormal/> : <HomeParallax/>}></Route>
        <Route path='/exercise/:id' element={<ExerciseDetail/>}></Route>
        <Route path='/mainpage' element={<MainPage/>} ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
