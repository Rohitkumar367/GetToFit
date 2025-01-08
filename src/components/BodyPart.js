import React from 'react';
import './BodyPart.css'; // Import the custom CSS file
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return (
        <div
            className={`bodyPart-card ${bodyPart === item ? 'active' : ''}`}
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
            }}
        >
            <img src={Icon} alt="dumbbell" className="bodyPart-icon" />
            <p className="bodyPart-text">{item}</p>
        </div>
    );
};

export default BodyPart;
