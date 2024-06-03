export type City = 'Amsterdam' | 'Paris' | 'Cologne' | 'Brussels' | 'Hamburg' | 'Dusseldorf';

export type SortingType = 'Popular' | 'Price: high to low' | 'Price: low to high' | 'Top rated first';

export type AuthData = {
  login: string;
  password: string;
};

export type UserData = {
  id: number;
  email: string;
  token: string;
};

export type CityData = {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
  };
}

export type OfferData = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityData;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[];
  maxAdults: number;
};

export type Comment = {
  id: string;
  date: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  comment: string;
  rating: number;
};

export type NewComment = {
  id: string;
  comment: string;
  rating: number;
}

export type FavoriteData = {
  id: string;
  status: number;
}
