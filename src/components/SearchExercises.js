import React, {useEffect, useState} from 'react'
import './SearchExercises.css'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import { Box } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'


const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all', ...bodyPartsData])
        }
        
        fetchExercisesData();
    }, [])

    console.log(bodyParts)

    const handleSearch = async () =>  {
        if(search){
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            console.log(exercisesData)

            const searchedExercises = exercisesData.filter(
                (exercises) => exercises.name.toLowerCase().includes(search)
                || exercises.target.toLowerCase().includes(search)
                || exercises.equipment.toLowerCase().includes(search)
                || exercises.bodyPart.toLowerCase().includes(search)
            )
            setSearch('');
            setExercises(searchedExercises);
        }
    }   

    return (
        <div className="stack">
            <h1 className="title">Awesome Exercises You Should Know</h1>
            <div className="search-box">
                <input
                    value={search}
                    type="text"
                    placeholder="Search Exercises"
                    className="search-input"
                    onChange={(e)=>setSearch(e.target.value.toLowerCase())}
                />
                <button onClick={handleSearch} className="search-btn">Search</button>
            </div>
            <Box sx={{position: 'relative', width: '100%', p:'20px'}}>
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            </Box>
        </div>
    )
}

export default SearchExercises


