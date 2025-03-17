import React from 'react';
import './BodyPart.css'; 
import { useNavigate } from 'react-router-dom';

const BodyPart = ({ item, setBodyPart, bodyPart, setChange }) => {
    const navigate = useNavigate();
    
    // Direct mapping to images in public folder
    const imageUrls = {
        all: '/images/all.jpeg',
        back: '/images/back.jpeg',
        cardio: '/images/cardio.jpeg',
        chest: '/images/chest.jpeg',
        'lower arms': '/images/lower%20arms.jpeg',
        'lower legs': '/images/lower%20legs.jpeg',
        neck: '/images/neck.jpeg',
        shoulders: '/images/shoulders.jpeg',
        'upper arms': '/images/upper%20arms.jpeg',
        'upper legs': '/images/upper%20legs.jpeg',
        waist: '/images/waist.jpeg'
    };

    const handleSearch = async () =>  {
        setBodyPart(item);
        if(item){
            setChange(item);
            if(item === "all"){
                navigate('/exercise/all');
            }
            else{
                const encodedSearch = encodeURIComponent(item.trim());
                navigate(`/exercise/${encodedSearch}`);
            }
        }
    }   

    console.log(item);

    return (
        <div
            className={`bodyPart-card ${bodyPart === item ? 'active' : ''}`}
            onClick={handleSearch}
        >
            <img 
                src={imageUrls[item]}
                alt={`${item} exercise`} 
                className="bodyPart-img"
            />
            <p className="bodyPart-text">{item}</p>
        </div>
    );
};

export default BodyPart;
