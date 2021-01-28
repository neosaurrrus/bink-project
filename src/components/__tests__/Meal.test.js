import { getByTestId, render, screen } from "@testing-library/react";
import { Meal } from "../Meal";
import { MemoryRouter } from "react-router-dom";

const meal = {
  strMealThumb: "http://test.jpg",
  strMeal: "Test Meal",
  idMeal: "test",
};

test("<Meal> renders with mocked Props", () => {
  render(
    <MemoryRouter>
      <Meal meal={meal} />
    </MemoryRouter>
  );
  
  expect(screen.getByText(meal.strMeal)).toBeInTheDocument();
  expect(screen.getByText(meal.strMeal).tagName).toBe("H3");
  expect(screen.getByTestId('meal-image').tagName).toBe('IMG')
  expect(screen.getByTestId('meal-image').src).toContain(meal.strMealThumb)
  expect(screen.getByTestId('meal-link').tagName).toBe('A')
  expect(screen.getByTestId('meal-link')).toHaveAttribute('href', "//" + meal.idMeal)

 
});
