import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import dummyShoes from '../data/dummyShoes'; // ✅
import './ProductDetail.css';
const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const shoe = dummyShoes.find((s) => s._id === id);

  if (!shoe) return <h2 style={{ padding: '20px' }}>Shoe not found!</h2>;

  return (
    <div style={{ padding: '20px', maxWidth: '700px', margin: 'auto' }}>
      <img
        src={shoe.image}
        alt={shoe.name}
        style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }}
      />
      <h2>{shoe.name}</h2>
      <p>₹{shoe.price}</p>
      <p>{shoe.description}</p>
      <button
        onClick={() => {
          console.log("👉 Add to Cart clicked:", shoe);
          addToCart(shoe);
        }}
        style={{
          marginTop: '15px',
          padding: '10px 20px',
          backgroundColor: '#111',
          color: 'white',
          borderRadius: '8px'
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
