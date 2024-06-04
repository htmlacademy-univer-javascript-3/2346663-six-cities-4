import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import SortingOptions from './sorting-options';
import { setSorting } from '../../store/action';

const mockStore = configureMockStore([]);

describe('SortingOptions', () => {
  const store = mockStore({ DATA: { sortingType: 'Popular' } });
  it('should toggle options dropdown when clicking on caption', () => {
    render(
      <Provider store={store}>
        <SortingOptions />
      </Provider>
    );

    const dropdown = screen.getByRole('list');
    expect(dropdown).toHaveClass('places__options--custom');

    fireEvent.click(screen.getByText('Sort by'));

    expect(dropdown).toHaveClass('places__options--opened');
  });


  it('should dispatch changeSortingOption action when an option is selected', () => {

    render(
      <Provider store={store}>
        <SortingOptions />
      </Provider>
    );

    fireEvent.click(screen.getByText('Sort by'));
    fireEvent.click(screen.getByText('Top rated first'));

    expect(store.getActions()).toEqual([setSorting('Top rated first')]);
  });
});
