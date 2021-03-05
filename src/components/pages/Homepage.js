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
    window.scrollTo(0,0)

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
            <ProductBanner className='homepage__products' productItems = {products.slice(0,2)} heading='Kashmiri Exquisite Almonds' text='Kashmir Almonds are often referred to as King of Fruits and are available in different shapes and sizes. Kashmir Almonds are smaller in size as compared to Californian almonds but have higher oil content (42%) in them. Owing to the moderate climate of Kashmir, the Kashmiri Almonds are very sweet'/>
            <ProductBanner className='homepage__products' productItems = {products.slice(2,4)} heading='Saffron From the Hills of Pampore'text='Kashmiri saffron is recognizable by its dark maroon-purple hue, making it among the worlds darkest In 2020 Kashmir Valley saffron was certified with a geographical indication from the Government of India'/>
            <ProductBanner className='homepage__products' productItems = {products.slice(4,6)} heading='The Finest of Walnuts' text='Kashmir enjoys its status as a major contributor to the export of walnut from India. Walnuts grown in Kashmir valley are certified as the organic. Walnuts have a high percentage of monounsaturated (MUFA) and polyunsaturated (PUFA) fats and are a good source of protein.'/>
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
