import View from './view';

export default class FilmSortView extends View {
  /**
   * @override
   */
  createAdjacentHtml() {
    return `
      <ul class="sort">
        <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
        <li><a href="#" class="sort__button">Sort by date</a></li>
        <li><a href="#" class="sort__button">Sort by rating</a></li>
      </ul>
    `;
  }
}

customElements.define('film-sort', FilmSortView);
