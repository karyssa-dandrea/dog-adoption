import React from 'react';
import { fetchDogById } from '../../services/dogs';
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

  return (
    <div className="dog-deets">
      <Header />
      <DogDetail dog={dog} />
    </div>
  );
}
