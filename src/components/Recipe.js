import React from "react";
import fetchToState from "../utils/fetchToState";

const buildIngredientList = (meal) => { // Gets the ingredients and measures in the meal and builds a combined JSX list 
  const ingredientsArr = Object.values(meal)
    .slice(9, 28)
    .filter((v) => v);
  const measuresArr = Object.values(meal).slice(29);

  return ingredientsArr.map((ingredient, index) => {
    if (ingredient && measuresArr[index])
      return (
        <li key={index}>
          {measuresArr[index]} - {ingredient}{" "}
        </li>
      );
  });
}

const buildInstructionList = (instructions) => { // Gets the instructions and parses into a JSX list.
  const instructionsArr = instructions.split(". ");
  return instructionsArr.map((instruction, index) => {
    return <li key={index}>{instruction}</li>;
  });
}

export const Recipe = ({match}) => {
  console.log(match)
  const [data, loading] = fetchToState(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
  );
  if (loading) return <h1>Loading Recipe</h1>;
  const meal = data.meals[0]
  const { strMeal, strMealThumb, strInstructions } = meal;

  const ingredientList = buildIngredientList(meal)
  const instructionList = buildInstructionList(strInstructions)
  
  return (
    <div className="meal-recipe">
      <h2>{strMeal}</h2>
      <img src={strMealThumb} alt=""></img>
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
