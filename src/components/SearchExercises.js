import React, {useEffect, useState} from 'react'
import './SearchExercises.css'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import Parts from './Parts'
import { useNavigate } from 'react-router-dom'


const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])

    const navigate = useNavigate();

    // fetch category as soos as the pages load
    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all', ...bodyPartsData])
        }
        
        fetchExercisesData();
    }, [])

    // fetch data as user's input into input field
    const handleSearch = async () =>  {
        if(search){
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            const searchedExercises = exercisesData.filter(
                (exercises) => exercises.name.toLowerCase().includes(search)
                || exercises.target.toLowerCase().includes(search)
                || exercises.equipment.toLowerCase().includes(search)
                || exercises.bodyPart.toLowerCase().includes(search)
            )
            setSearch('');
            setExercises(searchedExercises);

            navigate('/exercise')
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

            <div className='scroll-container'>
                <Parts data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            </div>

        </div>
    )
}

export default SearchExercises


