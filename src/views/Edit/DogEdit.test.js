import { render, screen } from '@testing-library/react';
import DogEdit from '../../views/Edit/DogEdit';
import { MemoryRouter } from 'react-router-dom';

test('should render dog details', async () => {
  const { container } = render(
    <MemoryRouter>
      <DogEdit />
    </MemoryRouter>
  );
  await screen.findByText('Edit Dog');
  expect(container).toMatchSnapshot();
});
