import React, { useEffect, useState } from 'react';

import './CartItem.css';

const CartItem = ({ item, removeItem, onDeleteHandler, updateCart }) => {
    const [quantityValue, setQuantityValue] = useState(0);
    const [selectedQuantity, setSelectedQuantity] = useState(0);
    const [selectedPrice, setSelectedPrice] = useState(0);
    function deleteItem(name) {
        setSelectedPrice(0);
        setQuantityValue(0);
        onDeleteHandler(name);
    }
    useEffect(() => {
        let values = {
            name: item.name,
            price: selectedPrice,
            quantity: selectedQuantity,
        };
        if (Number(values.price) !== 0) {
            updateCart(values);
        }
        console.log('in useEffect values are', values);
    }, [selectedPrice, selectedQuantity]);
    return (
        <div className="cart__item">
            <div className="cart__item__img">
                <img
                    src={`/assets/images/products/${item.name.trim()}.jpg`}
                    alt={item.name}
                />
                <p className="cart__item__name">{item.name}</p>
            </div>

            <div className="cart__product__price__group">
                {item.price.map((price, index) => {
                    return (
                        <button className="variant">
                            <input
                                type="radio"
                                name={item.name}
                                onClick={e => {
                                    console.log(Number(e.target.id));
                                    setQuantityValue(1);
                                    setSelectedQuantity(1);
                                    setSelectedPrice(Number(e.target.id));
                                }}
                                id={price}
                            />
                            <label className="input__label" htmlFor={price}>
                                <div className="variant__price">
                                    <h3> &#8377; {price}</h3>
                                </div>
                                <div className="variant__quantity">
                                    <h3>{item.quantity[index]}</h3>
                                </div>
                            </label>
                        </button>
                    );
                })}
            </div>

            <div className="cart__item__bottom">
                <button
                    className="subtract"
                    onClick={e => {
                        if (quantityValue >= 1) {
                            setQuantityValue(quantityValue - 1);
                            setSelectedQuantity(quantityValue - 1);
                        }
                        return;
                    }}
                >
                    -
                </button>
                <input
                    type="number"
                    name="total_items"
                    placeholder="1"
                    min="1"
                    value={quantityValue}
                    onChange={e => {
                        setQuantityValue(Number(e.target.value));
                        setSelectedQuantity(Number(e.target.value));
                    }}
                />
                <button
                    className="add"
                    onClick={e => {
                        setQuantityValue(quantityValue + 1);
                        setSelectedQuantity(quantityValue + 1);
                    }}
                >
                    +
                </button>
            </div>
            <button
                className="cart__item__delete"
                onClick={() => {
                    deleteItem(item.name);
                    removeItem(item._id);
                }}
            >
                <img src="https://cdn2.iconfinder.com/data/icons/e-business-helper/240/627249-delete3-512.png" alt="delete icon" />
            </button>
        </div>
    );
};

export default CartItem;
