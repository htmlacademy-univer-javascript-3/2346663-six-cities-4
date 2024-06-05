import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, NameSpace } from '../../const';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { fetchFavoriteOffers, fetchOffersAction, logoutAction } from '../../services/api-actions';

function Header(): JSX.Element {
  const mail = useAppSelector((state) => state[NameSpace.User].userData?.email);
  const authorizationStatus = useAppSelector((state) => state[NameSpace.User].authorizationStatus);
  const favoriteOffers = useAppSelector((state) => state[NameSpace.Data].favoriteOffers);
  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={AppRoute.Main} onClick={() => {
                store.dispatch(fetchOffersAction());
              }}
              >
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites} onClick={() => {
                    store.dispatch(fetchFavoriteOffers());
                  }}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{mail}</span>
                    <span className="header__favorite-count">{favoriteOffers.length}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.Main} onClick={() => {
                    store.dispatch(logoutAction());
                  }}
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
  return (
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
                  <span className="header__login">Sign in</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
