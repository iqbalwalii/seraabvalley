import React from 'react';
import { Link } from 'react-router-dom';
import useFormValidation from './useFormValidation';
import validate from './validateLogin';

import { connect } from 'react-redux';
import { userAuthentication } from '../../redux/actions';
import './Signup.css';
import Navbar from '../Navbar';
const INITIAL_FORM_STATE = {
    email: '',
    name: '',
    password: '',
};
const Signup = ({ userAuthentication, user, history }) => {
    const {
        values,
        isSubmitting,
        errors,
        onBlurHandler,
        onChangeHandler,
        onSubmitHandler,
    } = useFormValidation(INITIAL_FORM_STATE, validate, userAuthentication);

    function toggleForm()
    {
        const backdrop = document.querySelector('.backdrop__form');
        backdrop.classList.toggle('toggle')
    }

    return (
        <div className='main__page__handler'>
            
<Navbar/>
<div className="backdrop__form">
</div>
            <div className='form__data'>
            <h1 className="form__heading">SIGN UP</h1>
                <form onSubmit={onSubmitHandler} className='form__main'>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter your name"
                        value={values.name}
                        onChange={onChangeHandler}
                        onBlur={onBlurHandler}
                        required='required'
                    />

                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={onChangeHandler}
                        onBlur={onBlurHandler}
                        className={errors.email && 'border__red'}
                    />
                    {errors.email && <p className="input__error">{errors.email}</p>}
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter you password"
                        value={values.password}
                        onChange={onChangeHandler}
                        onBlur={onBlurHandler}
                        className={errors.password && 'border__red'}
                    />
                    {errors.password && <p className="input__error">{errors.password}</p>}
                    <button type="submit">Sign Up</button>
                </form>
                    <Link to="/Signin" className='change__over' onClick={toggleForm}>Already Have an Account</Link>
                    <h1>
                {user.message ? user.message : user.email ? history.push('/') : ''}
            </h1>
            </div>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        user: state.user,
    };
};
export default connect(mapStateToProps, { userAuthentication })(Signup);
