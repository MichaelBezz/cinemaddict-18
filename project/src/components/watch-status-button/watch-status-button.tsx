import cn from 'classnames';

import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {putFilm} from '../../store/api-actions';

import {FilmAdapted} from '../../types/film';
import {ButtonType} from '../../constants';


type WatchStatusButtonProps = {
  film: FilmAdapted;
  type: ButtonType;
};

function WatchStatusButton({film, type}: WatchStatusButtonProps): JSX.Element {
  const dispatch = useAppDispatch();

  const isCardType = type === ButtonType.Card;
  const isCardTypeActive = isCardType && film.userDetails.alreadyWatched;
  const isDetailsType = type === ButtonType.Details;
  const isDetailsTypeActive = isDetailsType && film.userDetails.alreadyWatched;

  const handleButtonClick = () => {
    dispatch(putFilm({
      ...film,
      userDetails: {
        ...film.userDetails,
        alreadyWatched: !film.userDetails.alreadyWatched
      }
    }));
  };

  return (
    <button
      className={cn({
        'film-card__controls-item film-card__controls-item--mark-as-watched': isCardType,
        'film-card__controls-item--active': isCardTypeActive,
        'film-details__control-button film-details__control-button--watched': isDetailsType,
        'film-details__control-button--active': isDetailsTypeActive
      })}
      id="watched"
      name="watched"
      type="button"
      onClick={handleButtonClick}
    >
      Mark as watched
    </button>
  );
}

export default WatchStatusButton;
