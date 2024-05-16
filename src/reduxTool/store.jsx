import { configureStore } from '@reduxjs/toolkit';

import AuthReducer from "./AuthSlice"
import cartReducer from "./CartSlice"; 

export const store = configureStore({
    reducer: {
        Auth: AuthReducer,
        cart:cartReducer,
        // contact:contactReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
});