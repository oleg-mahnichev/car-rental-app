import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    adverts: [],
    favorites: [],
    filters: {
        make: null,
        priceRange: null,
        mileageRange: null,
    },
};

const advertsSlice = createSlice({
    name: 'adverts',
    initialState,
    reducers: {
        loadAdverts: (state, action) => {
            state.adverts = action.payload;
        },
        addToFavorites: (state, action) => {
            const advertToAdd = action.payload;
            state.favorites.push(advertToAdd);
        },
        removeFromFavorites: (state, action) => {
            const advertToRemove = action.payload;
            state.favorites = state.favorites.filter((advert) => advert.id !== advertToRemove.id);
        },
        updateFilters: (state, action) => {
            state.filters = action.payload;
        },
    },
});

export const { loadAdverts, addToFavorites, removeFromFavorites, updateFilters } = advertsSlice.actions;
export default advertsSlice.reducer;
