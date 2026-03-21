// export default AdminDashboard;

import React, { useState, useEffect } from 'react';
import { 
  FileText, Image as ImageIcon, Users, LogOut, Clock, User, 
  LayoutDashboard, Plane, TrendingUp, Plus, Trash2, X, Check, Upload
} from 'lucide-react';
import BlogManager from './BlogManager';

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'blogs', label: 'Manage Blogs', icon: <FileText className="w-5 h-5" /> },
    { id: 'gallery', label: 'Update Gallery', icon: <ImageIcon className="w-5 h-5" /> },
    { id: 'contacts', label: 'Contact Leads', icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <div className="flex min-h-screen bg-[#0a1525] font-sans selection:bg-[#c5a059]">
      <aside className="w-72 bg-[#001a35] text-white flex flex-col fixed inset-y-0 z-40 border-r border-white/5 shadow-2xl">
        <div className="p-8">
          <div className="mb-12 border-b border-white/5 pb-6">
            <h2 className="text-sm font-black tracking-[0.3em] text-[#38bdf8]">FUN FLIGHT</h2>
            <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Admin Terminal</p>
          </div>
          <nav className="space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 relative group overflow-hidden ${
                  activeTab === item.id 
                    ? 'text-white border border-[#c5a059]/50 shadow-[0_0_20px_rgba(197,160,89,0.2)]' 
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {activeTab === item.id && (
                   <div className="absolute inset-0 bg-gradient-to-r from-[#c5a059]/20 to-[#8e6d31]/10 -z-10" />
                )}
                <div className={activeTab === item.id ? 'text-[#c5a059]' : 'group-hover:text-white'}>
                  {item.icon}
                </div>
                <span className="font-bold text-sm tracking-wide">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-8 border-t border-white/5">
          {/* <button className="flex items-center gap-4 text-white/40 hover:text-red-400 transition-all text-xs font-bold uppercase tracking-widest">
            <LogOut className="w-4 h-4" /> Sign Out
          </button> */}

          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-4 text-white/40 hover:text-red-400 transition-all text-xs font-bold uppercase tracking-widest group"
          >
            <LogOut className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
            Sign Out
          </button>
        </div>
      </aside>

      <main className="flex-1 ml-72 min-h-screen bg-gradient-to-br from-[#1a2c42] to-[#0a1525] flex flex-col">
        <header className="px-12 py-10 flex justify-between items-start">
          <div>
            <div className="flex items-center gap-3 mb-1">
               <div className="w-1 h-8 bg-[#38bdf8] rounded-full"></div>
               <h1 className="text-4xl font-bold text-[#c5a059] tracking-tight uppercase">
                 {activeTab === 'dashboard' ? 'Flight Deck' : `${activeTab} Panel`}
               </h1>
            </div>
            <p className="text-white/40 text-sm ml-4 uppercase tracking-widest">System Control / {activeTab}</p>
          </div>
          <div className="w-10 h-10 bg-[#001a35] rounded-full border border-[#c5a059]/30 flex items-center justify-center text-white font-bold ring-4 ring-[#c5a059]/5">
            A
          </div>
        </header>

        <div className="px-12 pb-20 flex-1 overflow-y-auto">
          {activeTab === 'dashboard' && <DashboardStats />}
          {activeTab === 'blogs' && <BlogManager />}
          {activeTab === 'gallery' && <GalleryManager />}
          {activeTab === 'contacts' && <ContactLeads />}
        </div>
      </main>
    </div>
  );
};

