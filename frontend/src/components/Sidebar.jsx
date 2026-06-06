import React from 'react';
import { LayoutDashboard, FileText, History, Settings, LogOut, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Dashboard', path: '/student-dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'My Complaints', path: '/complaints', icon: <FileText size={20} /> },
    { name: 'History', path: '/history', icon: <History size={20} /> },
    { name: 'Settings', path: '/settings', icon: <Settings size={20} /> },
  ];

  return (
    <aside className="w-64 h-screen border-r border-white/10 bg-[#050816]/80 backdrop-blur-md fixed left-0 top-0 p-6 flex flex-col justify-between z-50">
      <div>
        <div className="flex items-center gap-2 mb-10 pl-2">
          <Zap className="text-neonBlue" fill="currentColor" />
          <h1 className="text-xl font-bold">Hostel<span className="text-neonBlue">AI</span></h1>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                location.pathname === item.path 
                  ? 'bg-neonBlue/10 text-neonBlue border border-neonBlue/20' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      <button className="flex items-center gap-3 p-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-colors">
        <LogOut size={20} />
        <span className="font-medium">Logout</span>
      </button>
    </aside>
  );
};

export default Sidebar;