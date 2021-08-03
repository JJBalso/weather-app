import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";


export interface LocationsState {
    value: string[];
  }

const initialState: LocationsState = {
    value: ['Alicante', 'Valencia'],
};

export const locationsSlice = createSlice({
    name: 'locations',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      addLocation: (state, action: PayloadAction<string>) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value = [...state.value, action.payload];
      },
    },    
});

export const { addLocation } = locationsSlice.actions;

export const selectLocation = (state: RootState) => state.locations.value;

export default locationsSlice.reducer;
