import { NameSpace } from '../../const';
import Map from '../../components/map/map';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import ListOfCities from '../../components/list-of-cities/list-of-cities';
import SortingOptions from '../../components/sorting-options/sorting-options';
import { filterOffers, sortOffers } from '../../utils';
import ListOfOffers from '../../components/list-of-offers/list-of-offers';
import Header from '../../components/header/header';
import MainEmpty from './empty';


function Main(): JSX.Element {
  const cityName = useAppSelector((state) => state[NameSpace.Data].cityName);
  const offers = filterOffers(cityName, useAppSelector((state) => state[NameSpace.Data].offers));
  const sortingType = useAppSelector((state) => state[NameSpace.Data].sortingType);
  const noSelectedPoint = {
    id: '',
    lat: 0,
    lng: 0,
  };
  const [selectedPoint, setSelectedPoint] = useState(noSelectedPoint);
  if (!offers) {
    return (
      <div className="page page--gray page--main">
        <Header/>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <ListOfCities />
          <MainEmpty/>
        </main>
      </div>
    );
  }
  const points = offers.map((offer) => ({id: offer.id, lat: offer.location.latitude, lng: offer.location.longitude}));
  const city = offers[0].city;

  const handleListItemHover = (id: string) => {
    const currentPoint = points.find((point) =>
      point.id === id,
    );
    if (currentPoint) {
      setSelectedPoint(currentPoint);
    } else {
      setSelectedPoint(noSelectedPoint);
    }
  };
  return (
    <div className="page page--gray page--main" data-testid="main-page">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <ListOfCities />
        {
          (!offers) && (<MainEmpty/>)
        }
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {cityName}</b>
              <SortingOptions/>
              <ListOfOffers listClassName='cities__places-list places__list tabs__content' className='cities' onListItemHover={handleListItemHover} forFavoriteList={false} offers={sortOffers(sortingType, offers)}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map height={800} city={city} points={points} selectedPoint={selectedPoint}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
