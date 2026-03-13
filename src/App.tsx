// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './components/Layout';
// import Home from './pages/Home';

// import About from './pages/About';
// import Courses from './pages/Courses';
// import CourseDetails from './pages/CourseDetails';
// import Trainers from './pages/Trainers';


// import Gallery from './pages/Gallery';
// import Contact from './pages/Contact';
// import BlogPage from './pages/BlogPage';
// import BlogPostDetail from './pages/BlogPostDetail';
// import ScrollToTop from "./components/ScrollToTop";
// import AdminDashboard from './components/AdminDashboard';

// // Placeholder components for other pages
// const BecomePilot = () => <div className="section-padding container text-center"><h1>Become a Pilot Page</h1></div>;
// const Events = () => <div className="section-padding container text-center"><h1>Events Page</h1></div>;
// const Blog = () => <div className="section-padding container text-center"><h1>Blog Page</h1></div>;
// const NotFound = () => <div className="section-padding container text-center"><h1>404 Not Found</h1></div>;

// function App() {
//   return (
//     <Router>
//       <Layout>
//         <ScrollToTop />
//         <Routes>
//           {/* admin path */}
          
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/courses" element={<Courses />} />
//           <Route path="/course-details" element={<CourseDetails />} />
//           <Route path="/become-pilot" element={<BecomePilot />} />
//           <Route path="/events" element={<Events />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/trainers" element={<Trainers />} />
          
          
//           <Route path="/blog" element={<BlogPage />} />
//           <Route path="/blog/:slug" element={<BlogPostDetail />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Layout>
//     </Router>
    
//   );
// }

// export default App;


// import React from 'react';
import { BrowserRouter as Router, Routes, Route ,Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import React, { useState } from 'react';

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
import AdminLogin from './components/AdminLogin';

const BecomePilot = () => <div className="section-padding container text-center"><h1>Become a Pilot Page</h1></div>;
const Events = () => <div className="section-padding container text-center"><h1>Events Page</h1></div>;
const NotFound = () => <div className="section-padding container text-center"><h1>404 Not Found</h1></div>;

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAdminAuthenticated') === 'true'
  );

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <ScrollToTop />

      <Routes>

        {/* ✅ ADMIN PAGE (no layout) */}
        {/* <Route path="/admin" element={<AdminDashboard />} /> */}
        {/* ✅ ADMIN ROUTE LOGIC */}
        {/* Agar login nahi hai to Login Page dikhao, agar hai to Dashboard */}
        <Route 
          path="/admin" 
          element={
            isAuthenticated ? (
              <AdminDashboard onLogout={handleLogout} />
            ) : (
              <AdminLogin onLogin={handleLoginSuccess} />
            )
          } 
        />

        {/* ✅ WEBSITE PAGES */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/courses" element={<Layout><Courses /></Layout>} />
        <Route path="/course-details" element={<Layout><CourseDetails /></Layout>} />
        <Route path="/become-pilot" element={<Layout><BecomePilot /></Layout>} />
        <Route path="/events" element={<Layout><Events /></Layout>} />
        <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
        <Route path="/trainers" element={<Layout><Trainers /></Layout>} />
        <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
        <Route path="/blog/:slug" element={<Layout><BlogPostDetail /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />

        <Route path="*" element={<Layout><NotFound /></Layout>} />

      </Routes>
    </Router>
  );
}

export default App;
