import React from 'react'
import standingGymMan from '../assets/images/standingGymMan.jpeg'
import './parallaxContent.css'

const ParallaxContent = () => {
    return (
        <div className='parallaxContent'>

            <div className='punchline'>
                <p className='para pone'>YOUR ULTIMATE FITNESS GUIDE</p>
                <p className='para ptwo'>NO COST</p>
                <p className='para pthree'>JUST COMMITMENT !</p>
            </div>

            <div className='introduction'>
                <div className='introImage'>
                    <img src={standingGymMan} alt='gymMan_image'/>
                </div>
                <div className='introContent'>
                    <p className='introPara'>
                    <span>Welcome to Fitness Club – </span>
                     Your go-to platform for easy, accessible, and engaging workout content. We believe that everyone deserves access to high-quality fitness resources, which is why we offer free animated exercises for every part of your body. Whether you're targeting your shoulders, legs, biceps, or back, our animations make it simple to follow along and perfect your form. Additionally, we've handpicked the best YouTube videos for each exercise, providing expert guidance from trusted fitness professionals. At Fitness Club, we’re here to help you stay motivated, informed, and empowered on your fitness journey!
                    </p>
                </div>
            </div>

        </div>
    )
}

export default ParallaxContent
