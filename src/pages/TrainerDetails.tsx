import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Pin as Pinterest } from 'lucide-react';

const TrainerDetails = () => {
  const education = [
    {
      title: "Aircaft Advace Drgee",
      institution: "University Of Aircafia (1991 - 1995)",
      description: "Pellentesque habitant morbi tristienect alesuada fames ac tugestas. Insue estibulum et, tempor auctor world classic courses"
    },
    {
      title: "Controal Aircaft",
      institution: "Aircat College Of USA (1998 - 2001)",
      description: "Pellentesque habitant morbi tristienect alesuada fames ac tugestas. Insue estibulum et, tempor auctor world classic courses"
    },
    {
      title: "Flying Methology",
      institution: "Aircat College Of USA (2002 - 2005)",
      description: "Pellentesque habitant morbi tristienect alesuada fames ac tugestas. Insue estibulum et, tempor auctor world classic courses"
    }
  ];

  const experiences = [
    {
      title: "Pilot Club",
      institution: "Junior Trainer (2009 - 2010)",
      description: "Pellentesque habitant morbi tristienect alesuada fames ac tugestas. Insue estibulum et, tempor auctor world classic courses"
    },
    {
      title: "Aircat College",
      institution: "Junior Trainer (2009 - 2010)",
      description: "Pellentesque habitant morbi tristienect alesuada fames ac tugestas. Insue estibulum et, tempor auctor world classic courses"
    },
    {
      title: "USA Flying Academy",
      institution: "Senior Trainer (2012 - Present)",
      description: "Pellentesque habitant morbi tristienect alesuada fames ac tugestas. Insue estibulum et, tempor auctor world classic courses"
    }
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
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-4 text-white">Trainer Details</h1>
          <div className="flex justify-center items-center space-x-2 text-xs uppercase tracking-[0.2em] font-bold">
            <a href="/" className="hover:text-[#38bdf8] transition-colors">HOME</a>
            <span className="text-gray-400">/</span>
            <a href="/trainers" className="hover:text-[#38bdf8] transition-colors">TRAINER</a>
            <span className="text-gray-400">/</span>
            <span className="text-white">TRAINER DETAILS</span>
          </div>
        </div>
        {/* Curved Cutout (Convex) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] fill-white">
            <path d="M0,0V120H1200V0C1200,0,900,100,600,100S0,0,0,0Z"></path>
          </svg>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-24">
        <div className="container max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-sm overflow-hidden">
            <div className="md:w-1/2">
              <img 
                src="trainer-img.png" 
                alt="Kuna Huggo" 
                className="w-full h-auto rounded-sm shadow-xl"
              />
            </div>
            <div className="md:w-1/2 bg-gray-50 p-10 lg:p-16 rounded-sm">
              <h2 className="text-4xl font-serif font-bold text-[#002147] mb-2">Kuna Huggo</h2>
              <p className="text-[#38bdf8] font-bold text-sm uppercase tracking-widest mb-6">Trainer</p>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-8">
                Pellentesque habitant morbi tristique senectus et netalesuada fames ac tugestas. In osue estibulum et, tempor auctor, justo. In ac felis quis tortor malesuada prellentesque auctor neque nec urna. Proin sapipsum porta aoris euismod ut, mi. Ahoncus pede. fringilla que. Morbi mattis ullamcorperit. Phasellus avida semper nisi.ullamel sem. aecenas
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 hover:bg-[#38bdf8] hover:text-white transition-all duration-300 shadow-sm">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 hover:bg-[#38bdf8] hover:text-white transition-all duration-300 shadow-sm">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 hover:bg-[#38bdf8] hover:text-white transition-all duration-300 shadow-sm">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-400 hover:bg-[#38bdf8] hover:text-white transition-all duration-300 shadow-sm">
                  <Pinterest className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="pb-24">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative">
            {/* Central Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2"></div>

            {/* Education Column */}
            <div>
              <h3 className="text-3xl font-serif font-bold text-[#002147] mb-12">Education</h3>
              <div className="space-y-12">
                {education.map((item, idx) => (
                  <div key={idx} className="relative">
                    {/* Dot */}
                    <div className="hidden lg:block absolute right-[-44px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#38bdf8] rounded-full border-4 border-white z-10"></div>
                    {/* Connector Line */}
                    <div className="hidden lg:block absolute right-[-40px] top-1/2 w-10 h-px bg-gray-200"></div>
                    
                    <div className="bg-gray-50 p-8 rounded-sm hover:shadow-lg transition-shadow duration-300">
                      <h4 className="text-xl font-serif font-bold text-[#002147] mb-2">{item.title}</h4>
                      <p className="text-[#38bdf8] text-xs font-bold mb-4">{item.institution}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Column */}
            <div>
              <h3 className="text-3xl font-serif font-bold text-[#002147] mb-12">Experiences</h3>
              <div className="space-y-12">
                {experiences.map((item, idx) => (
                  <div key={idx} className="relative">
                    {/* Dot */}
                    <div className="hidden lg:block absolute left-[-44px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#38bdf8] rounded-full border-4 border-white z-10"></div>
                    {/* Connector Line */}
                    <div className="hidden lg:block absolute left-[-40px] top-1/2 w-10 h-px bg-gray-200"></div>

                    <div className="bg-gray-50 p-8 rounded-sm hover:shadow-lg transition-shadow duration-300">
                      <h4 className="text-xl font-serif font-bold text-[#002147] mb-2">{item.title}</h4>
                      <p className="text-[#38bdf8] text-xs font-bold mb-4">{item.institution}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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

export default TrainerDetails;
