import { SortOptions } from '../../const';
import { useAppDispatch } from '../../hooks';
import { setSorting } from '../../store/action';


function SortingOptions(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
                  Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${(true) && 'places__options--opened'}`}>
        {
          SortOptions.map((option) => (<li className="places__option" tabIndex={0} onClick={() => dispatch(setSorting(option))} key={option}>{option}</li>))
        }
      </ul>
    </form>
  );
}

export default SortingOptions;
