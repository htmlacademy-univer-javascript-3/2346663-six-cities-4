import { NameSpace } from '../../const';
import { fetchOffersAction } from '../../services/api-actions';
import { setOffersDataLoadingStatus } from '../action';
import { State } from '../state';
import { loading } from './loading';

export const getLoadingStatus = (state: Pick<State, NameSpace.Loading>): boolean => state[NameSpace.Loading].isOffersDataLoading;
export const getError = (state: Pick<State, NameSpace.Loading>): string | null => state[NameSpace.Loading].error;

describe('Loading', () => {
  const mockState = {
    [NameSpace.Loading]: {
      isOffersDataLoading: false,
      error: 'SomeError',
    },
  };

  it('should return isOffersDataLoading', () => {
    const { isOffersDataLoading } = mockState[NameSpace.Loading];
    const result = getLoadingStatus(mockState);
    expect(result).toEqual(isOffersDataLoading);
  });

  it('should return error', () => {
    const { error } = mockState[NameSpace.Loading];
    const result = getError(mockState);
    expect(result).toEqual(error);
  });
});


describe('Loading Slice', () => {
  it('should set "isOffersDataLoading" to "true", "error" to "null" with "fetchQuestionAction.pending"', () => {
    const expectedState = {
      isOffersDataLoading: false,
      error: null,
    };

    const result = loading.reducer(undefined, fetchOffersAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set "isOffersDataLoading" to "false" with "fetchQuestionAction.fulfilled"', () => {
    const expectedState = {
      isOffersDataLoading: false,
      error: null,
    };

    const result = loading.reducer(undefined, fetchOffersAction.fulfilled);

    expect(result).toEqual(expectedState);
  });

  it('should set "isOffersDataLoading" to "true", "error" to "true" with "fetchQuestionAction.rejected"', () => {
    const expectedState = {
      isOffersDataLoading: true,
      error: null,
    };

    const result = loading.reducer(undefined, setOffersDataLoadingStatus(true));

    expect(result).toEqual(expectedState);
  });
});
