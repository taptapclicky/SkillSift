import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddReviewPage = ({ professionalName }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const history = useHistory();

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://our server http /reviews/${professionalName}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        rating,
        comment
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      history.push(`/professional/${professionalName}`);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <h1>Add a Review for {professionalName}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Rating:
          <select value={rating} onChange={handleRatingChange} required>
            <option value={1}>1 Star</option>
            <option value={2}>2 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={5}>5 Stars</option>
          </select>
        </label>
        <br />
        <label>
          Comment:
          <textarea value={comment} onChange={handleCommentChange} required></textarea>
        </label>
        <br />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default AddReviewPage;
