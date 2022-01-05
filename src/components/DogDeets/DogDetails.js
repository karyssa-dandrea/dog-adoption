import React from 'react';
import './DogDetail.css';

export default function DogDetails({ dog }) {
  return (
    <div className="dog-details">
      <h1>{dog.name}</h1>
      <img src={dog.image}></img>
      <p>
        {' '}
        {dog.name} is a(n) {dog.age} year old {dog.breed}
      </p>
      <p> {dog.bio}</p>
    </div>
  );
}
