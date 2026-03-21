import React, { useState, useEffect } from 'react';
import { Plus, Trash2, X, Upload } from 'lucide-react';

const BlogManager = () => {
  const [blogs, setBlogs] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newBlog, setNewBlog] = useState({ title: '', category: '', excerpt: '', content: '', image: '' });

  const API_BASE = 'http://localhost/funFlight-main (2)/funFlight-main/admin/api.php';

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_BASE);
      if (!response.ok) throw new Error('Failed to fetch blogs');
      const data = await response.json();
      setBlogs(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setError('Failed to load blogs');
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setNewBlog({ ...newBlog, image: reader.result });
      reader.readAsDataURL(file);
    }
  };

  const slugify = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

  const handleAddBlog = async () => {
    console.log('🚀 handleAddBlog called with newBlog:', newBlog);
    if (newBlog.title && newBlog.content) {
      try {
        console.log('📡 Sending POST request to:', `${API_BASE}/blogs`);
        const response = await fetch(API_BASE, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newBlog),
        });
        
        console.log('📡 Response status:', response.status);
        console.log('📡 Response ok:', response.ok);
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('❌ Error response:', errorText);
          throw new Error(`Failed to create blog: ${response.status}`);
        }
        
        const createdBlog = await response.json();
        console.log('✅ Blog created successfully:', createdBlog);
        
        setNewBlog({ title: '', category: '', excerpt: '', content: '', image: '' });
        setIsAdding(false);
        fetchBlogs(); // Refresh the list
      } catch (err) {
        console.error('❌ Error creating blog:', err);
        setError('Failed to create blog: ' + err.message);
      }
    } else {
      console.log('⚠️ Missing title or content:', { title: !!newBlog.title, content: !!newBlog.content });
    }
  };

  const deleteBlog = async (id) => {
    if(window.confirm("Abort Mission? This blog will be deleted forever.")) {
      try {
        const response = await fetch(`${API_BASE}/blogs.php/${id}`, {
          method: 'DELETE',
        });
        
        if (!response.ok) throw new Error('Failed to delete blog');
        
        fetchBlogs(); // Refresh the list
      } catch (err) {
        console.error('Error deleting blog:', err);
        setError('Failed to delete blog');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-white/40 uppercase font-black tracking-widest">Loading blogs...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-500/20 border border-red-500/30 p-8 rounded-2xl text-center">
        <p className="text-red-400 font-bold">Error: {error}</p>
        <button onClick={fetchBlogs} className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <button onClick={() => setIsAdding(!isAdding)} className="bg-[#c5a059] text-black px-8 py-4 rounded-full font-black uppercase text-xs flex items-center gap-2 hover:scale-105 transition-all">
        {isAdding ? <X size={16}/> : <Plus size={16}/>} {isAdding ? 'Cancel Entry' : 'New Flight Log'}
      </button>

      {isAdding && (
        <div className="bg-white/5 border border-[#c5a059]/30 p-8 rounded-[2.5rem] space-y-4 backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Mission Title" 
              className="bg-black/40 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#c5a059]" 
              value={newBlog.title} 
              onChange={e => {
                console.log(' Title input changed:', e.target.value);
                setNewBlog({...newBlog, title: e.target.value});
              }} 
            />
            <input 
              type="text" 
              placeholder="Category" 
              className="bg-black/40 border border-white/10 p-4 rounded-xl text-white outline-none focus:border-[#c5a059]" 
              value={newBlog.category} 
              onChange={e => {
                console.log(' Category input changed:', e.target.value);
                setNewBlog({...newBlog, category: e.target.value});
              }} 
            />
          </div>
          
          <div className="relative group border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-[#c5a059]/50 transition-colors">
            <input type="file" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
            {newBlog.image ? (
              <img src={newBlog.image} alt="Preview" className="h-32 mx-auto rounded-lg object-cover" />
            ) : (
              <div className="flex flex-col items-center gap-2 text-white/40">
                <Upload size={24} />
                <span className="text-xs uppercase font-black">Upload Mission Image</span>
              </div>
            )}
          </div>

          <textarea 
            placeholder="Brief Excerpt..." 
            className="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-white outline-none h-20" 
            value={newBlog.excerpt} 
            onChange={e => setNewBlog({...newBlog, excerpt: e.target.value})} 
          />
          <textarea 
            placeholder="Main Intelligence..." 
            className="w-full bg-black/40 border border-white/10 p-4 rounded-xl text-white outline-none h-48" 
            value={newBlog.content} 
            onChange={e => setNewBlog({...newBlog, content: e.target.value})} 
          />
          <button 
            onClick={handleAddBlog} 
            className="w-full bg-[#38bdf8] text-black font-black py-4 rounded-xl uppercase tracking-widest text-xs hover:bg-white transition-all"
          >
            Publish Intel
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4">
        {blogs.map(blog => (
          <div key={blog.id} className="bg-white/5 border border-white/10 p-6 rounded-[2rem] flex items-center justify-between group">
            <div className="flex items-center gap-6">
              <img src={blog.image} className="w-16 h-16 rounded-xl object-cover border border-white/10" alt="post" />
              <div>
                <h4 className="text-white font-bold uppercase tracking-tight">{blog.title}</h4>
                <p className="text-[#c5a059] text-[10px] font-black uppercase tracking-widest">{blog.category} • {blog.date}</p>
              </div>
            </div>
            <button 
              onClick={() => deleteBlog(blog.id)} 
              className="p-4 text-white/20 hover:text-red-500 transition-colors"
            >
              <Trash2 size={20}/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogManager;
