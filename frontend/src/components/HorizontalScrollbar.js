import React, { useRef, useState } from 'react';
import ExerciseCard from './ExerciseCard';
import './HorizontalScrollbar.css';

const ITEM_WIDTH = 325;

const HorizontalScrollbar = ({ data }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef();

    const handleScroll = (scrollAmount) => {
        const newScrollPosition = scrollPosition + scrollAmount;

        setScrollPosition(newScrollPosition)

        containerRef.current.scrollLeft=newScrollPosition
    }

    return (
        <div className="swiperRootContainer">

            <div ref={containerRef}
                style={{
                    width: "95vw",
                    overflowX:"scroll",
                    scrollBehavior: "smooth"
                }}
            >
                <div className='swiperItemsContainer'>
                    {data.map((item, index) => (
                        <div key={index}>
                            <ExerciseCard exercise={item} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="action-btns">
                <button onClick={()=>{handleScroll(-ITEM_WIDTH)}}>Scroll Left</button>
                <button onClick={()=>{handleScroll(ITEM_WIDTH)}}>Scroll Right</button>
            </div>

        </div>
    );
};

export default HorizontalScrollbar;
