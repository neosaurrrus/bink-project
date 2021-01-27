import React from "react";
import fetchToState from "../utils/fetchToState";

export const Recipe = () => {
  
  const [data, loading] = fetchToState(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
  );

  if (loading) return (
    <h1>Loading Recipe</h1>
  )

  const { strMeal, strMealThumb, strInstructions } = data.meals[0]
  console.log(data.meals[0])

  const instructionsArr = strInstructions.split(". ")
  const listedInstructions = instructionsArr.map( (instruction,index) => {
    return (<li key={index}>{instruction}</li>)
  });

  const ingredientsArr = Object.values(data.meals[0]).slice(9,28).filter( v => v)
  const measuresArr = Object.values(data.meals[0]).slice(29);

  const measuresAndIngredients = ingredientsArr.map ( (ingredient, index) => {
    if (ingredient && measuresArr[index]) return (<li key={index}> {measuresArr[index]} - {ingredient} </li>)
  })
  
 
  //loop through meal object and make an array for both StrIngredients and meals that are not blank

  return (
    <div className="meal-recipe">
        <h2>{strMeal}</h2>
        <img src={strMealThumb} alt=""></img>
        <div>
          <h3>Ingredients</h3>
          <ul>{measuresAndIngredients}</ul>
        </div>
        <div>
          <h3>Instructions</h3>
          <ol>{listedInstructions}</ol>
        </div>
    </div>
  )
};


// if (ingredient) return (<li key={index}> `${measuresArr[index]} - ${ingredient}` </li>)