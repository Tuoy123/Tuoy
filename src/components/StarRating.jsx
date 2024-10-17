import React, { useState } from 'react';
import "@/scss/StarRating.scss"

const StarRating = (props) => {

    const { initialRating } = props

    const [rating, setRating] = useState(initialRating);

    const handleStarClick = (starValue) => {
        setRating(starValue);
    };

    return (
        <div className="star-rating" style={{ color: '#FCCB30' }}>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={`star ${rating >= star ? 'filled' : ''}`}
                    onClick={() => handleStarClick(star)}
                >
                    {rating >= star ? '★' : '☆'}
                </span>
            ))}
        </div>
    );
};

export default StarRating;