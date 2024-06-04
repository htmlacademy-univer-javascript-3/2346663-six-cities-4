import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Main from './main';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { OfferType } from '../../mocks/offers';
import { AuthorizationStatus } from '../../const';
import { MemoryRouter } from 'react-router-dom';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockFavorites: OfferType[] = [
  {
    id: '1',
    title: 'Test Offer 1',
    type: 'Apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.374031,
        longitude: 4.88969,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.374031,
      longitude: 4.88969,
      zoom: 12,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.5,
    previewImage: 'img/test1.jpg',
  },
  {
    id: '2',
    title: 'Test Offer 2',
    type: 'House',
    price: 150,
    city: {
      name: 'Paris',
      location: {
        latitude: 52.520008,
        longitude: 13.404954,
        zoom: 12,
      },
    },
    location: {
      latitude: 52.520008,
      longitude: 13.404954,
      zoom: 12,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.2,
    previewImage: 'img/test2.jpg',
  },
];
describe('MainPage', () => {
  it('should render MainPage component', () => {
    const store = mockStore({
      DATA: {
        cityName: 'Paris',
        offers: mockFavorites,
        offer: null,
        comments: [],
        nearByOffers: [],
        sortingType: 'Popular',
        favoriteOffers: [],
      },
      USER: {
        authorizationStatus: AuthorizationStatus.Auth
      },
    });
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Main/>
        </MemoryRouter>
      </Provider>
    );

    const mainPageElement = screen.getByTestId('main-page');
    expect(mainPageElement).toBeInTheDocument();
  });
});
