import { createSlice } from '@reduxjs/toolkit';
import { OfferType } from '../../mocks/offers';
import { City, Comment, OfferData, SortingType } from '../../types/types';
import { NameSpace } from '../../const';
import { changeCity, loadComments, loadFavoriteOffers, loadNearByOffers, loadOffer, loadOffers, setSorting } from '../action';

type Data = {
  cityName: City;
  offers: OfferType[];
  offer: OfferData | null;
  comments: Comment[];
  nearByOffers: OfferType[];
  sortingType: SortingType;
  favoriteOffers: OfferType[];
}

const initialState: Data = {
  cityName: 'Paris',
  offers: [],
  offer: null,
  comments: [],
  nearByOffers: [],
  sortingType: 'Popular',
  favoriteOffers: [],
};

export const data = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(changeCity, (state, action) => {
        state.cityName = action.payload;
      })
      .addCase(loadOffers, (state, action) => {
        state.offers = action.payload;
      })
      .addCase(loadOffer, (state, action) => {
        state.offer = action.payload;
      })
      .addCase(loadComments, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(loadNearByOffers, (state, action) => {
        state.nearByOffers = action.payload;
      })
      .addCase(setSorting, (state, action) => {
        state.sortingType = action.payload;
      })
      .addCase(loadFavoriteOffers, (state, action) => {
        state.favoriteOffers = action.payload;
      });
  }
});
