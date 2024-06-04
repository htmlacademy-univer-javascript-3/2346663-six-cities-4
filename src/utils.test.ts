import { expect } from 'vitest';
import { OfferType, offers } from './mocks/offers';
import { filterOffers, sortOffers } from './utils';

const filteredOffersHamburg: OfferType[] = [];

const filteredOffersAmsterdam: OfferType[] = [
  {
    id: 'dbd2cc98-9146-45e3-b4ed-384780dbc16c',
    title: 'Amazing and Extremely Central Flat',
    type: 'house',
    price: 522,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.911976,
        zoom: 12,
      },},
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.9,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
  }, {
    id: 'f4e0244a-69a7-431c-b071-29c687695890',
    title: 'Wood and stone place',
    type: 'house',
    price: 829,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.911976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.6
  }, {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.911976,
        zoom: 13
      }},
    location: {
      latitude: 52.35514938496378,
      longitude: 4.929309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/15.jpg'
  },
];

describe('Function: filterOffers', () => {
  it('should return filtered array', () => {
    const initialOffers = offers;

    const result = filterOffers('Hamburg', initialOffers);

    expect(result).toStrictEqual(filteredOffersHamburg);
  });
});

describe('Function: filterOffers', () => {
  it('should return filtered array', () => {
    const initialOffers = offers;

    const result = filterOffers('Amsterdam', initialOffers);

    expect(result).toStrictEqual(filteredOffersAmsterdam);
  });
});

const offersSortedByPrice: OfferType[] = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.911976,
        zoom: 13
      }},
    location: {
      latitude: 52.35514938496378,
      longitude: 4.929309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/15.jpg'
  },
  {
    id: 'dbd2cc98-9146-45e3-b4ed-384780dbc16c',
    title: 'Amazing and Extremely Central Flat',
    type: 'house',
    price: 522,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.911976,
        zoom: 12,
      },},
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.9,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
  }, {
    id: 'f4e0244a-69a7-431c-b071-29c687695890',
    title: 'Wood and stone place',
    type: 'house',
    price: 829,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.911976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.6
  },
];

describe('Function: sortOffers', () => {
  it('should return sorted array', () => {
    const initialOffers = filteredOffersAmsterdam;

    const result = sortOffers('Price: low to high', initialOffers);

    expect(result).toStrictEqual(offersSortedByPrice);
  });
});

describe('Function: sortOffers', () => {
  it('should return sorted array', () => {
    const initialOffers = filteredOffersAmsterdam;

    const result = sortOffers('Popular', initialOffers);

    expect(result).toBe(initialOffers);
  });
});
