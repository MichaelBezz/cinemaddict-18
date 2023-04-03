import {Fragment, useState, ChangeEvent, FormEvent} from 'react';

import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {postComment} from '../../store/api-actions';

import {FilmId} from '../../types/film';
import {LocalComment} from '../../types/comment';
import {EmojiType} from '../../constants';


type CommentFormProps = {
  filmId: FilmId;
};

const emojiTypes = Object.values(EmojiType);

function CommentForm({filmId}: CommentFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<LocalComment>({
    emotion: '',
    comment: ''
  });

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    dispatch(postComment({
      filmId,
      comment: formData
    }));

    setFormData({
      emotion: '',
      comment: ''
    });
  };

  return (
    <form className="film-details__new-comment" action="#" method="post" onSubmit={handleFormSubmit}>
      <div className="film-details__add-emoji-label">
        {formData.emotion && (
          <img src={`./images/emoji/${formData.emotion}.png`} width="55" height="55" alt={`emoji-${formData.emotion}`} />
        )}
      </div>

      <label className="film-details__comment-label">
        <textarea
          className="film-details__comment-input"
          name="comment"
          value={formData.comment}
          onChange={handleFieldChange}
          placeholder="Select reaction below and write comment here"
        >
        </textarea>
      </label>

      <div className="film-details__emoji-list">
        {emojiTypes.map((type) => (
          <Fragment key={type}>
            <input
              className="film-details__emoji-item visually-hidden"
              id={`emoji-${type}`}
              name="emotion"
              type="radio"
              value={type}
              onChange={handleFieldChange}
              checked={type === formData.emotion}
            />

            <label className="film-details__emoji-label" htmlFor={`emoji-${type}`}>
              <img src={`./images/emoji/${type}.png`} width="30" height="30" alt={`emoji-${type}`} />
            </label>
          </Fragment>
        ))}
      </div>

      <button className="film-details__comment-post" type="submit">
        Отправить
      </button>
    </form>
  );
}

export default CommentForm;
