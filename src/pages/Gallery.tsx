// import React, { useState } from 'react';
// import { Facebook, Twitter, Instagram, Linkedin, Search } from 'lucide-react';

// const Gallery = () => {
//   const [activeTab, setActiveTab] = useState('All');

//   const categories = ['All', 'Crew Training', 'Maintenace', 'Private Pilot'];

//   const galleryItems = [
//     {
//       id: 1,
//       // category: 'Crew Training',
//       image: '/gallery/img1.png',
//       // title: 'Crew Training'
//     },
//     {
//       id: 2,
//       // category: 'Maintenace',
//       image: '/gallery/img2.png',
//       // title: 'Maintenance'
//     },
//     {
//       id: 3,
//       // category: 'Private Pilot',
//       image: '/gallery/img3.png',
//       // title: 'Private Pilot'
//     },
//     {
//       id: 4,
//       // category: 'Crew Training',
//       image: '/gallery/img4.png',
//       // title: 'Cockpit View'
//     },
//     {
//       id: 5,
//       // category: 'Maintenace',
//       image: '/gallery/img5.png',
//       // title: 'Engine Check'
//     },
//     {
//       id: 6,
//       // category: 'Private Pilot',
//       image: '/gallery/img6.png',
//       // title: 'Flight Training'
//     },
//     {
//       id: 7,
//       // category: 'Crew Training',
//       image: '/gallery/img7.png',
//       // title: 'Airport Terminal'
//     },
//     {
//       id: 8,
//       // category: 'Maintenace',
//       image: '/gallery/img8.png',
//       // title: 'Hangar Work'
//     },
//     // {
//     //   id: 9,
//     //   category: 'Private Pilot',
//     //   image: 'https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&q=80&w=800',
//     //   title: 'Takeoff'
//     // }
//   ];

//   const filteredItems = activeTab === 'All' 
//     ? galleryItems 
//     : galleryItems.filter(item => item.category === activeTab);

//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
//         <div 
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ 
//             backgroundImage: `url('banner-img.png')`,
//           }}
//         >
//           <div className="absolute inset-0 bg-black/60"></div>
//         </div>
//         <div className="container relative z-10 text-center text-white">
//           <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-4 text-white">Gallery</h1>
//           <div className="flex justify-center items-center space-x-2 text-xs uppercase tracking-[0.2em] font-bold">
//             <a href="/" className="hover:text-[#38bdf8] transition-colors">HOME</a>
//             <span className="text-gray-400">/</span>
//             <span className="text-white">GALLERY</span>
//           </div>
//         </div>
//         {/* Curved Cutout (Convex) */}
//         <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] fill-white">
//             <path d="M0,0V120H1200V0C1200,0,900,100,600,100S0,0,0,0Z"></path>
//           </svg>
//         </div>
//       </section>

