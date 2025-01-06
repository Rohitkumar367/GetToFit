import React from 'react'
import { Box } from '@mui/material'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const MainPage = () => {
    return (
        <Box>
            <SearchExercises/>
            <Exercises/>
        </Box>
    )
}

export default MainPage
