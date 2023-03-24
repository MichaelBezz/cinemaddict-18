import {Routes, Route} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';

import MainPage from '../../pages/main-page/main-page';

import {AppRoute} from '../../constants';


function App(): JSX.Element {
  return (
    <HelmetProvider>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
