import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import Navbar from '../Navbar'
import Footer from '../Footer'

// local Imports
import './SingleProduct.css';

const SingleProduct = (props) => {
    const product  = (props.location.state);    
    if (!product) {
        return <div>loading...</div>;
    }
    return (
    <>
    <Navbar/>
        <div className="product__item">
            <div className="product__item__top">
            
                <img src={product.imageUrl} alt={product.name} className="product__img" />
                <div className="single__product__detials">
                    <h1 className="single__product__name">{product.name}</h1>
                    <h3 className="single__product__description">
                        {product.description}
                    </h3>
                    <h3 className="single__product__price">
                        <span>Price</span>
                        &#8377;{product.price}
                    </h3>
                    <h3 className="single__product__quantity">
                        <span>Quantity</span>
                        {product.quantity}
                    </h3> <button className="product__btn">
                    <span> Add To Cart</span>
                    <FaCartPlus style={{ fontSize: '2rem' }} />
                </button>
                </div>
            </div>
            <div className="product__item__bottom">
                    <div className="product__benefits">
                        <h1 className="product__heading">
                            Benefits
                        </h1>
                        <p>{product.benefits}</p>
                    </div>
                     <div className="product__use">
                        <h1 className="product__heading">
                            How to use</h1>
                        <p>{product.benefits}</p>
                    </div>
            </div>
        </div>
        <Footer/>
    </>
    );
};

export default SingleProduct;
