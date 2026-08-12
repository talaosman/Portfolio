import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the loading screen with the site title', () => {
  render(<App />);
  const heading = screen.getByText(/tala osman/i);
  expect(heading).toBeInTheDocument();
});
