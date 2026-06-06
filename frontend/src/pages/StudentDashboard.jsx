
// src/pages/StudentDashboard.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Zap, BarChart3, Clock, CheckCircle2, CloudUpload, AlertOctagon } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { submitComplaint } from '../utils/api'; // Ensure this utility file exists

const StudentDashboard = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState(null);
  
  // NEW: State to hold form data
  const [formData, setFormData] = useState({
    title: '',
    category: 'Electrical',
    description: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const stats = [
    { title: "Active Issues", count: 3, icon: <ShieldAlert className="text-neonBlue" /> },
    { title: "Resolved Issues", count: 12, icon: <CheckCircle2 className="text-green-400" /> },
    { title: "Warden Response", count: "14m", icon: <Zap className="text-yellow-400" /> }
  ];

  const handleSubmit = async () => {
    setAnalyzing(true);
    setAiAnalysis(null);
    
    try {
        // Send data to backend via our API utility
        await submitComplaint(formData);
        
        // Simulate AI logic delay
        setTimeout(() => {
            setAnalyzing(false);
            setAiAnalysis({
                priority: 'High',
                score: 8.7,
                explanation: `AI Analysis for "${formData.title}": Safety Risk detected. Location: Hostal Block. Priority adjusted based on urgency.`
            });
        }, 2500);
    } catch (err) {
        alert("Backend not connected! Check your server.");
        setAnalyzing(false);
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-spaceNavy p-8 text-white">
      <header className="mb-12 flex justify-between items-center max-w-7xl mx-auto pt-10">
        <div>
          <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-5xl font-extrabold tracking-tighter">
            Student Portal
          </motion.h1>
          <p className="text-gray-400 mt-2">Manage and Track your hostel maintenance requests</p>
        </div>
        <div className="flex gap-4">
            <span className="text-sm font-medium hover:text-neonBlue">Settings</span>
            <div className="w-10 h-10 rounded-full bg-slate-900 border border-neonBlue shadow-glow flex items-center justify-center font-bold">JD</div>
        </div>
      </header>

      <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-7xl mx-auto">
        {stats.map((stat, i) => (
          <GlassCard key={i} className="flex items-center gap-6">
            <div className="p-4 bg-slate-900 rounded-full">{stat.icon}</div>
            <div>
              <p className="text-gray-400 text-sm">{stat.title}</p>
              <p className="text-4xl font-bold mt-1 tracking-tight">{stat.count}</p>
            </div>
          </GlassCard>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        <motion.div initial={{opacity: 0, y: 30}} animate={{opacity: 1, y: 0}} transition={{delay: 0.3}} className="lg:col-span-2">
            <GlassCard>
                <h2 className="text-3xl font-extrabold tracking-tighter mb-8 flex items-center gap-3">
                  <AlertOctagon className="text-red-400" /> New Issue Report
                </h2>
                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                        <input name="title" onChange={handleInputChange} type="text" placeholder="Complaint Title" className="w-full bg-slate-900/40 border border-cardBorder rounded-xl p-4 text-offWhite focus:ring-1 focus:ring-neonBlue transition-colors" />
                        <select name="category" onChange={handleInputChange} className="w-full bg-slate-900/40 border border-cardBorder rounded-xl p-4 text-gray-400">
                            <option value="Electrical">Electrical</option>
                            <option value="Plumbing">Plumbing</option>
                            <option value="Internet">Internet</option>
                        </select>
                    </div>
                    <textarea name="description" onChange={handleInputChange} placeholder="Describe details..." rows="4" className="w-full bg-slate-900/40 border border-cardBorder rounded-xl p-4 text-offWhite focus:ring-1 focus:ring-neonBlue"></textarea>
                    
                    <motion.button 
                      type="button" 
                      onClick={handleSubmit}
                      disabled={analyzing}
                      className="w-full py-5 rounded-2xl bg-gradient-to-r from-neonBlue to-electricBlue font-bold text-lg text-spaceNavy shadow-glow disabled:opacity-60 transition-all"
                    >
                      {analyzing ? "AI Triage Engine Analyzing..." : "Analyze & Submit Issue"}
                    </motion.button>
                </form>
            </GlassCard>
        </motion.div>

        <AnimatePresence>
        {(analyzing || aiAnalysis) && (
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 40 }} className="relative">
              {analyzing && (
                  <GlassCard className="h-full flex flex-col items-center justify-center text-center border-neonBlue shadow-glow">
                      <BarChart3 size={40} className="text-neonBlue animate-pulse mb-6" />
                      <h3 className="text-3xl font-bold">Analyzing...</h3>
                  </GlassCard>
              )}
              {aiAnalysis && (
                  <GlassCard className="h-full border-green-500/30">
                        <h3 className="text-3xl font-bold text-green-400 mb-8">AI PRIORITY RADAR</h3>
                        <div className="bg-slate-900 p-5 rounded-2xl mb-8 border border-cardBorder">
                            <p className="text-7xl font-extrabold text-red-500">{aiAnalysis.score}</p>
                            <p className="text-xl font-semibold">Priority: {aiAnalysis.priority}</p>
                        </div>
                        <p className="text-gray-400 text-sm">{aiAnalysis.explanation}</p>
                  </GlassCard>
              )}
            </motion.div>
        )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StudentDashboard;