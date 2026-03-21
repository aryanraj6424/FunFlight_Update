



import { Facebook, Music2, Instagram, Star, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#111317] text-white pt-20 relative">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* About */}
        <div>
          <h3 className="text-2xl font-serif font-semibold mb-6" style={{ color: '#F5B400' }}>About Us</h3>

          <p className="text-gray-400 mb-6 leading-relaxed">
            Our mission is to provide elite flight training in modern Cessna 172 and Piper PA-28 aircraft while prioritizing safety and satisfaction.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">

            <a href="https://www.facebook.com/manny.flighttraining" target="_blank">
              <div className="w-10 h-10 rounded-full bg-[#2b2e33] flex items-center justify-center hover:bg-sky-500 transition">
                <Facebook size={18}/>
              </div>
            </a>

            <a href="https://www.tiktok.com/lakewalesflighttraining/" target="_blank">
              <div className="w-10 h-10 rounded-full bg-[#2b2e33] flex items-center justify-center hover:bg-sky-500 transition">
                <Music2 size={18}/>
              </div>
            </a>

            <a href="https://www.yelp.com/biz/fun-flight-training-lake-wales?osq=Flight+Instruction">
              <div className="w-10 h-10 rounded-full bg-[#2b2e33] flex items-center justify-center hover:bg-sky-500 transition">
                 <Star size={18}/>
              </div>
            </a>

            <a href="https://www.instagram.com/lakewalesflighttraining/">
              <div className="w-10 h-10 rounded-full bg-[#2b2e33] flex items-center justify-center hover:bg-sky-500 transition">
                <Instagram size={18}/>
              </div>
            </a>

          </div>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-2xl font-serif font-semibold mb-6" style={{ color: '#F5B400' }}>Courses</h3>

          <ul className="space-y-4 text-gray-300">

            <li>
              <Link to="/courses" className="hover:text-sky-400">
                Private Pilot Rating
              </Link>
            </li>

            <li>
              <Link to="/courses" className="hover:text-sky-400">
                Instrument Rating
              </Link>
            </li>

            <li>
              <Link to="/courses" className="hover:text-sky-400">
                Commercial Rating
              </Link>
            </li>

            <li>
              <Link to="/courses" className="hover:text-sky-400">
                Certified Flight Instructor Rating
              </Link>
            </li>

            <li>
              <Link to="/courses" className="hover:text-sky-400">
                Certified Flight Instructor Instrument
              </Link>
            </li>

          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-serif font-semibold mb-6" style={{ color: '#F5B400' }}>Quick Link</h3>

          <ul className="space-y-4 text-gray-300">

            <li>
              <Link to="/" className="hover:text-sky-400">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-sky-400">
                About
              </Link>
            </li>

            <li>
              <Link to="/courses" className="hover:text-sky-400">
                Courses
              </Link>
            </li>

            <li>
              <Link to="/trainers" className="hover:text-sky-400">
                Trainers
              </Link>
            </li>

            <li>
              <Link to="/gallery" className="hover:text-sky-400">
                Gallery
              </Link>
            </li>

            <li>
              <Link to="/blog" className="hover:text-sky-400">
                Blog
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-sky-400">
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Location Map */}
        <div>
          <h3 className="text-2xl font-serif font-semibold mb-6" style={{ color: '#F5B400' }}>
            Our Location
          </h3>

          <div className="w-full h-[200px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Fun+Flight+Training,+450+S+Airport+Rd,+Lake+Wales,+FL+33859&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-800 py-6 text-center text-gray-400">
        Copyright © 2026. All Rights Reserved By Fun Flight Training.
      </div>

      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center text-white shadow-lg hover:bg-sky-600 transition"
      >
        <ChevronUp size={20}/>
      </button>

    </footer>
  );
}