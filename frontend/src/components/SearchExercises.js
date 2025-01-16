import React, {useEffect, useState} from 'react'
import './SearchExercises.css'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import Parts from './Parts'
import { useNavigate } from 'react-router-dom'
import Spinner from './Spinner'
import toast from 'react-hot-toast'


const SearchExercises = ({bodyPart, setBodyPart, setChange}) => {

    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate();

    // fetch category as soon as the pages load
    useEffect(() => {

        const fetchExercisesData = async () => {
            try {
                const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
    
                setBodyParts(['all', ...bodyPartsData])
                setIsLoading(false);
            } catch (error) {
                toast.error("Unable to fetch data!, Request Limit Exceeded");
                navigate('/');
            }
        }
        
        fetchExercisesData();
    }, [])

    // navagate to the route where we have to show the results
    const handleSearch = async () =>  {
        if(search){
            setChange(search)
            const encodedSearch = encodeURIComponent(search.trim());
            navigate(`/exercise/${encodedSearch}`);
            setSearch('');
        }
    }   

    if(isLoading){
        return <Spinner/>
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
                <Parts data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} setChange={setChange}/>
            </div>

        </div>
    )
}

export default SearchExercises


