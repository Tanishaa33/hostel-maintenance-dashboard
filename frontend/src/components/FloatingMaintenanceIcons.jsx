import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Wifi, Droplets, Wrench, Settings } from 'lucide-react';

const icons = [Zap, Wifi, Droplets, Wrench, Settings];

const FloatingMaintenanceIcons = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {Array.from({ length: 25 }).map((_, i) => {
        const Icon = icons[Math.floor(Math.random() * icons.length)];
        const size = Math.random() * 20 + 20; // Size between 20-40px
        const delay = Math.random() * 5;
        const duration = Math.random() * 5 + 10;
        
        return (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%"
            }}
            animate={{ 
              opacity: [0, 0.4, 0],
              y: [0, -40, 0],
              rotate: [0, 360, 0]
            }}
            transition={{ 
              duration, 
              delay, 
              repeat: Infinity,
              repeatType: "loop", 
              ease: "linear"
            }}
            className="absolute p-3 rounded-full bg-slate-900/40 backdrop-blur-xs border border-cardBorder"
            style={{ 
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            <Icon size={size} className="text-neonBlue" strokeWidth={1} />
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingMaintenanceIcons;