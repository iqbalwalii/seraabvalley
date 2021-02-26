import { combineReducers } from 'redux';

const selectedItemReducer = (selectedItem = [], action) => {
    switch (action.type) {
        case 'SELECT__ITEM':
            return [...selectedItem, action.payload];

        case 'REMOVE__ITEM':
            return selectedItem.filter(item => item !== action.payload);
        default:
            return selectedItem;
    }
};
const userReducer = (state = {}, action) => {
    if (action.type === 'USER__AUTHENTICATION') {
        return action.payload;
    } else {
        return state;
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
    user: userReducer,
});

export default reducers;
