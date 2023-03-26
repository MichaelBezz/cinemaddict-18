import cn from 'classnames';
import {FilmId} from '../../types/film';
import {TypeButton} from '../../constants';


type WatchStatusButtonProps = {
  filmId: FilmId;
  type: TypeButton;
};

function WatchStatusButton({filmId, type}: WatchStatusButtonProps): JSX.Element {
  const isCardType = type === TypeButton.Card;
  const isDetailsType = type === TypeButton.Details;

  return (
    <button
      className={cn({
        'film-card__controls-item film-card__controls-item--mark-as-watched': isCardType,
        'film-card__controls-item--active': isCardType && false,
        'film-details__control-button film-details__control-button--watched': isDetailsType,
        'film-details__control-button--active': isDetailsType && false
      })}
      id="watched"
      name="watched"
      type="button"
    >
      Mark as watched
    </button>
  );
}

export default WatchStatusButton;
