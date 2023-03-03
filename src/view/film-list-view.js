import View from './view';

export default class FilmListView extends View {
  /**
   * @override
   */
  createAdjacentHtml() {
    return `
      <section class="films-list">
        <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>

        <div class="films-list__container">
          <!-- <film-card> -->
        </div>

        <!-- <show-more-button> -->
      </section>
    `;
  }
}

customElements.define('film-list', FilmListView);
