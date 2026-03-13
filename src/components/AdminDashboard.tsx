// import React, { useState } from 'react';
// import { 
//   LayoutDashboard, 
//   FileText, 
//   Image as ImageIcon, 
//   Users, 
//   LogOut, 
//   Plus, 
//   Trash2, 
//   Eye, 
//   Search,
//   CheckCircle,
//   Clock
// } from 'lucide-react';

// const AdminDashboard = () => {
//   const [activeTab, setActiveTab] = useState('blogs');

//   // Sidebar Links Configuration
//   const menuItems = [
//     { id: 'blogs', label: 'Manage Blogs', icon: <FileText className="w-5 h-5" /> },
//     { id: 'gallery', label: 'Update Gallery', icon: <ImageIcon className="w-5 h-5" /> },
//     { id: 'contacts', label: 'Contact Leads', icon: <Users className="w-5 h-5" /> },
//   ];

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* --- SIDEBAR --- */}
//       <aside className="w-64 bg-[#002147] text-white flex flex-col fixed inset-y-0 shadow-2xl z-30">
//         <div className="p-8">
//           <div className="flex items-center gap-3 mb-8">
//             <div className="bg-[#38bdf8] p-2 rounded-lg">
//               <LayoutDashboard className="text-white w-6 h-6" />
//             </div>
//             <span className="text-xl font-bold tracking-tight">FFT <span className="text-[#38bdf8]">ADMIN</span></span>
//           </div>
          
//           <nav className="space-y-2">
//             {menuItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => setActiveTab(item.id)}
//                 className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
//                   activeTab === item.id 
//                     ? 'bg-[#38bdf8] text-white shadow-lg shadow-[#38bdf8]/20' 
//                     : 'text-gray-400 hover:bg-white/5 hover:text-white'
//                 }`}
//               >
//                 {item.icon}
//                 <span className="font-medium text-sm">{item.label}</span>
//               </button>
//             ))}
//           </nav>
//         </div>

//         <div className="mt-auto p-8">
//           <button className="flex items-center gap-4 text-gray-400 hover:text-red-400 transition-colors">
//             <LogOut className="w-5 h-5" />
//             <span className="font-medium text-sm">Sign Out</span>
//           </button>
//         </div>
//       </aside>

//       {/* --- MAIN CONTENT --- */}
//       <main className="flex-1 ml-64 p-10">
//         {/* Header */}
//         <header className="flex justify-between items-center mb-10">
//           <div>
//             <h1 className="text-3xl font-bold text-[#002147] capitalize">{activeTab} Panel</h1>
//             <p className="text-gray-500 text-sm mt-1">Manage your flight school assets and leads.</p>
//           </div>
//           <div className="flex items-center gap-4">
//              <div className="relative">
//                 <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                 <input type="text" placeholder="Search..." className="bg-white border border-gray-200 rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#38bdf8] outline-none" />
//              </div>
//              <div className="w-10 h-10 bg-[#002147] rounded-full flex items-center justify-center text-white font-bold">A</div>
//           </div>
//         </header>

//         {/* Dynamic Content Sections */}
//         <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
//           {activeTab === 'blogs' && <BlogManager />}
//           {activeTab === 'gallery' && <GalleryManager />}
//           {activeTab === 'contacts' && <ContactLeads />}
//         </section>
//       </main>
//     </div>
//   );
// };

// /* --- 1. BLOG MANAGEMENT SECTION --- */
// const BlogManager = () => (
//   <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
//     <div className="p-6 border-b border-gray-100 flex justify-between items-center">
//       <h3 className="font-bold text-[#002147]">Article Overviews</h3>
//       <button className="bg-[#38bdf8] text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#002147] transition-all">
//         <Plus className="w-4 h-4" /> NEW POST
//       </button>
//     </div>
//     <div className="p-6">
//       <table className="w-full text-left">
//         <thead>
//           <tr className="text-gray-400 text-xs uppercase tracking-widest border-b border-gray-50">
//             <th className="pb-4">Post Title</th>
//             <th className="pb-4">Date</th>
//             <th className="pb-4">Status</th>
//             <th className="pb-4 text-right">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="divide-y divide-gray-50">
//           {[1, 2, 3].map((i) => (
//             <tr key={i} className="hover:bg-gray-50/50 transition-colors">
//               <td className="py-4 font-bold text-sm text-[#002147]">How to prep for your first Solo Flight</td>
//               <td className="py-4 text-sm text-gray-500">March 12, 2026</td>
//               <td className="py-4"><span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold">PUBLISHED</span></td>
//               <td className="py-4 text-right">
//                 <button className="p-2 text-gray-400 hover:text-[#38bdf8]"><Eye className="w-4 h-4" /></button>
//                 <button className="p-2 text-gray-400 hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </div>
// );

