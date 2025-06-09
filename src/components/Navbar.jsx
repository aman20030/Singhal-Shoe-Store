import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    // ✅ Remove token & user from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // ✅ Redirect to login page
    navigate('/login');

    // (Optional) Reload to refresh Navbar UI
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <h2>Singhal Shoe Store</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Shop</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>

        {user ? (
          <>
            <li>Hello, {user.name}</li>
            <li>
              <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
