import React from 'react';
import './BodyPart.css'; 
import { useNavigate } from 'react-router-dom';

const BodyPart = ({ item, setBodyPart, bodyPart, setChange }) => {
    const navigate = useNavigate();
    
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

    const imageUrl = `/images/All.jpeg`

    return (
        <div
            className={`bodyPart-card ${bodyPart === item ? 'active' : ''}`}
            onClick={handleSearch}
        >
            <img src={imageUrl} alt="dumbbell" className="bodyPart-img" />
            <p className="bodyPart-text">{item}</p>
        </div>
    );
};

export default BodyPart;
