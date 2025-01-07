import React, { useState } from 'react'
import { Box } from '@mui/material'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const MainPage = () => {
    const [bodyPart, setBodyPart] = useState('all')
    const [exercises, setExercises] = useState([])
    return (
        <Box>
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart}/>
        </Box>
    )
}

export default MainPage
