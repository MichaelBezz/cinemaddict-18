export type FilmId = string;

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

export type FilmDetailsAdapted = {
  title: string;
  alternativeTitle: string;
  totalRating: number;
  poster: string;
  ageRating: number;
  director: string;
  writers: string[];
  actors: string[];
  release: {
    date: string;
    releaseCountry: string;
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

export type UserDetailsAdapted = {
  watchlist: boolean;
  alreadyWatched: boolean;
  watchingDate: string;
  favorite: boolean;
};

export type Film = {
  id: FilmId;
  comments: string[];
  film_info: FilmDetails;
  user_details: UserDetails;
};

export type FilmAdapted = {
  id: FilmId;
  comments: string[];
  filmInfo: FilmDetailsAdapted;
  userDetails: UserDetailsAdapted;
};

export type Films = Film[];
export type FilmsAdapted = FilmAdapted[];
