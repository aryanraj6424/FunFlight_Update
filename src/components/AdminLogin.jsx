import React, { useState } from 'react';
import { Lock, User, Plane, AlertCircle } from 'lucide-react';

const AdminLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // --- HARDCODED CREDENTIALS ---
  const ADMIN_USER = "admin@123gmail.com";
  const ADMIN_PASS = "funflight123"; 

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate Network Delay
    setTimeout(() => {
      if (credentials.username === ADMIN_USER && credentials.password === ADMIN_PASS) {
        localStorage.setItem('isAdminAuthenticated', 'true');
        onLogin(); // Dashboard par bhejne ke liye callback
      } else {
        setError('Invalid Flight Credentials. Access Denied.');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0a1525] flex items-center justify-center p-4 font-sans selection:bg-[#c5a059]">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#38bdf8]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo Section */}
        <div className="text-center mb-10">
          <div className="inline-flex p-4 bg-[#001a35] rounded-3xl border border-[#c5a059]/30 mb-4 shadow-2xl">
            <Plane className="w-10 h-10 text-[#38bdf8]" />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tighter uppercase">Terminal Login</h1>
          <p className="text-white/40 text-xs uppercase tracking-[0.3em] mt-2 font-bold">Fun Flight Academy Admin</p>
        </div>

        {/* Login Form */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl border-t-white/20">
          <form onSubmit={handleLogin} className="space-y-6">
            
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 p-4 rounded-xl flex items-center gap-3 text-red-500 text-xs font-bold uppercase tracking-wider animate-shake">
                <AlertCircle size={16} /> {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-[10px] text-white/40 uppercase font-black ml-2 tracking-widest">Aviation Username</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c5a059] w-5 h-5" />
                <input 
                  type="text" 
                  required
                  className="w-full bg-black/40 border border-white/10 p-4 pl-12 rounded-2xl text-white outline-none focus:border-[#c5a059] transition-all"
                  placeholder="Enter Username"
                  value={credentials.username}
                  onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] text-white/40 uppercase font-black ml-2 tracking-widest">Secret Passcode</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c5a059] w-5 h-5" />
                <input 
                  type="password" 
                  required
                  className="w-full bg-black/40 border border-white/10 p-4 pl-12 rounded-2xl text-white outline-none focus:border-[#c5a059] transition-all"
                  placeholder="••••••••"
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-[#c5a059] hover:bg-[#a6864a] text-black font-black py-5 rounded-2xl uppercase tracking-[0.2em] text-xs transition-all shadow-[0_0_30px_rgba(197,160,89,0.3)] flex items-center justify-center gap-2"
            >
              {isLoading ? 'Verifying Coordinates...' : 'Request Clearance'}
            </button>
          </form>
        </div>

        <p className="text-center mt-8 text-white/20 text-[10px] uppercase font-bold tracking-widest">
          Authorized Personnel Only • Secure Data Link v3.0
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;