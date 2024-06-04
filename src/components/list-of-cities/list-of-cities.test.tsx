import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import ListOfCities from './list-of-cities';
import { OfferType } from '../../mocks/offers';

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
describe('error-message', () => {
  it('should render error card', () => {
    const store = mockStore({DATA: { offers: mockFavorites }});

    render(
      <Provider store={store}>
        <MemoryRouter>
          <ListOfCities/>
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Amsterdam/i)).toBeInTheDocument();
    expect(screen.getByText(/Paris/i)).toBeInTheDocument();
  });
});
