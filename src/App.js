import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import NotFound from './NotFound';
import ProductsPage from './ProductsPage/ProductsPage';
// import ProductDetailPage from './ProductDetailsPage/ProductDetailPage';
import CheckoutPage from './CheckoutPage/CheckoutPage';
import Cart from './CartPage/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Header />} >
            <Route index element={<ProductsPage />} />
            {/* <Route path='/productsPage' element={<ProductDetailPage />} /> */}
            <Route path='/checkoutPage' element={<CheckoutPage />} />
            <Route  path='/cart' element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
