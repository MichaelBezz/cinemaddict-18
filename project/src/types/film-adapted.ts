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

export type UserDetailsAdapted = {
  watchlist: boolean;
  alreadyWatched: boolean;
  watchingDate: string;
  favorite: boolean;
};

export type FilmAdapted = {
  id: string;
  comments: string[];
  filmInfo: FilmDetailsAdapted;
  userDetails: UserDetailsAdapted;
};

export type FilmsAdapted = FilmAdapted[];
