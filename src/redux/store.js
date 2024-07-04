import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import issReducer from "./app/issSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        iss: issReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
});
