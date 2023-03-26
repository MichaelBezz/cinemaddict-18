import cn from 'classnames';
import {FilmId} from '../../types/film';
import {TypeButton} from '../../constants';


type WatchListButtonProps = {
  filmId: FilmId;
  type: TypeButton;
};

function WatchListButton({filmId, type}: WatchListButtonProps): JSX.Element {
  const isCardType = type === TypeButton.Card;
  const isDetailsType = type === TypeButton.Details;

  return (
    <button
      className={cn({
        'film-card__controls-item film-card__controls-item--add-to-watchlist': isCardType,
        'film-card__controls-item--active': isCardType && false,
        'film-details__control-button film-details__control-button--watchlist': isDetailsType,
        'film-details__control-button--active': isDetailsType && false
      })}
      id="watchlist"
      name="watchlist"
      type="button"
    >
      Add to watchlist
    </button>
  );
}

export default WatchListButton;
