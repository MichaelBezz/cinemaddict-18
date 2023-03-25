import {useEffect} from 'react';

import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useAppSelector} from '../../hooks/use-app-selector';
import {fetchFilms} from '../../store/api-actions';
import {getFilms} from '../../store/films-data/selectors';

import Navigation from '../../components/navigation/navigation';
import Sort from '../../components/sort/sort';
import FilmList from '../../components/film-list/film-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';


function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  const films = useAppSelector(getFilms);

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Sort />

      <section className="films">
        <section className="films-list">
          <h2 className="films-list__title visually-hidden">All movies. Upcoming</h2>

          <FilmList films={films} />
          <ShowMoreButton />
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
    </>
  );
}

export default MainPage;
