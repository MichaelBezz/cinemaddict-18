import cn from 'classnames';

import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {putFilm} from '../../store/api-actions';

import {FilmAdapted} from '../../types/film';
import {ButtonType} from '../../constants';


type FavoriteStatusButtonProps = {
  film: FilmAdapted;
  type: ButtonType;
};

function FavoriteStatusButton({film, type}: FavoriteStatusButtonProps): JSX.Element {
  const dispatch = useAppDispatch();

  const isCardType = type === ButtonType.Card;
  const isCardTypeActive = isCardType && film.userDetails.favorite;
  const isDetailsType = type === ButtonType.Details;
  const isDetailsTypeActive = isDetailsType && film.userDetails.favorite;

  const handleButtonClick = () => {
    dispatch(putFilm({
      ...film,
      userDetails: {
        ...film.userDetails,
        favorite: !film.userDetails.favorite
      }
    }));
  };

  return (
    <button
      className={cn({
        'film-card__controls-item film-card__controls-item--favorite': isCardType,
        'film-card__controls-item--active': isCardTypeActive,
        'film-details__control-button film-details__control-button--favorite': isDetailsType,
        'film-details__control-button--active': isDetailsTypeActive
      })}
      id="favorite"
      name="favorite"
      type="button"
      onClick={handleButtonClick}
    >
      Mark as favorites
    </button>
  );
}

export default FavoriteStatusButton;
