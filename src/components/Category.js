import React from "react";
import fetchToState from "../utils/fetchToState";
import { Meal } from "./Meal";
import { Recipe } from "./Recipe";
import { Route, Switch, useRouteMatch } from "react-router-dom";

export const Category = ({ match }) => {
  const { path } = useRouteMatch();
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
    return (
      <Switch>
        <Route exact path={`/${categoryName}`}>
          <h2 data-testid="category-heading">{categoryName} Meals</h2>
          <div className="category-meals" data-testid="category-meals">
            {data.meals.map((meal) => (
              <Meal key={meal.idMeal} categoryName={categoryName} meal={meal} />
            ))}
          </div>
        </Route>
        <Route
          path={`${path}/:mealId`}
          render={(props) => <Recipe mealId={props.match.params.mealId} />}
        ></Route>
      </Switch>
    );
};
