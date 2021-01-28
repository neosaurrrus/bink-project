import { render, screen } from '@testing-library/react';
import App from './App'

test('renders App Heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Lukies Meal App/i);
  expect(linkElement).toBeInTheDocument();
});
