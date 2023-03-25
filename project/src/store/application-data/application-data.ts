import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ApplicationDataState} from '../../types/state';
import {FilmId} from '../../types/film';
import {Reducer} from '../../constants';


const initialState: ApplicationDataState = {
  filmId: null,
  isFilmDisplayed: false
};

export const applicationData = createSlice({
  name: Reducer.Application,
  initialState,
  reducers: {
    setFilmId: (state, action: PayloadAction<FilmId | null>) => {
      state.filmId = action.payload;
      state.isFilmDisplayed = action.payload !== null;
    }
  }
});

export const {setFilmId} = applicationData.actions;
