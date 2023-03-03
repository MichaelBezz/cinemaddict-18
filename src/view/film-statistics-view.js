import View from './view';

export default class FilmStatisticsView extends View {
  /**
   * @override
   */
  createAdjacentHtml() {
    return `
      <section class="footer__statistics">
        <p>130 291 movies inside</p>
      </section>
    `;
  }
}

customElements.define('film-statistics', FilmStatisticsView);
