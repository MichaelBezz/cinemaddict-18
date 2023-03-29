import cn from 'classnames';
import {useEffect, useState} from 'react';

import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useAppSelector} from '../../hooks/use-app-selector';
import {fetchFilms} from '../../store/api-actions';
import {getSelectedFilms, getFilmsBySort} from '../../store/films-data/selectors';
import {getIsFilmDisplayed, getFilter} from '../../store/application-data/selectors';

import Navigation from '../../components/navigation/navigation';
import Sort from '../../components/sort/sort';
import FilmList from '../../components/film-list/film-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';
import FilmDetails from '../../components/film-details/film-details';

import {getFilmListTitle} from '../../utils/utils';
import {SortType} from '../../constants';


const FILMS_PER_STEP = 5;
const MAX_CARD = 2;

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const [filmCount, setFilmCount] = useState<number>(0);

  const films = useAppSelector(getSelectedFilms);
  const isDetailsDisplayed = useAppSelector(getIsFilmDisplayed);
  const topRatingFilms = useAppSelector((state) => getFilmsBySort(state, {sort: SortType.Rating, count: MAX_CARD}));
  const mostCommentedFilms = useAppSelector((state) => getFilmsBySort(state, {sort: SortType.Comment, count: MAX_CARD}));

  const currentFilter = useAppSelector(getFilter);
  const numberOfFilms = films.length;

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      setFilmCount(Math.min(FILMS_PER_STEP, numberOfFilms));
    }

    return () => {
      isMounted = false;
    };
  }, [numberOfFilms]);

  const handleShowMoreButtonClick = () => {
    setFilmCount((prevFilmsDisplayed) =>
      Math.min(prevFilmsDisplayed + FILMS_PER_STEP, numberOfFilms)
    );
  };

  return (
    <>
      <Navigation />

      {numberOfFilms ? <Sort /> : null}

      <section className="films">
        <section className="films-list">
          <h2 className={cn('films-list__title', {'visually-hidden': numberOfFilms})}>
            {getFilmListTitle(currentFilter, numberOfFilms)}
          </h2>

          <FilmList films={films.slice(0, filmCount)} />

          {numberOfFilms > filmCount && (
            <ShowMoreButton onClick={handleShowMoreButtonClick} />
          )}
        </section>

        <section className="films-list films-list--extra">
          <h2 className="films-list__title">Top rated</h2>

          <FilmList films={topRatingFilms} />
        </section>

        <section className="films-list films-list--extra">
          <h2 className="films-list__title">Most commented</h2>

          <FilmList films={mostCommentedFilms} />
        </section>
      </section>

      {isDetailsDisplayed && (
        <FilmDetails />
      )}
    </>
  );
}

export default MainPage;
