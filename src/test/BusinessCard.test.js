import { render, screen } from '@testing-library/react';
import BusinessCard from '../Projects/BusinessCard';

test('test', () => {
  render(<BusinessCard />);
  const linkElement = screen.getByText(/digital business card/i);
  expect(linkElement).toBeInTheDocument();
});