export type FilmDetails = {
  title: string;
  alternative_title: string;
  total_rating: number;
  poster: string;
  age_rating: number;
  director: string;
  writers: string[];
  actors: string[];
  release: {
    date: string;
    release_country: string;
  };
  runtime: number;
  genre: string[];
  description: string;
};

export type UserDetails = {
  watchlist: boolean;
  already_watched: boolean;
  watching_date: string;
  favorite: boolean;
};

export type Film = {
  id: string;
  comments: string[];
  film_info: FilmDetails;
  user_details: UserDetails;
};

export type Films = Film[];
