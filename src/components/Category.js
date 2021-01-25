
import React from 'react'

export const Category = ({category}) => {
  console.log(category)
  return (
    <div>
      <h2 data-testid='category-heading'>{category.strCategory}</h2>
    </div>
  )
}
