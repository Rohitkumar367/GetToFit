import React from 'react' 
import { Link } from 'react-router-dom'
import './ExerciseCard.css'

const ExerciseCard = ({exercise}) => {
    return (
        <Link className="exercise-card" to={`/exercise/${exercise.id}`}>

            <img src={exercise.gifUrl} alt={exercise.name} className="exercise-card__img" loading="lazy" />
            
            <div className="exercise-card__info">
                <button className="exercise-card__btn body-part">{exercise.bodyPart}</button>
                <button className="exercise-card__btn target">{exercise.target}</button>
            </div>
            
            <h3 className="exercise-card__title">{exercise.name}</h3>

      </Link>
    )
}

export default ExerciseCard
