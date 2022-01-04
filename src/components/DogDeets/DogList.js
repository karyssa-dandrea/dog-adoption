import React from 'react';
import { Link } from 'react-router-dom';

export default function DogList({ dogs }) {
  return (
    <>
      <div className="dogs-list">
        {dogs.map((dogs) => (
          <Link key={dogs.id} to={`/dogs/${dogs.id}`}>
            {dogs.name}
          </Link>
        ))}
      </div>
    </>
  );
}
