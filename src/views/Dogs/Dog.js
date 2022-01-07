import React from 'react';
import { deleteDog, fetchDogById } from '../../services/dogs';
import { useState, useEffect } from 'react';
import DogDetail from '../../components/DogDeets/DogDetails';
import Header from '../../components/Header/Header';

export default function Dog(props) {
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(id);
      setDog(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <h3>Loading</h3>;
  }

  const deleteButton = async () => {
    await deleteDog(dog.id);
  };

  return (
    <div className="dog-deets">
      <Header />
      <DogDetail dog={dog} deleteButton={deleteButton} />
    </div>
  );
}
