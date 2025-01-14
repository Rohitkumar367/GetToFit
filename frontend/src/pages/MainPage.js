import React from 'react'
import { Box } from '@mui/material'
import SearchExercises from '../components/SearchExercises'

const MainPage = ({bodyPart, setBodyPart, setChange}) => {
    
    return (
        <Box>
            <SearchExercises bodyPart={bodyPart} setBodyPart={setBodyPart} setChange={setChange}/>
        </Box>
    )
}

export default MainPage
