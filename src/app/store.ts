import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import locationsReducer from '../features/locations/locations';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    locations: locationsReducer,
    counter: counterReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
