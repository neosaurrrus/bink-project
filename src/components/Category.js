import React from "react";
import { Link } from "react-router-dom";
import fetchToState from "../utils/fetchToState";

export const Category = ({ match }) => {
  const category = match.params.id;

  const [data, loading] = fetchToState(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );

  if (loading)
    return (
      <>
        <h2 data-testid="category-heading">Loading {category} Meals</h2>
      </>
    );
  else
    return (
      <>
        <h2 data-testid="category-loaded-heading">{category} Meals</h2>
        {data.meals.map((meal) => (
          <Link key={meal.idMeal} to={`/${category}/${meal.idMeal}`}>
            <h3>{meal.strMeal}</h3>
          </Link>
        ))}
      </>
    );
};
