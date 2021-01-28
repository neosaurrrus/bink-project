import { renderHook} from '@testing-library/react-hooks'
import FetchToState from '../utils/fetchToState'

// I had trouble getting my custom hook and react-testing-library to talk properly in time so this is a *very* light test!

beforeAll(() => {
    jest.spyOn(global, 'fetch')
        .mockImplementation(() => Promise.resolve({
            json: () => Promise.resolve({
                data: 'test-value'
            })
        }))
    });
afterEach(() => {
    global.fetch.mockClear();
});

const url = "https://test.com"

test('FetchToState', async () => {
  const {
      result,
      waitForNextUpdate
  } = renderHook(() => FetchToState(url));

  expect(fetch).toHaveBeenCalled();
})