import React, { useState, useEffect } from "react";

export const Categories = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    loadData();
  },[]);

  const loadData = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = await response.json();
    setData(data)

  };

  return (
    <>
      <h2 data-testid="categories-heading">Categories</h2>
    </>
  );
};
