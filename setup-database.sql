-- Fun Flight Blog Database Setup
-- Run this script in MySQL to create the database and table

-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS funflight CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Use the database
USE funflight;

-- Create blogs table
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert sample data (optional)
INSERT IGNORE INTO blogs (title, slug, category, excerpt, content, image, date) VALUES 
('What I Wish I Knew Before Starting Flight School', 'what-i-wish-i-knew-before-starting-flight-school', 'Student Tips', 'Stepping onto the ramp for your first discovery flight is an experience like no other. Here is what they don''t tell you...', 'Realism over Minimums: FAA 40 ghante (Part 61) ka minimum bolta hai, lekin real average 70-80 hours hota hai. Sabse pehle FAA First-Class Medical certificate lena chahiye taki baad mein koi surprise na ho.', 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800', 'Jan 31, 2026'),
('Mastering Communication: Radio Basics for New Pilots', 'mastering-communication-radio-basics', 'Training', 'For many student pilots, the most intimidating part of the cockpit isn''t the stick—it''s the push-to-talk button.', 'Talking to ATC feels like learning a third language. Practice with a scanner or LiveATC at home. Consistency is key for progress maintain karne ke liye.', 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800', 'Feb 08, 2026');

-- Show the created table structure
DESCRIBE blogs;

-- Show the inserted data
SELECT * FROM blogs;
