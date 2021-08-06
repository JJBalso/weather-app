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
        state.value = [...state.value, action.payload];
      },
      removeLocation: (state, action: PayloadAction<string>) => {
        state.value = state.value.filter(location => location !== action.payload);
      },
    },    
});

export const { addLocation, removeLocation } = locationsSlice.actions;

export const selectLocation = (state: RootState) => state.locations.value;

export default locationsSlice.reducer;
