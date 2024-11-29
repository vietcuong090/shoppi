import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './page/Home';
import Collection from './page/Collection';
import About from './page/About';
import Contact from './page/Contact';
import Product from './page/Product';
import Cart from './page/Cart';
import Login from './page/Login';
import PlaceOrder from './page/PlaceOrder';
import Order from './page/Order';
import Verify from './page/Verify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <main className='overflow-hidden text-[#404040] bg-primary'>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Order />} />
        <Route path='/verify' element={<Verify />} />
      </Routes>
    </main>
  );
}
