import React, {useState} from 'react';
import ProductItem from './ProductItem';
import {selectItem} from '../redux/actions'
import './ProductBanner.css';
import { connect } from 'react-redux';

const ProductBanner = ({productItems, selectItem, text, heading}) => {
    return (
        <div className="product__banner">
            <div className="banner__backdrop"></div>
            {productItems?.map(item => {
                return <ProductItem item={item} selectItem={selectItem}/>
            })}
            <div className="info">
                <h2>{heading}</h2>
                <p className="item__detail">
                    {text}
                </p>
            </div> 
        </div>
    )
}
const mapStateToProps=(state)=>{
    return state;
    
}
export default connect(mapStateToProps, {selectItem})(ProductBanner)
