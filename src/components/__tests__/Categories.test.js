import { render, screen } from '@testing-library/react';
import {Categories} from '../Categories';

test('<Categories> renders Heading', () => {
  const {getByTestId} = render(<Categories />);
  expect(getByTestId('categories-heading').tagName).toBe('H2')
  expect(getByTestId('categories-heading').textContent).toBe('Categories')
});
