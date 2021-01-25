import { render, screen } from '@testing-library/react';
import {Category} from '../Category';

test('<Category> renders Heading', () => {
  const {debug, getByTestId} = render(<Category />);
  expect(getByTestId('category-heading').tagName).toBe('H2')
  expect(getByTestId('category-heading').textContent).toBe('Category')
});