import React from 'react';
import { deleteDog, fetchDogById } from '../../services/dogs';
import { useState, useEffect } from 'react';
import DogDetail from '../../components/DogDeets/DogDetails';
import Header from '../../components/Header/Header';
import { useHistory } from 'react-router-dom';

export default function Dog(props) {
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = props.match.params.id;
  const [message, setMessage] = useState('');
  const history = useHistory();

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
    setMessage('Success!');
    setTimeout(() => {
      history.push(`/`);
    }, 2000);
  };

  return (
    <div className="dog-deets">
      <Header />
      <DogDetail dog={dog} deleteButton={deleteButton} message={message} />
    </div>
  );
}
