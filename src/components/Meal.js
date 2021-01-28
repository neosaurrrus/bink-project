import React from "react";
import { useRouteMatch, Link } from 'react-router-dom';


export const Meal = ({meal}) => {
  console.log(meal)
  const {url} = useRouteMatch()
  
  return (
      <div className="meal-card">
          <img aria-hidden="true" alt="" src={meal.strMealThumb} data-testid="meal-image"/>
        <Link data-testid="meal-link" key={meal.idMeal} to={`${url}/${meal.idMeal}`}>
            <h3>{meal.strMeal}</h3>
        </Link>
      </div>
  )
};
