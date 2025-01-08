import React from 'react'
import { Box,Stack, Typography } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import ExerciseCard from './ExerciseCard';

const Exercises = ({exercises, setExcercises, bodyPart}) => {

    console.log(exercises);

    return (
        <Box id="exercises"
            sx={{mt: {lg:'110px'}}}
            mt="50px"
            p="20px"
        >
            <Typography variant='h3' mb="46px">
                Showing Results
            </Typography>

            <Stack direction="row" sx={{gap: {lg: '110px', xs: '50px'}}} flexWrap="wrap" justifyContent="center">
                {exercises.map((exercise, index)=>(
                    <ExerciseCard key={index} exercise={exercise}/>
                ))}
            </Stack>

            <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
                {exercises.length > 9 && (
                    <Pagination
                        color="standard"
                    />
                )}
            </Stack>
        </Box>
    )
}

export default Exercises
