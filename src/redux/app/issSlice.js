import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    issPosition: {
        latitude: null,
        longitude: null
    },
    issAstronauts: []
};

export const issSlice = createSlice({
    name: "iss",
    initialState,
    reducers: {
        setInfo: (state, action) => ({
            ...state,
            ...action.payload
        })
    }
});

export const { setInfo } = issSlice.actions;

export default issSlice.reducer;
