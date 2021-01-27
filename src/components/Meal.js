import React from "react";
import { Link } from "react-router-dom";

export const Meal = ({meal, categoryName}) => {
  
  return (
    <div>
       <Link key={meal.idMeal} to={`/${categoryName}/${meal.idMeal}`}>
          <h3>{meal.strMeal}</h3>
       </Link>
       
    </div>
   
  )

};
