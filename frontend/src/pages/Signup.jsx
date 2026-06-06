import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import API from '../api';

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [role, setRole] = useState('student');
  const [hostelBlock, setHostelBlock] = useState('');
  const [roomNo, setRoomNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await API.post('/auth/register', {
        name,
        email,
        password,
        role,
        hostelBlock,
        roomNo,
      });

      alert('Registration Successful');

      setName('');
      setEmail('');
      setPassword('');
      setHostelBlock('');
      setRoomNo('');
      setRole('student');

      navigate('/login');
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Registration Failed');
    }
  };

  return (
    <div className="min-h-screen bg-emerald-50 flex items-center justify-center relative overflow-hidden py-10">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-200/30 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-200/30 blur-[120px] rounded-full pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg bg-white border border-emerald-100 p-8 rounded-3xl z-10 shadow-xl mx-4"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Create Account
          </h2>
          <p className="text-slate-500 text-sm">
            Join the AI-powered campus platform
          </p>
        </div>

        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            handleSignup();
          }}
        >
          {/* Name + Role */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-700 text-xs mb-1 font-medium">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-50 border border-emerald-100 rounded-xl p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                required
              />
            </div>
            <div>
              <label className="block text-slate-700 text-xs mb-1 font-medium">
                Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-slate-50 border border-emerald-100 rounded-xl p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              >
                <option value="student">Student</option>
                <option value="admin">Hostel Admin</option>
              </select>
            </div>
          </div>

          {/* Hostel Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-700 text-xs mb-1 font-medium">
                Hostel Block
              </label>
              <input
                type="text"
                value={hostelBlock}
                onChange={(e) => setHostelBlock(e.target.value)}
                className="w-full bg-slate-50 border border-emerald-100 rounded-xl p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                required
              />
            </div>
            <div>
              <label className="block text-slate-700 text-xs mb-1 font-medium">
                Room Number
              </label>
              <input
                type="text"
                value={roomNo}
                onChange={(e) => setRoomNo(e.target.value)}
                className="w-full bg-slate-50 border border-emerald-100 rounded-xl p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-slate-700 text-xs mb-1 font-medium">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-50 border border-emerald-100 rounded-xl p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-slate-700 text-xs mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-50 border border-emerald-100 rounded-xl p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              required
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 font-bold text-white shadow-lg transition-all"
          >
            Sign Up
          </motion.button>

          {/* Login Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-slate-500">
              Already have an account?{' '}
              <Link to="/login" className="text-emerald-600 font-bold">
                Log in
              </Link>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;