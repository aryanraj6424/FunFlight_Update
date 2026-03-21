const express = require('express');
const cors = require('cors');
const path = require('path');
const mysql = require('mysql2/promise');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Log all requests
app.use((req, res, next) => {
  console.log(`📡 ${req.method} ${req.url}`);
  next();
});

app.use(express.static(path.join(__dirname, 'dist')));

// Database Configuration
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'funflight',
  charset: 'utf8mb4'
};

let db;

async function initDB() {
  try {
    // First try to connect without database to create it
    const tempDb = await mysql.createConnection({
      ...dbConfig,
      database: undefined
    });
    
    await tempDb.execute(`CREATE DATABASE IF NOT EXISTS ${dbConfig.database} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
    await tempDb.end();
    
    // Now connect with the database
    db = await mysql.createConnection(dbConfig);
    console.log('✅ Connected to MySQL database');
    
    // Create blogs table if it doesn't exist
    await db.execute(`
      CREATE TABLE IF NOT EXISTS blogs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) UNIQUE NOT NULL,
        category VARCHAR(100) DEFAULT 'General',
        excerpt TEXT,
        content LONGTEXT,
        image VARCHAR(500),
        date VARCHAR(50) DEFAULT CURRENT_TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);
    
    // Check if table has data, if not insert sample data
    const [rows] = await db.execute('SELECT COUNT(*) as count FROM blogs');
    if (rows[0].count === 0) {
      await db.execute(`
        INSERT INTO blogs (title, slug, category, excerpt, content, image, date) VALUES 
        ('What I Wish I Knew Before Starting Flight School', 'what-i-wish-i-knew-before-starting-flight-school', 'Student Tips', 'Stepping onto the ramp for your first discovery flight is an experience like no other. Here is what they don\'t tell you...', 'Realism over Minimums: FAA 40 ghante (Part 61) ka minimum bolta hai, lekin real average 70-80 hours hota hai. Sabse pehle FAA First-Class Medical certificate lena chahiye taki baad mein koi surprise na ho.', 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800', 'Jan 31, 2026'),
        ('Mastering Communication: Radio Basics for New Pilots', 'mastering-communication-radio-basics', 'Training', 'For many student pilots, the most intimidating part of the cockpit isn\'t the stick—it\'s the push-to-talk button.', 'Talking to ATC feels like learning a third language. Practice with a scanner or LiveATC at home. Consistency is key for progress maintain karne ke liye.', 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800', 'Feb 08, 2026')
      `);
      console.log('✅ Sample blog data inserted');
    }
    
    console.log('✅ Database initialized successfully');
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.log('🔄 Falling back to in-memory storage');
    
    // Fallback to in-memory storage
    global.useMemoryStorage = true;
  }
}

// API Routes

// Get all blogs
app.get('/api/blogs', async (req, res) => {
  try {
    if (global.useMemoryStorage) {
      return res.json(global.memoryBlogs || []);
    }
    
    const [rows] = await db.execute('SELECT * FROM blogs ORDER BY created_at DESC');
    console.log('GET /api/blogs - returning', rows.length, 'blogs');
    res.json(rows);
  } catch (error) {
    console.error('❌ Error fetching blogs:', error);
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});

// Get single blog by slug
app.get('/api/blogs/:slug', async (req, res) => {
  try {
    if (global.useMemoryStorage) {
      const blog = (global.memoryBlogs || []).find(b => b.slug === req.params.slug);
      if (!blog) return res.status(404).json({ error: 'Blog not found' });
      return res.json(blog);
    }
    
    const [rows] = await db.execute('SELECT * FROM blogs WHERE slug = ?', [req.params.slug]);
    if (rows.length === 0) return res.status(404).json({ error: 'Blog not found' });
    res.json(rows[0]);
  } catch (error) {
    console.error('❌ Error fetching blog:', error);
    res.status(500).json({ error: 'Failed to fetch blog' });
  }
});

// Create new blog
app.post('/api/blogs', async (req, res) => {
  try {
    console.log('🔥 POST /api/blogs received request');
    console.log('📝 Request body:', req.body);
    
    const { title, category, excerpt, content, image } = req.body;
    
    if (!title || !content) {
      console.log('❌ Missing required fields:', { title: !!title, content: !!content });
      return res.status(400).json({ error: 'Title and content are required' });
    }
    
    // Generate slug
    const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    
    // Generate date
    const date = new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: '2026' });
    
    if (global.useMemoryStorage) {
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
      
      global.memoryBlogs = global.memoryBlogs || [];
      global.memoryBlogs.unshift(newBlog);
      
      console.log('✅ POST /api/blogs - created new blog in memory:', newBlog.title);
      console.log('📊 Total blogs now:', global.memoryBlogs.length);
      
      return res.status(201).json(newBlog);
    }
    
    const [result] = await db.execute(
      'INSERT INTO blogs (title, slug, category, excerpt, content, image, date) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [title, slug, category || 'General', excerpt, content, image, date]
    );
    
    const newBlog = {
      id: result.insertId,
      title,
      slug,
      category: category || 'General',
      excerpt,
      content,
      image,
      date
    };
    
    console.log('✅ POST /api/blogs - created new blog:', newBlog.title);
    console.log('📊 Total blogs now: (check database)');
    
    res.status(201).json(newBlog);
  } catch (error) {
    console.error('❌ Error creating blog:', error);
    res.status(500).json({ error: 'Failed to create blog' });
  }
});

// Delete blog
app.delete('/api/blogs/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    
    if (global.useMemoryStorage) {
      global.memoryBlogs = global.memoryBlogs || [];
      const initialLength = global.memoryBlogs.length;
      global.memoryBlogs = global.memoryBlogs.filter(b => b.id !== id);
      
      if (global.memoryBlogs.length === initialLength) {
        return res.status(404).json({ error: 'Blog not found' });
      }
      
      console.log('DELETE /api/blogs/:id - deleted blog with id:', id);
      return res.json({ message: 'Blog deleted successfully' });
    }
    
    const [result] = await db.execute('DELETE FROM blogs WHERE id = ?', [id]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    
    console.log('DELETE /api/blogs/:id - deleted blog with id:', id);
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('❌ Error deleting blog:', error);
    res.status(500).json({ error: 'Failed to delete blog' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server is running', 
    mysql: !global.useMemoryStorage,
    storage: global.useMemoryStorage ? 'Memory' : 'MySQL'
  });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
app.listen(PORT, async () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 API available at http://localhost:${PORT}/api/blogs`);
  console.log(`🏥 Health check at http://localhost:${PORT}/api/health`);
  
  // Initialize database
  await initDB();
});
