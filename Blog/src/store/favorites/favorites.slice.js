import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggleFavorites: (state, { payload: blog }) => {
            const isExist = state.some((r) => r.id === blog.id);
            if (isExist) {
                const index = state.findIndex((item) => item.id === blog.id);
                if (index !== -1) {
                    state.splice(index, 1);
                }
            } else state.push(blog);
        },
    },
});

export const { actions, reducer } = favoritesSlice;
