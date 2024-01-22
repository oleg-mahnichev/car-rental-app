import { combineReducers } from 'redux';
import advertReducer from './advertReducer';
import favoritesReducer from './favoritesReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
    adverts: advertReducer,
    favorites: favoritesReducer,
    filters: filterReducer,
});

export default rootReducer;
