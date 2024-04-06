import Card from '../card/card';
import { OfferType } from '../../mocks/offers';
//import { useState } from 'react';

type ListOfOffersProps = {
  offers: OfferType[];
  forFavoriteList: boolean;
}

function ListOfOffers({offers, forFavoriteList}: ListOfOffersProps): JSX.Element {
  /*const [state, setMarker] = useState({});*/
  return (
    <div className={forFavoriteList ? 'favorites__places' : 'cities__places-list places__list tabs__content'}>
      {
        offers.map((offer, id) => <Card forFavoriteList={forFavoriteList} offer={offers[id]} key={offer.id}/>)
      }
    </div>
  );
}

export default ListOfOffers;
