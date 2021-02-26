import { combineReducers } from 'redux';
const selectedItemReducer = (selectedItem = [], action) => {
    switch (action.type) {
        case 'SELECT__ITEM':
            return [action.payload];
        default:
            return selectedItem;
    }
};

const fetchPostsReducer = (state = [], action) => {
    if (action.type === 'FETCH__PRODUCTS') {
        return action.payload;
    } else {
        return state;
    }
};

const reducers = combineReducers({
    productsList: fetchPostsReducer,
    selectedItem: selectedItemReducer,
});

export default reducers;
