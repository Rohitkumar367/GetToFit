import React, { useState } from 'react'
import { Box } from '@mui/material'
import SearchExercises from '../components/SearchExercises'

const MainPage = ({bodyPart, setExercises, setBodyPart}) => {
    
    return (
        <Box>
            <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
    )
}

export default MainPage
