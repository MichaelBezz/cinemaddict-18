function MainPage(): JSX.Element {
  return (
    <>
      <header className="header">
        <h1 className="header__logo logo">Cinemaddict</h1>

        <section className="header__profile profile">
          <p className="profile__rating">Movie Buff</p>
          <img className="profile__avatar" src="./images/bitmap@2x.png" width="35" height="35" alt="Avatar" />
        </section>
      </header>

      <main className="main">
        <nav className="main-navigation">
          <a href="#all" className="main-navigation__item main-navigation__item--active">All movies</a>
          <a href="#watchlist" className="main-navigation__item">Watchlist <span className="main-navigation__item-count">13</span></a>
          <a href="#history" className="main-navigation__item">History <span className="main-navigation__item-count">4</span></a>
          <a href="#favorites" className="main-navigation__item">Favorites <span className="main-navigation__item-count">8</span></a>
        </nav>

        <ul className="sort">
          <li><a href="#todo" className="sort__button sort__button--active">Sort by default</a></li>
          <li><a href="#todo" className="sort__button">Sort by date</a></li>
          <li><a href="#todo" className="sort__button">Sort by rating</a></li>
        </ul>

        <section className="films">
          <section className="films-list">
            <h2 className="films-list__title visually-hidden">All movies. Upcoming</h2>

            <div className="films-list__container">
              <article className="film-card">
                <a className="film-card__link">
                  <h3 className="film-card__title">The Dance of Life</h3>
                  <p className="film-card__rating">8.3</p>
                  <p className="film-card__info">
                    <span className="film-card__year">1929</span>
                    <span className="film-card__duration">1h 55m</span>
                    <span className="film-card__genre">Musical</span>
                  </p>
                  <img src="./images/posters/the-dance-of-life.jpg" alt="" className="film-card__poster" />
                  <p className="film-card__description">Burlesque comic Ralph &laquo;Skid&raquo; Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up&nbsp;together on&nbsp;a&nbsp;cold, rainy night at&nbsp;a&nbsp;tr...</p>
                  <span className="film-card__comments">5 comments</span>
                </a>
                <div className="film-card__controls">
                  <button className="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
                  <button className="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
                  <button className="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
                </div>
              </article>

              <article className="film-card">
                <a className="film-card__link">
                  <h3 className="film-card__title">Sagebrush Trail</h3>
                  <p className="film-card__rating">3.2</p>
                  <p className="film-card__info">
                    <span className="film-card__year">1933</span>
                    <span className="film-card__duration">54m</span>
                    <span className="film-card__genre">Western</span>
                  </p>
                  <img src="./images/posters/sagebrush-trail.jpg" alt="" className="film-card__poster" />
                  <p className="film-card__description">Sentenced for a&nbsp;murder he&nbsp;did not commit, John Brant escapes from prison determined to&nbsp;find the real killer. By&nbsp;chance Brant&rsquo;s narrow escap...</p>
                  <span className="film-card__comments">89 comments</span>
                </a>
                <div className="film-card__controls">
                  <button className="film-card__controls-item film-card__controls-item--add-to-watchlist film-card__controls-item--active" type="button">Add to watchlist</button>
                  <button className="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
                  <button className="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
                </div>
              </article>

              <article className="film-card">
                <a className="film-card__link">
                  <h3 className="film-card__title">The Man with the Golden Arm</h3>
                  <p className="film-card__rating">9.0</p>
                  <p className="film-card__info">
                    <span className="film-card__year">1955</span>
                    <span className="film-card__duration">1h 59m</span>
                    <span className="film-card__genre">Drama</span>
                  </p>
                  <img src="./images/posters/the-man-with-the-golden-arm.jpg" alt="" className="film-card__poster" />
                  <p className="film-card__description">Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…</p>
                  <span className="film-card__comments">18 comments</span>
                </a>
                <div className="film-card__controls">
                  <button className="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
                  <button className="film-card__controls-item film-card__controls-item--mark-as-watched film-card__controls-item--active" type="button">Mark as watched</button>
                  <button className="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
                </div>
              </article>

              <article className="film-card">
                <a className="film-card__link">
                  <h3 className="film-card__title">Santa Claus Conquers the Martians</h3>
                  <p className="film-card__rating">2.3</p>
                  <p className="film-card__info">
                    <span className="film-card__year">1964</span>
                    <span className="film-card__duration">1h 21m</span>
                    <span className="film-card__genre">Comedy</span>
                  </p>
                  <img src="./images/posters/santa-claus-conquers-the-martians.jpg" alt="" className="film-card__poster" />
                  <p className="film-card__description">The Martians Momar (&laquo;Mom Martian&raquo;) and Kimar (&laquo;King Martian&raquo;) are worried that their children Girmar (&laquo;Girl Martian&raquo;) and Bomar (&quot;Boy Marti...</p>
                  <span className="film-card__comments">465 comments</span>
                </a>
                <div className="film-card__controls">
                  <button className="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
                  <button className="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
                  <button className="film-card__controls-item film-card__controls-item--favorite film-card__controls-item--active" type="button">Mark as favorite</button>
                </div>
              </article>

              <article className="film-card">
                <a className="film-card__link">
                  <h3 className="film-card__title">Popeye the Sailor Meets Sindbad the Sailor</h3>
                  <p className="film-card__rating">6.3</p>
                  <p className="film-card__info">
                    <span className="film-card__year">1936</span>
                    <span className="film-card__duration">16m</span>
                    <span className="film-card__genre">Cartoon</span>
                  </p>
                  <img src="./images/posters/popeye-meets-sinbad.png" alt="" className="film-card__poster" />
                  <p className="film-card__description">In&nbsp;this short, Sindbad the Sailor (presumably Bluto playing a&nbsp;&laquo;role&raquo;) proclaims himself, in&nbsp;song, to&nbsp;be&nbsp;the greatest sailor, adventurer and...</p>
                  <span className="film-card__comments">0 comments</span>
                </a>
                <div className="film-card__controls">
                  <button className="film-card__controls-item film-card__controls-item--add-to-watchlist film-card__controls-item--active" type="button">Add to watchlist</button>
                  <button className="film-card__controls-item film-card__controls-item--mark-as-watched film-card__controls-item--active" type="button">Mark as watched</button>
                  <button className="film-card__controls-item film-card__controls-item--favorite film-card__controls-item--active" type="button">Mark as favorite</button>
                </div>
              </article>
            </div>

            <button className="films-list__show-more">Show more</button>
          </section>

          <section className="films-list films-list--extra">
            <h2 className="films-list__title">Top rated</h2>

            <div className="films-list__container">
              <article className="film-card">
                <a className="film-card__link">
                  <h3 className="film-card__title">The Man with the Golden Arm</h3>
                  <p className="film-card__rating">9.0</p>
                  <p className="film-card__info">
                    <span className="film-card__year">1955</span>
                    <span className="film-card__duration">1h 59m</span>
                    <span className="film-card__genre">Drama</span>
                  </p>
                  <img src="./images/posters/the-man-with-the-golden-arm.jpg" alt="" className="film-card__poster" />
                  <p className="film-card__description">Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…</p>
                  <span className="film-card__comments">18 comments</span>
                </a>
                <div className="film-card__controls">
                  <button className="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
                  <button className="film-card__controls-item film-card__controls-item--mark-as-watched film-card__controls-item--active" type="button">Mark as watched</button>
                  <button className="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
                </div>
              </article>

              <article className="film-card">
                <a className="film-card__link">
                  <h3 className="film-card__title">The Great Flamarion</h3>
                  <p className="film-card__rating">8.9</p>
                  <p className="film-card__info">
                    <span className="film-card__year">1945</span>
                    <span className="film-card__duration">1h 18m</span>
                    <span className="film-card__genre">Mystery</span>
                  </p>
                  <img src="./images/posters/the-great-flamarion.jpg" alt="" className="film-card__poster" />
                  <p className="film-card__description">The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Grea…</p>
                  <span className="film-card__comments">12 comments</span>
                </a>
                <div className="film-card__controls">
                  <button className="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
                  <button className="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
                  <button className="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
                </div>
              </article>
            </div>
          </section>

          <section className="films-list films-list--extra">
            <h2 className="films-list__title">Most commented</h2>

            <div className="films-list__container">
              <article className="film-card">
                <a className="film-card__link">
                  <h3 className="film-card__title">Santa Claus Conquers the Martians</h3>
                  <p className="film-card__rating">2.3</p>
                  <p className="film-card__info">
                    <span className="film-card__year">1964</span>
                    <span className="film-card__duration">1h 21m</span>
                    <span className="film-card__genre">Comedy</span>
                  </p>
                  <img src="./images/posters/santa-claus-conquers-the-martians.jpg" alt="" className="film-card__poster" />
                  <p className="film-card__description">The Martians Momar (&laquo;Mom Martian&raquo;) and Kimar (&laquo;King Martian&raquo;) are worried that their children Girmar (&laquo;Girl Martian&raquo;) and Bomar (&quot;Boy Marti...</p>
                  <span className="film-card__comments">465 comments</span>
                </a>
                <div className="film-card__controls">
                  <button className="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
                  <button className="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
                  <button className="film-card__controls-item film-card__controls-item--favorite film-card__controls-item--active" type="button">Mark as favorite</button>
                </div>
              </article>

              <article className="film-card">
                <a className="film-card__link">
                  <h3 className="film-card__title">Made for Each Other</h3>
                  <p className="film-card__rating">5.8</p>
                  <p className="film-card__info">
                    <span className="film-card__year">1939</span>
                    <span className="film-card__duration">1h 32m</span>
                    <span className="film-card__genre">Comedy</span>
                  </p>
                  <img src="./images/posters/made-for-each-other.png" alt="" className="film-card__poster" />
                  <p className="film-card__description">John Mason (James Stewart) is a young, somewhat timid attorney in New York City. He has been doing his job well, and he has a chance of bei…</p>
                  <span className="film-card__comments">56 comments</span>
                </a>
                <div className="film-card__controls">
                  <button className="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
                  <button className="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
                  <button className="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
                </div>
              </article>
            </div>
          </section>
        </section>
      </main>


      <footer className="footer">
        <section className="footer__logo logo logo--smaller">Cinemaddict</section>
        <section className="footer__statistics">
          <p>130 291 movies inside</p>
        </section>
      </footer>
    </>
  );
}

export default MainPage;
