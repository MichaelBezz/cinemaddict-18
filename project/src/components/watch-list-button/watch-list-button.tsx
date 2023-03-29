import cn from 'classnames';

import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {putFilm} from '../../store/api-actions';

import {FilmAdapted} from '../../types/film';
import {ButtonType} from '../../constants';


type WatchListButtonProps = {
  film: FilmAdapted;
  type: ButtonType;
};

function WatchListButton({film, type}: WatchListButtonProps): JSX.Element {
  const dispatch = useAppDispatch();

  const isCardType = type === ButtonType.Card;
  const isCardTypeActive = isCardType && film.userDetails.watchlist;
  const isDetailsType = type === ButtonType.Details;
  const isDetailsTypeActive = isDetailsType && film.userDetails.watchlist;

  const handleButtonClick = () => {
    dispatch(putFilm({
      ...film,
      userDetails: {
        ...film.userDetails,
        watchlist: !film.userDetails.watchlist
      }
    }));
  };

  return (
    <button
      className={cn({
        'film-card__controls-item film-card__controls-item--add-to-watchlist': isCardType,
        'film-card__controls-item--active': isCardTypeActive,
        'film-details__control-button film-details__control-button--watchlist': isDetailsType,
        'film-details__control-button--active': isDetailsTypeActive
      })}
      id="watchlist"
      name="watchlist"
      type="button"
      onClick={handleButtonClick}
    >
      Add to watchlist
    </button>
  );
}

export default WatchListButton;
