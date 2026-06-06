import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatedCounter = ({ from = 0, to, duration = 2, delay = 0.5 }) => {
  const [count, setCount] = useState(from);
  const controls = useAnimation();

  useEffect(() => {
    let start = null;
    const animateCount = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const currentCount = Math.floor(progress * (to - from) + from);
      setCount(currentCount);
      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    };

    setTimeout(() => {
      requestAnimationFrame(animateCount);
    }, delay * 1000);

  }, [to, from, duration, delay]);

  return <>{count}</>;
};

export default AnimatedCounter;