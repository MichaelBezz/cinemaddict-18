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

export enum FilterType {
  All = 'all',
  WatchList = 'watchlist',
  AlreadyWatched = 'alreadyWatched',
  Favorite = 'favorite'
}

export enum SortType {
  Default = 'default',
  Date = 'date',
  Rating = 'rating',
  Comment = 'comment'
}

export enum ButtonType {
  Card = 'card',
  Details = 'details'
}

export enum EmojiType {
  Smile = 'smile',
  Sleeping = 'sleeping',
  Puke = 'puke',
  Angry = 'angry'
}
