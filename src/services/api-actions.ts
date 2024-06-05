import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { AppDispatch, State } from '../store/state';
import { loadComments, loadFavoriteOffers, loadNearByOffers, loadOffer, loadOffers, loadUserData, requireAuthorization, setError, setOffersDataLoadingStatus } from '../store/action';
import { APIRoute, AuthorizationStatus } from '../const';
import { OfferType } from '../mocks/offers';
import { AuthData, Comment, FavoriteData, NewComment, OfferData, UserData } from '../types/types';
import { dropToken, saveToken } from './token';
import { store } from '../store';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<OfferType[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const fetchFavoriteOffers = createAsyncThunk<OfferType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavorites',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferType[]>(APIRoute.Favorite);
    dispatch(loadFavoriteOffers(data));
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(loadUserData(data));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(loadUserData(data));
    dispatch(fetchFavoriteOffers());
    dispatch(fetchOffersAction());
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

const TIMEOUT_SHOW_ERROR = 2000;
export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (id, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<OfferData>(`${APIRoute.Offers}/${id}`);
    const nearByOffers = (await api.get<OfferType[]>(`${APIRoute.Offers}/${id}/nearby`)).data;
    const comments = (await api.get<Comment[]>(`${APIRoute.Comments}/${id}`)).data;
    dispatch(loadOffer(data));
    dispatch(loadNearByOffers(nearByOffers));
    dispatch(loadComments(comments));
    dispatch(setOffersDataLoadingStatus(false));
  },
);

export const postComment = createAsyncThunk<void, NewComment, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/comment',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    await api.post<NewComment>(`${APIRoute.Comments}/${id}`, {comment, rating});
    const comments = (await api.get<Comment[]>(`${APIRoute.Comments}/${id}`)).data;
    dispatch(loadComments(comments));
  },
);

export const changeFavorite = createAsyncThunk<void, FavoriteData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/favorite',
  async ({id, status}, {dispatch, extra: api}) => {
    await api.post<FavoriteData>(`${APIRoute.Favorite}/${id}/${status}`);
    dispatch(fetchFavoriteOffers());
    dispatch(clearErrorAction());
  },
);
