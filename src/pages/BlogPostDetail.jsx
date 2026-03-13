import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  User, 
  ChevronLeft, 
  Share2, 
  ArrowRight,
  ShieldCheck,
  PlaneTakeoff
} from 'lucide-react';

const BlogPostDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // 1. LocalStorage se blogs fetch karna
    const savedBlogs = JSON.parse(localStorage.getItem('funflight_blogs') || '[]');
    
    // 2. URL slug ke basis par sahi blog dhoondhna
    const currentBlog = savedBlogs.find(b => b.slug === slug);
    setBlog(currentBlog);

    // Page top par scroll ho jaye jab naya blog khule
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#0a1525] flex items-center justify-center flex-col gap-6 text-white">
        <div className="w-20 h-20 border-2 border-[#c5a059] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-[#c5a059] font-bold tracking-widest uppercase animate-pulse">Scanning Airspace...</p>
        <Link to="/blog" className="text-white/40 hover:text-white transition-colors">Abort Mission & Return to Blog</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a1525] text-white selection:bg-[#c5a059] font-sans">
      
      {/* --- ARTICLE HERO SECTION --- */}
      <header className="relative h-[70vh] min-h-[500px] flex items-end pb-24 px-6 overflow-hidden">
        {/* Overlay Gradients for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1525] via-[#0a1525]/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/40 z-0" />
        
        {/* Hero Background Image */}
        <img 
          src={blog.image || "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1600"} 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 transform scale-105"
          alt={blog.title}
        />
        
        <div className="relative z-20 max-w-5xl mx-auto w-full">
          <Link to="/blog" className="inline-flex items-center gap-2 text-[#c5a059] text-[10px] font-black uppercase tracking-[0.3em] mb-8 hover:gap-4 transition-all bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <ChevronLeft className="w-4 h-4" /> Back to Hangar
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[2px] w-12 bg-[#c5a059]"></span>
            <span className="text-[#c5a059] text-xs font-black uppercase tracking-widest">{blog.category || 'Flight Training'}</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] uppercase tracking-tighter max-w-4xl">
            {blog.title}
          </h1>
        </div>
      </header>

      {/* --- MAIN CONTENT GRID --- */}
      <main className="max-w-5xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Meta Sidebar (Visible on Desktop) */}
        <aside className="lg:col-span-3">
          <div className="sticky top-32 space-y-10 border-l border-white/5 pl-8">
            <div>
              <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] mb-3">Mission Date</p>
              <p className="text-sm font-bold flex items-center gap-3 text-white/80">
                <Calendar className="w-4 h-4 text-[#c5a059]" /> {blog.date}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] mb-3">Intelligence</p>
              <p className="text-sm font-bold flex items-center gap-3 text-white/80">
                <Clock className="w-4 h-4 text-[#c5a059]" /> 8 Min Briefing
              </p>
            </div>
            <div>
              <p className="text-[10px] font-black text-white/20 uppercase tracking-[0.2em] mb-3">Author</p>
              <p className="text-sm font-bold flex items-center gap-3 text-white/80">
                <User className="w-4 h-4 text-[#c5a059]" /> Chief Instructor
              </p>
            </div>
            
            <div className="pt-6">
               <button className="w-full flex items-center justify-center gap-3 py-4 rounded-xl border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-[#c5a059] hover:text-black transition-all group">
                 <Share2 className="w-4 h-4 group-hover:scale-125 transition-transform" /> Share Intel
               </button>
            </div>
          </div>
        </aside>

        {/* Article Content Area */}
        <article className="lg:col-span-9">
          <div className="prose prose-invert max-w-none">
            {/* Lead Text */}
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light mb-16 italic border-b border-white/5 pb-12">
              "Every great pilot started where you are now. The difference between a dream and a destination is the flight plan you follow today."
            </p>

            {/* Main Body Content (Rendered with Line Breaks) */}
            <div className="text-white/70 leading-[1.8] text-lg space-y-8 whitespace-pre-wrap font-medium">
              {blog.content}
            </div>

            {/* Premium Call-out Box */}
            <div className="my-16 bg-gradient-to-br from-[#001a35] to-[#0a1525] p-10 rounded-[2.5rem] border border-[#c5a059]/30 relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <PlaneTakeoff size={200} />
              </div>
              <div className="relative z-10">
                <ShieldCheck className="text-[#c5a059] w-10 h-10 mb-6" />
                <h4 className="text-2xl font-bold text-white mb-4 uppercase tracking-tight">Ready to Take Command?</h4>
                <p className="text-white/50 text-base mb-8 max-w-lg">
                  At Fun Flight Training Academy, we don't just teach you to fly; we prepare you for the cockpit of your future. Book your Discovery Flight today.
                </p>
                <button className="bg-[#c5a059] text-black px-8 py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-[0_10px_30px_rgba(197,160,89,0.3)] flex items-center gap-3">
                  Start Your Journey <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="mt-20 pt-10 border-t border-white/5 flex justify-between items-center">
             <Link to="/blog" className="text-xs font-bold text-white/20 uppercase tracking-[0.2em] hover:text-[#c5a059] transition-colors flex items-center gap-2">
               <ChevronLeft className="w-4 h-4" /> Previous Mission
             </Link>
             <Link to="/blog" className="text-xs font-bold text-white/20 uppercase tracking-[0.2em] hover:text-[#c5a059] transition-colors flex items-center gap-2">
               Next Briefing <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </article>

      </main>

    
    </div>
  );
};

export default BlogPostDetail;