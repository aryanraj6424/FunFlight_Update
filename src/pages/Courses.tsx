import React from 'react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Airline Crew Training",
      description: "Lorem ipsum dolor sit amnectetur adipiscing elit, sedo Training Cources",
      requirements: [
        "You must be 16 years old",
        "You must have a diploma",
        "Must have medical certificat",
        "You must be 16 years old"
      ],
      image: "course-img-1.png",
    },
    {
      id: 2,
      title: "ATP Courses",
      description: "Lorem ipsum dolor sit amnectetur adipiscing elit, sedo Training Cources",
      requirements: [
        "You must be 16 years old",
        "You must have a diploma",
        "Must have medical certificat",
        "You must be 16 years old"
      ],
      image: "/course-img-2.png",
    },
    {
      id: 3,
      title: "Aircaft Maintenance",
      description: "Lorem ipsum dolor sit amnectetur adipiscing elit, sedo Training Cources",
      requirements: [
        "You must be 16 years old",
        "You must have a diploma",
        "Must have medical certificat",
        "You must be 16 years old"
      ],
      image: "/course-img-3.png",
    },
    {
      id: 4,
      title: "Air Traffic Control",
      description: "Lorem ipsum dolor sit amnectetur adipiscing elit, sedo Training Cources",
      requirements: [
        "You must be 16 years old",
        "You must have a diploma",
        "Must have medical certificat",
        "You must be 16 years old"
      ],
      image: "/course-img-4.png",
    },
    {
      id: 5,
      title: "Safety & Risk Management",
      description: "Lorem ipsum dolor sit amnectetur adipiscing elit, sedo Training Cources",
      requirements: [
        "You must be 16 years old",
        "You must have a diploma",
        "Must have medical certificat",
        "You must be 16 years old"
      ],
      image: "/gal-2.png",
    },
    {
      id: 6,
      title: "Flight Operations",
      description: "Lorem ipsum dolor sit amnectetur adipiscing elit, sedo Training Cources",
      requirements: [
        "You must be 16 years old",
        "You must have a diploma",
        "Must have medical certificat",
        "You must be 16 years old"
      ],
      image: "/gal-3.png",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('banner-img.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-4 text-white">Training Courses</h1>
          <div className="flex justify-center items-center space-x-2 text-xs uppercase tracking-[0.2em] font-bold">
            <a href="/" className="hover:text-[#38bdf8] transition-colors">HOME</a>
            <span className="text-gray-400">/</span>
            <span className="text-white">COURSES</span>
          </div>
        </div>
        {/* Curved Cutout (Convex) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] fill-white">
            <path d="M0,0V120H1200V0C1200,0,900,100,600,100S0,0,0,0Z"></path>
          </svg>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20">
            {courses.map((course) => (
              <div key={course.id} className="flex flex-col sm:flex-row gap-8 items-start">
                <div className="w-full sm:w-[280px] flex-shrink-0 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-[240px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-grow space-y-4">
                  <h3 className="text-2xl font-serif font-bold text-[#002147]">
                    {course.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {course.description}
                  </p>
                  <ul className="space-y-2">
                    {course.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-[13px]">
                        <span className="w-2 h-2 bg-[#38bdf8] rounded-full mr-3 flex-shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

export default Courses;
