import React, { useEffect, useState } from 'react'
import './App.css' 
import ExerciseDetail from './pages/ExerciseDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeParallax from './pages/HomeParallax'
import HomeNormal from './pages/HomeNormal'
import MainPage from './pages/MainPage'
import Navbar from './components/Navbar'
import Exercises from './components/Exercises'

const App = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 300)
  }, [])

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>

        <Route path='/' element={ isMobile ? <HomeNormal/> : <HomeParallax/>}></Route>

        <Route path='/exercise' element={<MainPage bodyPart={bodyPart} setExercises={setExercises} setBodyPart={setBodyPart}/>} ></Route>

        <Route path='/exercise/:search' element={<Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart}/>} />

        <Route path='/exercise/:id' element={<ExerciseDetail/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
