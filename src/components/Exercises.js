import React, { useEffect, useState } from 'react'
import { Box,Stack, Typography } from '@mui/material'
import ExerciseCard from './ExerciseCard';
import { useParams } from 'react-router-dom';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import Spinner from './Spinner';
import Pagination from './Pagination';

const Exercises = ({exercises, setExercises, change, setChange}) => {
    const {search} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const[currentPage, setCurrentPage] = useState(1);
    const exercisePerPage=9;

    // fetch the desired result as soon as the page loaded
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

    const handlePageChange =(value)=>{
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
                    <ExerciseCard key={index} exercise={exercise} setChange={setChange}/>
                ))}
            </Stack>

            {exercises.length > 9 && (
                <Pagination
                    totalExercise={exercises.length}
                    exercisePerPage={exercisePerPage}
                    currentPage={currentPage}
                    handlePageChange={handlePageChange}
                />
            )}
        </Box>
    )
}

export default Exercises
