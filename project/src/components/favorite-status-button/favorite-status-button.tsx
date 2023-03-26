import cn from 'classnames';
import {FilmId} from '../../types/film';
import {TypeButton} from '../../constants';


type FavoriteStatusButtonProps = {
  filmId: FilmId;
  type: TypeButton;
};

function FavoriteStatusButton({filmId, type}: FavoriteStatusButtonProps): JSX.Element {
  const isCardType = type === TypeButton.Card;
  const isDetailsType = type === TypeButton.Details;

  return (
    <button
      className={cn({
        'film-card__controls-item film-card__controls-item--favorite': isCardType,
        'film-card__controls-item--active': isCardType && false,
        'film-details__control-button film-details__control-button--favorite': isDetailsType,
        'film-details__control-button--active': isDetailsType && false
      })}
      id="favorite"
      name="favorite"
      type="button"
    >
      Mark as favorites
    </button>
  );
}

export default FavoriteStatusButton;
