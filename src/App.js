import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Homepage, About, Cart, Contact, Store,SingleProduct} from './components';
import Signup from'./components/auth/Signup'
import Signin from'./components/auth/Signin'
import PaymentForm from '../src/components/pages/paymentForm'
import success from '../src/components/pages/success'
import './App.css';
import axios from 'axios';


function App() {

  return (
    <BrowserRouter>
    <Switch>
      <Route exact path={'/'} component={Homepage}/>
      <Route exact path={'/store'} component={Store}/>
      <Route exact path={'/about'} component={About}/>
      <Route exact path={'/contact'} component={Contact}/>
      <Route exact path={'/cart'} component={Cart}/>
      <Route exact path={'/product:id'} component={SingleProduct}/>
      <Route exact path={'/Signup'} component={Signup}/>
      <Route exact path={'/Signin'} component={Signin}/>
      <Route exact path={'/pay'} component={PaymentForm}/>
      <Route exact path={'/success'} component={success}/>
    </Switch>
      
    </BrowserRouter>
    
  );
}

export default App;
