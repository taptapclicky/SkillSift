import React, { useState } from 'react';

const ReviewForm = ({ professionalId }) => {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  }

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://need website http /review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        professionalId,
        rating,
        comment
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <div>
      <h1>Review {professionalId}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Rating:
          <input type="number" min="1" max="5" value={rating} onChange={handleRatingChange} required/>
        </label>
        <label>
          Comment:
          <textarea value={comment} onChange={handleCommentChange} required/>
        </label>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default ReviewForm;
