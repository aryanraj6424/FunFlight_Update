import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import Trainers from './pages/Trainers';
import TrainerDetails from './pages/TrainerDetails';
import FAQ from './pages/FAQ';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Placeholder components for other pages
const BecomePilot = () => <div className="section-padding container text-center"><h1>Become a Pilot Page</h1></div>;
const Events = () => <div className="section-padding container text-center"><h1>Events Page</h1></div>;
const Blog = () => <div className="section-padding container text-center"><h1>Blog Page</h1></div>;
const NotFound = () => <div className="section-padding container text-center"><h1>404 Not Found</h1></div>;

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-2" element={<Home2 />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course-details" element={<CourseDetails />} />
          <Route path="/become-pilot" element={<BecomePilot />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/trainer-details" element={<TrainerDetails />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
