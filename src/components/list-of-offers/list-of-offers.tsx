import Card from '../card/card';
import { OfferType } from '../../mocks/offers';

type ListOfOffersProps = {
  listClassName: string;
  className: string;
  offers: OfferType[];
  forFavoriteList: boolean;
  onListItemHover?: (id: string) => void;
}

function ListOfOffers({listClassName, className, offers, forFavoriteList, onListItemHover}: ListOfOffersProps): JSX.Element {
  const handleListItemHover = (id: string) => {
    if (onListItemHover) {
      onListItemHover(id);
    }
  };
  return (
    <div className={`${listClassName}`}>
      {
        offers.map((offer, id) => <Card className={className} onMouseEnter={handleListItemHover} forFavoriteList={forFavoriteList} offer={offers[id]} key={offer.id}/>)
      }
    </div>
  );
}

export default ListOfOffers;
