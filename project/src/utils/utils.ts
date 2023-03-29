import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import {FilterType} from '../constants';

dayjs.extend(duration);
dayjs.extend(relativeTime);


export const formatDuration = (minute: number): string =>
  dayjs.duration(minute, 'minute').format('H[h] mm[m]');

export const formatReleaseData = (data: string): string =>
  dayjs(data).format('YYYY');

export const formatReleaseFullData = (data: string): string =>
  dayjs(data).format('D MMMM YYYY');

export const formatCommentData = (data: string): string =>
  dayjs(data).fromNow();

export const formatListProperties = (list: string[]): string =>
  list.join(', ');

export const formatDescription = (description: string, maxLength = 139) => {
  const text = description.trim();

  if (text.length > maxLength) {
    return `${text.slice(0, maxLength)}...`;
  }

  return text;
};

export const getUserRating = (rating: number): string => {
  switch (true) {
    case rating >= 1 && rating < 11:
      return 'Novice';
    case rating >= 11 && rating < 21:
      return 'Fan';
    case rating >= 21:
      return 'Movie Buff';
    default: return '';
  }
};

export const getFilmListTitle = (filter: FilterType, count: number) => {
  switch (true) {
    case filter === FilterType.All && count === 0:
      return 'There are no movies in our database';
    case filter === FilterType.WatchList && count === 0:
      return 'There are no movies to watch now';
    case filter === FilterType.AlreadyWatched && count === 0:
      return 'There are no watched movies now';
    case filter === FilterType.Favorite && count === 0:
      return 'There are no favorite movies now';
    default: return 'All movies. Upcoming';
  }
};
