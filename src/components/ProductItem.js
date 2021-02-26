import React from 'react';
import {Link} from 'react-router-dom';
import products from '../data';
import { FaCartPlus} from 'react-icons/fa';
import './ProductItem.css';

const ProductItem = ({item, selectItem}) => {

    
    return (
        <div className='product'>
            <div className="product__image">
                <img src={item.imageUrl} alt={item.name}/>
            </div>
            <div className="product__details">
                <h1 className="product__name">
                    {item.name}
                </h1>
                <h3 className="product__description">
                    {item.description.slice(0,80)}
                </h3>
                <h3 className="product__price" >
                 <span> ₹ {item.price[0]} </span>   <span>{item.quantity[0]} </span>
                     {/* <span className="product__quantity"> {item.price[1]}   {item.quantity[1]}</span> */}
                </h3>
                <h3 className="product__price">
                 <span> ₹  {item.price[1]} </span> <span>  {item.quantity[1]}</span>
                    {/* <span className="product__quantity"> {item.price[1]}   {item.quantity[1]}</span> */}
                </h3>
             
            </div>
            
            <button  className='cart__btn' onClick={e => selectItem(item)
            }>
               <span>Add to Basket</span> <FaCartPlus style={{'fontSize': '1rem'}} /> 
            </button> 
            <Link to={{ pathname: `/product:${item?.id}`, state: item }} className='cart__btn detail__btn'>
                   Details
            </Link>    

                
        </div>
    )
}

export default ProductItem