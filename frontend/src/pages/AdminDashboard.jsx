import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  AlertTriangle,
  Clock,
  CheckCircle2,
  Flame,
} from "lucide-react";

import GlassCard from "../components/GlassCard";
import API from "../api";

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState([]);

  // FETCH COMPLAINTS
  const fetchComplaints = async () => {
    try {
      const res = await API.get("/complaints");
      setComplaints(res.data.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  // STATUS COUNTS
  const total = complaints.length;

  const pending = complaints.filter(
    (c) => c.status === "Pending"
  ).length;

  const resolved = complaints.filter(
    (c) => c.status === "Resolved"
  ).length;

  // PRIORITY COUNTS
  const highPriority = complaints.filter(
    (c) => c.priority === "High"
  ).length;

  const mediumPriority = complaints.filter(
    (c) => c.priority === "Medium"
  ).length;

  const lowPriority = complaints.filter(
    (c) => c.priority === "Low"
  ).length;

  // STATS CARDS
  const stats = [
    {
      title: "Total Complaints",
      count: total,
      icon: <AlertTriangle className="text-orange-500" />,
    },
    {
      title: "Pending",
      count: pending,
      icon: <Clock className="text-yellow-500" />,
    },
    {
      title: "Resolved",
      count: resolved,
      icon: <CheckCircle2 className="text-emerald-500" />,
    },
    {
      title: "High Priority",
      count: highPriority,
      icon: <Flame className="text-red-500" />,
    },
  ];

  // CATEGORY BAR GRAPH DATA
  const barData = [
    {
      name: "Electrical",
      value: complaints.filter(
        (c) => c.category === "Electrical"
      ).length,
    },
    {
      name: "Internet",
      value: complaints.filter(
        (c) => c.category === "Internet"
      ).length,
    },
    {
      name: "Plumbing",
      value: complaints.filter(
        (c) => c.category === "Plumbing"
      ).length,
    },
    {
      name: "Furniture",
      value: complaints.filter(
        (c) => c.category === "Furniture"
      ).length,
    },
    {
      name: "Sanitation",
      value: complaints.filter(
        (c) => c.category === "Sanitation"
      ).length,
    },
    {
      name: "Other",
      value: complaints.filter(
        (c) => c.category === "Other"
      ).length,
    },
  ];

  return (
    <div className="min-h-screen bg-emerald-50 text-slate-900 p-8">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto pt-10 mb-10">
        <motion.h1 className="text-5xl font-bold">
          Admin Dashboard
        </motion.h1>

        <p className="text-slate-600">
          Category-wise complaint analytics
        </p>
      </div>

      {/* STATS */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, i) => (
          <GlassCard
            key={i}
            className="bg-white border-emerald-100 flex items-center gap-4"
          >
            <div className="p-3 bg-emerald-50 rounded-full">
              {stat.icon}
            </div>

            <div>
              <p className="text-sm text-slate-500">
                {stat.title}
              </p>

              <p className="text-3xl font-bold">
                {stat.count}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* PRIORITY LEVELS */}
      <div className="max-w-7xl mx-auto mb-10">
        <GlassCard className="bg-white border-emerald-100">
          <h2 className="text-xl font-bold mb-6">
            Complaint Priority Levels
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-red-50 border border-red-200">
              <h3 className="text-red-600 font-semibold">
                High Priority
              </h3>

              <p className="text-5xl font-bold text-red-500">
                {highPriority}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-yellow-50 border border-yellow-200">
              <h3 className="text-yellow-600 font-semibold">
                Medium Priority
              </h3>

              <p className="text-5xl font-bold text-yellow-500">
                {mediumPriority}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-green-50 border border-green-200">
              <h3 className="text-green-600 font-semibold">
                Low Priority
              </h3>

              <p className="text-5xl font-bold text-green-500">
                {lowPriority}
              </p>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* BAR GRAPH */}
      <div className="max-w-7xl mx-auto">
        <GlassCard className="bg-white border-emerald-100">
          <h2 className="text-xl font-bold mb-4">
            Complaints by Category
          </h2>

       <ResponsiveContainer width="100%" height={350}>
  <BarChart data={barData}>
    <XAxis dataKey="name" />

    <YAxis
      allowDecimals={false}
      domain={[0, "dataMax + 1"]}
    />

    <Tooltip />

    <Bar
      dataKey="value"
      fill="#10b981"
      radius={[10, 10, 0, 0]}
    />
  </BarChart>
</ResponsiveContainer>
        </GlassCard>
      </div>

    </div>
  );
};

export default AdminDashboard;