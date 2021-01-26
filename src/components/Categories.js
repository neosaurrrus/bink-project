import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import { Category } from "./Category";


export const Categories = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = await response.json();
    setData(data);
  };

  if (!data)
    return (
      <>
        <h2 data-testid="categories-heading">Categories</h2>
        <h3>Loading Data</h3>
      </>
    );

  return (
    <>
      <h2 data-testid="categories-heading">Categories</h2>
      {data.categories.map((category) => (
        <Link data-testid='category-link' key={category.idCategory} to={`/${category.idCategory}`}>
          <h3>{category.strCategory}</h3>
        </Link>
      ))}
    </>
  );
};
