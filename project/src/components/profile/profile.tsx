import {useAppSelector} from '../../hooks/use-app-selector';
import {getFilmsByFilter} from '../../store/films-data/selectors';
import {getUserRating} from '../../utils/utils';
import {FilterType} from '../../constants';


function Profile(): JSX.Element | null {
  const countFilms = useAppSelector((state) => getFilmsByFilter(state, FilterType.AlreadyWatched)).length;

  return (countFilms ? (
    <section className="header__profile profile">
      <p className="profile__rating">
        {getUserRating(countFilms)}
      </p>
      <img className="profile__avatar" src="./images/bitmap@2x.png" width="35" height="35" alt="Avatar" />
    </section>
  ) : null);
}

export default Profile;
