import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { connect } from 'react-redux';
// import CartItem from '../CartItem';
import { removeItem } from '../../redux/actions'

import Footer from '../Footer'
import './Cart.css'
import CartItem from '../CartItem';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, productsList, removeItem }) => { 
    window.scrollTo(0,0)

    // let values = {}    
    const [values, setValues] = useState({});
    const [cartTotal, setcartTotal] = useState(0);
    const onChangeHandler = (e) => {
        console.log('cartValues', e.target)
        setValues({...values, [e.target.name]: e.target.id});
    }
    const onDeleteHandler = (name) => {
        console.log('Clicked on: ', name); 
        let temp = {...values};
        console.log(temp);
        delete temp[`${name}`];
        console.log('afterdelete', temp);
        setValues(temp)
        return;
    }

useEffect(() => {
    setcartTotal(Object.values(values).reduce((accumulator, currentValue) => Number(accumulator) + Number(currentValue), 0));
    console.log(values)
   
}, [values])

    const match = cartItems?.map(cartItem => {
        return productsList.filter(product => product._id === cartItem);
    }).reduce((acc, currentValue) => {
        return (acc = [...acc, ...currentValue]);
    }, []);

    return (
        <div>
            <Navbar />
           {
               cartItems &&  <div className="cart__main ">
               <div className="cart__items">
               {match.map(item => (
                       <CartItem  item={item} removeItem={removeItem} onChangeHandler = {onChangeHandler} onDeleteHandler = {onDeleteHandler}/>
                   ))}                   
               </div>
               <div className="cart__total">
                   <h2>Subtotal ({match.length} items) <br/> <span>&#8377; {cartTotal}</span></h2>
                {
                    cartTotal?  <Link to={{pathname:'/pay', state:{values, cartTotal}}}className='checkout__btn'>Proceed to checkout</Link>: <div style={{marginTop: '20vh'}}>Please select an item to checkout</div>
                }   
               </div>
           </div>
           }
    
        </div>
    )
}
const mapStateToprops = state => {
    console.log(state);
    return { cartItems: state.selectedItem, productsList: state.productsList };
};

export default connect(mapStateToprops, { removeItem })(Cart);
