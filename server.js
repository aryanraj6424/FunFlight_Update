const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// Database Connection
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
    
    console.log('✅ Blogs table ready');
    
    // Insert sample data if table is empty
    const [rows] = await db.execute('SELECT COUNT(*) as count FROM blogs');
    if (rows[0].count === 0) {
      await db.execute(`
        INSERT INTO blogs (title, slug, category, excerpt, content, image, date) VALUES 
        ('What I Wish I Knew Before Starting Flight School', 'what-i-wish-i-knew-before-starting-flight-school', 'Student Tips', 'Stepping onto the ramp for your first discovery flight is an experience like no other. Here is what they don\'t tell you...', 'Realism over Minimums: FAA 40 ghante (Part 61) ka minimum bolta hai, lekin real average 70-80 hours hota hai. Sabse pehle FAA First-Class Medical certificate lena chahiye taki baad mein koi surprise na ho.', 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800', 'Jan 31, 2026'),
        ('Mastering Communication: Radio Basics for New Pilots', 'mastering-communication-radio-basics', 'Training', 'For many student pilots, the most intimidating part of the cockpit isn\'t the stick—it\'s the push-to-talk button.', 'Talking to ATC feels like learning a third language. Practice with a scanner or LiveATC at home. Consistency is key for progress maintain karne ke liye.', 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800', 'Feb 08, 2026')
      `);
      console.log('✅ Sample blog posts inserted');
    }
    
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
    process.exit(1);
  }
}

// API Routes

// Get all blogs
app.get('/api/blogs', async (req, res) => {
  try {
    const [blogs] = await db.execute('SELECT * FROM blogs ORDER BY created_at DESC');
    res.json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});

// Get single blog by slug
app.get('/api/blogs/:slug', async (req, res) => {
  try {
    const [blogs] = await db.execute('SELECT * FROM blogs WHERE slug = ?', [req.params.slug]);
    if (blogs.length === 0) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(blogs[0]);
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({ error: 'Failed to fetch blog' });
  }
});

// Create new blog
app.post('/api/blogs', async (req, res) => {
  try {
    const { title, category, excerpt, content, image } = req.body;
    
    // Generate slug
    const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    
    // Generate date
    const date = new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: '2026' });
    
    const [result] = await db.execute(
      'INSERT INTO blogs (title, slug, category, excerpt, content, image, date) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [title, slug, category, excerpt, content, image, date]
    );
    
    const [newBlog] = await db.execute('SELECT * FROM blogs WHERE id = ?', [result.insertId]);
    res.status(201).json(newBlog[0]);
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({ error: 'Failed to create blog' });
  }
});

// Update blog
app.put('/api/blogs/:id', async (req, res) => {
  try {
    const { title, category, excerpt, content, image } = req.body;
    const [result] = await db.execute(
      'UPDATE blogs SET title = ?, category = ?, excerpt = ?, content = ?, image = ? WHERE id = ?',
      [title, category, excerpt, content, image, req.params.id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    
    const [updatedBlog] = await db.execute('SELECT * FROM blogs WHERE id = ?', [req.params.id]);
    res.json(updatedBlog[0]);
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({ error: 'Failed to update blog' });
  }
});

// Delete blog
app.delete('/api/blogs/:id', async (req, res) => {
  try {
    const [result] = await db.execute('DELETE FROM blogs WHERE id = ?', [req.params.id]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({ error: 'Failed to delete blog' });
  }
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📊 API available at http://localhost:${PORT}/api/blogs`);
  });
});
