import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Trainers from './pages/Trainers';


import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import BlogPage from './pages/BlogPage';
import BlogPostDetail from './pages/BlogPostDetail';
import ScrollToTop from "./components/ScrollToTop";
import AdminDashboard from './components/AdminDashboard';

// Placeholder components for other pages
const BecomePilot = () => <div className="section-padding container text-center"><h1>Become a Pilot Page</h1></div>;
const Events = () => <div className="section-padding container text-center"><h1>Events Page</h1></div>;
const Blog = () => <div className="section-padding container text-center"><h1>Blog Page</h1></div>;
const NotFound = () => <div className="section-padding container text-center"><h1>404 Not Found</h1></div>;

function App() {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Routes>
          {/* admin path */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course-details" element={<CourseDetails />} />
          <Route path="/become-pilot" element={<BecomePilot />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/trainers" element={<Trainers />} />
          
          
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
