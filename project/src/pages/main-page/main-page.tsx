import Navigation from '../../components/navigation/navigation';
import Sort from '../../components/sort/sort';
import FilmList from '../../components/film-list/film-list';
import ShowMoreButton from '../../components/show-more-button/show-more-button';


function MainPage(): JSX.Element {
  return (
    <>
      <Navigation />
      <Sort />

      <section className="films">
        <section className="films-list">
          <h2 className="films-list__title visually-hidden">All movies. Upcoming</h2>

          <FilmList />
          <ShowMoreButton />
        </section>

        <section className="films-list films-list--extra">
          <h2 className="films-list__title">Top rated</h2>

          <FilmList />
        </section>

        <section className="films-list films-list--extra">
          <h2 className="films-list__title">Most commented</h2>

          <FilmList />
        </section>
      </section>
    </>
  );
}

export default MainPage;
