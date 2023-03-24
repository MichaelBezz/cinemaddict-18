import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {toast} from 'react-toastify';
import {AppDispatch, State} from '../types/state';
import {Movies} from '../types/movie';
import {Reducer, APIRoute} from '../constants';


export const fetchMovies = createAsyncThunk<Movies | void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  `${Reducer.Movies}/fetchMovies`,
  async (_arg, {extra: api}) => {
    try {
      const {data} = await api.get<Movies>(`${APIRoute.Movies}`);
      return data;
    }
    catch {
      toast.error('Can\'t download movies');
    }
  }
);
