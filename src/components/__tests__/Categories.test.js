import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react';
import {Categories} from '../Categories';



test('<Categories> renders in loading state', () => {
  render(<Categories />);
  expect(screen.getByTestId('categories-heading').tagName).toBe('H2')
  expect(screen.getByTestId('categories-heading').textContent).toBe('Loading Categories')
});