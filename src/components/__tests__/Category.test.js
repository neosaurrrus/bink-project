import {render} from '@testing-library/react';
import {Category} from '../Category';

const category = {
  strCategory:'Beef'
}
test('<Category> renders Heading', () => {
  const {getByTestId} = render(<Category category={category}/>);
  expect(getByTestId('category-heading').tagName).toBe('H2')
  // expect(getByTestId('category-heading').textContent).toBe(category.strCategory)
});
