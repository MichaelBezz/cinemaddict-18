import cn from 'classnames';
import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useAppSelector} from '../../hooks/use-app-selector';
import {setSort} from '../../store/application-data/application-data';
import {getSort} from '../../store/application-data/selectors';
import {SortType} from '../../constants';


const sortList = Object.values(SortType);

function Sort(): JSX.Element {
  const dispatch = useAppDispatch();

  const currentSort = useAppSelector(getSort);

  return (
    <ul className="sort">
      {sortList.map((item) => (
        <li key={item}>
          <Link
            className={cn('sort__button', {'sort__button--active': currentSort === item})}
            to={`?sort=${item}`}
            onClick={() => dispatch(setSort(item))}
          >
            {`Sort by ${item}`}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Sort;
