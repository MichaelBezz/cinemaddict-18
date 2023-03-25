import cn from 'classnames';
import {Outlet} from 'react-router-dom';

import {useAppSelector} from '../../hooks/use-app-selector';
import {getIsFilmDisplayed} from '../../store/application-data/selectors';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';


function Layout(): JSX.Element {
  const isDetailsDisplayed = useAppSelector(getIsFilmDisplayed);

  return (
    <div className={cn('wrapper', {'hide-overflow': isDetailsDisplayed})}>
      <Header />

      <main className="wrapper__main main">
        <Outlet/>
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
