import {combineReducers} from '@reduxjs/toolkit';
import {filmsData} from './films-data/films-data';
import {Reducer} from '../constants';


export const rootReducer = combineReducers({
  [Reducer.Films]: filmsData.reducer
});
