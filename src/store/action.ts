import { createAction } from '@reduxjs/toolkit';
import { City, Comment, OfferData, SortingType, UserData } from '../types/types';
import { OfferType } from '../mocks/offers';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction<City>('data/changeCity');
export const loadOffers = createAction<OfferType[]>('loading/loadOffers');
export const setSorting = createAction<SortingType>('data/setSorting');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('loading/setError');
export const loadOffer = createAction<OfferData>('data/loadOffer');
export const loadComments = createAction<Comment[]>('data/loadComments');
export const loadNearByOffers = createAction<OfferType[]>('data/loadNearByOffers');
export const loadFavoriteOffers = createAction<OfferType[]>('data/loadFavoriteOffers');
export const loadUserData = createAction<UserData>('data/loadUserData');
