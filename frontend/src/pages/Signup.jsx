import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center relative overflow-hidden py-10">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#00D4FF]/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg bg-[#0F172A]/60 backdrop-blur-xl border border-white/10 p-8 rounded-3xl z-10 shadow-2xl mx-4"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
          <p className="text-gray-400 text-sm">Join the AI-powered campus platform</p>
        </div>

        <form className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400 text-xs mb-1">Full Name</label>
              <input type="text" placeholder="John Doe" className="w-full bg-[#050816] border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors" />
            </div>
            <div>
              <label className="block text-gray-400 text-xs mb-1">Role</label>
              <select className="w-full bg-[#050816] border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors">
                <option>Student</option>
                <option>Maintenance Staff</option>
                <option>Hostel Admin</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-400 text-xs mb-1">Hostel Block</label>
              <input type="text" placeholder="Block A" className="w-full bg-[#050816] border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors" />
            </div>
            <div>
              <label className="block text-gray-400 text-xs mb-1">Room Number</label>
              <input type="text" placeholder="402" className="w-full bg-[#050816] border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors" />
            </div>
          </div>

          <div>
            <label className="block text-gray-400 text-xs mb-1">Email Address</label>
            <input type="email" placeholder="student@university.edu" className="w-full bg-[#050816] border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors" />
          </div>
          
          <div>
            <label className="block text-gray-400 text-xs mb-1">Password</label>
            <input type="password" placeholder="••••••••" className="w-full bg-[#050816] border border-gray-700 rounded-xl p-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors" />
          </div>

          <Link to="/student-dashboard" className="block mt-6">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00D4FF] to-blue-600 font-bold text-white shadow-[0_0_15px_rgba(0,212,255,0.3)] transition-all"
            >
              Sign Up
            </motion.button>
          </Link>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-400">
              Already have an account? <Link to="/login" className="text-[#00D4FF] hover:underline">Log in</Link>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;