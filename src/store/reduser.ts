import { createReducer } from '@reduxjs/toolkit';
import { OfferType, offers } from '../mocks/offers';
import { changeCity } from './action';
import { City } from '../types/types';

export function filterOffers(city: City, offersIn: OfferType[]): OfferType[] {
  return offersIn.filter((offer) => offer.city.name === city);
}

const initialState: { cityName: City; offers: OfferType[] } = {
  cityName: 'Paris',
  offers: offers
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.cityName = action.payload;
  });
});
