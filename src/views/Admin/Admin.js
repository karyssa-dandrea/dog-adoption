import React from 'react';
import { useState } from 'react';
import { insertDog } from '../../services/dogs';
import DogForm from '../../components/Form/Dogform';
import Header from '../../components/Header/Header';

export default function Admin() {
  const [dog, setDog] = useState({});
  const [message, setMessage] = useState('');

  const buttonHandler = async () => {
    await insertDog(dog);
    setDog({});
    setMessage('Success!');
  };

  const updateDogState = (key, value) => {
    dog[key] = value;
    setDog({ ...dog });
  };

  return (
    <div className="admin">
      <Header />
      <DogForm
        buttonHandler={buttonHandler}
        {...dog}
        updateDogState={updateDogState}
        message={message}
      />
    </div>
  );
}
