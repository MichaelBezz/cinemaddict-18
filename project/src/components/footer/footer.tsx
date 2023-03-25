import {useAppSelector} from '../../hooks/use-app-selector';
import {getFilms} from '../../store/films-data/selectors';


function Footer(): JSX.Element {
  const allFilms = useAppSelector(getFilms);

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
