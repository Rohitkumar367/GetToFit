import React, { useEffect, useState } from 'react'
import Detail from '../components/Detail'
import SimilarExercises from '../components/SimilarExercises'
import ExerciseVideos from '../components/ExerciseVideos'
import { useParams } from 'react-router-dom'
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'
import { Box } from '@mui/material'

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([])
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);
    const {search, id} = useParams();

    useEffect(()=>{
        const fetchExercisesData = async () =>{
            
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
            
            // call for perticular exercise detail
            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
            setExerciseDetail(exerciseDetailData)

            // call for youtube content
            const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
            setExerciseVideos(exerciseVideoData.contents);

            // call for similar exercises
            const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
            setTargetMuscleExercises(targetMuscleExerciseData)

            // call for equipment exercises
            const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
            setEquipmentExercises(equipmentExerciseData)
        }
        fetchExercisesData();
    }, [search, id]);

    return (
        <Box sx={{mt: {lg:'96px', xs:'60px'}}}>
            <Detail exerciseDetail={exerciseDetail}/>
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
        </Box>
    )
}

export default ExerciseDetail