//       {/* Gallery Section */}
//       <section className="py-24">
//         <div className="container">
//           {/* Filter Tabs */}
//           <div className="flex flex-wrap justify-center gap-4 mb-16">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setActiveTab(category)}
//                 className={`px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
//                   activeTab === category 
//                     ? 'bg-[#38bdf8] text-white border-[#38bdf8]' 
//                     : 'bg-white text-gray-500 border-gray-200 hover:border-[#38bdf8] hover:text-[#38bdf8]'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           {/* Gallery Grid */}
//           {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredItems.map((item) => (
//               <div key={item.id} className="group relative overflow-hidden rounded-sm shadow-lg aspect-[4/3]">
//                 <img 
//                   src={item.image} 
//                   alt={item.title} 
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-[#002147]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
//                   <div className="w-12 h-12 bg-[#38bdf8] rounded-full flex items-center justify-center text-white mb-4 transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
//                     <Search className="w-5 h-5" />
//                   </div>
//                   <h4 className="text-white font-serif font-bold text-xl mb-2 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
//                     {item.title}
//                   </h4>
//                   <p className="text-[#38bdf8] text-xs font-bold uppercase tracking-widest transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 delay-75">
//                     {item.category}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div> */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//   {filteredItems.map((item) => (
//     <div
//       key={item.id}
//       onClick={() => setSelectedImage(item.image)}
//       className="group relative overflow-hidden rounded-sm shadow-lg aspect-[4/3] cursor-pointer"
//     >

//       <img
//         src={item.image}
//         alt={item.title}
//         className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
//       />

//       <div className="absolute inset-0 bg-[#002147]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">

//         <div className="w-12 h-12 bg-[#38bdf8] rounded-full flex items-center justify-center text-white mb-4">
//           <Search className="w-5 h-5" />
//         </div>

//         <h4 className="text-white font-serif font-bold text-xl mb-2">
//           {item.title}
//         </h4>

//         <p className="text-[#38bdf8] text-xs font-bold uppercase tracking-widest">
//           {item.category}
//         </p>

//       </div>
//     </div>
//   ))}
// </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="relative bg-[#38bdf8] py-20 text-white overflow-hidden">
//         <div className="container relative z-10">
//           <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
//             <div className="flex items-center gap-10">
//               <div className="hidden md:block border-r border-white/30 pr-10">
//                 <div className="flex flex-col items-center">
//                   <div className="w-20 h-20 mb-2">
//                     <svg viewBox="0 0 100 100" className="fill-white">
//                       <path d="M50 5 L95 25 L95 75 L50 95 L5 75 L5 25 Z M50 15 L85 30 L85 70 L50 85 L15 70 L15 30 Z" />
//                       <path d="M50 35 L70 45 L50 55 L30 45 Z" />
//                       <path d="M50 60 L65 70 L50 80 L35 70 Z" />
//                     </svg>
//                   </div>
//                   <span className="font-display font-extrabold text-2xl tracking-tighter">VISERFLY</span>
//                 </div>
//               </div>
//               <div className="text-center lg:text-left">
//                 <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-3">Like To Become A Pilot</h2>
//                 <p className="text-white/90 text-sm">Lorem ipsum dolor sit amet consectetuer</p>
//               </div>
//             </div>
//             <button className="bg-white text-[#38bdf8] font-bold py-5 px-12 rounded-sm hover:bg-[#002147] hover:text-white transition-all duration-300 uppercase tracking-widest text-xs shadow-lg">
//               Become An Pilot
//             </button>
//           </div>
//         </div>
//         {/* Bottom V Cutout (Sharp V) */}
//         <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] fill-[#002147]">
//             <path d="M0,0 L600,100 L1200,0 L1200,120 L0,120 Z"></path>
//           </svg>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Gallery;





// import React, { useState } from 'react';
// import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

// const Gallery = () => {

//   const [selectedImage, setSelectedImage] = useState(null);

//   const galleryItems = [
//     { id: 1, image: '/gallery/img1.png' },
//     { id: 2, image: '/gallery/img2.png' },
//     { id: 3, image: '/gallery/img3.png' },
//     { id: 4, image: '/gallery/img4.png' },
//     { id: 5, image: '/gallery/img5.png' },
//     { id: 6, image: '/gallery/img6.png' },
//     { id: 7, image: '/gallery/img7.png' },
//     { id: 8, image: '/gallery/img8.png' }
//   ];

//   return (
//     <div className="bg-white">

//       {/* Hero Section */}
//       <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{
//             backgroundImage: `url('banner-img.png')`,
//           }}
//         >
//           <div className="absolute inset-0 bg-black/60"></div>
//         </div>

//         <div className="container relative z-10 text-center text-white">
//           <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-4 text-white">Gallery</h1>

//           <div className="flex justify-center items-center space-x-2 text-xs uppercase tracking-[0.2em] font-bold">
//             <a href="/" className="hover:text-[#38bdf8] transition-colors">HOME</a>
//             <span className="text-gray-400">/</span>
//             <span className="text-white">GALLERY</span>
//           </div>
//         </div>

//         {/* Curved Cutout */}
//         <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
//           <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] fill-white">
//             <path d="M0,0V120H1200V0C1200,0,900,100,600,100S0,0,0,0Z"></path>
//           </svg>
//         </div>
//       </section>


//       {/* Gallery Section */}
//       <section className="py-24">
//         <div className="container">

//           {/* Gallery Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//             {galleryItems.map((item) => (

//               <div
//                 key={item.id}
//                 onClick={() => setSelectedImage(item.image)}
//                 className="overflow-hidden rounded-sm shadow-lg aspect-[4/3] cursor-pointer group"
//               >

//                 <img
//                   src={item.image}
//                   alt=""
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />

//               </div>

//             ))}

//           </div>
//         </div>
//       </section>


//       {/* Lightbox Popup */}
//       {selectedImage && (

//         <div
//           className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
//           onClick={() => setSelectedImage(null)}
//         >

//           <button className="absolute top-8 right-10 text-white text-5xl">
//             ×
//           </button>

//           <img
//             src={selectedImage}
//             alt=""
//             className="max-h-[90vh] max-w-[90vw] object-contain"
//           />

//         </div>

//       )}


//       {/* CTA Section */}
//       <section className="container relative z-20 -mb-[-20px]">
//         <div className="bg-[#38bdf8] rounded-xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
//           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
//             <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1920" alt="bg" className="w-full h-full object-cover" />
//           </div>
//           <div className="flex items-center space-x-8 relative z-10">
//             <div className="text-white">
//               {/* <div className="text-3xl font-display font-black tracking-tighter mb-1">VISER<span className="opacity-50">FLY</span></div> */}

//               {/* <div className="w-12 h-1 bg-white/50"></div> */}

//               <div className="mb-1">
//   <img 
//     src="/favicon.png" // Aapki logo file ka path
//     alt="Viserfly Logo" 
//     className="h-8 md:h-20 w-auto object-contain" // Height adjust karne ke liye
//   />
// </div>
//             </div>
//             <div className="h-16 w-px bg-white/20 hidden lg:block"></div>
//             <div className="space-y-2">
//               <h3 className="text-2xl lg:text-3xl font-display font-bold text-white">Like To Become A Pilot</h3>
//               <p className="text-white/80 text-sm">Lorem ipsum dolor sit amet consectetuer</p>
//             </div>
//           </div>
//           <button className="bg-white text-[#38bdf8] font-bold py-4 px-10 rounded-sm hover:bg-primary hover:text-white transition-all duration-300 text-xs uppercase tracking-widest relative z-10">
//             Become An Pilot
//           </button>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Gallery;



import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Loader2 } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace this URL with your actual Admin Panel API endpoint
  // Example: 'https://your-api.com/api/gallery'
  const API_ENDPOINT = '/api/gallery-images'; 

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        setLoading(true);
        // In a real scenario, this would be: const response = await fetch(API_ENDPOINT);
        // const data = await response.json();
        
        // MOCK DATA: Simulate what your Admin Panel might return
        const mockDataFromAdmin = [
          { id: 1, image: '/gallery/img1.png', title: 'Checkride Success' },
          { id: 2, image: '/gallery/img2.png', title: 'Cessna 172 Training' },
          { id: 3, image: '/gallery/img3.png', title: 'Student Solo Flight' },
          { id: 4, image: '/gallery/img4.png', title: 'Our Flight Fleet' },
          { id: 5, image: '/gallery/img5.png', title: 'Lakeland Airport View' },
          { id: 6, image: '/gallery/img6.png', title: 'Instrument Training' },
        ];

        setGalleryItems(mockDataFromAdmin);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching gallery images:", err);
        setError("Failed to load images. Please try again later.");
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/banner-img.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container relative z-10 text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-4 text-white">Our Gallery</h1>
          <div className="flex justify-center items-center space-x-2 text-xs uppercase tracking-[0.2em] font-bold">
            <a href="/" className="hover:text-[#38bdf8] transition-colors">HOME</a>
            <span className="text-gray-400">/</span>
            <span className="text-white">GALLERY</span>
          </div>
        </div>

        {/* Curved Cutout */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] fill-white">
            <path d="M0,0V120H1200V0C1200,0,900,100,600,100S0,0,0,0Z"></path>
          </svg>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          
          {/* Loading State */}
          {loading && (
            <div className="flex flex-col items-center justify-center py-20 text-gray-400">
              <Loader2 className="w-10 h-10 animate-spin mb-4 text-[#38bdf8]" />
              <p>Loading your flight memories...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-20">
              <p className="text-red-500 font-bold">{error}</p>
            </div>
          )}

          {/* Gallery Grid */}
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(item.image)}
                  className="overflow-hidden rounded-sm shadow-lg aspect-[4/3] cursor-pointer group relative"
                >
                  <img
                    src={item.image}
                    alt={item.title || "Fun Flight Training"}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay for Image Title (Optional) */}
                  <div className="absolute inset-0 bg-[#002147]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white p-4">
                    <p className="font-bold text-center uppercase tracking-widest text-sm">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && galleryItems.length === 0 && !error && (
            <div className="text-center py-20 text-gray-500">
              No images found in the gallery.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Popup */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-[100]"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-8 right-10 text-white text-5xl hover:text-[#38bdf8] transition-colors">
            ×
          </button>
          <img
            src={selectedImage}
            alt="Full view"
            className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl animate-in zoom-in duration-300"
          />
        </div>
      )}

      {/* CTA Section */}
     <section className="container relative z-20 -mb-[-20px]">
        <div className="bg-[#38bdf8] rounded-xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1920" alt="bg" className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center space-x-8 relative z-10">
            <div className="text-white">
              {/* <div className="text-3xl font-display font-black tracking-tighter mb-1">VISER<span className="opacity-50">FLY</span></div> */}

              {/* <div className="w-12 h-1 bg-white/50"></div> */}

              <div className="mb-1">
  <img 
    src="/favicon.png" // Aapki logo file ka path
    alt="Viserfly Logo" 
    className="h-8 md:h-20 w-auto object-contain" // Height adjust karne ke liye
  />
</div>
            </div>
            <div className="h-16 w-px bg-white/20 hidden lg:block"></div>
            <div className="space-y-2">
              <h3 className="text-2xl lg:text-3xl font-display font-bold text-white">Like To Become A Pilot</h3>
              <p className="text-white/80 text-sm">Lorem ipsum dolor sit amet consectetuer</p>
            </div>
          </div>
          <button className="bg-white text-[#38bdf8] font-bold py-4 px-10 rounded-sm hover:bg-primary hover:text-white transition-all duration-300 text-xs uppercase tracking-widest relative z-10">
            Become An Pilot
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;