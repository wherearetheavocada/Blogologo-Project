import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoritesReducer } from "./favorites/favorites.slice";
import { userSlice } from "./user/user.slice";
import { apiBlog, apiArticles } from "./api/api";

const reducers = combineReducers({
    favorites: favoritesReducer,
    user: userSlice.reducer,
    [apiBlog.reducerPath]: apiBlog.reducer,
    [apiArticles.reducerPath]: apiArticles.reducer,
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            apiBlog.middleware,
            apiArticles.middleware,
        ]),
});
