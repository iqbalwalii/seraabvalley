import React, {useState} from 'react';
import ProductItem from './ProductItem';
import {selectItem} from '../redux/actions'
import './ProductBanner.css';
import { connect } from 'react-redux';

const ProductBanner = ({productItems, selectItem}) => {
    return (
        <div className="product__banner">
            <div className="banner__backdrop"></div>
            {productItems?.map(item => {
                return <ProductItem item={item} selectItem={selectItem}/>
            })}
            <div className="info">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p className="item__detail">
                      Lorem . Deserunt non voluptas veniam ipsa cumque eaque aliquam tempore quis a? Perspiciatis suscipit deserunt ea eum consequatur?  
                </p>
            </div> 
        </div>
    )
}
const mapStateToProps=(state)=>{
    return state;
    
}
export default connect(mapStateToProps, {selectItem})(ProductBanner)
