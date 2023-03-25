import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);


export const formatDuration = (minute: number): string =>
  dayjs.duration(minute, 'minute').format('H[h] mm[m]');

export const formatReleaseData = (data: string): string =>
  dayjs(data).format('YYYY');

export const formatGenre = (genres: string[]): string =>
  genres.join(', ');

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
      return 'novice';
    case rating >= 11 && rating < 21:
      return 'fan';
    case rating >= 21:
      return 'movie buff';
    default: return '';
  }
};
