import {useAppSelector} from '../../hooks/use-app-selector';
import {getAllFilms} from '../../store/films-data/selectors';


function Footer(): JSX.Element {
  const allFilms = useAppSelector(getAllFilms);

  return (
    <footer className="wrapper__footer footer">
      <section className="footer__logo logo logo--smaller">Cinemaddict</section>
      <section className="footer__statistics">
        <p>{allFilms.length} movies inside</p>
      </section>
    </footer>
  );
}

export default Footer;
