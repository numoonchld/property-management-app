import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders learn react link', () => {
  render(<Login />);
  const userName = screen.getByText('Username');
  const password = screen.getByText('Password');
  expect(userName).toBeInTheDocument();
  expect(password).toBeInTheDocument();
});
