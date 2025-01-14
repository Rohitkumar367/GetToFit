import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Spinner from './Spinner'

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {

    if(targetMuscleExercises.length===0){
        return <Spinner/>
    }

    return (
        <Box sx={{mt: {lg:'100px', xs:'0'}}}>

            <Typography variant='h3' mb="20px" ml="20px">
                Exercise that target the same muscle group.
            </Typography>
            <Stack direction="row" sx={{p:'2', position:'relative'}}>
                {targetMuscleExercises.length && <HorizontalScrollbar data={targetMuscleExercises}/>}
            </Stack>

            <Typography variant='h3' mb="20px" ml="20px">
                Exercise that use the same equipment.
            </Typography>
            <Stack direction="row" sx={{p:'2', position:'relative'}}>
                {equipmentExercises.length && <HorizontalScrollbar data={equipmentExercises}/>}
            </Stack>
            
        </Box>
    )
}

export default SimilarExercises
