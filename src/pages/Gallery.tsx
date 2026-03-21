

import React, { useState, useEffect } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Loader2 } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // PHP API endpoint for gallery
  const API_ENDPOINT = 'http://localhost/funFlight-main (2)/funFlight-main/admin/api-gallery.php'; 

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_ENDPOINT);
        
        if (response.ok) {
          const data = await response.json();
          setGalleryItems(data);
        } else {
          // Fallback to mock data if API fails
          const mockDataFromAdmin = [
            { id: 1, image: 'https://images.unsplash.com/photo-1548191259-7150825316e6?auto=format&fit=crop&w=800', title: 'Checkride Success' },
            { id: 2, image: 'https://images.unsplash.com/photo-1559827265-dfaed193a3d9?auto=format&fit=crop&w=800', title: 'Cessna 172 Training' },
            { id: 3, image: 'https://images.unsplash.com/photo-1584293240633-1125b5c7e6a3?auto=format&fit=crop&w=800', title: 'Student Solo Flight' },
            { id: 4, image: 'https://images.unsplash.com/photo-1592593482752-1b9c6d5b5b5c?auto=format&fit=crop&w=800', title: 'Our Flight Fleet' },
            { id: 5, image: 'https://images.unsplash.com/photo-1504607798333-52a30db54a5d?auto=format&fit=crop&w=800', title: 'Lakeland Airport View' },
            { id: 6, image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800', title: 'Instrument Training' },
          ];
          setGalleryItems(mockDataFromAdmin);
        }
        
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
                    alt="Gallery Image"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
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
    
    </div>
  );
};

export default Gallery;