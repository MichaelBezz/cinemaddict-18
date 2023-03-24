import FilmCard from '../film-card/film-card';


function FilmList(): JSX.Element {
  return (
    <div className="films-list__container">
      <FilmCard />
    </div>
  );
}

export default FilmList;