// --- 1. DASHBOARD STATS ---
const DashboardStats = () => {
  const [blogCount, setBlogCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogCount = async () => {
      try {
        const response = await fetch('http://localhost/funFlight-main (2)/funFlight-main/admin/api.php');
        if (response.ok) {
          const blogs = await response.json();
          setBlogCount(blogs.length);
        }
      } catch (error) {
        console.error('Error fetching blog count:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogCount();
  }, []);

  const leadCount = JSON.parse(localStorage.getItem('funflight_contacts') || '[]').length;
  const galleryCount = JSON.parse(localStorage.getItem('gallery') || '[]').length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { label: "Active Blogs", value: blogCount, icon: <FileText />, color: "from-blue-500/20" },
        { label: "Total Leads", value: leadCount, icon: <Users />, color: "from-amber-500/20" },
        { label: "Gallery Assets", value: galleryCount, icon: <ImageIcon />, color: "from-emerald-500/20" }
      ].map((stat, i) => (
        <div key={i} className={`bg-white/5 border border-white/10 p-8 rounded-[2.5rem] bg-gradient-to-br ${stat.color} to-transparent backdrop-blur-md`}>
           <div className="flex justify-between items-start mb-6">
             <div className="p-4 bg-black/40 rounded-2xl text-[#c5a059]">{stat.icon}</div>
             <span className="text-[10px] font-black text-[#38bdf8] uppercase tracking-[0.2em]">Operational</span>
           </div>
           <h3 className="text-white/40 text-xs uppercase font-bold tracking-widest">{stat.label}</h3>
           <p className="text-4xl font-black text-white mt-2 tracking-tighter">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

// --- 3. GALLERY MANAGER (With Local Upload) ---
const GalleryManager = () => {
  const [images, setImages] = useState(() => JSON.parse(localStorage.getItem('gallery')) || []);
  const [newImg, setNewImg] = useState({ image: '', title: '', category: 'General' });

  useEffect(() => { localStorage.setItem('gallery', JSON.stringify(images)); }, [images]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImg({ ...newImg, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const addImage = () => {
    if (newImg.image) {
      setImages([{ ...newImg, id: Date.now() }, ...images]);
      setNewImg({ image: '', title: '', category: 'General' });
    }
  };

  const removeImage = (id) => setImages(images.filter(img => img.id !== id));

  return (
    <div className="space-y-8">
      <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex flex-wrap gap-6 items-end backdrop-blur-md">
        <div className="flex-1 min-w-[250px] space-y-2">
          <label className="text-[10px] text-white/40 uppercase font-black ml-2">Select Image File</label>
          <div className="relative h-14 bg-black/40 border border-white/10 rounded-2xl flex items-center px-4 overflow-hidden">
             <input type="file" accept="image/*" onChange={handleFileUpload} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
             <div className="flex items-center gap-3 text-white/60">
                <Upload size={18} className="text-[#38bdf8]" />
                <span className="text-xs truncate">{newImg.image ? "Image Selected" : "Click to Browse Computer"}</span>
             </div>
          </div>
        </div>
        
        <div className="flex-1 min-w-[200px] space-y-2">
          <label className="text-[10px] text-white/40 uppercase font-black ml-2">Asset Title</label>
          <input type="text" className="w-full h-14 bg-black/40 border border-white/10 p-4 rounded-2xl text-white outline-none focus:border-[#c5a059]" value={newImg.title} onChange={e => setNewImg({...newImg, title: e.target.value})} placeholder="Checkride success..." />
        </div>

        <button onClick={addImage} className="bg-[#38bdf8] h-14 px-8 rounded-2xl hover:scale-105 transition-transform flex items-center gap-2 text-black font-bold uppercase text-[10px] tracking-widest">
          <Plus size={16}/> Add to Fleet
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {images.map(img => (
          <div key={img.id} className="group relative aspect-square rounded-[2rem] overflow-hidden border border-white/10 bg-black/20">
            <img src={img.image} className="w-full h-full object-cover transition-all group-hover:scale-110" alt="gallery" />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
              <span className="text-[10px] text-[#c5a059] font-black uppercase mb-2">{img.title}</span>
              <button onClick={() => removeImage(img.id)} className="bg-red-500/20 text-red-500 p-3 rounded-xl hover:bg-red-500 hover:text-white transition-all"><Trash2 size={16}/></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- 4. CONTACT LEADS ---
const ContactLeads = () => {
  const [leads, setLeads] = useState(() => JSON.parse(localStorage.getItem('funflight_contacts')) || []);

  const toggleStatus = (id) => {
    const updatedLeads = leads.map(l => l.id === id ? { ...l, status: l.status === 'New' ? 'Responded' : 'New' } : l);
    setLeads(updatedLeads);
    localStorage.setItem('funflight_contacts', JSON.stringify(updatedLeads));
  };

  const deleteLead = (id) => {
    if(window.confirm("Delete this lead?")) {
        const updatedLeads = leads.filter(l => l.id !== id);
        setLeads(updatedLeads);
        localStorage.setItem('funflight_contacts', JSON.stringify(updatedLeads));
    }
  };

  return (
    <div className="space-y-6">
      {leads.length === 0 ? (
        <div className="text-center py-20 bg-white/5 rounded-[2.5rem] border border-dashed border-white/10 text-white/20 uppercase font-black tracking-widest">No Incoming Transmissions</div>
      ) : (
        leads.map((lead) => (
          <div key={lead.id} className="relative bg-white/5 border border-white/10 rounded-[2.5rem] p-8 flex items-center justify-between backdrop-blur-xl group hover:border-[#c5a059]/30 transition-all overflow-hidden">
            <div className="flex items-center gap-8 relative z-10">
              <div className="w-14 h-14 bg-[#0a1525] rounded-full border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059]">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-lg tracking-tight uppercase">{lead.name}</h4>
                <p className="text-xs text-[#c5a059] mt-1 font-bold">{lead.email}</p>
                <p className="text-[10px] text-white/40 mt-1 uppercase italic">{lead.message?.substring(0, 50)}...</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
               <div className="text-[10px] font-bold text-white/30 uppercase flex items-center gap-2"><Clock size={14}/> {lead.date || 'Today'}</div>
               <button 
                 onClick={() => toggleStatus(lead.id)}
                 className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
                  lead.status === 'New' 
                  ? 'bg-[#c5a059] text-black border-transparent' 
                  : 'bg-transparent text-[#38bdf8] border-[#38bdf8]/40'
                }`}>
                 {lead.status === 'New' ? 'Mark Responded' : 'Processed'}
               </button>
               <button onClick={() => deleteLead(lead.id)} className="text-white/10 hover:text-red-500 transition-colors"><Trash2 size={18}/></button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminDashboard;