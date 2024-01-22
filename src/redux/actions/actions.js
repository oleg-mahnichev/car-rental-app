import { ActionTypes } from '../constants/actionTypes';

export const loadAdverts = (adverts) => ({
    type: ActionTypes.LOAD_ADVERTS,
    payload: adverts,
});

export const addToFavorites = (advert) => ({
    type: ActionTypes.ADD_TO_FAVORITES,
    payload: advert,
});

export const removeFromFavorites = (advert) => ({
    type: ActionTypes.REMOVE_FROM_FAVORITES,
    payload: advert,
});

export const updateFilters = (filters) => ({
    type: ActionTypes.UPDATE_FILTERS,
    payload: filters,
});
