import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Wifi,
  Settings,
  Zap,
  BarChart3,
  AlertOctagon,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingMaintenanceIcons from '../components/FloatingMaintenanceIcons';
import GlassCard from '../components/GlassCard';
import AnimatedCounter from '../components/AnimatedCounter';
import API from '../api';

const LandingPage = () => {
  const [stats, setStats] = useState({
    totalComplaints: 0,
    pending: 0,
    resolved: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await API.get('/complaints');
      const complaints = res.data;
      setStats({
        totalComplaints: complaints.length,
        pending: complaints.filter((c) => c.status === 'Pending').length,
        resolved: complaints.filter((c) => c.status === 'Resolved').length,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 15 } }
  };

  const features = [
    {
      title: 'Smart AI Triage',
      desc: 'Our AI engine automatically categorizes and prioritizes incoming issues based on safety risks and urgency.',
      icon: <Zap size={32} className="text-emerald-600" />
    },
    {
      title: 'Real-Time Tracking',
      desc: 'Students receive live updates on their maintenance requests without having to constantly visit the warden office.',
      icon: <Wifi size={32} className="text-emerald-600" />
    },
    {
      title: 'Predictive Analytics',
      desc: 'Identify failing infrastructure before it breaks. Track historical data to warn about recurring electrical faults.',
      icon: <BarChart3 size={32} className="text-emerald-600" />
    },
    {
      title: 'Seamless Resolution',
      desc: 'A dedicated workspace for facility managers to assign staff, update statuses, and close out tickets with one click.',
      icon: <CheckCircle size={32} className="text-emerald-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-emerald-50 relative overflow-hidden flex flex-col items-center">
      <FloatingMaintenanceIcons />

      <header className="fixed top-0 left-0 right-0 h-20 border-b border-emerald-100 bg-white/80 backdrop-blur-md z-50 flex items-center justify-between px-10 shadow-sm">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3">
          <Zap className="text-emerald-600" fill="currentColor" />
          <span className="text-2xl font-bold tracking-tight text-emerald-900">Hostel<span className="text-emerald-600">AI</span></span>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4">
          <Link to="/login" className="text-sm font-medium text-emerald-800 hover:text-emerald-600 mt-1.5">Log In</Link>
          <Link to="/signup" className="text-sm px-5 py-2 bg-emerald-600 rounded-full font-bold text-white shadow-md hover:scale-105 transition-transform">Sign Up</Link>
        </motion.div>
      </header>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mt-40 text-center z-10 max-w-5xl px-6 flex flex-col items-center"
      >
        <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-tight text-slate-900">
          Transform Hostel Maintenance with <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-orange-400">
            AI-Powered Prioritization
          </span>
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-slate-700 text-xl md:text-2xl mb-12 max-w-3xl leading-relaxed">
          Automatically identify, rank, and resolve critical hostel issues before they become emergencies. Seamlessly connecting students, wardens, and staff.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex gap-6 mb-20">
          <Link to={localStorage.getItem("token") ? "/student-dashboard" : "/login"}>            
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 25px -5px rgba(16, 185, 129, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-emerald-600 rounded-full font-bold text-lg text-white shadow-xl transition-all"
            >
              Report Issue
            </motion.button>
          </Link>
          <Link to={localStorage.getItem("token") ? "/admin-dashboard" : "/login"}>            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white border border-emerald-200 hover:border-emerald-500 rounded-full font-bold text-lg text-emerald-900 shadow-sm transition-all flex items-center gap-3"
            >
              <BarChart3 className="text-emerald-600" /> View Dashboard
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div variants={containerVariants} className="z-10 px-6 max-w-7xl w-full mb-32 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: 'Total complaints handled', value: stats.totalComplaints || 125, icon: <Settings className="text-emerald-600" /> },
          { label: 'Pending Issues in Queue', value: stats.pending || 4, unit: '', icon: <AlertOctagon className="text-orange-500" /> },
          { label: 'Issues Resolved by AI', value: stats.resolved || 121, unit: '', icon: <CheckCircle className="text-emerald-500" /> }
        ].map((stat, i) => (
          <motion.div key={i} variants={itemVariants}>
            <GlassCard className="bg-white border-emerald-100 shadow-lg flex items-center gap-4">
                <div className="p-3 bg-emerald-50 rounded-full">{stat.icon}</div>
                <div>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
                    <p className="text-3xl font-bold text-slate-900"><AnimatedCounter to={stat.value} duration={1.5} /></p>
                </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 z-10 px-6 max-w-7xl w-full mb-40"
      >
        <motion.div variants={itemVariants} className="md:col-span-2 mb-10 text-center">
            <h2 className="text-5xl font-bold tracking-tight text-slate-900">Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-orange-400">Zero Interruptions</span></h2>
        </motion.div>
        
        {features.map((feature, idx) => (
          <motion.div key={idx} variants={itemVariants} className="group">
            <GlassCard className="h-full flex flex-col bg-white border-emerald-100 shadow-lg transition-shadow">
              <div className="mb-6 p-3 rounded-xl bg-emerald-50 inline-block self-start">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-extrabold mb-3 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>

      <footer className="z-10 w-full px-10 py-16 border-t border-emerald-100 bg-white/50 backdrop-blur-sm text-center">
        <h3 className="text-4xl font-bold tracking-tight mb-4 text-slate-900">Warden, is your hostel <span className="text-emerald-600">AI Ready</span>?</h3>
        <motion.button whileHover={{ scale: 1.05 }} className="px-8 py-3 bg-white border border-emerald-300 hover:border-emerald-500 hover:text-emerald-600 rounded-full font-bold text-lg text-slate-800 shadow-sm transition-all flex items-center gap-2 mx-auto">
          Request Demo
        </motion.button>
      </footer>
    </div>
  );
};

export default LandingPage;