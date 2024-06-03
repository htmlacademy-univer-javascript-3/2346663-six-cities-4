import { changeCity } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Link } from 'react-router-dom';
import { Cities, NameSpace } from '../../const';
import { fetchOffersAction } from '../../services/api-actions';


function ListOfCities(): JSX.Element {
  const dispatch = useAppDispatch();
  const cityName = useAppSelector((state) => state[NameSpace.Data].cityName);
  const className = 'locations__item-link tabs__item';
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            Cities.map((city) => (
              <li className="locations__item" key={city}>
                <Link className={`${className} ${(cityName === city) && 'tabs__item--active'}`} to="/" onClick={() => {
                  dispatch(changeCity(city));
                  dispatch(fetchOffersAction());
                }}
                >
                  <span>{city}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}

export default ListOfCities;
