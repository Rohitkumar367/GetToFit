import React from 'react';
import { Box } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import './HorizontalScrollbar.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HorizontalScrollbar = ({ data }) => {

    let box = document.querySelector('.slider-content')

    const btnPressLeft=()=>{
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
    }
    
    const btnPressRight=()=>{
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
    }

    return (
        <div className='slide-container'>

            <div className="slider-nav-left" onClick={btnPressLeft}>
                <FaChevronLeft/>
            </div>
            <div className="slider-nav-right" onClick={btnPressRight
            }>
                <FaChevronRight/>
            </div>

            <div className='slider-content'>
                {data.map((item, index) => (
                    <Box
                        key={index}
                        m="0 40px"
                    >
                        <ExerciseCard exercise={item} />
                    </Box>
                ))}
            </div>

        </div>
    );
};

export default HorizontalScrollbar;

