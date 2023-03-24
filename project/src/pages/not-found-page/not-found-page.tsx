import {Link} from 'react-router-dom';
import {AppRoute} from '../../constants';


function NotFoundPage(): JSX.Element {
  return (
    <>
      <h1>404. Page not found</h1>

      <Link className="link" to={AppRoute.Main}>
        Go back to main page.
      </Link>
    </>
  );
}

export default NotFoundPage;
