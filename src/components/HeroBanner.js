import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material'
import './HeroBanner.css'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
    return (
        <div className="banner-container">

            <h1 className="fitness-club">Fitness Club</h1>

            <h2 className="banner-title">
                Sweat, Smile <br /> and Repeat
            </h2>

            <p className="banner-description">Check out the most effective exercises</p>

            <a href="#exercises">
                <button className="explore-button">Explore Exercises</button>
            </a>

            <p className="exercise-text">Exercise</p>

            <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />

        </div>
    )
}

export default HeroBanner
