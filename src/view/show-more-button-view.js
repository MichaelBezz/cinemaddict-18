import View from './view';

export default class ShowMoreButtonView extends View {
  /**
   * @override
   */
  createAdjacentHtml() {
    return `
      <button class="films-list__show-more">Show more</button>
    `;
  }
}

customElements.define('show-more-button', ShowMoreButtonView);
