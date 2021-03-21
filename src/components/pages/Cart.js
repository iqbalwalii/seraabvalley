import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { connect } from 'react-redux';
// import CartItem from '../CartItem';
import { removeItem } from '../../redux/actions';

import Footer from '../Footer';
import './Cart.css';
import CartItem from '../CartItem';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, productsList, removeItem }) => {
    const [values, setValues] = useState([]);
    const [cartTotal, setcartTotal] = useState(0);

    const onDeleteHandler = name => {
        console.log('values are: ', values);

        delete values[`${name}`];
        console.log('values after delte: ', values);
        setValues({ ...values });
        return;
    };
    const updateCart = item => {
        setValues({
            ...values,
            [item.name]: {
                name: item.name,
                price: item.price,
                quantity: item.quantity,
            },
        });
        console.log('newValues', item);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        console.log('in USEEFFECR AFTER UPDATE: ', values);
        setcartTotal(
            Object.values(values)
                .map(item => Number(item.quantity) * Number(item.price))
                .reduce(
                    (accumulator, currentValue) =>
                        Number(accumulator) + Number(currentValue),
                    0,
                ),
        );
    }, [values]);

    const match = cartItems
        ?.map(cartItem => {
            return productsList.filter(product => product._id === cartItem);
        })
        .reduce((acc, currentValue) => {
            return (acc = [...acc, ...currentValue]);
        }, []);

    return (
        <div>
            <Navbar />
            {/* <div className="cart__headings">
                <h2>product</h2>
                <h2>Variant</h2>
                <h2>Quantity</h2>
            </div> */}
            {cartItems && (
                <div className="cart__main ">
                    {/* <h2 className="cart__heading">product</h2>
                    <h2 className="cart__heading">Variant</h2>
                    <h2 className="cart__heading">Quantity</h2> */}
                    <div className="cart__items">
                        {match.map(item => (
                            <CartItem
                                item={item}
                                removeItem={removeItem}
                                updateCart={updateCart}
                                onDeleteHandler={onDeleteHandler}
                            />
                        ))}
                    </div>
                    <div className="cart__total">
                        <h2>
                            Items ({match.length}) <br />
                            Total amount <span> &#8377; {cartTotal}</span>
                        </h2>
                        {cartTotal ? (
                            <Link
                                to={{ pathname: '/pay', state: { values, cartTotal } }}
                                className="checkout__btn"
                            >
                                Checkout
                            </Link>
                        ) : (
                            <div className="warning">
                                Please select an item to checkout
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
const mapStateToprops = state => {
    return { cartItems: state.selectedItem, productsList: state.productsList };
};

export default connect(mapStateToprops, { removeItem })(Cart);
