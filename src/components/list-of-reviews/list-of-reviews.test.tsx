import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import ListOfReviews from './list-of-reviews';
import { Comment } from '../../types/types';

const mockStore = configureMockStore([]);
const mockReviews: Comment[] = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: 'https://url-to-image/image.png',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 4
  }];
describe('error-message', () => {
  it('should render error card', () => {
    const store = mockStore({DATA: { offers: {mockReviews} }});

    render(
      <Provider store={store}>
        <MemoryRouter>
          <ListOfReviews reviews={mockReviews}/>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Oliver Conner/i)).toBeInTheDocument();
  });
});
