function Navigation(): JSX.Element {
  return (
    <nav className="main-navigation">
      <a href="#all" className="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" className="main-navigation__item">Watchlist <span className="main-navigation__item-count">13</span></a>
      <a href="#history" className="main-navigation__item">History <span className="main-navigation__item-count">4</span></a>
      <a href="#favorites" className="main-navigation__item">Favorites <span className="main-navigation__item-count">8</span></a>
    </nav>
  );
}

export default Navigation;
