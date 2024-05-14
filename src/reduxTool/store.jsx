import { configureStore } from '@reduxjs/toolkit';

import AuthReducer from "./AuthSlice"


export const store = configureStore({
    reducer: {
        Auth: AuthReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
});