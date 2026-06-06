// src/pages/Login.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[10%] left-[20%] w-96 h-96 bg-[#00D4FF]/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[20%] w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-[#0F172A]/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl z-10 shadow-2xl"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
          <p className="text-gray-400 text-sm">Sign in to your AI Hostel Dashboard</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-400 text-sm mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="student@hostel.edu" 
              className="w-full bg-[#050816] border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-gray-400 text-sm mb-2">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full bg-[#050816] border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-400">
              <input type="checkbox" className="rounded border-gray-700 bg-[#050816]" />
              Remember me
            </label>
            <a href="#" className="text-[#00D4FF] hover:underline">Forgot Password?</a>
          </div>

          {/* For Hackathon demo purposes, we link straight to the dashboard */}
          <Link to="/student-dashboard" className="block mt-4">
            <motion.button 
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-xl bg-linear-to-r from-[#00D4FF] to-blue-600 font-bold text-white shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all"
            >
              Sign In
            </motion.button>
          </Link>
        </form>

      </motion.div>
    </div>
  );
};

export default Login;