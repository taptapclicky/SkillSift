import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';


const ADD_REVIEW = gql`
    mutation AddReview($professionalId: ID!, $rating: Int!, $comment: String!) {
        addReview(professionalId: $professionalId, rating: $rating, comment: $comment) {
            _id
            rating
            comment
        }
    }
`;

const ReviewForm = ({ professionalId }) => {
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  }

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  }

  const [addReview, { loading, error }] = useMutation(ADD_REVIEW, {
    onCompleted: (data) => {
      console.log(data);
    }
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    addReview({
      variables: {
        professionalId,
        rating: parseInt(rating),
        comment
      }
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
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}

export default ReviewForm;
