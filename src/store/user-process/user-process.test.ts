import { AuthorizationStatus, NameSpace } from '../../const';
import { requireAuthorization } from '../action';
import { State } from '../state';
import { userProcess } from './user-process';

export const getAuthorizationStatus = (state: Pick<State, NameSpace.User>): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

describe('User Process', () => {
  const mockState = {
    [NameSpace.User]: {
      authorizationStatus: AuthorizationStatus.Auth,
    },
  };

  it('should return isOffersDataLoading', () => {
    const { authorizationStatus } = mockState[NameSpace.User];
    const result = getAuthorizationStatus(mockState);
    expect(result).toEqual(authorizationStatus);
  });
});

describe('User Process Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { authorizationStatus: AuthorizationStatus.Auth };

    const result = userProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state', () => {
    const emptyAction = { type: '' };
    const expectedState = { authorizationStatus: AuthorizationStatus.Unknown };

    const result = userProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should authorize the user', () => {
    const initialState = { authorizationStatus: AuthorizationStatus.Unknown };
    const expectedState = { authorizationStatus: AuthorizationStatus.Auth };

    const result = userProcess.reducer(initialState, requireAuthorization(AuthorizationStatus.Auth));

    expect(result).toEqual(expectedState);
  });
});
