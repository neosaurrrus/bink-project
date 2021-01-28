import React from 'react'
import {render, cleanup, waitFor} from '@testing-library/react';
import {Category} from '../Category';
import {MemoryRouter } from 'react-router-dom'

global.fetch = require('jest-fetch-mock');

afterEach(() => {
  cleanup
  console.error.mockClear()
})

console.error = jest.fn()
const match = {
  params: {
      id: 'dummyvalue'
  }
}

const category = {
  id: "Test Category",
  meals: [{
    mealId:1,
    mealStr:"Test Meal 1"
  }, {
    mealId:2,
    mealStr:"Test Meal 2"
  }]
}

test('<Category> can render', () => {
  const {getByTestId} = render(<Category match={match}/>);
  expect(getByTestId('category-heading').tagName).toBe('H2')
});

test('<Category> fetches data' , async () => {
  const {getByTestId} = render(
      <MemoryRouter>
           <Category match={match}/>
      </MemoryRouter>
  )
  await waitFor(() => getByTestId('meal-link'))

});