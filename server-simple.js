const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// In-memory storage (fallback when MySQL isn't available)
let blogs = [
  {
    id: 1,
    title: "What I Wish I Knew Before Starting Flight School",
    slug: "what-i-wish-i-knew-before-starting-flight-school",
    category: "Student Tips",
    excerpt: "Stepping onto the ramp for your first discovery flight is an experience like no other. Here is what they don't tell you...",
    content: "Realism over Minimums: FAA 40 ghante (Part 61) ka minimum bolta hai, lekin real average 70-80 hours hota hai.",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800",
    date: "Jan 31, 2026"
  },
  {
    id: 2,
    title: "Mastering Communication: Radio Basics for New Pilots",
    slug: "mastering-communication-radio-basics",
    category: "Training",
    excerpt: "For many student pilots, the most intimidating part of the cockpit isn't the stick—it's the push-to-talk button.",
    content: "Talking to ATC feels like learning a third language. Practice with a scanner or LiveATC at home.",
    image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800",
    date: "Feb 08, 2026"
  }
];

// API Routes

// Get all blogs
app.get('/api/blogs', (req, res) => {
  console.log('GET /api/blogs - returning', blogs.length, 'blogs');
  res.json(blogs);
});

// Get single blog by slug
app.get('/api/blogs/:slug', (req, res) => {
  const blog = blogs.find(b => b.slug === req.params.slug);
  if (!blog) {
    return res.status(404).json({ error: 'Blog not found' });
  }
  res.json(blog);
});

// Create new blog
app.post('/api/blogs', (req, res) => {
  try {
    const { title, category, excerpt, content, image } = req.body;
    
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }
    
    // Generate slug
    const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    
    // Generate date
    const date = new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: '2026' });
    
    const newBlog = {
      id: Date.now(),
      title,
      slug,
      category: category || 'General',
      excerpt,
      content,
      image,
      date
    };
    
    blogs.unshift(newBlog); // Add to beginning
    console.log('POST /api/blogs - created new blog:', newBlog.title);
    
    res.status(201).json(newBlog);
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ error: 'Failed to create blog' });
  }
});

// Delete blog
app.delete('/api/blogs/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const initialLength = blogs.length;
    blogs = blogs.filter(b => b.id !== id);
    
    if (blogs.length === initialLength) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    
    console.log('DELETE /api/blogs/:id - deleted blog with id:', id);
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({ error: 'Failed to delete blog' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running', blogsCount: blogs.length });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 API available at http://localhost:${PORT}/api/blogs`);
  console.log(`🏥 Health check at http://localhost:${PORT}/api/health`);
});
