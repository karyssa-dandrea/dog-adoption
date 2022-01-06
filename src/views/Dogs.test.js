import { render, screen } from '@testing-library/react';
import Dogs from '../views/Dogs/Dogs';
import { MemoryRouter } from 'react-router-dom';

test('should render list of dogs', async () => {
  const { container } = render(
    <MemoryRouter>
      <Dogs />
    </MemoryRouter>
  );
  await screen.findByText('Meet Benson');
  expect(container).toMatchSnapshot();
});
