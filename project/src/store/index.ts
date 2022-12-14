import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer';
import {createApi} from '../axios/api';

const api = createApi();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware ) => getDefaultMiddleware({
    thunk: {
      extraArgument: api
    }
  })
});

