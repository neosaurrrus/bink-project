import { render, screen, fireEvent, waitFor,cleanup} from '@testing-library/react';
import App from './App'

beforeEach(() => {
  cleanup();
});


//Combined Unit and Integration test

test('<App> is able to load and click on Beef Category', async () => {
  render(< App/>);
  const linkElement = screen.getByText(/Lukies Meal App/i);
  expect(linkElement).toBeInTheDocument();
  await waitFor(()=> screen.getByText('Beef'))
  fireEvent.click(screen.getByText(/Beef/i))
});


