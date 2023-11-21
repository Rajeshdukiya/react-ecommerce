import { Counter } from './features/counter/Counter.js';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import Cart from './features/cart/Cart.js';
import CartPage from './pages/CartPage';
import ProductDetail from './features/product/components/ProductDetail.js';
import Checkout from './pages/Checkout.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/signup',
    element: <SignupPage></SignupPage>,
  },
  { // only for testing - then page will be added
    path: '/cart',
    element: <CartPage></CartPage>,
  },
  { path:'/checkout',
    element:<Checkout></Checkout>
  },
  {
    path: '/product-detail',
    element: <ProductDetail></ProductDetail>
  }

]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;