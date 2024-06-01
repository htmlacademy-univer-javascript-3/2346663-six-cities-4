import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { setError, setOffersDataLoadingStatus } from '../action';

type Loading = {
  isOffersDataLoading: boolean;
  error: string | null;
}

const initialState: Loading = {
  isOffersDataLoading: false,
  error: null,
};

export const loading = createSlice({
  name: NameSpace.Loading,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setOffersDataLoadingStatus, (state, action) => {
        state.isOffersDataLoading = action.payload;
      })
      .addCase(setError, (state, action) => {
        state.error = action.payload;
      });
  }
});
