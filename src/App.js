import React from 'react'
import './App.css' 
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/exercise/:id' element={<ExerciseDetail/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
