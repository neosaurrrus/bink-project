import React from "react";
import { useRouteMatch, Link } from 'react-router-dom';


export const Meal = ({meal, categoryName}) => {
  const {url} = useRouteMatch()
  
  return (
      <div class="meal-card">
          <img alt="" src={meal.strMealThumb} />
        <Link key={meal.idMeal} to={`${url}/${meal.idMeal}`}>
            <h3>{meal.strMeal}</h3>
        </Link>
      </div>
  
  )
};
