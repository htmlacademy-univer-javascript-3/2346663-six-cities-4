import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import ErrorMessage from './error-message';

const mockStore = configureMockStore([]);
describe('error-message', () => {
  it('should render error card', () => {
    const store = mockStore({LOADING: { error: 'Some error' }});

    render(
      <Provider store={store}>
        <MemoryRouter>
          <ErrorMessage/>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Some error/i)).toBeInTheDocument();
  });
});
