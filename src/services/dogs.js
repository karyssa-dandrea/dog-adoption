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

export async function updateDog(id, dog) {
  const resp = await client.from('dogs').update(dog).match({ id });
  return checkError(resp);
}
