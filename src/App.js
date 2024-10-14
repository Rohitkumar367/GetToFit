import React, { useEffect, useState } from 'react'
import './App.css' 
import ExerciseDetail from './pages/ExerciseDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeParallax from './pages/HomeParallax'
import HomeNormal from './pages/HomeNormal'

const App = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ isMobile ? <HomeNormal/> : <HomeParallax/>}></Route>
        <Route path='/exercise/:id' element={<ExerciseDetail/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
