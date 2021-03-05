import React, { useEffect} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectItem } from '../../redux/actions';
import Footer from '../Footer'
import {fetchProducts} from '../../redux/actions'

// local imports;
import ProductItem from '../ProductItem';
import Navbar from '../Navbar';

import './Store.css';
import axios from 'axios';

const Store = ({productsList, selectItem, fetchProducts}) => {
    window.scrollTo(0,0)
    
    useEffect(()=>{
    fetchProducts()
},[fetchProducts])
    if(!productsList){
        return <div>Loading..</div>
    }

    
    return (
        <>
            <Navbar />
        <div className="carousel">
        <img src="./assets/images/pro.gif" alt="Product Line" className="carousel__image"/>
            <h3 className='carousel__heading'>Browse the treats we have in store for you</h3>
        </div>
        <h2 className='store__heading'>OUR PRODUCTS</h2>
            <div className="store__container">
                {productsList.map(item => {
                    return <ProductItem item={item} selectItem={selectItem} />;
                })}
            </div>
            <Footer/>
        </>
    );
};


const mapStateToProps = state => {
    console.log(state);
    return { productsList: state.productsList };
};
export default connect(mapStateToProps, { selectItem, fetchProducts })(Store);
