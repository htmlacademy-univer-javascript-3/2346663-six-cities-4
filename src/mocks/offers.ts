export type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };};
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};

export const offers: OfferType[] = [
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
  }, {
    id: '2b751560-b655-4f31-8934-e80677b7729e',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 405,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/16.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 52.37454,
        longitude: 4.911976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.1
  },
];

export const CITY = {
  title: offers[0].city.name,
  lat: offers[0].city.location.latitude,
  lng: offers[0].city.location.longitude,
  zoom: offers[0].city.location.zoom,
};

export const POINTS = offers.map((offer) => ({title: offer.title, lat: offer.location.latitude, lng: offer.location.longitude}));
