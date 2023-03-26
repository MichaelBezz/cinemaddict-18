import {useEffect} from 'react';
import {Link, useSearchParams} from 'react-router-dom';

import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {setFilmId} from '../../store/application-data/application-data';

import WatchListButton from '../watch-list-button/watch-list-button';
import WatchStatusButton from '../watch-status-button/watch-status-button';
import FavoriteStatusButton from '../favorite-status-button/favorite-status-button';

import {FilmAdapted} from '../../types/film';
import {formatDuration, formatReleaseData, formatListProperties, formatDescription} from '../../utils/utils';
import {TypeButton} from '../../constants';


type FilmCardProps = {
  film: FilmAdapted;
};

function FilmCard({film}: FilmCardProps): JSX.Element {
  const {id, filmInfo: {title, totalRating, poster, release, runtime, genre, description}} = film;

  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const searchFilm = searchParams.get('film');

  useEffect(() => {
    if (searchFilm && searchFilm === id) {
      dispatch(setFilmId(searchFilm));
    }
  }, [dispatch, id, searchFilm]);

  const handleCardLinkClick = () => {
    dispatch(setFilmId(id ?? searchFilm));
  };

  return (
    <article className="film-card">
      <Link className="film-card__link" to={`?film=${id}`} onClick={handleCardLinkClick}>
        <h3 className="film-card__title">{title}</h3>
        <p className="film-card__rating">{totalRating}</p>
        <p className="film-card__info">
          <span className="film-card__year">{formatReleaseData(release.date)}</span>
          <span className="film-card__duration">{formatDuration(runtime)}</span>
          <span className="film-card__genre">{formatListProperties(genre)}</span>
        </p>
        <img className="film-card__poster" src={poster} width="232" height="342" alt={title} />
        <p className="film-card__description">{formatDescription(description)}</p>
        <span className="film-card__comments">5 comments</span>
      </Link>
      <div className="film-card__controls">
        <WatchListButton filmId={id} type={TypeButton.Card} />
        <WatchStatusButton filmId={id} type={TypeButton.Card} />
        <FavoriteStatusButton filmId={id} type={TypeButton.Card} />
      </div>
    </article>
  );
}

export default FilmCard;
