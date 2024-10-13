import React from 'react'
import './HeroBanner.css'

const HeroBanner = () => {
    return (
        <div className="banner-container">

            <h1 className="fitness-club">FITNESS CLUB</h1>

            <h2 className="banner-title">
                Sweat, Smile <br /> and Repeat
            </h2>

            <p className="banner-description">Check out the most effective exercises</p>

            <a href="#exercises">
                <button className="explore-button">Explore Exercises</button>
            </a>
        </div>
    )
}

export default HeroBanner
