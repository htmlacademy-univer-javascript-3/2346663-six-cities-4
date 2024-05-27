import { createReducer } from '@reduxjs/toolkit';
import { OfferType, offers } from '../mocks/offers';
import { changeCity, setSorting } from './action';
import { City } from '../types/types';

export function filterOffers(city: City, offersIn: OfferType[]): OfferType[] {
  return offersIn.filter((offer) => offer.city.name === city);
}

export function sortOffers(sortType: string, offersIn: OfferType[]): OfferType[] {
  switch (sortType) {
    case 'Price: high to low':
      return offersIn.sort((a, b) => a.price < b.price ? 1 : -1);
    case 'Price: low to high':
      return offersIn.sort((a, b) => a.price > b.price ? 1 : -1);
    case 'Top rated first':
      return offersIn.sort((a, b) => a.rating < b.rating ? 1 : -1);
    default:
      return offersIn;
  }
}

const initialState: { cityName: City; offers: OfferType[] } = {
  cityName: 'Paris',
  offers: offers
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.cityName = action.payload;
  });
  builder.addCase(setSorting, (state, action) => {
    state.offers = sortOffers(action.payload, state.offers);
  });
});
