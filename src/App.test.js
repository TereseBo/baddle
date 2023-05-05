import { render, screen } from '@testing-library/react';
import App from './App';

test('renders draftpage', () => {
  render(<App />);
  const linkElement = screen.queryAllByText(/Warpthreads/i);
  expect(linkElement.length).toBe(1);
});
