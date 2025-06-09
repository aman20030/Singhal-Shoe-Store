import React, { useRef, useEffect } from 'react';
import './Home.css';
import { fetchData } from "../api/api";
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollCard = ({ img, title, btnText }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ['-10deg', '10deg']);

  return (
    <motion.div
      className="shoe-card"
      ref={ref}
      style={{ rotateY: rotate }}
    >
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <Link to="/products">
        <button>{btnText}</button>
      </Link>
    </motion.div>
  );
};

const Home = () => {
  useEffect(() => {
    fetchData().then((data) => {
      console.log("✅ API Test Response:", data);
    }).catch((err) => {
      console.error("❌ API Call Failed:", err);
    });
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Singhal Shoe Store 👟</h1>
      <p className="home-subtitle">Find your perfect pair!</p>

      <div className="shoe-card-container">
        <ScrollCard
          img="https://via.placeholder.com/400x300?text=Best+Sellers"
          title="Best Sellers"
          btnText="View Products"
        />
        <ScrollCard
          img="https://via.placeholder.com/400x300?text=New+Arrivals"
          title="New Arrivals"
          btnText="Shop Now"
        />
      </div>
    </div>
  );
};

export default Home;
