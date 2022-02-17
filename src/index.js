import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/font-awesome/css/font-awesome.min.css";
// import CartState from './context/cart/CartState'
import { Provider } from 'react-redux';
import store from './redux/store'

ReactDOM.render(
  // <CartState >
      <Provider store={store}>
    <App />
  </Provider>,
  // </CartState>
  document.getElementById('root')
);
;

