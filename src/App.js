import React from 'react'
import './App.css' 
import {Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='responsive-container'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/exercise/:id' element={<ExerciseDetail/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
