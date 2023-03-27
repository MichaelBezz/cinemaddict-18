import cn from 'classnames';
import {Link} from 'react-router-dom';

import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useAppSelector} from '../../hooks/use-app-selector';
import {setFilter} from '../../store/application-data/application-data';
import {getFilter} from '../../store/application-data/selectors';
import {getFilmsByFilter} from '../../store/films-data/selectors';

import {FilterType} from '../../constants';


function Navigation(): JSX.Element {
  const dispatch = useAppDispatch();

  const watchList = useAppSelector((state) => getFilmsByFilter(state, FilterType.WatchList)).length;
  const alreadyWatched = useAppSelector((state) => getFilmsByFilter(state, FilterType.AlreadyWatched)).length;
  const favorite = useAppSelector((state) => getFilmsByFilter(state, FilterType.Favorite)).length;
  const currentFilter = useAppSelector(getFilter);

  return (
    <nav className="main-navigation">
      <Link
        className={cn('main-navigation__item', {'main-navigation__item--active': currentFilter === FilterType.All})}
        to={`?filter=${FilterType.All}`}
        onClick={() => dispatch(setFilter(FilterType.All))}
      >
        All movies
      </Link>

      <Link
        className={cn('main-navigation__item', {'main-navigation__item--active': currentFilter === FilterType.WatchList})}
        to={`?filter=${FilterType.WatchList}`}
        onClick={() => dispatch(setFilter(FilterType.WatchList))}
      >
        Watchlist {' '}
        <span className="main-navigation__item-count">{watchList}</span>
      </Link>

      <Link
        className={cn('main-navigation__item', {'main-navigation__item--active': currentFilter === FilterType.AlreadyWatched})}
        to={`?filter=${FilterType.AlreadyWatched}`}
        onClick={() => dispatch(setFilter(FilterType.AlreadyWatched))}
      >
        History {' '}
        <span className="main-navigation__item-count">{alreadyWatched}</span>
      </Link>

      <Link
        className={cn('main-navigation__item', {'main-navigation__item--active': currentFilter === FilterType.Favorite})}
        to={`?filter=${FilterType.Favorite}`}
        onClick={() => dispatch(setFilter(FilterType.Favorite))}
      >
        Favorites {' '}
        <span className="main-navigation__item-count">{favorite}</span>
      </Link>
    </nav>
  );
}

export default Navigation;
