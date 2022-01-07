import { render, screen } from '@testing-library/react';
import Admin from '../../views/Admin/Admin';
import { MemoryRouter } from 'react-router-dom';

test('should render admin page', async () => {
  const { container } = render(
    <MemoryRouter>
      <Admin />
    </MemoryRouter>
  );
  await screen.findByText('Add Dog Details');
  expect(container).toMatchSnapshot();
});
