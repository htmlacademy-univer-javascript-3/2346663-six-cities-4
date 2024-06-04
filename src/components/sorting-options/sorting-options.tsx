import { useState } from 'react';
import { NameSpace, SortOptions } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSorting } from '../../store/action';


function SortingOptions(): JSX.Element {
  const dispatch = useAppDispatch();
  const sortingType = useAppSelector((state) => state[NameSpace.Data].sortingType);
  const [isSortingListOpen, setSortingList] = useState(false);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption" onClick={() => setSortingList(true)}>Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setSortingList(true)}>
        {sortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${(isSortingListOpen) && 'places__options--opened'}`}>
        {
          SortOptions.map((option) => (
            <li className="places__option" tabIndex={0} onClick={() => {
              dispatch(setSorting(option));
              setSortingList(false);
            }} key={option}
            >
              {option}
            </li>))
        }
      </ul>
    </form>
  );
}

export default SortingOptions;
