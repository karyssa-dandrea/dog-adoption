import React from 'react';
import { fetchDogById, updateDog } from '../../services/dogs';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Dogform from '../../components/Form/Dogform';
import Header from '../../components/Header/Header';

export default function DogEdit() {
  const [dog, setDog] = useState({});

  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchDogById(params.id);
      setDog(resp);
    };
    fetchData();
  }, [params.id]);

  const buttonHandler = async () => {
    await updateDog(params.id, dog);
  };

  const updateDogState = (key, value) => {
    dog[key] = value;
    setDog({ ...dog });
  };

  return (
    <div>
      <h1>Edit Dog</h1>
      <Header />
      <Dogform {...dog} buttonHandler={buttonHandler} updateDogState={updateDogState} />
    </div>
  );
}
