import {useEffect} from 'react';

import {useAppDispatch} from '../../hooks/use-app-dispatch';
import {useAppSelector} from '../../hooks/use-app-selector';
import {fetchComments} from '../../store/api-actions';
import {getComments} from '../../store/comments-data/selectors';

import CommentForm from '../comment-form/comment-form';

import {FilmId} from '../../types/film';
import {formatCommentData} from '../../utils/utils';


type CommentListProps = {
  filmId: FilmId;
};

function CommentList({filmId}: CommentListProps): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchComments(filmId));
  }, [dispatch, filmId]);

  const comments = useAppSelector(getComments);

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
                <button className="film-details__comment-delete" type="button">Delete</button>
              </p>
            </div>
          </li>
        ))}
      </ul>

      <CommentForm />
    </section>
  );
}

export default CommentList;
