import { render, screen , waitForElement} from '@testing-library/react';

import {Recipe} from '../Recipe';

const mealId = "52894"

test('<Recipe> renders when loading', async () => {
  render(<Recipe mealId={mealId} />);

  screen.debug()
  await waitForElement(() => screen.getByTestId('movie-title'))
  
 
});
