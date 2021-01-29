import React from "react";
import { render, cleanup} from "@testing-library/react";
import { Category } from "../Category";
import { MemoryRouter } from "react-router-dom";


afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();
const match = {
  params: {
    id: "Beef",
  },
};

// const category = {
//   id: "Test Category",
//   meals: [
//     {
//       mealId: 1,
//       mealStr: "Test Meal 1",
//     },
//     {
//       mealId: 2,
//       mealStr: "Test Meal 2",
//     },
//   ],
// };

test("<Category> can render in loading state", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Category match={match} />
    </MemoryRouter>
  );
  expect(getByTestId("category-heading").tagName).toBe("H2");
});

// test('<Category> renders loaded data', async () => {
//   <MemoryRouter>
//       <Category match={match} />
//   </MemoryRouter>
//   await waitFor(()=> screen.getByTestId('category-meals'))

// });
