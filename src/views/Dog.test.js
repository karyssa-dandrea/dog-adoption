import { render, screen } from '@testing-library/react';
import Dog from '../views/Dogs/Dog';
import { MemoryRouter } from 'react-router-dom';

test('should render dog details', async () => {
  const { container } = render(
    <MemoryRouter>
      <Dog match={{ params: { id: 2 } }} />
    </MemoryRouter>
  );
  await screen.findByText('Amely');
  expect(container).toMatchSnapshot();
});
