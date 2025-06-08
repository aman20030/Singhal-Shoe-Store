import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";

const dummyShoes = [
  {
    _id: "1",
    name: "Nike Air Max",
    image: "https://via.placeholder.com/700x400?text=Nike+Air+Max",
    price: 5999,
  },
  {
    _id: "2",
    name: "Adidas Ultraboost",
    image: "https://via.placeholder.com/700x400?text=Adidas+Ultraboost",
    price: 6499,
  },
  {
    _id: "3",
    name: "Puma RS-X",
    image: "https://via.placeholder.com/700x400?text=Puma+RS-X",
    price: 5499,
  },
];

const ProductList = () => {
  return (
    <div className="product-list-container">
      <h2 className="product-heading">🛍 Explore Our Shoes</h2>
      <div className="product-grid">
        {dummyShoes.map((shoe) => (
          <div key={shoe._id} className="product-card">
            <img src={shoe.image} alt={shoe.name} />
            <h3>{shoe.name}</h3>
            <p>₹{shoe.price}</p>
            <Link to={`/product/${shoe._id}`}>
              <button className="view-btn">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
