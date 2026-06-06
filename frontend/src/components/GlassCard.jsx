import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
      whileHover={{ y: -8, scale: 1.01, boxShadow: "0 0 25px rgba(0, 212, 255, 0.6)", borderColor: 'rgba(0, 212, 255, 0.3)' }}
      className={`relative p-6 bg-cardDark/50 backdrop-blur-xl border border-white/10 rounded-3xl ${className}`}
    >
      {/* Subtle shine effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
};

export default GlassCard;