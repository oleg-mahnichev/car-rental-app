import { ActionTypes } from '../constants/actionTypes';

const initialState = {
    favorites: [], // Инициализация пустого массива
};

const favoritesReducer = (state = initialState, action) => {


    switch (action.type) {
        case ActionTypes.ADD_TO_FAVORITES:
            const newFavorite = action.payload;
            return {
                ...state,
                favorites: [...state.favorites, newFavorite],
            };

        case ActionTypes.REMOVE_FROM_FAVORITES:
            const removedFavoriteId = action.payload.id;
            return {
                ...state,
                favorites: state.favorites.filter((item) => item.id !== removedFavoriteId),
            };

        default:
            return state;
    }
};

export default favoritesReducer;

