import React from "react";
import { Link } from "react-router-dom";

export const Meal = ({meal, categoryName}) => {
  
  console.log(meal)
  return (
    <div class="meal-card">
        <img alt="" src={meal.strMealThumb} />
       <Link key={meal.idMeal} to={`/${categoryName}/${meal.idMeal}`}>
          <h3>{meal.strMeal}</h3>
       </Link>
    </div>
  )
};
