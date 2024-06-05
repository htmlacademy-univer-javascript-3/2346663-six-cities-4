import { Months } from '../../const';
import { ReviewType } from '../../mocks/reviews';

type ReviewProps = {
  review: ReviewType;
}

function Review({review}: ReviewProps): JSX.Element {
  const {user, rating, comment, date} = review;
  const year = date.slice(0, 4);
  const month = Months[Number(date.slice(5, 7))];
  const {name, avatarUrl} = user;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${(rating * 20)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{month} {year}</time>
      </div>
    </li>
  );
}

export default Review;
