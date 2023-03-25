import {useEffect, useState} from 'react';

import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useAppSelector} from '../../hooks/use-app-selector';
import {fetchFilms} from '../../store/api-actions';
import {getAllFilms} from '../../store/films-data/selectors';
import {getIsFilmDisplayed} from '../../store/application-data/selectors';

import Navigation from '../../components/navigation/navigation';
import Sort from '../../components/sort/sort';
import FilmList from '../../components/film-list/film-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import FilmDetails from '../../components/film-details/film-details';


const FILMS_PER_STEP = 5;

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [filmCount, setFilmCount] = useState<number>(0);

  const films = useAppSelector(getAllFilms);
  const isDetailsDisplayed = useAppSelector(getIsFilmDisplayed);

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      setFilmCount(Math.min(FILMS_PER_STEP, films.length));
    }

    return () => {
      isMounted = false;
    };
  }, [films]);

  const handleShowMoreButtonClick = () => {
    setFilmCount((prevFilmsDisplayed) =>
      Math.min(prevFilmsDisplayed + FILMS_PER_STEP, films.length)
    );
  };

  return (
    <>
      <Navigation />
      <Sort />

      <section className="films">
        <section className="films-list">
          <h2 className="films-list__title visually-hidden">All movies. Upcoming</h2>

          <FilmList films={films.slice(0, filmCount)} />

          {films.length > filmCount && (
            <ShowMoreButton onClick={handleShowMoreButtonClick} />
          )}
        </section>

        <section className="films-list films-list--extra">
          <h2 className="films-list__title">Top rated</h2>

          {/* <FilmList films={films} /> */}
        </section>

        <section className="films-list films-list--extra">
          <h2 className="films-list__title">Most commented</h2>

          {/* <FilmList films={films} /> */}
        </section>
      </section>

      {isDetailsDisplayed && (
        <FilmDetails />
      )}
    </>
  );
}

export default MainPage;
