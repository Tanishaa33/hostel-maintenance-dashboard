import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { AlertOctagon, CheckCircle2, Clock, Activity, Settings } from 'lucide-react';
import API from '../api';
import GlassCard from '../components/GlassCard';

const AdminDashboard = () => {

  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await API.get("/complaints", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setComplaints(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const categoryData = [
    { name: "High", count: complaints.filter((c) => c.priority === "High").length },
    { name: "Medium", count: complaints.filter((c) => c.priority === "Medium").length },
    { name: "Low", count: complaints.filter((c) => c.priority === "Low").length },
  ];

  const pendingCount = complaints.filter((c) => c.status === "Pending").length;
  const resolvedCount = complaints.filter((c) => c.status === "Resolved").length;
  const criticalCount = complaints.filter((c) => c.priority === "High").length;
  
  return (
    <div className="min-h-screen bg-emerald-50 text-slate-900 p-8 pt-20">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
              Warden Operations Center
            </h1>
            <p className="text-slate-600 mt-2">AI-Assisted Maintenance Overview</p>
          </div>
          <button className="bg-red-50 text-red-600 border border-red-200 px-6 py-3 rounded-lg font-bold hover:bg-red-100 transition-colors flex items-center gap-2">
            <AlertOctagon size={20} /> View Critical Alerts
          </button>
        </div>

        {/* Top Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Total Pending", value: pendingCount, icon: <Activity className="text-blue-500" /> },
            { label: "AI Critical Flags", value: criticalCount, icon: <AlertOctagon className="text-red-500" /> },
            { label: "Resolved", value: resolvedCount, icon: <CheckCircle2 className="text-emerald-600" /> },
            { label: "Total Complaints", value: complaints.length, icon: <Clock className="text-orange-500" /> }
          ].map((stat, i) => (
            <div key={i} className="bg-white border border-emerald-100 p-6 rounded-3xl shadow-sm flex items-center justify-between">
              <div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
                <p className="text-3xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className="bg-emerald-50 p-3 rounded-full">{stat.icon}</div>
            </div>
          ))}
        </div>

        {/* Charts & AI Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Bar Chart */}
          <div className="lg:col-span-2 bg-white border border-emerald-100 p-8 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold mb-6">Issues by Category</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData}>
                  <XAxis dataKey="name" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '12px', borderColor: '#e2e8f0' }} />
                  <Bar dataKey="count" fill="#10b981" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* AI Predictive Panel */}
          <div className="bg-gradient-to-br from-white to-emerald-50 border border-emerald-100 p-8 rounded-3xl shadow-sm">
             <h3 className="text-xl font-bold mb-6 text-emerald-700">AI Predictive Maintenance</h3>
             <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl border border-orange-100 shadow-sm">
                  <p className="text-sm text-orange-600 font-bold mb-1">⚠️ High Probability Failure</p>
                  <p className="text-slate-600 text-sm">Based on recent electrical ticket spikes, Block B main breaker is predicted to trip within 48 hours.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm">
                  <p className="text-sm text-emerald-600 font-bold mb-1">💡 AI Recommendation</p>
                  <p className="text-slate-600 text-sm">Deploy plumber to Block C ground floor; 4 minor leaks reported indicating main pipe pressure issue.</p>
                </div>
             </div>
          </div>
        </div>

        {/* Complaints Table */}
        <div className="bg-white border border-emerald-100 rounded-3xl p-8 shadow-sm">
          <h3 className="text-xl font-bold mb-6">Recent Complaints</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-emerald-50 text-slate-500 text-sm uppercase tracking-wider">
                  <th className="py-4">Title</th>
                  <th className="py-4">Priority</th>
                  <th className="py-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map((item) => (
                  <tr key={item._id} className="border-b border-emerald-50 hover:bg-emerald-50/50 transition-colors">
                    <td className="py-4 font-medium">{item.title}</td>
                    <td className="py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            item.priority === 'High' ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-600'
                        }`}>
                            {item.priority}
                        </span>
                    </td>
                    <td className="py-4 text-slate-600">{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;