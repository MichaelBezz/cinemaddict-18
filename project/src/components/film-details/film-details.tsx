import {useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';

import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useAppSelector} from '../../hooks/use-app-selector';
import {setFilmId} from '../../store/application-data/application-data';
import {getFilmById} from '../../store/films-data/selectors';

import WatchListButton from '../watch-list-button/watch-list-button';
import WatchStatusButton from '../watch-status-button/watch-status-button';
import FavoriteStatusButton from '../favorite-status-button/favorite-status-button';
import CommentList from '../comment-list/comment-list';

import {FilmAdapted} from '../../types/film';
import {formatDuration, formatReleaseFullData, formatListProperties} from '../../utils/utils';
import {TypeButton} from '../../constants';


function FilmDetails(): JSX.Element {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFilm = searchParams.get('film');

  const film = useAppSelector((state) => getFilmById(state, searchFilm)) as FilmAdapted;

  useEffect(() => {
    let isMounted = true;

    const handleDocumentKeydown = (event: KeyboardEvent) => {
      event.preventDefault();

      if (event.key === 'Escape') {
        dispatch(setFilmId(null));
        setSearchParams('');
      }
    };

    if (isMounted) {
      document.addEventListener('keydown', handleDocumentKeydown);
    }

    return () => {
      document.removeEventListener('keydown', handleDocumentKeydown);
      isMounted = false;
    };
  }, [dispatch, setSearchParams]);

  const handleCloseButtonClick = () => {
    dispatch(setFilmId(null));
    setSearchParams('');
  };

  const {
    id,
    filmInfo: {
      title,
      alternativeTitle,
      totalRating,
      poster,
      ageRating,
      director,
      writers,
      actors,
      release,
      runtime,
      genre,
      description
    }
  } = film;

  return (
    <section className="film-details">
      <div className="film-details__inner">
        <div className="film-details__top-container">
          <div className="film-details__close">
            <button className="film-details__close-btn" type="button" onClick={handleCloseButtonClick}>close</button>
          </div>
          <div className="film-details__info-wrap">
            <div className="film-details__poster">
              <img className="film-details__poster-img" src={poster} width="338" height="500" alt={title} />

              <p className="film-details__age">{ageRating}+</p>
            </div>

            <div className="film-details__info">
              <div className="film-details__info-head">
                <div className="film-details__title-wrap">
                  <h3 className="film-details__title">{title}</h3>
                  <p className="film-details__title-original">Original: {alternativeTitle}</p>
                </div>

                <div className="film-details__rating">
                  <p className="film-details__total-rating">{totalRating}</p>
                </div>
              </div>

              <table className="film-details__table">
                <tbody>
                  <tr className="film-details__row">
                    <td className="film-details__term">Director</td>
                    <td className="film-details__cell">{director}</td>
                  </tr>
                  <tr className="film-details__row">
                    <td className="film-details__term">Writers</td>
                    <td className="film-details__cell">{formatListProperties(writers)}</td>
                  </tr>
                  <tr className="film-details__row">
                    <td className="film-details__term">Actors</td>
                    <td className="film-details__cell">{formatListProperties(actors)}</td>
                  </tr>
                  <tr className="film-details__row">
                    <td className="film-details__term">Release Date</td>
                    <td className="film-details__cell">{formatReleaseFullData(release.date)}</td>
                  </tr>
                  <tr className="film-details__row">
                    <td className="film-details__term">Runtime</td>
                    <td className="film-details__cell">{formatDuration(runtime)}</td>
                  </tr>
                  <tr className="film-details__row">
                    <td className="film-details__term">Country</td>
                    <td className="film-details__cell">{release.releaseCountry}</td>
                  </tr>
                  <tr className="film-details__row">
                    <td className="film-details__term">
                      {genre.length > 1 ? 'Genres' : 'Genre'}
                    </td>
                    <td className="film-details__cell">
                      {genre.map((item) => (
                        <span className="film-details__genre" key={item}>{item}</span>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>

              <p className="film-details__film-description">{description}</p>
            </div>
          </div>

          <section className="film-details__controls">
            <WatchListButton filmId={id} type={TypeButton.Details} />
            <WatchStatusButton filmId={id} type={TypeButton.Details} />
            <FavoriteStatusButton filmId={id} type={TypeButton.Details} />
          </section>
        </div>

        <div className="film-details__bottom-container">
          <CommentList filmId={id} />
        </div>
      </div>
    </section>
  );
}

export default FilmDetails;
