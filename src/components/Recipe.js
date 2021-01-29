import React from "react";
import FetchToState from "../utils/fetchToState";

const buildIngredientList = (meal) => {
  // Gets the ingredients and measures in the meal and builds a combined JSX list
  const ingredientsArr = Object.values(meal)
    .slice(9, 28)
    .filter((v) => v);
  const measuresArr = Object.values(meal).slice(29);

  return ingredientsArr.map((ingredient, index) => {
    if (ingredient && measuresArr[index])
      return (
        <li key={index}>
          {measuresArr[index]} {ingredient}
        </li>
      );
    return false
  });
};

const buildInstructionList = (instructions) => {
  // Gets the instructions and parses into a JSX list.
  const instructionsArr = instructions.split(". ");
  return instructionsArr.map((instruction, index) => {
    return <li key={index}>{instruction}</li>;
  });
};

export const Recipe = ({ mealId }) => {
  const [data, loading] = FetchToState(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  );
  if (loading) return <h2>Loading Recipe</h2>;
  const meal = data.meals[0];
  const { strMeal, strMealThumb, strInstructions, strArea, strCategory } = meal;

  const ingredientList = buildIngredientList(meal)
  const instructionList = buildInstructionList(strInstructions);
  return (
    <div className="meal-recipe">
      <div>
        <h2 data-testid="recipe-title">{strMeal}</h2>
        <h3>
          {strArea} {strCategory}
        </h3>
        <img data-testid="recipe-image" className="recipe-image" src={strMealThumb} alt=""></img>
      </div>

      <div>
        <h3>Ingredients</h3>
        <ul>{ingredientList}</ul>
      </div>
      <div>
        <h3>Instructions</h3>
        <ol>{instructionList}</ol>
      </div>
    </div>
  );
};
