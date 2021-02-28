import React from 'react'
import Navbar from '../Navbar'
import { connect } from 'react-redux';
// import CartItem from '../CartItem';
import { removeItem } from '../../redux/actions'

import Footer from '../Footer'
import './Cart.css'
import CartItem from '../CartItem';

const Cart = ({ cartItems, productsList, removeItem }) => {
console.log('items',cartItems, productsList, removeItem )
    const match = cartItems.map(cartItem => {
        return productsList.filter(product => product._id === cartItem);
    }).reduce((acc, currentValue) => {
        return (acc = [...acc, ...currentValue]);
    }, []);
    console.log('IN store',match);
    return (
        <div>
            <Navbar />
            <div className="cart__main ">
                <div className="cart__items">
                {match.map(item => (
                        <CartItem item={item} removeItem={removeItem} />
                    ))}                   
                </div>
                <div className="cart__total">
                    <h2>Subtotal ({match.length} items) <span>&#8377; 23232</span></h2>
                    <button className='checkout__btn'>Proceed to checkout</button>
                </div>
            </div>
    
        </div>
    )
}
const mapStateToprops = state => {
    console.log(state);
    return { cartItems: state.selectedItem, productsList: state.productsList };
};

export default connect(mapStateToprops, { removeItem })(Cart);
