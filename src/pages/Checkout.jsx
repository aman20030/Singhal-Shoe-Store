import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    alert("✅ Order placed successfully!");
    // Future: send data to backend here
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🧾 Order Summary</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Go back and add some shoes!</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item._id}
              style={{
                borderBottom: "1px solid #ccc",
                paddingBottom: "10px",
                marginBottom: "10px",
              }}
            >
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ₹{item.price * item.quantity}</p>
            </div>
          ))}

          <h3>Grand Total: ₹{totalPrice}</h3>

          <button
            onClick={handlePlaceOrder}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            🛍 Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
