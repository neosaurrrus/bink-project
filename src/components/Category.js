import React from "react";
import fetchToState from "../utils/fetchToState";
import {Meal} from "./Meal"

export const Category = ({ match }) => {
  const categoryName = match.params.id;

  const [data, loading] = fetchToState(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
  );

  if (loading)
    return (
      <>
        <h2 data-testid="category-heading">Loading {categoryName} Meals</h2>
      </>
    );
  else
    return (
      <>
        <h2 data-testid="category-loaded-heading">{categoryName} Meals</h2>
        <div class="category-meals">
          {data.meals.map((meal) => (
          <Meal key={meal.idMeal} categoryName={categoryName} meal={meal}/>
          ))}
        </div>
      </>
    );
};
