import {combineReducers} from '@reduxjs/toolkit';
import {moviesData} from './movies-data/movies-data';
import {Reducer} from '../constants';


export const rootReducer = combineReducers({
  [Reducer.Movies]: moviesData.reducer
});
