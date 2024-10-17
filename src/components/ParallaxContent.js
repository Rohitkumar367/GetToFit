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
                <div className='introContent'>sdf</div>
            </div>

        </div>
    )
}

export default ParallaxContent
