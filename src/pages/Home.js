import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
    return (
        <div>
            <HeroBanner/>
            <SearchExercises/>
            <Exercises/>
        </div>
    )
}

export default Home
