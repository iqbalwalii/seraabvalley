import React from 'react';

import './CartItem.css';

const CartItem = ({ item, removeItem, onChangeHandler, onDeleteHandler }) => {
  return (
        <div className="cart__item">
            <div className="cart__item__img">
                <img src={`/assets/images/products/${(item.name).trim()}.jpg`} alt={item.name} />
            </div>
            <div className="cart__item__right">
                <div>
                    <p className="cart__item__name">{item.name}</p>
                    {/* <p className="cart__item__price">{item.price}</p> */}
                    <div className='cart__product__price__group'>
                    {
                        item.price.map( (price, index) => {
                            return (
                            
                            <button className="variant">
                                <input onChange = {onChangeHandler}  type="radio" name={item.name}id={price}/>
                                <div className="variant__price">
                                    <h3>  &#8377;  {price}</h3>
                                </div>
                                <div className="variant__quantity" >
                                    <h3>{item.quantity[index]}</h3>
                                </div>
                            </button>)
                        })
                    }
                    </div>
                </div>
                <div>
                    <div className="cart__item__bottom">
                        <input type="number"  name="total_items" placeholder='1' min='1'/>
                        <button className="cart__item__delete" onClick={() => {
                            onDeleteHandler(item.name);
                            removeItem(item._id)
                        }
                            }>
                            delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;