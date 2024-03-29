import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { selectItem } from '../../redux/actions';
import { connect } from 'react-redux';

import Navbar from '../Navbar';
import Footer from '../Footer';

// local Imports
import './SingleProduct.css';

const SingleProduct = props => {
    window.scrollTo(0, 0);
    const product = props.location.state;
    if (!product) {
        return <div>loading...</div>;
    }
    return (
        <>
            <Navbar />
            <div className="single__product__item">
                <div className="product__item__top">
                    <img
                        src={`/assets/images/products/${product.name.trim()}.jpg`}
                        alt={product.name}
                        className="product__img"
                    />
                    <div className="single__product__detials">
                        <h1 className="single__product__name">{product.name}</h1>
                        <h3 className="single__product__description">
                            {product.description}
                        </h3>
                        <div className="single__product__price__group">
                            {product.price.map((price, index) => {
                                return (
                                    <div className="detail__group">
                                        <div className="single__product__price">
                                            <h3> &#8377; {price}</h3>
                                        </div>
                                        <div className="single__product__quantity">
                                            <h3>{product.quantity[index]}</h3>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <button
                            className="product__btn"
                            onClick={e => props.selectItem(product._id)}
                        >
                            <span> Add To Cart</span>
                            <FaCartPlus style={{ fontSize: '2rem' }} />
                        </button>
                    </div>
                </div>
            </div>
            <div className="product__item__bottom">
                <div className="product__benefits">
                    <h1 className="product__heading">Benefits</h1>

                    <p>{product.benefits}</p>
                </div>
                <div className="product__use">
                    <h1 className="product__heading">How to use</h1>
                    <p>{product.howToUse}</p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default connect(null, { selectItem })(SingleProduct);
