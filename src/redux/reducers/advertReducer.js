import { ActionTypes } from '../constants/actionTypes';

const initialState = {
    adverts: [],
};

const advertReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOAD_ADVERTS:
            return {
                ...state,
                adverts: action.payload,
            };
        default:
            return state;
    }
};

export default advertReducer;
