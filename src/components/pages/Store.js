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
// let counter=1;
// const carouselSlide= document.querySelector('.carousel__slider');
// const carouselImages = document.querySelectorAll('.carousel__slider img');
// const prevBtn= document.querySelector('#prevBtn');
// const nextBtn= document.querySelector('#nextBtn');
// const size= carouselImages[0].clientWidth;

// const ImageURLS=[
//     'https://images.unsplash.com/photo-1595412017587-b7f3117dff54?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
//     'https://images.unsplash.com/photo-1453368243168-0e39a069e468?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
//     'https://images.unsplash.com/photo-1598371624473-4d95aca694e3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
//     'https://images.unsplash.com/photo-1600841889672-d3387c10c7d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
//     'https://images.unsplash.com/photo-1601368157676-bdf57977c398?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
// ];
// function changeImage()
// {
//     document.querySelector('.carousel').style.background=`linear-gradient(rgba(0, 0, 0, 0.499), rgba(0, 0, 0, 0.399)) , url(${ImageURLS[imageIndex]}) no-repeat center center cover`;
// }
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
            {/* <div className="carousel">
                <div className="carousel__slider">
                    <img src="/assets/images/carousel6.jpg" id='lastClone'alt=""/>
                    <img src="/assets/images/carousel1.jpg" alt=""/>
                    <img src="/assets/images/carousel2.jpg" alt=""/>
                    <img src="/assets/images/carousel3.jpg" alt=""/>
                    <img src="/assets/images/carousel4.jpg" alt=""/>
                    <img src="/assets/images/carousel5.jpg" alt=""/>
                    <img src="/assets/images/carousel6.jpg" alt=""/>
                    <img src="/assets/images/carousel1.jpg" id='firstClone' alt=""/>
                </div>
            </div> */}
            <button id='prevBtn'>Prev</button>
            <button id='nextBtn'>Next</button>
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
