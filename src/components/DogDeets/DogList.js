import React from 'react';
import { Link } from 'react-router-dom';

export default function DogList({ dogs }) {
  return (
    <>
      <div className="dogs-list">
        <div className="container">
          {dogs.map((dogs) => (
            <Link key={dogs.id} to={`/dogs/${dogs.id}`}>
              {dogs.name}
              <img src={dogs.image}></img>
              <p>
                {' '}
                {dogs.name} is a(n) {dogs.age} year old {dogs.breed}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
