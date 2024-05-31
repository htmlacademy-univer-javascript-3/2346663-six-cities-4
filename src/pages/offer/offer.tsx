import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import CitiesLogo from '../../components/logos/cities-logo';
import ReviewForm from '../../components/review-form/review-form';
import ListOfReviews from '../../components/list-of-reviews/list-of-reviews';
import { CITY, POINTS } from '../../mocks/offers';
import Map from '../../components/map/map';
import ListOfOffers from '../../components/list-of-offers/list-of-offers';
import { useAppSelector } from '../../hooks';
/*type OfferProps = {
  cardCount: number;
}*/

function Offer(/*{cardCount}: OfferProps*/): JSX.Element {
  const offer = useAppSelector((state) => state.offer);
  const comments = useAppSelector((state) => state.comments);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const nearByOffers = useAppSelector((state) => state.nearByOffers);
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <CitiesLogo/>
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

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {
                offer?.images.map((image) => (
                  <div className="offer__image-wrapper" key={image}>
                    <img className="offer__image" src={image} alt="Photo studio"/>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {
                offer?.isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {
                    offer?.title
                  }
                </h1>
                <button className={offer?.isFavorite ? 'offer__bookmark-button offer__bookmark-button--active button' : 'offer__bookmark-button button'} type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{offer?.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: offer?.rating ? `${offer?.rating * 20}%` : '0%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer?.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offer?.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer?.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer?.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer?.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {
                    offer?.goods.map((good) => (
                      <li className="offer__inside-item" key={good}>
                        {good}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={offer?.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                    {offer?.host.name}
                  </span>
                  {
                    offer?.host.isPro &&
                    <span className="offer__user-status">
                    Pro
                    </span>
                  }
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer?.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                <ListOfReviews reviews={comments.toReversed().slice(0, 10)}/>
                {authorizationStatus && <ReviewForm/>}
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map height={600} city={CITY} points={POINTS.slice(0, 3)}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <ListOfOffers listClassName='near-places__list places__list' className='near-places' offers={nearByOffers.slice(0, 3)} forFavoriteList={false}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
