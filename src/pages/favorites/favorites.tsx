import ListOfOffers from '../../components/list-of-offers/list-of-offers';
import { Link } from 'react-router-dom';
import { AppRoute, NameSpace } from '../../const';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';

function Favorites(): JSX.Element {
  const favoriteOffers = useAppSelector((state) => state[NameSpace.Data].favoriteOffers);
  const uniqueCities: string[] = [];
  favoriteOffers.map((offer) => {
    if (!uniqueCities.includes(offer.city.name)) {
      uniqueCities.push(offer.city.name);
    }
  });
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
                        <Link className="locations__item-link" to={AppRoute.Main}>
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
