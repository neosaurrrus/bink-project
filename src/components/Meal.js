import React from "react";
import {
  BrowserRouter as Router, Route, Switch, useRouteMatch, Link,
} from 'react-router-dom';
import { Recipe } from "./Recipe";

export const Meal = ({meal, categoryName}) => {
  const {url} = useRouteMatch()
  
  return (
      <div class="meal-card">
          <img alt="" src={meal.strMealThumb} />
        <Link key={meal.idMeal} to={{pathname: `${url}/${meal.idMeal}`, props:{name:'leff'}}}>
            <h3>{meal.strMeal}</h3>
        </Link>
      </div>
  
  )
};
