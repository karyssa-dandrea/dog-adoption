import React from 'react';

export default function Dogform({ name, bio, age, image, breed, buttonHandler, updateDogState }) {
  return (
    <form>
      <h2>Add Dog Details</h2>
      <div className="dog-form">
        <label>Name</label>
        <input
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => {
            updateDogState(e.target.value);
          }}
        />
        <label>Bio:</label>
        <input
          placeholder="bio"
          type="text"
          value={bio}
          onChange={(e) => {
            updateDogState(e.target.value);
          }}
        />
        <label>Age:</label>
        <input
          placeholder="age"
          type="text"
          value={age}
          onChange={(e) => {
            updateDogState(e.target.value);
          }}
        />
        <label>Image:</label>
        <input
          placeholder="image"
          type="text"
          value={image}
          onChange={(e) => {
            updateDogState(e.target.value);
          }}
        />
        <label>Breed:</label>
        <input
          placeholder="breed"
          type="text"
          value={breed}
          onChange={(e) => {
            updateDogState(e.target.value);
          }}
        />
      </div>
      <div className="button">
        <button onClick={buttonHandler}>Add</button>
      </div>
    </form>
  );
}
