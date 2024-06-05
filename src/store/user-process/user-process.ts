import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const';
import { UserData } from '../../types/types';
import { loadUserData, requireAuthorization } from '../action';


type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userData?: UserData;
}
const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(requireAuthorization, (state, action) => {
        state.authorizationStatus = action.payload;
      })
      .addCase(loadUserData, (state, action) => {
        state.userData = action.payload;
      });
  }
});
