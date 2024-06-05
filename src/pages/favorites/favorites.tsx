import ListOfOffers from '../../components/list-of-offers/list-of-offers';
import { Link } from 'react-router-dom';
import { AppRoute, Cities, NameSpace } from '../../const';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks';
import FavoritesEmpty from './favorites-empty';
import { changeCity } from '../../store/action';
import { City } from '../../types/types';

function Favorites(): JSX.Element {
  const dispatch = useAppDispatch();
  const favoriteOffers = useAppSelector((state) => state[NameSpace.Data].favoriteOffers);
  const uniqueCities: City[] = [];
  favoriteOffers.map((offer) => {
    switch (offer.city.name) {
      case Cities[0]:
        uniqueCities.push(Cities[0]);
        break;
      case Cities[1]:
        uniqueCities.push(Cities[1]);
        break;
      case Cities[2]:
        uniqueCities.push(Cities[2]);
        break;
      case Cities[3]:
        uniqueCities.push(Cities[3]);
        break;
      case Cities[4]:
        uniqueCities.push(Cities[4]);
        break;
      case Cities[5]:
        uniqueCities.push(Cities[5]);
        break;
    }
  });
  if (favoriteOffers.length === 0) {
    return (
      <div className="page">
        <Header/>
        <FavoritesEmpty/>
        <footer className="footer container">
          <Link className="footer__logo-link" to={AppRoute.Main}>
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </Link>
        </footer>
      </div>
    );
  }
  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                uniqueCities.map((city) => (
                  <li className="favorites__locations-items" key={city}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to={AppRoute.Main} onClick={() => dispatch(changeCity(city))}>
                          <span>{city}</span>
                        </Link>
                      </div>
                    </div>
                    <ListOfOffers listClassName='favorites__places' className='favorites' forFavoriteList offers={favoriteOffers.filter((offer) => offer.city.name === city)}/>
                  </li>
                ))
              }
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;
