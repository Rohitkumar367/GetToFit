import React, { useEffect, useState } from 'react'
import { Box,Stack, Typography } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import ExerciseCard from './ExerciseCard';
import { useParams } from 'react-router-dom';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import Spinner from './Spinner';

const Exercises = ({exercises, setExercises}) => {
    const {search} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const[currentPage, setCurrentPage] = useState(1);
    const exercisePerPage=9;

    useEffect(()=>{ 
        const fetchExercises = async()=>{
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            
            if(search!=="all"){
                const searchedExercises = exercisesData.filter(
                    (exercises) => exercises.name.toLowerCase().includes(search)
                    || exercises.target.toLowerCase().includes(search)
                    || exercises.equipment.toLowerCase().includes(search)
                    || exercises.bodyPart.toLowerCase().includes(search)
                )
    
                setExercises(searchedExercises);
            }
            else{
                setExercises(exercisesData);
            }

            setIsLoading(false);
        }

        fetchExercises();
    },[search])

    const indexOfLastExercise = currentPage*exercisePerPage;
    const indexOfFirstExercise = indexOfLastExercise-exercisePerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const paginate =(e, value)=>{
        setCurrentPage(value);
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    if(isLoading){
        return <Spinner/>
    }

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
                {currentExercises.map((exercise, index)=>(
                    <ExerciseCard key={index} exercise={exercise}/>
                ))}
            </Stack>

            <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
                {exercises.length > 9 && (
                    <Pagination
                        color='standard'
                        shape='rounded'
                        defaultPage={1}
                        count={Math.ceil(exercises.length/exercisePerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />
                )}
            </Stack>
        </Box>
    )
}

export default Exercises
