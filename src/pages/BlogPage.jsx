import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';

const API_BASE = 'http://localhost/funFlight-main (2)/funFlight-main/admin/api.php';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_BASE);
      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }
      const data = await response.json();
      setBlogs(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setError('Failed to load blogs. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const filteredBlogs = blogs.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a1525] flex items-center justify-center">
        <div className="text-white/40 uppercase font-black tracking-widest">Loading blogs...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0a1525] flex items-center justify-center">
        <div className="text-red-400 text-center">
          <p className="mb-4">Error loading blogs</p>
          <button 
            onClick={fetchBlogs}
            className="bg-[#c5a059] text-black px-6 py-2 rounded-lg hover:bg-[#d4b068] transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const categories = ['All', 'Training', 'Student Tips', 'General', 'Fleet'];

  return (
    <div className="min-h-screen bg-[#0a1525] text-white selection:bg-[#c5a059]">
      {/* HERO SECTION */}
      <div className="relative h-[450px] flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#001a35]/90 via-[#0a1525]/80 to-[#0a1525] z-10" />
        <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1504607798333-52a30db54a5d?auto=format&fit=crop&w=1600')] bg-cover bg-center animate-pulse" />
        <div className="relative z-20 text-center px-6">
          <div className="flex justify-center mb-6 items-center">
            <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#c5a059]"></span>
            <span className="mx-4 text-[#c5a059] text-[11px] font-black uppercase tracking-[0.6em]">
              Training Academy
            </span>
            <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#c5a059]"></span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-white mb-4 leading-none">
            FUN <span className="text-[#c5a059] italic">FLIGHT</span>
          </h1>
          <div className="max-w-xl mx-auto">
            <p className="text-white/50 uppercase tracking-[0.4em] text-[10px] font-bold leading-relaxed">
              Elevating Tomorrow's Aviators
            </p>
          </div>
        </div>
      </div>

      {/* BLOG CONTENT */}
      <main className="max-w-7xl mx-auto px-6 py-24">
        {/* FILTER + SEARCH */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
          {/* Categories */}
          <div className="flex gap-3 overflow-x-auto pb-4 w-full md:w-auto no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-2.5 rounded-full border text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#c5a059] border-[#c5a059] text-black shadow-[0_0_20px_rgba(197,160,89,0.3)]'
                    : 'border-white/10 text-white/40 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-[#c5a059]" />
            <input
              type="text"
              placeholder="Search flight logs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-14 pr-6 text-xs outline-none focus:border-[#c5a059]/50 focus:bg-white/[0.08]"
            />
          </div>
        </div>

        {/* EMPTY STATE */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-20 border border-dashed border-white/10 rounded-[3rem]">
            <p className="text-white/20 uppercase font-black tracking-widest">
              No matching flight logs found in the archives.
            </p>
          </div>
        )}

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredBlogs.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.id}
              className="group flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 border border-white/5 shadow-2xl">
                <img
                  src={post.image || "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800"}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1525] via-transparent to-transparent opacity-60" />
                <div className="absolute top-8 left-8 px-5 py-2 bg-black/60 backdrop-blur-md border border-white/10 text-[#c5a059] text-[9px] font-black uppercase tracking-widest rounded-full">
                  {post.category}
                </div>
              </div>

              {/* TEXT */}
              <div className="px-2">
                <div className="flex items-center gap-4 text-white/20 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#c5a059]" />
                    {post.date}
                  </span>
                  <span className="w-1 h-1 bg-white/10 rounded-full"></span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                    8 Min Read
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#c5a059] transition-colors uppercase">
                  {post.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-8 line-clamp-2">
                  {post.excerpt || (post.content ? post.content.substring(0, 120) + "..." : "No briefing available.")}
                </p>
                <div className="flex items-center gap-3 text-[#c5a059] text-[10px] font-black uppercase tracking-widest group-hover:gap-5 transition-all">
                  Access Briefing
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default BlogPage;