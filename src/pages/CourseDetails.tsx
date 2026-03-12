import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const CourseDetails = () => {
  const [activeLesson, setActiveLesson] = useState<number | null>(0);

  const lessons = [
    {
      id: 0,
      title: "Lesson 01 : Basic Tecnocal Training",
      content: "tara ipsum dolor sit amet consectetur adipisicing elit. Natus quos numquam atque exercitationem reprehenderit voluptas dolores ad repudiandae asperiores. Excepturi error dolor at veniam, modi vel quos tempora pariatur eaque."
    },
    {
      id: 1,
      title: "Lesson 02 : Aircaft Motaletion",
      content: "tara ipsum dolor sit amet consectetur adipisicing elit. Natus quos numquam atque exercitationem reprehenderit voluptas dolores ad repudiandae asperiores. Excepturi error dolor at veniam, modi vel quos tempora pariatur eaque."
    },
    {
      id: 2,
      title: "Lesson 03 : Aircaft Motaletion",
      content: "tara ipsum dolor sit amet consectetur adipisicing elit. Natus quos numquam atque exercitationem reprehenderit voluptas dolores ad repudiandae asperiores. Excepturi error dolor at veniam, modi vel quos tempora pariatur eaque."
    },
    {
      id: 3,
      title: "Lesson 04 : Control Air Caft Taraning",
      content: "tara ipsum dolor sit amet consectetur adipisicing elit. Natus quos numquam atque exercitationem reprehenderit voluptas dolores ad repudiandae asperiores. Excepturi error dolor at veniam, modi vel quos tempora pariatur eaque."
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
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-4 text-white">Course Details</h1>
          <div className="flex justify-center items-center space-x-2 text-xs uppercase tracking-[0.2em] font-bold">
            <a href="/" className="hover:text-[#38bdf8] transition-colors">HOME</a>
            <span className="text-gray-400">/</span>
            <a href="/courses" className="hover:text-[#38bdf8] transition-colors">COURSES</a>
            <span className="text-gray-400">/</span>
            <span className="text-white">COURSE DETAILS</span>
          </div>
        </div>
        {/* Curved Cutout (Convex) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] fill-white">
            <path d="M0,0V120H1200V0C1200,0,900,100,600,100S0,0,0,0Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container max-w-4xl">
          {/* Featured Image */}
          <div className="mb-12 rounded-sm overflow-hidden shadow-lg">
            <img 
              src="cd-img.png" 
              alt="Course Featured" 
              className="w-full h-auto"
            />
          </div>

          {/* About This Course */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-[#002147] mb-6">About This Course</h2>
            <div className="space-y-4 text-gray-600 text-[18px] leading-relaxed">
              <p>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In dui maosue estibulum et, tempor auctor, justo. In ac felis quis tortor malesuada pretium. Pellentesque auctor neque nec urna. Proin sapipsum porta a, auctor quis, euismod ut, mi. Aenean viverra rhoncus pede. fringilla tstique. Morbi mattis ullamcorper velit. Phasellus gravida semper nisi. Nullam vel sem.
              </p>
              <p>
                Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sepsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
              </p>
            </div>
          </div>

          {/* What You'll Learn */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-[#002147] mb-6">What You'll Learn</h2>
            <p className="text-gray-600 text-[18px] leading-relaxed mb-8">
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sepsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 ">
              {[
                "Curabitur ullamcorper ultricies nisiam eget",
                "Fringilla mauris sit amet nibonec sodales",
                "Aenean leo ligula porttitor euconsequat",
                "Maecenas tempus tellus eget condim",
                "Must have medical certificat",
                "Must have medical certificat",
                "Curabitur ullamcorper ultricies nisiam eget",
                "Fringilla mauris sit amet nibonec sodales",
                "Aenean leo ligula porttitor euconsequat",
                "Maecenas tempus tellus eget condim"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center text-gray-600 text-[16px]">
                  <span className="w-2 h-2 bg-[#38bdf8] rounded-full mr-3 flex-shrink-0"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Second Image */}
          <div className="mb-16 rounded-sm overflow-hidden shadow-lg">
            <img 
              src="cd-img-2.png" 
              alt="Cockpit View" 
              className="w-full h-auto"
            />
          </div>

          {/* Course Requirements */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-[#002147] mb-6">Course Requirements</h2>
            <div className="space-y-3">
              {[
                "Donec sodales sagittis magna. Sed consequat leo eget bibendum sodales augue",
                "Aenean vulputate eleifend tellus. Aenean leo ligul porttitor eu, consequat vitae",
                "Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis",
                "Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi."
              ].map((item, idx) => (
                <div key={idx} className="flex items-start text-gray-600 text-[16px]">
                  <span className="w-2 h-2 bg-[#38bdf8] rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Course Curriculum */}
          <div className="mb-16">
            <h2 className="text-3xl font-serif font-bold text-[#002147] mb-8">Course Curriculum</h2>
            <div className="space-y-4">
              {lessons.map((lesson) => (
                <div key={lesson.id} className="border border-gray-200 rounded-sm overflow-hidden">
                  <button 
                    className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                    onClick={() => setActiveLesson(activeLesson === lesson.id ? null : lesson.id)}
                  >
                    <span className="font-serif font-bold text-[#002147]">{lesson.title}</span>
                    <div className="bg-[#38bdf8] text-white p-1 rounded-sm">
                      {activeLesson === lesson.id ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  {activeLesson === lesson.id && (
                    <div className="p-6 bg-gray-50 text-gray-600 text-[16px] leading-relaxed border-t border-gray-200">
                      {lesson.content}
                    </div>
                  )}
                </div>
              ))}
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

export default CourseDetails;
