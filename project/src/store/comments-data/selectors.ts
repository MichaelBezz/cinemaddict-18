import {State} from '../../types/state';
import {Comments} from '../../types/comment';

import {Reducer} from '../../constants';


export const getComments = (state: State): Comments | [] => state[Reducer.Comments].comments;
export const getIsLoading = (state: State): boolean => state[Reducer.Comments].isLoading;
