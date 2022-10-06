import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react for free link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react for free/i);
  expect(linkElement).toBeInTheDocument();
});
