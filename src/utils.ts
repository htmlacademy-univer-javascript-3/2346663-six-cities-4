import { OfferType } from './mocks/offers';
import { City } from './types/types';

export function filterOffers(city: City, offersIn: OfferType[]): OfferType[] {
  return offersIn.filter((offer) => offer.city.name === city);
}

export function sortOffers(sortType: string, offersIn: OfferType[]): OfferType[] {
  switch (sortType) {
    case 'Price: high to low':
      return offersIn.sort((a, b) => a.price < b.price ? 1 : -1);
    case 'Price: low to high':
      return offersIn.sort((a, b) => a.price > b.price ? 1 : -1);
    case 'Top rated first':
      return offersIn.sort((a, b) => a.rating < b.rating ? 1 : -1);
    default:
      return offersIn;
  }
}
