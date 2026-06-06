import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Zap, BarChart3, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const features = [
    { icon: <Zap className="w-8 h-8 text-[#00D4FF]" />, title: "AI Priority Scoring", desc: "Instantly ranks issues by severity and safety risk." },
    { icon: <ShieldAlert className="w-8 h-8 text-red-400" />, title: "Emergency Alerts", desc: "Warden notifications for critical hazards." },
    { icon: <BarChart3 className="w-8 h-8 text-[#0099FF]" />, title: "Real-Time Analytics", desc: "Track resolution times and hostel performance." },
    { icon: <Clock className="w-8 h-8 text-green-400" />, title: "Predictive Maintenance", desc: "Identify failure trends before they happen." },
  ];

  return (
    <div className="min-h-screen bg-[#050816] relative overflow-hidden flex flex-col items-center pt-20">
      
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00D4FF]/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#0099FF]/20 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl px-6"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Transform Hostel Maintenance with <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#0099FF]">
            AI-Powered Prioritization
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Automatically identify, rank, and resolve critical hostel issues before they become emergencies. Built for modern campus operations.
        </p>
        
        <div className="flex justify-center gap-6">
          <Link to="/student-dashboard">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 212, 255, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#00D4FF] to-[#0099FF] rounded-full font-bold text-[#050816] shadow-lg transition-all"
            >
              Report Issue
            </motion.button>
          </Link>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-24 z-10 px-6 max-w-5xl w-full mb-20">
        {features.map((feature, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + (idx * 0.1) }}
            whileHover={{ y: -5, borderColor: "rgba(0, 212, 255, 0.5)" }}
            className="bg-[#0F172A]/50 backdrop-blur-xl border border-white/10 p-8 rounded-2xl flex flex-col items-start"
          >
            <div className="bg-[#050816] p-4 rounded-xl border border-white/5 mb-6">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;