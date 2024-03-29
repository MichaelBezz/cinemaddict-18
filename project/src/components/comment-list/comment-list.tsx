import {useState, useEffect} from 'react';

import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useAppSelector} from '../../hooks/use-app-selector';
import {fetchComments, deleteComment} from '../../store/api-actions';
import {getComments, getIsLoading, getIsDisabled} from '../../store/comments-data/selectors';

import CommentForm from '../comment-form/comment-form';

import {FilmId} from '../../types/film';
import {CommentId} from '../../types/comment';
import {formatCommentData} from '../../utils/utils';


type CommentListProps = {
  filmId: FilmId;
};

function CommentList({filmId}: CommentListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState<CommentId | null>(null);

  const comments = useAppSelector(getComments);
  const isLoading = useAppSelector(getIsLoading);
  const isDisabled = useAppSelector(getIsDisabled);

  useEffect(() => {
    dispatch(fetchComments(filmId));
  }, [dispatch, filmId]);


  if (isLoading) {
    return (<h3 className="film-details__comments-title">Loading...</h3>);
  }

  return (
    <section className="film-details__comments-wrap">
      <h3 className="film-details__comments-title">
        Comments {' '}
        <span className="film-details__comments-count">{comments.length}</span>
      </h3>

      <ul className="film-details__comments-list">
        {comments.map((comment) => (
          <li key={comment.id} className="film-details__comment">
            <span className="film-details__comment-emoji">
              <img src={`./images/emoji/${comment.emotion}.png`} width="55" height="55" alt={`emoji-${comment.emotion}`} />
            </span>
            <div>
              <p className="film-details__comment-text">{comment.comment}</p>
              <p className="film-details__comment-info">
                <span className="film-details__comment-author">{comment.author}</span>
                <span className="film-details__comment-day">{formatCommentData(comment.date)}</span>
                <button
                  className="film-details__comment-delete"
                  type="button"
                  onClick={() => {
                    dispatch(deleteComment({filmId, commentId: comment.id}));
                    setActive(comment.id);
                  }}
                  disabled={isDisabled}
                >
                  {active === comment.id && isDisabled ? 'Deleting...' : 'Delete'}
                </button>
              </p>
            </div>
          </li>
        ))}
      </ul>

      <CommentForm filmId={filmId} />
    </section>
  );
}

export default CommentList;
