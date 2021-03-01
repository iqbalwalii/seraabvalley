import React from 'react'
import { connect } from 'react-redux';
import {Link, useLocation} from 'react-router-dom';  
import './Navbar.css'   



// utils function
function addBg() {
    var myNav = document.querySelector('.navbar');
    myNav.classList.add('nav-colored');
    myNav.classList.remove('nav-transparent');
}
function removeBg() {
    var myNav = document.querySelector('.navbar');
    myNav.classList.add('nav-transparent');
    myNav.classList.remove('nav-colored');
}

const Navbar = ({ cartItems }) => {
    const location = useLocation();

 
    function navbartoggle()
    {
        const navbar= document.querySelector('.navbar__links');
        console.log(navbar);
        navbar.classList.toggle('display');
    }
    window.onscroll = function () {
        if (
            document.body.scrollTop >= 200 ||
            document.documentElement.scrollTop >= 200
        ) {
            addBg();
        } else {
            removeBg();
        }
    };
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <div className='brand'>
                    <img  className='logo' src="/assets/images/irfan.svg" alt=""/>
                    <h1 className="logo__heading" >
                    <Link to="/" className='navigation__text'>Seraab valley <span>The Taste of kashmir</span></Link>
                    </h1>
                </div>
                <div className='hamburger' onClick={()=>{navbartoggle()}}>
                   <span></span>
                   <span></span>
                   <span></span>
                </div>
                
            </div>
            <div className="navbar__links">
                <Link
                    to="/store"
                    className={location.pathname === '/store' ? 'active' : 'inactive'}
                >
                    Store
                </Link>
            <Link
                    to="/about"
                    className={location.pathname === '/about' ? 'active' : 'inactive'}
                >
                    About
                </Link>
                <Link
                    to="/contact"
                    className={location.pathname === '/contact' ? 'active' : 'inactive'}
                >
                    Contact 
                </Link>
                <Link
                    to="/cart"
                    className={location.pathname === '/cart' ? 'active' : 'inactive'}
                >
                    Basket <span className="cart__total"> {cartItems.length}</span>
                </Link>
                <Link
                    to="/Signup"
                    className={location.pathname === '/Signup' ? 'active' : 'inactive'}
                >
                    Signup
                </Link>
                <Link
                    to="/Signin"
                    className={location.pathname === '/Signin' ? 'active' : 'inactive'}
                >
                    Signin
                </Link>
            </div>
               
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        cartItems: state.selectedItem,
    };
};

export default connect(mapStateToProps)(Navbar);
