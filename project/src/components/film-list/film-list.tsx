import FilmCard from '../film-card/film-card';

import {FilmsAdapted} from '../../types/film';


type FilmListProps = {
  films: FilmsAdapted;
};

function FilmList({films}: FilmListProps): JSX.Element {
  return (
    <div className="films-list__container">
      {films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
    </div>
  );
}

export default FilmList;
