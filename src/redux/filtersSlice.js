import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  language: "",
  level: "",
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState: INITIAL_STATE,

    reducers: {
        changeLanguage(state, { payload }) {
            state.language = payload;
        },
        changeLevel(state, { payload }) {
            state.level = payload
        },
    },
})

export const filtersReducer = filtersSlice.reducer;
export const { changeLanguage, changeLevel } = filtersSlice.actions;