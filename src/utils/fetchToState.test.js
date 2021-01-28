import { render, screen  } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks'
import FetchToState from '../utils/fetchToState'


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
  // await waitForNextUpdate();
  expect(fetch).toHaveBeenCalled();
  // expect(result.current[0]).toEqual('test-default-value');
});