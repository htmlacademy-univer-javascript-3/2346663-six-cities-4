import { Link } from 'react-router-dom';
import ListOfOffers from '../../components/list-of-offers/list-of-offers';
//import { OfferType } from '../../mocks/offers';
import { AppRoute } from '../../const';
import Map from '../../components/map/map';
import { CITY } from '../../mocks/offers';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import ListOfCities from '../../components/list-of-cities/list-of-cities';
import { filterOffers } from '../../store/reduser';
import SortingOptions from '../../components/sorting-options/sorting-options';


// type MainProps = {
//   offers: OfferType[];
// }

function Main(/*{offers}: MainProps*/): JSX.Element {
  const cityName = useAppSelector((state) => state.cityName);
  const offers = filterOffers(cityName, useAppSelector((state) => state.offers));
  const points = offers.map((offer) => ({title: offer.title, lat: offer.location.latitude, lng: offer.location.longitude}));
  const noSelectedPoint = {
    title: '',
    lat: 0,
    lng: 0,
  };
  const [selectedPoint, setSelectedPoint] = useState(noSelectedPoint);

  const handleListItemHover = (listItemName: string) => {
    const currentPoint = points.find((point) =>
      point.title === listItemName,
    );
    if (currentPoint) {
      setSelectedPoint(currentPoint);
    } else {
      setSelectedPoint(noSelectedPoint);
    }
  };
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.Login}>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <ListOfCities />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {cityName}</b>
              <SortingOptions/>
              <ListOfOffers listClassName='cities__places-list places__list tabs__content' className='cities' onListItemHover={handleListItemHover} forFavoriteList={false} offers={offers}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map height={800} city={CITY} points={points} selectedPoint={selectedPoint}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
