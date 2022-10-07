import { render, screen } from '@testing-library/react';
import BusinessCard from '../Projects/BusinessCard';

test('test', () => {
  render(<BusinessCard />);
  const linkElement = screen.getByText(/Melissa Kipp/i);
  expect(linkElement).toBeInTheDocument();
});