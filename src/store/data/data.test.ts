import { Cities, NameSpace, SortOptions } from '../../const';
import { OfferType, offers } from '../../mocks/offers';
import { changeCity, loadFavoriteOffers, loadOffers, setSorting } from '../action';
import { State } from '../state';
import { data } from './data';

export const getCityName = (state: Pick<State, NameSpace.Data>): string => state[NameSpace.Data].cityName;
export const getOffers = (state: Pick<State, NameSpace.Data>): OfferType[] => state[NameSpace.Data].offers;
export const getNearByOffers = (state: Pick<State, NameSpace.Data>): OfferType[] => state[NameSpace.Data].nearByOffers;
export const getSortingType = (state: Pick<State, NameSpace.Data>): string => state[NameSpace.Data].sortingType;

describe('Data', () => {
  const mockState = {
    [NameSpace.Data]: {
      cityName: Cities[0],
      offers: offers,
      offer: null,
      comments: [],
      nearByOffers: offers,
      sortingType: SortOptions[0],
      favoriteOffers: [],
    }
  };

  it('should return cityName', () => {
    const { cityName } = mockState[NameSpace.Data];
    const result = getCityName(mockState);
    expect(result).toEqual(cityName);
  });

  it('should return offers', () => {
    const offersFromState = mockState[NameSpace.Data].offers;
    const result = getOffers(mockState);
    expect(result).toEqual(offersFromState);
  });

  it('should return nearByOffers', () => {
    const { nearByOffers } = mockState[NameSpace.Data];
    const result = getNearByOffers(mockState);
    expect(result).toEqual(nearByOffers);
  });

  it('should return sortingType', () => {
    const { sortingType } = mockState[NameSpace.Data];
    const result = getSortingType(mockState);
    expect(result).toEqual(sortingType);
  });
});

describe('Data Slice', () => {
  const initialState = {
    cityName: Cities[0],
    offers: [],
    offer: null,
    comments: [],
    nearByOffers: offers,
    sortingType: SortOptions[0],
    favoriteOffers: [],
  };
  it('should change city', () => {
    const expectedState = {
      cityName: Cities[1],
      offers: [],
      offer: null,
      comments: [],
      nearByOffers: offers,
      sortingType: SortOptions[0],
      favoriteOffers: [],
    };

    const result = data.reducer(initialState, changeCity(Cities[1]));

    expect(result).toEqual(expectedState);
  });

  it('should load offers', () => {
    const expectedState = {
      cityName: Cities[0],
      offers: offers,
      offer: null,
      comments: [],
      nearByOffers: offers,
      sortingType: SortOptions[0],
      favoriteOffers: [],
    };

    const result = data.reducer(initialState, loadOffers(offers));

    expect(result).toEqual(expectedState);
  });

  it('should set sorting', () => {
    const expectedState = {
      cityName: Cities[0],
      offers: [],
      offer: null,
      comments: [],
      nearByOffers: offers,
      sortingType: SortOptions[1],
      favoriteOffers: [],
    };

    const result = data.reducer(initialState, setSorting(SortOptions[1]));

    expect(result).toEqual(expectedState);
  });

  it('should load favorite offers', () => {
    const expectedState = {
      cityName: Cities[0],
      offers: [],
      offer: null,
      comments: [],
      nearByOffers: offers,
      sortingType: SortOptions[0],
      favoriteOffers: offers,
    };

    const result = data.reducer(initialState, loadFavoriteOffers(offers));

    expect(result).toEqual(expectedState);
  });
});

