// src/pages/StudentDashboard.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldAlert,
  Zap,
  BarChart3,
  CheckCircle2,
  AlertOctagon,
} from 'lucide-react';

import GlassCard from '../components/GlassCard';
import API from '../api';

const StudentDashboard = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    category: 'Electrical',
    description: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const stats = [
    {
      title: 'Active Issues',
      count: 3,
      icon: <ShieldAlert className="text-blue-500" />,
    },
    {
      title: 'Resolved Issues',
      count: 12,
      icon: <CheckCircle2 className="text-emerald-500" />,
    },
    {
      title: 'Warden Response',
      count: '14m',
      icon: <Zap className="text-orange-500" />,
    },
  ];

  const handleSubmit = async () => {
    if (!formData.title || !formData.description) {
      alert('Please fill all fields');
      return;
    }

    setAnalyzing(true);
    setAiAnalysis(null);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert("You are not logged in. Please login again.");
        setAnalyzing(false);
        return;
      }

      const res = await API.post('/complaints', formData);
      const complaint = res.data;

      setTimeout(() => {
        setAnalyzing(false);
        setAiAnalysis({
          priority: complaint.priority || 'Medium',
          score: complaint.priority === 'High' ? 9.2 : complaint.priority === 'Medium' ? 7.0 : 4.5,
          explanation: complaint.aiExplanation || 'Complaint submitted successfully and prioritized by AI.',
        });
        setFormData({ title: '', category: 'Electrical', description: '' });
      }, 1500);
    } catch (error) {
      setAnalyzing(false);
      if (error.response?.status === 401) {
        alert("Session expired. Please login again.");
        localStorage.removeItem("token");
      } else {
        alert("Failed to submit. Check backend connection.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-emerald-50 p-8 text-slate-900">
      {/* HEADER */}
      <header className="mb-12 flex justify-between items-center max-w-7xl mx-auto pt-10">
        <div>
          <motion.h1 className="text-5xl font-bold text-slate-900">
            Student Portal
          </motion.h1>
          <p className="text-slate-600">
            Manage and Track your hostel maintenance requests
          </p>
        </div>
      </header>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-7xl mx-auto">
        {stats.map((stat, i) => (
          <GlassCard key={i} className="flex items-center gap-6 bg-white border-emerald-100 shadow-md">
            <div className="p-3 bg-emerald-50 rounded-full">{stat.icon}</div>
            <div>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">{stat.title}</p>
              <p className="text-3xl font-bold text-slate-900">{stat.count}</p>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* FORM */}
      <div className="max-w-4xl mx-auto">
        <GlassCard className="bg-white border-emerald-100 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900">
            <AlertOctagon className="text-orange-500" />
            New Issue Report
          </h2>

          <input
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Complaint Title"
            className="w-full p-4 mb-4 bg-slate-50 border border-emerald-100 rounded-xl focus:ring-2 focus:ring-emerald-500/20 transition-all"
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="w-full p-4 mb-4 bg-slate-50 border border-emerald-100 rounded-xl focus:ring-2 focus:ring-emerald-500/20 transition-all"
          >
            <option>Electrical</option>
            <option>Plumbing</option>
            <option>Internet</option>
            <option>Furniture</option>
            <option>Sanitation</option>
          </select>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Describe your issue..."
            className="w-full p-4 mb-4 bg-slate-50 border border-emerald-100 rounded-xl focus:ring-2 focus:ring-emerald-500/20 transition-all"
            rows="4"
          />

          <button
            onClick={handleSubmit}
            disabled={analyzing}
            className="w-full bg-emerald-600 hover:bg-emerald-700 py-4 rounded-xl font-bold text-white shadow-lg transition-all"
          >
            {analyzing ? "AI Analysis in progress..." : "Submit Complaint"}
          </button>
        </GlassCard>
      </div>

      {/* AI RESPONSE */}
      <AnimatePresence>
        {aiAnalysis && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-10 max-w-4xl mx-auto">
            <GlassCard className="bg-white border-emerald-200 shadow-xl">
              <h3 className="text-xl font-bold text-emerald-700">AI Analysis Complete</h3>
              <p className="text-4xl font-bold mt-4 text-slate-900">{aiAnalysis.score}</p>
              <p className="mt-2 text-slate-700 font-semibold">Priority: {aiAnalysis.priority}</p>
              <p className="text-slate-600 mt-3">{aiAnalysis.explanation}</p>
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StudentDashboard;