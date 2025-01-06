import React from 'react'
import './HeroBanner.css'
import { Link } from 'react-router-dom'

const HeroBanner = () => {
    return (
        <div className="banner-container">

            <h1 className="fitness-club">FITNESS CLUB</h1>

            <h2 className="banner-title">
                Sweat, Smile <br /> and Repeat
            </h2>

            <p className="banner-description">Check out the most effective exercises</p>

            <Link to="/mainpage">
                <button className="explore-button">Explore Exercises</button>
            </Link>
        </div>
    )
}

export default HeroBanner
