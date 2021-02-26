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
                    {/* <div className="cart__item">
                        <img src="https://images.unsplash.com/photo-1595412017587-b7f3117dff54?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="" className="product__image"/>
                        <div className="product__detail">
                            <h2 className="product__name">Hello World!</h2>
                            <div className="details">
                                <select name="" id="" className='quantity'>
                                <option value="500">500g</option>
                                <option value="1000">1Kg</option>\</select>
                                <h4 className='price'>Price: 2000₹</h4>
                                <button className='remove__btn'>Remove</button>
                            </div>
                        </div>
                    </div> */}
                   
                </div>
                <div className="cart__total">
                    <h2>Subtotal(1)item's</h2>
                    <ul>
                        <li>item1 of 1</li>
                    </ul>
                    <hr/>
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