// /* --- 2. GALLERY MANAGEMENT SECTION --- */
// const GalleryManager = () => (
//   <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//     <div className="bg-white border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center p-8 hover:border-[#38bdf8] hover:bg-[#38bdf8]/5 transition-all cursor-pointer">
//       <div className="bg-[#38bdf8]/10 p-4 rounded-full mb-4">
//         <Plus className="text-[#38bdf8] w-8 h-8" />
//       </div>
//       <p className="text-[#002147] font-bold text-sm">Upload Photo</p>
//       <p className="text-gray-400 text-[10px] mt-1">JPG, PNG (Max 5MB)</p>
//     </div>
//     {[1, 2, 3].map((i) => (
//       <div key={i} className="relative group rounded-2xl overflow-hidden shadow-sm h-48">
//         <img src={`/gallery/img${i}.png`} className="w-full h-full object-cover" alt="Gallery preview" />
//         <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
//           <button className="bg-white p-2 rounded-full text-red-500 hover:scale-110 transition-transform"><Trash2 className="w-4 h-4" /></button>
//         </div>
//       </div>
//     ))}
//   </div>
// );

// /* --- 3. CONTACTS / LEADS SECTION --- */
// const ContactLeads = () => (
//   <div className="space-y-4">
//     {[
//       { name: "Ross Geller", email: "ross@example.com", course: "Commercial Pilot", date: "2 mins ago", status: "New" },
//       { name: "Rachel Green", email: "rachel@fashion.com", course: "Private Pilot", date: "1 hour ago", status: "Responded" },
//     ].map((lead, idx) => (
//       <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 flex items-center justify-between shadow-sm">
//         <div className="flex items-center gap-4">
//           <div className="w-12 h-12 bg-[#38bdf8]/10 flex items-center justify-center rounded-xl">
//             <Users className="text-[#38bdf8] w-6 h-6" />
//           </div>
//           <div>
//             <h4 className="font-bold text-[#002147]">{lead.name}</h4>
//             <p className="text-xs text-gray-400">{lead.email}</p>
//           </div>
//         </div>
//         <div className="hidden md:block">
//           <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest mb-1">Inquiry For</p>
//           <p className="text-sm font-medium text-[#002147]">{lead.course}</p>
//         </div>
//         <div className="flex items-center gap-8">
//            <div className="text-right flex items-center gap-2 text-xs text-gray-400">
//               <Clock className="w-3 h-3" /> {lead.date}
//            </div>
//            <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold ${
//              lead.status === 'New' ? 'bg-blue-100 text-[#38bdf8]' : 'bg-gray-100 text-gray-500'
//            }`}>
//              {lead.status}
//            </span>
//         </div>
//       </div>
//     ))}
//   </div>
// );

// export default AdminDashboard;


import React, { useState } from 'react';
import { 
  FileText, 
  Image as ImageIcon, 
  Users, 
  LogOut, 
  Search,
  Clock,
  User,
  LayoutDashboard,
  Plane,
  TrendingUp,
  Settings
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'blogs', label: 'Manage Blogs', icon: <FileText className="w-5 h-5" /> },
    { id: 'gallery', label: 'Update Gallery', icon: <ImageIcon className="w-5 h-5" /> },
    { id: 'contacts', label: 'Contact Leads', icon: <Users className="w-5 h-5" /> },
  ];

  return (
    <div className="flex min-h-screen bg-[#0a1525] font-sans selection:bg-[#c5a059]">
      {/* --- SIDEBAR --- */}
      <aside className="w-72 bg-[#001a35] text-white flex flex-col fixed inset-y-0 z-40 border-r border-white/5 shadow-2xl">
        <div className="p-8">
          <div className="mb-12 border-b border-white/5 pb-6">
            <h2 className="text-sm font-black tracking-[0.3em] text-[#38bdf8]">FUN FLIGHT</h2>
            <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Training Academy</p>
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
                <div className={activeTab === item.id ? 'text-[#c5a059]' : 'group-hover:text-white transition-colors'}>
                  {item.icon}
                </div>
                <span className="font-bold text-sm tracking-wide">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-8 border-t border-white/5">
          <button className="flex items-center gap-4 text-white/40 hover:text-red-400 transition-all text-xs font-bold uppercase tracking-widest">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 ml-72 min-h-screen bg-gradient-to-br from-[#1a2c42] to-[#0a1525] flex flex-col">
        {/* Header */}
        <header className="px-12 py-10 flex justify-between items-start">
          <div>
            <div className="flex items-center gap-3 mb-1">
               <div className="w-1 h-8 bg-[#38bdf8] rounded-full"></div>
               <h1 className="text-4xl font-bold text-[#c5a059] tracking-tight uppercase">
                 {activeTab === 'dashboard' ? 'Flight Deck' : `${activeTab} Panel`}
               </h1>
            </div>
            <p className="text-white/40 text-sm ml-4">Pilot Control Center / {activeTab}</p>
          </div>

          <div className="flex items-center gap-6 mt-4">
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <span className="text-xs">🕶️</span>
                <span className="text-white/20 text-xs">|</span>
              </div>
              <input 
                type="text" 
                placeholder="Search flight logs..." 
                className="bg-black/20 border border-white/10 rounded-full py-3 pl-14 pr-6 text-xs text-white w-64 focus:border-[#c5a059]/50 outline-none backdrop-blur-sm"
              />
            </div>
            <div className="w-10 h-10 bg-[#001a35] rounded-full border border-[#c5a059]/30 flex items-center justify-center text-white font-bold text-sm shadow-lg ring-4 ring-[#c5a059]/5">
              A
            </div>
          </div>
        </header>

        {/* Content Section */}
        <div className="px-12 pb-20 flex-1">
          <section className="animate-in fade-in duration-700">
            {activeTab === 'dashboard' && <DashboardStats />}
            {activeTab === 'contacts' && <ContactLeads />}
            {activeTab === 'blogs' && (
              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-12 text-center text-white/40 uppercase font-black tracking-widest text-xs">
                Editorial Hub Terminal Active
              </div>
            )}
            {activeTab === 'gallery' && (
              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-12 text-center text-white/40 uppercase font-black tracking-widest text-xs">
                Visual Assets Upload Ready
              </div>
            )}
          </section>
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-10 right-10 z-50">
            <div className="w-12 h-12 bg-[#38bdf8] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.3)] cursor-pointer hover:scale-110 transition-transform">
                <div className="text-white font-black text-xl">↑</div>
            </div>
        </div>
      </main>
    </div>
  );
};

