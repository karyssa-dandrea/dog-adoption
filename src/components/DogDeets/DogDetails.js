import React from 'react';
import './DogDetail.css';
import { Link } from 'react-router-dom';

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

      <Link key={dog.id} to={`/dogs/${dog.id}/edit`}>
        Edit
      </Link>
    </div>
  );
}

// create a button - edit and delete button
//edit button will be a link - sends to edit view component
// import link - Link to=
// Usehistory hook
