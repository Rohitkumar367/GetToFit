import React from 'react';
import './BodyPart.css'; // Import the custom CSS file

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return (
        <div
            className={`bodyPart-card ${bodyPart === item ? 'active' : ''}`}
            onClick={() => {
                setBodyPart(item);
            }}
        >
            <img src={`${process.env.PUBLIC_URL}/images/${item}.jpeg`} alt="dumbbell" className="bodyPart-img" />

            <p className="bodyPart-text">{item}</p>

        </div>
    );
};

export default BodyPart;
