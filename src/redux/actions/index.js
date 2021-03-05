import valley from '../../api/valley';

export const selectItem = item => {
    console.log('in action');
    console.log(item);
    return {
        type: 'SELECT__ITEM',
        payload: item,
    };
};
export const removeItem = item => {
    console.log('in action remove');
    console.log(item);
    return {
        type: 'REMOVE__ITEM',
        payload: item,
    };
};
export const clearCart = () => {
    console.log('in action clearCart');
    return {
        type: 'EMPTY__CART',
        payload: '',
    };
};
export const logout = () => {
    return {
        type: 'LOGOUT__USER',
        payload: '',
    }
   
};

export const fetchProducts = () => {
    return async function (dispatch, getState) {
        const { data } = await valley.get('/');
        dispatch({
            type: 'FETCH__PRODUCTS',
            payload: data,
        });
    };
};
export const userAuthentication = userCredentials => {
    return async function (dispatch, getState) {
        const { data } = await valley.post('/user/create', { ...userCredentials });
        dispatch({
            type: 'USER__AUTHENTICATION',
            payload: data,
        });
    };
};
export const loginUser = userCredentials => {
    return async function (dispatch, getState) {
        const { data } = await valley.post('/user/read', { ...userCredentials });
        dispatch({
            type: 'USER__AUTHENTICATION',
            payload: data,
        });
    };
};



