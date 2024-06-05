import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { OfferType } from '../../mocks/offers';
import ListOfOffers from '../../components/list-of-offers/list-of-offers';
import { MemoryRouter } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';

const mockStore = configureMockStore([]);
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
      name: 'Berlin',
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
describe('FavoriteList', () => {
  it('should render list of offers', () => {
    const store = mockStore({ USER: { authorizationStatus: AuthorizationStatus.Auth } });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <ListOfOffers listClassName='favorites__places' className='favorites' forFavoriteList offers={mockFavorites}/>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Apartment/i)).toBeInTheDocument();
    expect(screen.getByText(/House/i)).toBeInTheDocument();
  });
});
