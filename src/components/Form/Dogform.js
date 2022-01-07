import React from 'react';

export default function Dogform({ name, bio, age, image, breed, buttonHandler, updateDogState }) {
  return (
    <div className="form">
      <h2>Add Dog Details</h2>
      <div className="dog-form">
        <label>Name</label>
        <input
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => {
            updateDogState('name', e.target.value);
          }}
        />
        <label>Bio:</label>
        <input
          placeholder="bio"
          type="text"
          value={bio}
          onChange={(e) => {
            updateDogState('bio', e.target.value);
          }}
        />
        <label>Age:</label>
        <input
          placeholder="age"
          type="text"
          value={age}
          onChange={(e) => {
            updateDogState('age', e.target.value);
          }}
        />
        <label>Image:</label>
        <input
          placeholder="image"
          type="text"
          value={image}
          onChange={(e) => {
            updateDogState('image', e.target.value);
          }}
        />
        <label>Breed:</label>
        <input
          placeholder="breed"
          type="text"
          value={breed}
          onChange={(e) => {
            updateDogState('breed', e.target.value);
          }}
        />
      </div>
      <div className="button">
        <button onClick={buttonHandler}>Save</button>
      </div>
    </div>
  );
}
