import React from 'react'
import BodyPart from './BodyPart'
import './Parts.css'

const Parts = ({ data, bodyPart, setBodyPart, setChange }) => {

    return (
        <div className="scroll">

            <div className="scroll-content">
                {data.map((eachItem) => (
                    <div
                        key={eachItem.id || eachItem}
                        className="scroll-item"
                        title={eachItem.id || eachItem}
                    >
                        <BodyPart item={eachItem} bodyPart={bodyPart} setBodyPart={setBodyPart} setChange={setChange}/>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Parts
