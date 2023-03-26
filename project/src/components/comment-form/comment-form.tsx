function CommentForm(): JSX.Element {
  return (
    <form className="film-details__new-comment" action="" method="get">
      <div className="film-details__add-emoji-label"></div>

      <label className="film-details__comment-label">
        <textarea className="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
      </label>

      <div className="film-details__emoji-list">
        <input className="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile" />
        <label className="film-details__emoji-label" htmlFor="emoji-smile">
          <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji" />
        </label>

        <input className="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping" />
        <label className="film-details__emoji-label" htmlFor="emoji-sleeping">
          <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji" />
        </label>

        <input className="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke" />
        <label className="film-details__emoji-label" htmlFor="emoji-puke">
          <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji" />
        </label>

        <input className="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry" />
        <label className="film-details__emoji-label" htmlFor="emoji-angry">
          <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji" />
        </label>
      </div>
    </form>
  );
}

export default CommentForm;
