import React from 'react';
import { fetchDogById } from '../../services/dogs';
import { useState, useEffect } from 'react';
import DogDetail from '../../components/DogDeets/DogDetails';

export default function Dog() {
  const [dog, setDog] = useState([]);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(id);
      setDog(data);
    };
    fetchData();
  }, [id]);

  return (
    <div className="dog-deets">
      {dog.name}
      <DogDetail dog={dog} />
    </div>
  );
}
