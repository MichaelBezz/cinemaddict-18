import {useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';

import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useAppSelector} from '../../hooks/use-app-selector';
import {setFilmId} from '../../store/application-data/application-data';
import {getFilmById} from '../../store/films-data/selectors';

import WatchListButton from '../watch-list-button/watch-list-button';
import WatchStatusButton from '../watch-status-button/watch-status-button';
import FavoriteStatusButton from '../favorite-status-button/favorite-status-button';

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

  const {id, filmInfo} = film;

  return (
    <section className="film-details">
      <div className="film-details__inner">
        <div className="film-details__top-container">
          <div className="film-details__close">
            <button className="film-details__close-btn" type="button" onClick={handleCloseButtonClick}>close</button>
          </div>
          <div className="film-details__info-wrap">
            <div className="film-details__poster">
              <img className="film-details__poster-img" src={filmInfo.poster} width="338" height="500" alt={filmInfo.title} />

              <p className="film-details__age">{filmInfo.ageRating}+</p>
            </div>

            <div className="film-details__info">
              <div className="film-details__info-head">
                <div className="film-details__title-wrap">
                  <h3 className="film-details__title">{filmInfo.title}</h3>
                  <p className="film-details__title-original">Original: {filmInfo.alternativeTitle}</p>
                </div>

                <div className="film-details__rating">
                  <p className="film-details__total-rating">{filmInfo.totalRating}</p>
                </div>
              </div>

              <table className="film-details__table">
                <tbody>
                  <tr className="film-details__row">
                    <td className="film-details__term">Director</td>
                    <td className="film-details__cell">{filmInfo.director}</td>
                  </tr>
                  <tr className="film-details__row">
                    <td className="film-details__term">Writers</td>
                    <td className="film-details__cell">{formatListProperties(filmInfo.writers)}</td>
                  </tr>
                  <tr className="film-details__row">
                    <td className="film-details__term">Actors</td>
                    <td className="film-details__cell">{formatListProperties(filmInfo.actors)}</td>
                  </tr>
                  <tr className="film-details__row">
                    <td className="film-details__term">Release Date</td>
                    <td className="film-details__cell">{formatReleaseFullData(filmInfo.release.date)}</td>
                  </tr>
                  <tr className="film-details__row">
                    <td className="film-details__term">Runtime</td>
                    <td className="film-details__cell">{formatDuration(filmInfo.runtime)}</td>
                  </tr>
                  <tr className="film-details__row">
                    <td className="film-details__term">Country</td>
                    <td className="film-details__cell">{filmInfo.release.releaseCountry}</td>
                  </tr>
                  <tr className="film-details__row">
                    <td className="film-details__term">
                      {filmInfo.genre.length > 1 ? 'Genres' : 'Genre'}
                    </td>
                    <td className="film-details__cell">
                      {filmInfo.genre.map((item) => (
                        <span className="film-details__genre" key={item}>{item}</span>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>

              <p className="film-details__film-description">{filmInfo.description}</p>
            </div>
          </div>

          <section className="film-details__controls">
            <WatchListButton filmId={id} type={TypeButton.Details} />
            <WatchStatusButton filmId={id} type={TypeButton.Details} />
            <FavoriteStatusButton filmId={id} type={TypeButton.Details} />
          </section>
        </div>

        <div className="film-details__bottom-container">
          <section className="film-details__comments-wrap">
            <h3 className="film-details__comments-title">Comments <span className="film-details__comments-count">4</span></h3>

            <ul className="film-details__comments-list">
              <li className="film-details__comment">
                <span className="film-details__comment-emoji">
                  <img src="./images/emoji/smile.png" width="55" height="55" alt="emoji-smile" />
                </span>
                <div>
                  <p className="film-details__comment-text">Interesting setting and a good cast</p>
                  <p className="film-details__comment-info">
                    <span className="film-details__comment-author">Tim Macoveev</span>
                    <span className="film-details__comment-day">2019/12/31 23:59</span>
                    <button className="film-details__comment-delete">Delete</button>
                  </p>
                </div>
              </li>
              <li className="film-details__comment">
                <span className="film-details__comment-emoji">
                  <img src="./images/emoji/sleeping.png" width="55" height="55" alt="emoji-sleeping" />
                </span>
                <div>
                  <p className="film-details__comment-text">Booooooooooring</p>
                  <p className="film-details__comment-info">
                    <span className="film-details__comment-author">John Doe</span>
                    <span className="film-details__comment-day">2 days ago</span>
                    <button className="film-details__comment-delete">Delete</button>
                  </p>
                </div>
              </li>
              <li className="film-details__comment">
                <span className="film-details__comment-emoji">
                  <img src="./images/emoji/puke.png" width="55" height="55" alt="emoji-puke" />
                </span>
                <div>
                  <p className="film-details__comment-text">Very very old. Meh</p>
                  <p className="film-details__comment-info">
                    <span className="film-details__comment-author">John Doe</span>
                    <span className="film-details__comment-day">2 days ago</span>
                    <button className="film-details__comment-delete">Delete</button>
                  </p>
                </div>
              </li>
              <li className="film-details__comment">
                <span className="film-details__comment-emoji">
                  <img src="./images/emoji/angry.png" width="55" height="55" alt="emoji-angry" />
                </span>
                <div>
                  <p className="film-details__comment-text">Almost two hours? Seriously?</p>
                  <p className="film-details__comment-info">
                    <span className="film-details__comment-author">John Doe</span>
                    <span className="film-details__comment-day">Today</span>
                    <button className="film-details__comment-delete">Delete</button>
                  </p>
                </div>
              </li>
            </ul>

            <form className="film-details__new-comment" action="" method="get">
              <div className="film-details__add-emoji-label"></div>

              <label className="film-details__comment-label">
                <textarea className="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
              </label>

              <div className="film-details__emoji-list">
                <input className="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile" />
                <label className="film-details__emoji-label" htmlFor="emoji-smile">
                  <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji" />
                </label>

                <input className="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping" />
                <label className="film-details__emoji-label" htmlFor="emoji-sleeping">
                  <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji" />
                </label>

                <input className="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke" />
                <label className="film-details__emoji-label" htmlFor="emoji-puke">
                  <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji" />
                </label>

                <input className="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry" />
                <label className="film-details__emoji-label" htmlFor="emoji-angry">
                  <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji" />
                </label>
              </div>
            </form>
          </section>
        </div>
      </div>
    </section>
  );
}

export default FilmDetails;
