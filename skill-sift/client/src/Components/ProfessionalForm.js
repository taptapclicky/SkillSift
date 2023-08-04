import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ProfessionalForm = ({ professionalName }) => {
  const [avatar, setAvatar] = useState("");
  const [review, setReview] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [price, setPrice] = useState("");
  const history = useHistory();

  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
  }

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  }

  const handleIntroductionChange = (event) => {
    setIntroduction(event.target.value);
  }

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://need http of the website/professional', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: professionalName,
        avatar,
        review,
        introduction,
        price
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      history.push('/contact');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <div>
      <h1>{professionalName}'s Information</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Avatar URL:
          <input type="text" value={avatar} onChange={handleAvatarChange} required/>
        </label>
        <label>
          Review:
          <textarea value={review} onChange={handleReviewChange} required/>
        </label>
        <label>
          Introduction:
          <textarea value={introduction} onChange={handleIntroductionChange} required/>
        </label>
        <label>
          Price:
          <input type="number" value={price} onChange={handlePriceChange} required/>
        </label>
        <button type="submit">Submit and Contact</button>
      </form>
    </div>
  );
}

export default ProfessionalForm;
