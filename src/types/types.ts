export type City = 'Amsterdam' | 'Paris' | 'Cologne' | 'Brussels' | 'Hamburg' | 'Dusseldorf';

export type AuthData = {
  login: string;
  password: string;
};

export type UserData = {
  id: number;
  email: string;
  token: string;
};
