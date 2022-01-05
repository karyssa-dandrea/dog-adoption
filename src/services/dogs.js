import { checkError, client } from './client';

export async function fetchDogs() {
  const resp = await client.from('dogs').select('*').order('name');
  return checkError(resp);
}

export async function fetchDogById(id) {
  const resp = await client.from('dogs').select('*').match({ id }).single();
  return checkError(resp);
}

export async function insertDog(dog) {
  const resp = await client.from('dogs').insert(dog);
  return checkError(resp);
}

export async function updateDog(id, name, bio, image, breed) {
  const resp = await client.from('dogs').update({ name, bio, image, breed }).eq('id', id);
  return checkError(resp);
}
