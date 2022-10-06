import { render, screen } from '@testing-library/react';
import App from '../App';

test('Top heading is projects', () => {
  render(<App />);
  const headingOne = screen.getByText(/scrimbra projects/i);
  expect(headingOne).toBeInTheDocument();
});

// How do you look for text that shows up more then once on a page?