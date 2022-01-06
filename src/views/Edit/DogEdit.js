import React from 'react';
import { fetchDogById } from '../../services/dogs';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
  return (
    <div>
      <h1>Edit Dog</h1>
    </div>
  );
}
