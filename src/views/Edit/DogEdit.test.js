import { render, screen } from '@testing-library/react';
import DogEdit from '../../views/Edit/DogEdit';
import { MemoryRouter, Route } from 'react-router-dom';

test('should render dog details in a form', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/4/edit']}>
      <Route path="/dogs/:id/edit" component={DogEdit} />
    </MemoryRouter>
  );
  await screen.findByDisplayValue('Maggie');
  expect(container).toMatchSnapshot();
});
