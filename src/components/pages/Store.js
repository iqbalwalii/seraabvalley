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
let imageIndex=0;
const ImageURLS=[
    'https://images.unsplash.com/photo-1595412017587-b7f3117dff54?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
    'https://images.unsplash.com/photo-1453368243168-0e39a069e468?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
    'https://images.unsplash.com/photo-1598371624473-4d95aca694e3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1600841889672-d3387c10c7d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    'https://images.unsplash.com/photo-1601368157676-bdf57977c398?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
];
function changeImage()
{
    document.querySelector('.carousel').style.background=`linear-gradient(rgba(0, 0, 0, 0.499), rgba(0, 0, 0, 0.399)) , url(${ImageURLS[imageIndex]}) no-repeat center center cover`;
}
const Store = ({productsList, selectItem, fetchProducts}) => {
    useEffect(()=>{
    fetchProducts()
},[fetchProducts])
    if(!productsList){
        return <div>Loading..</div>
    }

    
    return (
        <>
            <Navbar />
            <div className="carousel__heading">
                <h1>Dry Fruits Hanging at your Doorstep</h1>
            </div>
            <div className="carousel__buttons">
                <button className='btn__left' onClick={changeImage}>LEFTT</button>
                <button className='btn__right' onClick={changeImage}>RIGHT </button>
            </div>
            <div className="carousel">
                
            </div>
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
