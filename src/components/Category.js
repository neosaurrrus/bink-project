import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Category = ({ match }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${match.params.id}` //static placeholder
      );
      const data = await response.json();
      setData(data);
    } catch (e) {
    }
  };

  if (!data)
    return (
      <>
        <h2 data-testid="category-heading">Category</h2>
        <h3>Loading Data</h3>
      </>
    );

  return (
    <>
      <h2 data-testid="category-heading">Category</h2>
      {data.meals.map((meal) => (
        <Link
          data-testid="meal-link"
          key={meal.idMeal}
          to={`/${match.params.id}/${meal.idMeal}`}
        >
          <h3>{meal.strMeal}</h3>
        </Link>
      ))}
    </>
  );
};
