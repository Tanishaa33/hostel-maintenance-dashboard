import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = "" }) => {
  return (
    <motion.div 
      whileHover={{ y: -5, boxShadow: "0 20px 30px -10px rgba(16, 185, 129, 0.2)" }}
      className={`bg-white/70 backdrop-blur-2xl border border-white/50 shadow-xl rounded-3xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;