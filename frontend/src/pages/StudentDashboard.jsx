// src/pages/StudentDashboard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Zap, CheckCircle } from 'lucide-react';

const StudentDashboard = () => {
  const stats = [
    { title: "Active Issues", count: 3, icon: <AlertTriangle className="text-[#00D4FF]" /> },
    { title: "Resolved", count: 12, icon: <CheckCircle className="text-green-400" /> },
    { title: "Avg. Resolution", count: "4.2 hrs", icon: <Zap className="text-yellow-400" /> }
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white p-8 font-sans pt-20">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-blue-500">
          Student Portal
        </h1>
        <p className="text-gray-400 mt-2">Manage your hostel maintenance requests</p>
      </motion.div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-6xl mx-auto">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(0, 212, 255, 0.2)" }}
            className="bg-[#0F172A]/50 backdrop-blur-md border border-[#00D4FF]/20 p-6 rounded-2xl flex items-center justify-between"
          >
            <div>
              <h3 className="text-gray-400 text-sm">{stat.title}</h3>
              <p className="text-3xl font-bold mt-1">{stat.count}</p>
            </div>
            <div className="p-3 bg-[#050816] rounded-full">{stat.icon}</div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Form Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 bg-[#0F172A]/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl"
        >
          <h2 className="text-2xl font-semibold mb-6">Report New Issue</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Complaint Title (e.g. Broken Fan)" className="w-full bg-[#050816] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors" />
              <select className="w-full bg-[#050816] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#00D4FF]">
                <option value="">Select Category</option>
                <option value="Electrical">Electrical</option>
                <option value="Plumbing">Plumbing</option>
                <option value="Internet">Internet</option>
                <option value="Sanitation">Sanitation</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Hostel Block (e.g. Block A)" className="w-full bg-[#050816] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors" />
              <input type="text" placeholder="Room Number (e.g. 402)" className="w-full bg-[#050816] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#00D4FF] transition-colors" />
            </div>
            <textarea placeholder="Describe the issue in detail..." rows="4" className="w-full bg-[#050816] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-[#00D4FF]"></textarea>
            
            <motion.button 
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00D4FF] to-blue-600 font-bold text-lg text-white shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] transition-shadow"
            >
              Analyze & Submit via AI
            </motion.button>
          </form>
        </motion.div>

        {/* AI Insights Panel */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-b from-[#0F172A] to-[#050816] border border-[#00D4FF]/30 p-8 rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D4FF] opacity-10 blur-[80px] rounded-full"></div>
          
          <h2 className="text-xl font-semibold mb-6 text-[#00D4FF]">AI Priority Radar</h2>
          <div className="space-y-4 relative z-10">
            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-red-400 font-medium">Room 402 Wiring</span>
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-md">Critical</span>
              </div>
              <p className="text-sm text-gray-400">AI Priority Score: 9.4/10</p>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-yellow-400 font-medium">Block B Wi-Fi</span>
                <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-md">High</span>
              </div>
              <p className="text-sm text-gray-400">AI Priority Score: 7.2/10</p>
            </div>
            <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="text-green-400 font-medium">Block C Leaky Tap</span>
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-md">Low</span>
              </div>
              <p className="text-sm text-gray-400">AI Priority Score: 2.1/10</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default StudentDashboard;