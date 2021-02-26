import React from 'react';

// import './CartItem.css';

const CartItem = ({ item, removeItem }) => {
    return (
        <div className="cart__item">
            <div className="cart__item__img">
                <img src={item.imageUrl} alt={item.name} />
            </div>
            <p className="cart__item__name">name of the product</p>
            <p className="cart__item__price">499 inr</p>
            <select name="" className="cart__item__select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
            <button className="cart__item__delete" onClick={() => removeItem(item._id)}>
                delete
            </button>
        </div>
    );
};

export default CartItem;