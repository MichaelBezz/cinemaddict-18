import {Outlet} from 'react-router-dom';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';


function Layout(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />

      <main className="wrapper__main main">
        <Outlet/>
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
