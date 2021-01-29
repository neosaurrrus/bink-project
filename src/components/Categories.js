import React, { useState, useEffect } from "react";
import fetchToState from "../utils/fetchToState";
import { Link } from "react-router-dom";

export const Categories = () => {
 

  const [data, loading] = fetchToState(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );

  if (loading)
    return (
      <>
        <h2 data-testid="categories-heading">Loading Categories</h2>
      </>
    );

  return (
    <>
      <h2 data-testid="categories-heading">Categories</h2>
      {data.categories.map((category) => (
        <Link
          to
          data-testid="category-link"
          key={category.idCategory}
          to={`/${category.strCategory}`}
        >
          <h3>{category.strCategory}</h3>
        </Link>
      ))}
    </>
  );
};
