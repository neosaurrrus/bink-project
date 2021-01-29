import { render, screen, waitFor, cleanup} from '@testing-library/react';
import {Recipe} from '../Recipe';

//I wasn't able to mock the API response without bugs in time. So this is more of an integration test!

const mealId = "52894" 

afterEach(() => {
  cleanup();
});

const recipe = {
  strMeal:"Battenberg Cake",
  strMealThumb:"https://www.themealdb.com/images/media/meals/ywwrsp1511720277.jpg",
  strArea:"British", 
  strCategory:"Dessert" 
} 

test('<Recipe> renders expected content when loaded', async () => {
  render(<Recipe mealId={mealId} />);
  await waitFor(()=> screen.getByTestId('recipe-title'))
  expect(screen.getByText(recipe.strMeal).tagName).toBe('H2')
  expect(screen.getByTestId('recipe-image').tagName).toBe('IMG')
  expect(screen.getByTestId('recipe-image').src).toContain(recipe.strMealThumb)
});


