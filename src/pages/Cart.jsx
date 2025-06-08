import { useCart } from "../context/CartContext";
import './Cart.css';
const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  return (
    <div style={{ padding: '20px' }}>
      <h2>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item._id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} style={{ width: '200px' }} />
            <p>₹{item.price}</p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button onClick={() => updateQuantity(item._id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item._id, item.quantity + 1)}>+</button>
              <button onClick={() => removeFromCart(item._id)} style={{ color: 'red' }}>🗑 Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
