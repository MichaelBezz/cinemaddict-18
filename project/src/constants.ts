export enum AppRoute {
  Main = '/',
  NotFound = '*'
}

export enum APIRoute {
  Films = '/movies',
  Comments = '/comments'
}

export enum Reducer {
  Application = 'APPLICATION',
  Films = 'FILMS',
  Comments = 'COMMENTS'
}

export enum Filter {
  All = 'all',
  WatchList = 'watchlist',
  History = 'history',
  Favorites = 'favorites'
}

export enum Sort {
  Default = 'default',
  Date = 'date',
  Rating = 'rating'
}

export enum TypeButton {
  Card = 'card',
  Details = 'details'
}
