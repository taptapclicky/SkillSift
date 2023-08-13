import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';


const CREATE_PROFESSIONAL = gql`
  mutation CreateProfessional($name: String!, $avatar: String!, $review: String!, $introduction: String!, $price: Int!) {
    createProfessional(name: $name, avatar: $avatar, review: $review, introduction: $introduction, price: $price) {
      id
      name
    }
  }
`;

const ProfessionalForm = ({ professionalName }) => {
  const [avatar, setAvatar] = useState("");
  const [review, setReview] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [price, setPrice] = useState("");
  const Navigate = useNavigate();

  const [createProfessional, { loading, error }] = useMutation(CREATE_PROFESSIONAL);

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await createProfessional({
        variables: {
          name: professionalName,
          avatar,
          review,
          introduction,
          price: parseInt(price, 10) 
        }
      });

      console.log(response.data);
      Navigate('/contact');
    } catch (error) {
      console.error('Error:', error);
    }
  }


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
