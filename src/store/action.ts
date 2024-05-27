import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/types';
import { OfferType } from '../mocks/offers';

export const changeCity = createAction('changeCity', (city: City) => ({
  payload: city,
}));
export const loadOffers = createAction<OfferType[]>('loadOffers');
export const setSorting = createAction('setSorting', (sortType: string) => ({
  payload: sortType,
}));
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
