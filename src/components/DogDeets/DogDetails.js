import React from 'react';
import './DogDetail.css';
import { Link } from 'react-router-dom';

export default function DogDetails({ dog, deleteButton, message }) {
  return (
    <div className="dog-details">
      <h1>{dog.name}</h1>
      <p>{message}</p>
      <img src={dog.image}></img>
      <p>
        {' '}
        {dog.name} is a(n) {dog.age} year old {dog.breed}
      </p>
      <p> {dog.bio}</p>

      <Link key={dog.id} to={`/dogs/${dog.id}/edit`}>
        Edit
      </Link>

      <button onClick={deleteButton}> Delete</button>
    </div>
  );
}

// create a button - edit and delete button
//edit button will be a link - sends to edit view component
// import link - Link to=
// Usehistory hook
