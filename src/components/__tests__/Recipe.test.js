import { render, screen,  } from '@testing-library/react';
import {Recipe} from '../Recipe';

const mealId = "52894"

test('<Recipe> renders when loading', () => {
  render(<Recipe mealId={mealId} />);
});
