import {combineReducers} from '@reduxjs/toolkit';
import {applicationData} from './application-data/application-data';
import {filmsData} from './films-data/films-data';
import {commentsData} from './comments-data/comments-data';
import {Reducer} from '../constants';


export const rootReducer = combineReducers({
  [Reducer.Application]: applicationData.reducer,
  [Reducer.Films]: filmsData.reducer,
  [Reducer.Comments]: commentsData.reducer
});
