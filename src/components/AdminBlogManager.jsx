import React, { useState, useEffect } from 'react';
import { Plus, Trash2, ExternalLink, Save } from 'lucide-react';

const AdminBlogManager = () => {
  // Shuruat mein 4-5 temporary blogs load karne ke liye logic
  const [blogs, setBlogs] = useState(() => {
    const saved = localStorage.getItem('funflight_blogs');
    return saved ? JSON.parse(saved) : [
      { id: 1, title: "What I Wish I Knew Before Flight School", slug: "what-i-wish-i-knew-before-starting-flight-school", date: "2026-01-31", category: "Training" },
      { id: 2, title: "Mastering Communication: Radio Basics", slug: "mastering-communication-radio-basics", date: "2026-02-10", category: "Student Tips" }
    ];
  });

  const [newBlog, setNewBlog] = useState({ title: '', category: '', content: '', image: '' });

  useEffect(() => {
    localStorage.setItem('funflight_blogs', JSON.stringify(blogs));
  }, [blogs]);

  const handleCreate = (e) => {
    e.preventDefault();
    // SEO Friendly Slug Generation
    const slug = newBlog.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    const blogToAdd = { ...newBlog, id: Date.now(), slug, date: new Date().toISOString().split('T')[0] };
    setBlogs([blogToAdd, ...blogs]);
    setNewBlog({ title: '', category: '', content: '', image: '' });
    alert("Blog Posted Successfully! URL: /blog/" + slug);
  };

  const deleteBlog = (id) => {
    if(window.confirm("Delete this mission log?")) {
      setBlogs(blogs.filter(b => b.id !== id));
    }
  };

  return (
    <div className="space-y-10">
      {/* Create Form */}
      <form onSubmit={handleCreate} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-md">
        <h3 className="text-[#c5a059] font-black uppercase tracking-widest mb-6 flex items-center gap-2">
          <Plus className="w-5 h-5" /> Create New Entry
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input 
            type="text" placeholder="Article Title (e.g. How to Solo)" 
            className="bg-black/20 border border-white/10 rounded-xl p-4 text-white outline-none focus:border-[#c5a059]/50"
            value={newBlog.title} onChange={e => setNewBlog({...newBlog, title: e.target.value})}
            required
          />
          <select 
            className="bg-black/20 border border-white/10 rounded-xl p-4 text-white/50 outline-none focus:border-[#c5a059]/50"
            value={newBlog.category} onChange={e => setNewBlog({...newBlog, category: e.target.value})}
          >
            <option value="">Select Category</option>
            <option value="Training">Training</option>
            <option value="Student Tips">Student Tips</option>
            <option value="Fleet">Fleet</option>
          </select>
        </div>
        <textarea 
          placeholder="Write your content here..." 
          className="w-full bg-black/20 border border-white/10 rounded-xl p-4 text-white h-40 mb-6 outline-none focus:border-[#c5a059]/50"
          value={newBlog.content} onChange={e => setNewBlog({...newBlog, content: e.target.value})}
        />
        <button className="bg-[#c5a059] text-black font-black uppercase tracking-widest px-8 py-3 rounded-full hover:scale-105 transition-all flex items-center gap-2">
          <Save className="w-4 h-4" /> Publish to Hangar
        </button>
      </form>

      {/* List of Blogs */}
      <div className="space-y-4">
        <h3 className="text-white/40 font-bold uppercase tracking-widest text-xs ml-4">Live Articles</h3>
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center justify-between hover:border-white/20 transition-all">
            <div>
              <h4 className="text-white font-bold">{blog.title}</h4>
              <p className="text-xs text-[#c5a059] mt-1 italic">/blog/{blog.slug}</p>
            </div>
            <div className="flex gap-4">
              <button className="p-2 text-white/20 hover:text-[#38bdf8]"><ExternalLink className="w-5 h-5" /></button>
              <button onClick={() => deleteBlog(blog.id)} className="p-2 text-white/20 hover:text-red-500"><Trash2 className="w-5 h-5" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBlogManager;