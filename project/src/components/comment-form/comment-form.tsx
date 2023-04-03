import {Fragment, useState, ChangeEvent, FormEvent} from 'react';
import {EmojiType} from '../../constants';


type FormData = {
  emoji: string;
  comment: string;
}

const emojiTypes = Object.values(EmojiType);

function CommentForm(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    emoji: '',
    comment: ''
  });

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  };

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    setFormData({
      emoji: '',
      comment: ''
    });
  };

  return (
    <form className="film-details__new-comment" action="#" method="post" onSubmit={handleFormSubmit}>
      <div className="film-details__add-emoji-label">
        {formData.emoji && (
          <img src={`./images/emoji/${formData.emoji}.png`} width="55" height="55" alt={`emoji-${formData.emoji}`} />
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
              name="emoji"
              type="radio"
              value={type}
              onChange={handleFieldChange}
              checked={type === formData.emoji}
            />

            <label className="film-details__emoji-label" htmlFor={`emoji-${type}`}>
              <img src={`./images/emoji/${type}.png`} width="30" height="30" alt={`emoji-${type}`} />
            </label>
          </Fragment>
        ))}
      </div>
    </form>
  );
}

export default CommentForm;
