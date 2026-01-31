import React, { useState, useEffect } from 'react';
import { Users, Globe, Server, Activity } from 'lucide-react';

const SystemStatus: React.FC = () => {
  // Start with a high number to represent the "viral" nature of the release (e.g., 3.5M+)
  const [totalHits, setTotalHits] = useState(3542109);
  const [activeUsers, setActiveUsers] = useState(842);
  const [latency, setLatency] = useState(24);

  useEffect(() => {
    // Simulate incoming traffic hits
    const hitInterval = setInterval(() => {
      setTotalHits(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 800);

    // Simulate fluctuating active users
    const userInterval = setInterval(() => {
      setActiveUsers(prev => {
        const change = Math.floor(Math.random() * 11) - 5; // -5 to +5
        return prev + change;
      });
      // Simulate latency fluctuation
      setLatency(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(12, Math.min(60, prev + change));
      });
    }, 2000);

    return () => {
      clearInterval(hitInterval);
      clearInterval(userInterval);
    };
  }, []);

  return (
    <div className="bg-slate-950 text-emerald-500 font-mono text-[10px] md:text-xs py-1 px-4 border-b border-slate-800 flex items-center justify-between md:justify-end space-x-4 md:space-x-8 overflow-hidden whitespace-nowrap">
      
      {/* Mobile-only scrolling marquee effect container if needed, but flex works for simple stats */}
      
      <div className="flex items-center space-x-2">
        <Server size={12} className="text-slate-500" />
        <span className="text-slate-400 hidden md:inline">NODE:</span>
        <span>US-EAST-DOJ-04</span>
      </div>

      <div className="flex items-center space-x-2">
        <Globe size={12} className="text-slate-500" />
        <span className="text-slate-400 hidden md:inline">GLOBAL ACCESS:</span>
        <span className="text-emerald-400 font-bold">{totalHits.toLocaleString()}</span>
      </div>

      <div className="flex items-center space-x-2">
        <Users size={12} className="text-slate-500" />
        <span className="text-slate-400 hidden md:inline">LIVE VIEWERS:</span>
        <span>{activeUsers}</span>
      </div>

      <div className="hidden md:flex items-center space-x-2">
        <Activity size={12} className="text-slate-500" />
        <span className="text-slate-400">LATENCY:</span>
        <span className={latency > 50 ? 'text-yellow-500' : 'text-emerald-500'}>{latency}ms</span>
      </div>
      
      <div className="flex items-center space-x-2">
         <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="font-bold">SYSTEM ONLINE</span>
      </div>
    </div>
  );
};

export default SystemStatus;