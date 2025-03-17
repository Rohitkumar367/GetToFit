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

    const path=`${process.env.NODE_ENV==="development" ? "" : process.env.REACT_APP_PUBLIC_URL}`
    const imageUrl = `${path}/images/${item}.jpeg};`

    console.log('image URL', imageUrl)
    console.log('environment', process.env.NODE_ENV)
    console.log('PUBLIC_URL', process.env.REACT_APP_PUBLIC_URL)

    return (
        <div
            className={`bodyPart-card ${bodyPart === item ? 'active' : ''}`}
            onClick={handleSearch}
        >
            <img src={`${process.env.NODE_ENV==="development" ? "" : process.env.REACT_APP_PUBLIC_URL}/images/${item}.jpeg`} alt={`${item} exercise`} className="bodyPart-img"/>
            <p className="bodyPart-text">{item}</p>
        </div>
    );
};

export default BodyPart;