const DashboardStats = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      { label: "Total Students", value: "128", icon: <Users />, color: "from-blue-500/20" },
      { label: "Active Flights", value: "14", icon: <Plane />, color: "from-amber-500/20" },
      { label: "Monthly Growth", value: "+22%", icon: <TrendingUp />, color: "from-emerald-500/20" }
    ].map((stat, i) => (
      <div key={i} className={`bg-white/5 border border-white/10 p-8 rounded-[2rem] bg-gradient-to-br ${stat.color} to-transparent backdrop-blur-md`}>
         <div className="flex justify-between items-start mb-6">
           <div className="p-4 bg-white/5 rounded-2xl text-[#c5a059] shadow-inner">{stat.icon}</div>
           <span className="text-[10px] font-black text-[#38bdf8] uppercase tracking-[0.2em]">Live Status</span>
         </div>
         <h3 className="text-white/40 text-xs uppercase font-bold tracking-widest">{stat.label}</h3>
         <p className="text-4xl font-black text-white mt-2 tracking-tighter">{stat.value}</p>
      </div>
    ))}
  </div>
);

const ContactLeads = () => (
  <div className="space-y-6">
    {[
      { name: "Ross Geller", email: "ross@example.com", course: "Commercial Pilot", date: "2 mins ago", status: "New" },
      { name: "Rachel Green", email: "rachel@fashion.com", course: "Private Pilot", date: "1 hour ago", status: "Responded" },
    ].map((lead, idx) => (
      <div key={idx} className="relative bg-white/5 border border-white/10 rounded-[2rem] p-8 flex items-center justify-between backdrop-blur-xl group hover:border-[#c5a059]/30 transition-all duration-500 overflow-hidden">
        <div className="flex items-center gap-8 relative z-10">
          <div className="w-14 h-14 bg-[#0a1525] rounded-full border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059]">
            <User className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-white text-lg tracking-tight uppercase">{lead.name}</h4>
            <p className="text-xs text-[#c5a059] mt-1 font-bold">{lead.email}</p>
          </div>
        </div>
        <div className="hidden lg:block relative z-10">
          <p className="text-[10px] uppercase font-black text-white/20 tracking-[0.2em] mb-1">Inquiry For</p>
          <p className="text-sm font-medium text-white tracking-wide uppercase">{lead.course}</p>
        </div>
        <div className="flex items-center gap-12 relative z-10">
           <div className="flex items-center gap-2 text-[10px] font-bold text-white/30 uppercase">
              <Clock className="w-4 h-4" />
              <span>{lead.date}</span>
           </div>
           <button className={`px-8 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
             lead.status === 'New' 
             ? 'bg-gradient-to-r from-[#c5a059] to-[#8e6d31] text-black border-transparent shadow-[0_0_20px_rgba(197,160,89,0.3)]' 
             : 'bg-transparent text-[#c5a059] border-[#c5a059]/40'
           }`}>
             {lead.status}
           </button>
        </div>
      </div>
    ))}
  </div>
);

export default AdminDashboard;