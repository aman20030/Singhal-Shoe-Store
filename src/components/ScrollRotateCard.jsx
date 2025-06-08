// src/components/ScrollRotateCard.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./ScrollRotateCard.css";

const ScrollRotateCard = ({ image, title }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], ["-15deg", "15deg"]);

  return (
    <motion.div
      className="scroll-card"
      ref={ref}
      style={{ rotateY: rotate }}
    >
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </motion.div>
  );
};

export default ScrollRotateCard;
