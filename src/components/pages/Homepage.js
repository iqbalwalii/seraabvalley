import React, { useEffect} from 'react'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar'
import Banner from '../Banner'
import Footer from '../Footer'
import ProductBanner from '../ProductBanner'
import "./Homepage.css"
import {connect} from 'react-redux'
import {fetchProducts} from '../../redux/actions'


const Homepage = (props) => {
    console.log(props);
    const { products, fetchProducts } = props;
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    if (!products) {
        return <div>...loading</div>;
    } else {
    
    return (
        <div className="container">
            <Navbar/>
            <Banner/>
            <h1 className="main__heading">Our Products</h1>
            <ProductBanner className='homepage__products' productItems = {products.slice(0,2)}/>
            <ProductBanner className='homepage__products' productItems = {products.slice(2,4)}/>
            <ProductBanner className='homepage__products' productItems = {products.slice(4,6)}/>
            <Link to='/store' className="view__more__btn">View more Products
            </Link>
            <Footer/>
        </div>
    )}
}

const mapStateToProps = state => {
    console.log('from homepage',state);
    return { products: state.productsList };
};
export default connect(mapStateToProps, { fetchProducts })(Homepage);
