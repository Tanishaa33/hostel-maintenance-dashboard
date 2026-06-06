// src/pages/AdminDashboard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { AlertOctagon, CheckCircle2, Clock, Activity } from 'lucide-react';

const AdminDashboard = () => {
  // Mock Data for Charts
  const categoryData = [
    { name: 'Electrical', count: 45 },
    { name: 'Plumbing', count: 30 },
    { name: 'Internet', count: 55 },
    { name: 'Furniture', count: 15 },
    { name: 'Sanitation', count: 25 },
  ];

  const trendData = [
    { day: 'Mon', issues: 12 },
    { day: 'Tue', issues: 19 },
    { day: 'Wed', issues: 15 },
    { day: 'Thu', issues: 22 },
    { day: 'Fri', issues: 30 },
    { day: 'Sat', issues: 28 },
    { day: 'Sun', issues: 10 },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white p-8 font-sans pt-20">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#00D4FF] to-[#0099FF]">
              Warden Operations Center
            </h1>
            <p className="text-gray-400 mt-2">AI-Assisted Maintenance Overview</p>
          </div>
          <button className="bg-red-500/20 text-red-400 border border-red-500/50 px-6 py-3 rounded-lg font-bold hover:bg-red-500/30 transition-colors flex items-center gap-2">
            <AlertOctagon size={20} /> View Critical Alerts
          </button>
        </div>

        {/* Top Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Total Pending", value: "48", icon: <Activity className="text-blue-400" /> },
            { label: "AI Critical Flags", value: "12", icon: <AlertOctagon className="text-red-400" /> },
            { label: "Resolved Today", value: "24", icon: <CheckCircle2 className="text-green-400" /> },
            { label: "Avg Resolution", value: "3.2h", icon: <Clock className="text-yellow-400" /> }
          ].map((stat, i) => (
            <div key={i} className="bg-[#0F172A]/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
                <p className="text-3xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className="bg-[#050816] p-3 rounded-full">{stat.icon}</div>
            </div>
          ))}
        </div>

        {/* Charts & AI Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Bar Chart */}
          <div className="lg:col-span-2 bg-[#0F172A]/40 border border-white/5 p-6 rounded-3xl">
            <h3 className="text-xl font-semibold mb-6">Issues by Category</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData}>
                  <XAxis dataKey="name" stroke="#8884d8" />
                  <YAxis stroke="#8884d8" />
                  <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: '#0F172A', borderColor: '#00D4FF', color: '#fff' }} />
                  <Bar dataKey="count" fill="#00D4FF" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* AI Predictive Panel */}
          <div className="bg-linear-to-b from-[#0F172A] to-[#050816] border border-[#0099FF]/30 p-6 rounded-3xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#0099FF] opacity-10 blur-[80px] rounded-full"></div>
             <h3 className="text-xl font-semibold mb-6 text-[#0099FF]">AI Predictive Maintenance</h3>
             <div className="space-y-4 relative z-10">
                <div className="bg-slate-800/50 p-4 rounded-xl border border-gray-700">
                  <p className="text-sm text-yellow-400 font-bold mb-1">⚠️ High Probability Failure</p>
                  <p className="text-gray-300 text-sm">Based on recent electrical ticket spikes, Block B main breaker is predicted to trip within 48 hours.</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-xl border border-gray-700">
                  <p className="text-sm text-blue-400 font-bold mb-1">💡 AI Recommendation</p>
                  <p className="text-gray-300 text-sm">Deploy plumber to Block C ground floor; 4 minor leaks reported indicating main pipe pressure issue.</p>
                </div>
             </div>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default AdminDashboard;