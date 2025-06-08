import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional, or use global App.css

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Singhal Shoe Store</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Shop</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
