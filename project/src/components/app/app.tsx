import {useEffect} from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';

import Layout from '../layout/layout';
import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

import {AppRoute} from '../../constants';


function App(): JSX.Element {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <HelmetProvider>
      <Routes>
        <Route path={AppRoute.Main} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
