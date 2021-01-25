import React, { useState, useEffect } from "react";
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
        <Category key={category.idCategory} category={category} />
      ))}
    </>
  );
};
