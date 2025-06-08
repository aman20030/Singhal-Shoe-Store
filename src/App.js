import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home.jsx';
import ProductList from './pages/ProductList.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Cart from './pages/Cart.jsx';
import Profile from './pages/Profile.jsx';
import { CartProvider } from "./context/CartContext";
// Navbar Component
import Navbar from './components/Navbar.jsx';
import Checkout from './pages/Checkout.jsx';

function App() {
  return (
     <CartProvider>
    <Router>
      
      <Navbar /> {/* ✅ Yeh navbar sab pages pe dikhega */}
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;
