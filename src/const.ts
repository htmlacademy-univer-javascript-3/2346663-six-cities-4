import { City, SortingType } from './types/types';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const Cities: City[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
export const SortOptions: SortingType[] = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
  Favorite = '/favorite'
}

export enum NameSpace {
  Data = 'DATA',
  Loading = 'LOADING',
  User = 'USER',
}
