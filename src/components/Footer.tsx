
// import { Facebook, Twitter, Play, Send, ChevronUp } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Footer() {

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   };

//   return (
//     <footer className="bg-[#111317] text-white pt-20 relative">

//       {/* Top Footer */}
//       <div className="max-w-7xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

//         {/* About */}
//         <div>
//           <h3 className="text-2xl font-serif font-semibold mb-6" style={{ color: '#F5B400' }}>About Me</h3>

//           <p className="text-gray-400 mb-6 leading-relaxed">
//             Maecenas tempus tellus egondime honcus sequam seitmet dipiscing sem
//             eque sedipsuNam quam
//           </p>

//           {/* Social Icons */}
//           <div className="flex gap-4">

//             <a href="https://facebook.com" target="_blank">
//               <div className="w-10 h-10 rounded-full bg-[#2b2e33] flex items-center justify-center hover:bg-sky-500 transition">
//                 <Facebook size={18}/>
//               </div>
//             </a>

//             <a href="https://twitter.com" target="_blank">
//               <div className="w-10 h-10 rounded-full bg-[#2b2e33] flex items-center justify-center hover:bg-sky-500 transition">
//                 <Twitter size={18}/>
//               </div>
//             </a>

//             <a href="#">
//               <div className="w-10 h-10 rounded-full bg-[#2b2e33] flex items-center justify-center hover:bg-sky-500 transition">
//                 <Play size={18}/>
//               </div>
//             </a>

//             <a href="#">
//               <div className="w-10 h-10 rounded-full bg-[#2b2e33] flex items-center justify-center hover:bg-sky-500 transition">
//                 <Play size={18}/>
//               </div>
//             </a>

//           </div>
//         </div>

//         {/* Courses */}
//         <div>
//           <h3 className="text-2xl font-serif font-semibold mb-6 "style={{ color: '#F5B400' }}>Courses</h3>

//           <ul className="space-y-4 text-gray-300">

//             <li>
//               <Link to="/courses/usa" className="hover:text-sky-400">
//                 Airline Pilot For USA
//               </Link>
//             </li>

//             <li>
//               <Link to="/courses/asian" className="hover:text-sky-400">
//                 Airline Pilot For Asian
//               </Link>
//             </li>

//             <li>
//               <Link to="/courses/direct" className="hover:text-sky-400">
//                 Airline Direct Program
//               </Link>
//             </li>

//             <li>
//               <Link to="/courses/degree" className="hover:text-sky-400">
//                 College Degree Program
//               </Link>
//             </li>

//             <li>
//               <Link to="/courses/mechanic" className="hover:text-sky-400">
//                 Mechanic Training
//               </Link>
//             </li>

//           </ul>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-2xl font-serif font-semibold mb-6 "style={{ color: '#F5B400' }}>Quick Link</h3>

//           <ul className="space-y-4 text-gray-300">

//             <li>
//               <Link to="/about" className="hover:text-sky-400">
//                 About
//               </Link>
//             </li>

//             <li>
//               <Link to="/faq" className="hover:text-sky-400">
//                 FAQ
//               </Link>
//             </li>

//             <li>
//               <Link to="/privacy" className="hover:text-sky-400">
//                 Privacy & Policy
//               </Link>
//             </li>

//             <li>
//               <Link to="/admission" className="hover:text-sky-400">
//                 Admission
//               </Link>
//             </li>

//             <li>
//               <Link to="/trainer" className="hover:text-sky-400">
//                 Trainer
//               </Link>
//             </li>

//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div>
//           <h3 className="text-2xl font-serif font-semibold mb-6 "style={{ color: '#F5B400' }}>Newsletter</h3>

//           <p className="text-gray-400 mb-6">
//             Boluptatem accusantiu dolor laudantium totaaperiam
//           </p>

//           <div className="flex border border-gray-600 rounded">

//             <input
//               type="email"
//               placeholder="Email Address"
//               className="bg-transparent px-4 py-3 w-full outline-none"
//             />

//             <button className="px-4 text-white hover:text-sky-400">
//               <Send size={18}/>
//             </button>

//           </div>
//         </div>

//       </div>

//       {/* Bottom Copyright */}
//       <div className="border-t border-gray-800 py-6 text-center text-gray-400">
//         Copyright © 2026. All Rights Reserved By FunFlight.
//       </div>

//       {/* Scroll To Top Button */}
//       <button
//         onClick={scrollToTop}
//         className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center text-white shadow-lg hover:bg-sky-600 transition"
//       >
//         <ChevronUp size={20}/>
//       </button>

//     </footer>
//   );
// }


import { Facebook, Twitter, Instagram,Star, ChevronUp } from "lucide-react";
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
          <h3 className="text-2xl font-serif font-semibold mb-6" style={{ color: '#F5B400' }}>About Me</h3>

          <p className="text-gray-400 mb-6 leading-relaxed">
            Maecenas tempus tellus egondime honcus sequam seitmet dipiscing sem
            eque sedipsuNam quam
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">

            <a href="https://www.facebook.com/manny.flighttraining" target="_blank">
              <div className="w-10 h-10 rounded-full bg-[#2b2e33] flex items-center justify-center hover:bg-sky-500 transition">
                <Facebook size={18}/>
              </div>
            </a>

            <a href="https://twitter.com" target="_blank">
              <div className="w-10 h-10 rounded-full bg-[#2b2e33] flex items-center justify-center hover:bg-sky-500 transition">
                <Twitter size={18}/>
              </div>
            </a>

            <a href="https://www.yelp.com/biz/fun-flight-training-lake-wales?osq=Flight+Instruction">
              <div className="w-10 h-10 rounded-full bg-[#2b2e33] flex items-center justify-center hover:bg-sky-500 transition">
                 <Star size={18}/>
              </div>
            </a>

            <a href="https://www.instagram.com/funflighttraining/">
              <div className="w-10 h-10 rounded-full bg-[#2b2e33] flex items-center justify-center hover:bg-sky-500 transition">
                <Instagram size={18}/>
              </div>
            </a>

          </div>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-2xl font-serif font-semibold mb-6 "style={{ color: '#F5B400' }}>Courses</h3>

          <ul className="space-y-4 text-gray-300">

            <li>
              <Link to="/courses/usa" className="hover:text-sky-400">
                Airline Pilot For USA
              </Link>
            </li>

            <li>
              <Link to="/courses/asian" className="hover:text-sky-400">
                Airline Pilot For Asian
              </Link>
            </li>

            <li>
              <Link to="/courses/direct" className="hover:text-sky-400">
                Airline Direct Program
              </Link>
            </li>

            <li>
              <Link to="/courses/degree" className="hover:text-sky-400">
                College Degree Program
              </Link>
            </li>

            <li>
              <Link to="/courses/mechanic" className="hover:text-sky-400">
                Mechanic Training
              </Link>
            </li>

          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-serif font-semibold mb-6 "style={{ color: '#F5B400' }}>Quick Link</h3>

          <ul className="space-y-4 text-gray-300">

            <li>
              <Link to="/about" className="hover:text-sky-400">
                About
              </Link>
            </li>

            <li>
              <Link to="/faq" className="hover:text-sky-400">
                FAQ
              </Link>
            </li>

            <li>
              <Link to="/privacy" className="hover:text-sky-400">
                Privacy & Policy
              </Link>
            </li>

            <li>
              <Link to="/admission" className="hover:text-sky-400">
                Admission
              </Link>
            </li>

            <li>
              <Link to="/trainer" className="hover:text-sky-400">
                Trainer
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