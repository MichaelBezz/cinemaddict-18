import {Link} from 'react-router-dom';

import {FilmAdapted} from '../../types/film-adapted';
import {formatDuration, formatReleaseData, formatGenre, formatDescription} from '../../utils/utils';
import {AppRoute} from '../../constants';


type FilmCardProps = {
  film: FilmAdapted;
};

function FilmCard({film}: FilmCardProps): JSX.Element {
  const {filmInfo: {title, totalRating, poster, release, runtime, genre, description}} = film;

  return (
    <article className="film-card">
      <Link className="film-card__link" to={AppRoute.NotFound}>
        <h3 className="film-card__title">{title}</h3>
        <p className="film-card__rating">{totalRating}</p>
        <p className="film-card__info">
          <span className="film-card__year">{formatReleaseData(release.date)}</span>
          <span className="film-card__duration">{formatDuration(runtime)}</span>
          <span className="film-card__genre">{formatGenre(genre)}</span>
        </p>
        <img className="film-card__poster" src={poster} width="232" height="342" alt={title} />
        <p className="film-card__description">{formatDescription(description)}</p>
        <span className="film-card__comments">5 comments</span>
      </Link>
      <div className="film-card__controls">
        <button className="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
        <button className="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
        <button className="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
      </div>
    </article>
  );
}

export default FilmCard;
