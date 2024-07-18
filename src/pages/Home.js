import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    
    return (
        <div className='home-container'>
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to move your perfect road trip.</p>
            <Link to="/vans">FIND YOUR VAN</Link>
        </div>
    )
}

export default Home
