"use client"
import * as React from 'react';
import { useState } from 'react';
import { AutoComplete } from 'antd';

interface ReviewFormProps {
    // the restaurant that the review is for
    restaurant?: string;
    // the rating that the user gave the restaurant
    rating?: number;
    // the review text
    review?: string;
}

const ReviewForm: React.FC<ReviewFormProps> = (props) => {
    // define state variables to store the form data
    const [restaurant, setRestaurant] = useState(props.restaurant ? props.restaurant : '');
    const [rating, setRating] = useState<number>(props.rating ? props.rating : 1);
    const [review, setReview] = useState<string>(props.review ? props.review : '');

    // this function will be called when the user selects a restaurant from the autocomplete
    const handleSelect = (value: string) => {
        setRestaurant(value);
    }

    // this function will be called when the user changes the rating
    const handleRatingChange = (value: number) => {
        setRating(value)
    }

    // this function will be called when the user changes the review text
    const handleReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReview(event.target.value);
    }
    const handleRestaurantChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRestaurant(event.target.value)
    }
    return (
        <form style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
        }}>
            {/* use the AutoComplete component to show restaurant suggestions */}
            <input value={restaurant} onChange={handleRestaurantChange} />

            {/* use a select element to show the rating options */}
            <select onChange={e => handleRatingChange(Number(e.target.value))}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>

            {/* use a textarea to allow the user to enter their review */}
            <textarea value={review} onChange={handleReviewChange} rows={20} style={{ width: '100%' }} />
        </form>
    );
}
export default ReviewForm