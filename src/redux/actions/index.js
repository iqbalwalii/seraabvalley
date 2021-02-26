import valley from '../../api/valley';

export const selectItem = item => {
    console.log('in action');
    console.log(item);
    return {
        type: 'SELECT__ITEM',
        payload: item,
    };
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
