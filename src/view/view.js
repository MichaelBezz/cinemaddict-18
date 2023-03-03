export default class View extends HTMLElement {
  constructor() {
    super();

    this.insertAdjacentHTML(
      this.adjacentHtmlPosition,
      this.createAdjacentHtml()
    );
  }

  /**
   * Позиция дополнительной html-разметки
   * @type {InsertPosition}
   */
  get adjacentHtmlPosition() {
    return 'beforeend';
  }

  /**
   * Создаст дополнительную html-разметку (аргументы передает конструктор)
   */
  createAdjacentHtml() {
    return '';
  }
}
