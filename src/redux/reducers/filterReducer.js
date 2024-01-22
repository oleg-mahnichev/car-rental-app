import { ActionTypes } from '../constants/actionTypes';

const initialState = {
    filters: {
        make: null,
        price: null,
        mileage: null,
    },
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_FILTERS:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    ...action.payload,
                },
            };
        default:
            return state;
    }
};

export default filterReducer;
