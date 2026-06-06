import React from 'react';
import { Bell, Search, User } from 'lucide-react';

const Navbar = ({ title }) => {
  return (
    <nav className="h-20 border-b border-white/10 bg-[#050816]/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-40">
      <h2 className="text-xl font-bold">{title}</h2>
      
      <div className="flex items-center gap-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-slate-900 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:border-neonBlue outline-none w-64"
          />
        </div>
        <button className="relative hover:text-neonBlue transition-colors">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#050816]"></span>
        </button>
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-neonBlue to-electricBlue flex items-center justify-center font-bold text-spaceNavy">
          JD
        </div>
      </div>
    </nav>
  );
};

export default Navbar;