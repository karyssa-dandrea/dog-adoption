import React from 'react';
import { fetchDogById, updateDog } from '../../services/dogs';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Dogform from '../../components/Form/Dogform';
import Header from '../../components/Header/Header';

export default function DogEdit() {
  const [dogs, setDogs] = useState({});

  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchDogById(params.id);
      setDogs(resp);
    };
    fetchData();
  }, [params.id]);

  const buttonHandler = async (e) => {
    e.preventDefault();
    await updateDog(params.id, dogs);
  };

  return (
    <div>
      <h1>Edit Dog</h1>
      <Header />
      <Dogform {...dogs} buttonHandler={buttonHandler} />
    </div>
  );
}
