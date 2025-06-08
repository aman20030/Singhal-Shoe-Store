import { Link } from 'react-router-dom';

const ShoeCard = ({ shoe }) => {
  return (
    <div className="shoe-card">
      <img src={shoe.image} alt={shoe.name} />
      <h3>{shoe.name}</h3>
      <p>₹{shoe.price}</p>
      <Link to={`/product/${shoe._id}`} className="view-btn">View</Link>
    </div>
  );
};

export default ShoeCard;
