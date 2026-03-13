import React from 'react';
import Slider from 'react-slick';
import { Facebook, Twitter, Instagram, Linkedin, Plane, ChevronLeft, ChevronRight, Star, Quote, Send } from 'lucide-react';

const Trainers = () => {
  const trainers = [
    {
      id: 1,
      name: "Kuna Huggo",
      role: "Trainer",
      image: "team-1.jpg",
    },
    {
      id: 2,
      name: "Robart Williams",
      role: "Trainer",
      image: "team-2.jpg",
    },
    {
      id: 3,
      name: "Tomas Kishan",
      role: "Trainer",
      image: "team-3.jpg",
    },
    {
      id: 4,
      name: "Divas Kings",
      role: "Trainer",
      image: "team-4.jpg",
    },
  ];


    //slider
  const logoSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } }
    ]
  };

  const trainerSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Desktop par 3
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024, // Tablets
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 640, // Mobiles
      settings: {
        slidesToShow: 1, // Mobile par sirf ek trainer dikhega
        centerMode: true, // Side se thoda agla card dikhega (optional)
        centerPadding: '20px',
      }
    }
  ]
};

  const testimonials = [
    {
      id: 1,
      name: "Robar Williams",
      role: "Recent Private Pilot Graduate,UAs",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100",
      content: "The 14-day accelerated program was intense but incredibly rewarding. The instructors at Fun Flight really care about your safety and precision. I'm now officially a pilot!",
      rating: 5
    },
    {
      id: 2,
      name: "Kisan Kingson",
      role: "Commercial Track Student, USA",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
      content: "Moving through the 9-month career track has been a dream. Training in the Cessna 172 is fantastic, and the mentors here are always available for one-on-one guidance.",
      rating: 5
    },
    {
      id: 3,
      name: "Mariya Khan",
      role: "Instrument Rating Graduate, USA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
      content: "I came here for my IFR training. The focus on real-world scenarios and the supportive atmosphere made a huge difference in my confidence as a pilot.",
      rating: 5
    },
    {
      id: 4,
      name: "Mariya Khan",
      role: "CFI Candidate, USA",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100",
      content: "Building my hours here while training for my CFI has been the best career move. The community at Lakeland is exactly what you need to succeed in aviation.",
      rating: 5
    }
  ];


  

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  function NextArrow(props: any) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#38bdf8] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#002147] transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    );
  }

  function PrevArrow(props: any) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#38bdf8] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#002147] transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
    );
  }

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
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-4 text-white">Our Expert Trainer</h1>
          <div className="flex justify-center items-center space-x-2 text-xs uppercase tracking-[0.2em] font-bold">
            <a href="/" className="hover:text-[#38bdf8] transition-colors">HOME</a>
            <span className="text-gray-400">/</span>
            <span className="text-white">TRAINER</span>
          </div>
        </div>
        {/* Curved Cutout (Convex) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] fill-white">
            <path d="M0,0V120H1200V0C1200,0,900,100,600,100S0,0,0,0Z"></path>
          </svg>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-12 border-b border-gray-100 overflow-hidden">
        <div className="container">
          <Slider 
            dots={false}
            infinite={true}
            slidesToShow={5}
            slidesToScroll={1}
            autoplay={true}
            speed={3000}
            autoplaySpeed={0}
            cssEase="linear"
            arrows={false}
            pauseOnHover={false}
            responsive={[
              { breakpoint: 1024, settings: { slidesToShow: 3 } },
              { breakpoint: 640, settings: { slidesToShow: 2 } }
            ]}
          >
            {[
              {logo: "client-1.png" },
              {logo: "client-2.png" },
              {logo: "client-3.png" },
              {logo: "client-4.png" },
              {logo: "client-5.png" }
            ].map((partner, index) => (
              <div key={index} className="px-8 focus:outline-none">
                <div className="flex items-center space-x-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                  <img 
                    src={partner.logo} 
                    
                    className="h-8 w-auto object-contain" 
                  />
                  <span className="font-display font-bold text-gray-700 text-sm tracking-widest uppercase">
                    
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Meet With Our Trainer */}
       <section className="py-16 md:py-24 bg-white">
  <div className="container mx-auto px-4">
    
    {/* Section Header */}
    <div className="text-center mb-12 md:mb-16 space-y-4">
      <div className="flex items-center justify-center space-x-2 text-[#c5a059]">
        <Plane className="w-5 h-5" />
        <span className="font-bold uppercase tracking-widest text-sm md:text-lg">Trainer</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-display font-extrabold text-[#0a1525]">
        Meet With Our Trainer
      </h2>
      <p className="text-gray-500 max-w-lg mx-auto text-base md:text-lg px-4">
        Learn from the industry experts dedicated to your aviation success.
      </p>
    </div>

    {/* Trainer Slider */}
    <div className="trainer-slider-wrapper">
      <Slider {...trainerSettings} className="trainer-slider">
        {trainers.map((trainer, index) => (
          <div key={index} className="px-2 md:px-4 outline-none">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg bg-gray-100">
              
              {/* Image - Mobile par height thodi kam ki hai */}
              <img 
                src={trainer.image} 
                alt={trainer.name} 
                className="w-full h-[350px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              {/* Overlay - Mobile par hamesha dikh sakta hai ya sirf hover par */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1525]/90 via-[#0a1525]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-8">
                
                <div className="bg-white p-5 md:p-6 rounded-xl text-center space-y-2 md:space-y-3 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl">
                  <h4 className="text-lg md:text-xl font-bold text-[#0a1525]">{trainer.name}</h4>
                  <p className="text-[#c5a059] text-xs md:text-sm font-black uppercase tracking-widest">{trainer.role}</p>
                  
                  {/* Social Icons */}
                  <div className="flex justify-center space-x-3 pt-2">
                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                      <a 
                        key={i} 
                        href="#" 
                        className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-[#0a1525] hover:bg-[#c5a059] hover:text-white transition-all border border-gray-100"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>

  </div>
</section>

      {/* Stats & Join Form */}
      {/* <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-px bg-gray-200 border border-gray-200">
              {[
                { label: "Total Staffs", value: "80+" },
                { label: "Winning Awards", value: "195" },
                { label: "Happy Students", value: "895" },
                { label: "Total Courses", value: "100+" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-gray-50 p-12 text-center">
                  <div className="text-5xl font-bold text-[#38bdf8] mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-bold text-sm uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-white p-12 shadow-2xl rounded-sm">
              <h3 className="text-3xl font-serif font-bold text-[#002147] mb-8">Join With Us</h3>
              <form className="space-y-6">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full border border-gray-200 p-4 text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
                />
                <select className="w-full border border-gray-200 p-4 text-sm focus:outline-none focus:border-[#38bdf8] transition-colors text-gray-500">
                  <option>Courses</option>
                  <option>Airline Crew Training</option>
                  <option>ATP Courses</option>
                </select>
                <textarea 
                  placeholder="Writing Something" 
                  rows={4}
                  className="w-full border border-gray-200 p-4 text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
                ></textarea>
                <button className="w-full bg-[#38bdf8] text-white font-bold py-4 px-8 rounded-sm hover:bg-[#002147] transition-all duration-300 uppercase tracking-widest text-xs">
                  Become An Pilot
                </button>
              </form>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-24 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-px bg-gray-200 border border-gray-200 shadow-sm">
        {[
          { label: "Flight Mentors", value: "15+" },
          { label: "Modern Aircraft", value: "12" },
          { label: "Certified Pilots", value: "450+" },
          { label: "Training Programs", value: "6" },
        ].map((stat, idx) => (
          <div key={idx} className="bg-gray-50 p-12 text-center group hover:bg-white transition-colors duration-300">
            <div className="text-5xl font-bold text-[#38bdf8] mb-2">{stat.value}</div>
            <div className="text-gray-600 font-bold text-sm uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Enrollment Form */}
      <div className="bg-white p-12 shadow-2xl rounded-sm border-t-4 border-[#38bdf8]">
        <h3 className="text-3xl font-serif font-bold text-[#002147] mb-2">Ready to Take Flight?</h3>
        <p className="text-gray-500 text-sm mb-8">Start your journey from zero to Commercial Pilot in 9 months.</p>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Full Name" 
              className="w-full border border-gray-200 p-4 text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
            />
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full border border-gray-200 p-4 text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
            />
          </div>
          
          <select className="w-full border border-gray-200 p-4 text-sm focus:outline-none focus:border-[#38bdf8] transition-colors text-gray-500 bg-white">
            <option value="">Select Your Training Interest</option>
            <option value="private">Private Pilot (PPL)</option>
            <option value="accelerated">14-Day Accelerated PPL</option>
            <option value="commercial">0 to Commercial (9 Months)</option>
            <option value="instrument">Instrument Rating (IFR)</option>
            <option value="cfi">CFI / CFI-I Training</option>
          </select>

          <textarea 
            placeholder="Tell us about your aviation goals..." 
            rows={4}
            className="w-full border border-gray-200 p-4 text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"
          ></textarea>

          <button className="w-full bg-[#38bdf8] text-white font-bold py-5 px-8 rounded-sm hover:bg-[#002147] transition-all duration-300 uppercase tracking-widest text-xs shadow-lg shadow-[#38bdf8]/20">
            Request Program Info
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

      {/* Our Expert Team */}
      {/* <section className="py-24">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 items-end mb-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#002147] mb-6">Our Expert Team</h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Maecenas tempus tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed ipsum. Nam quam nunc blandit vel pulvinderit idlorem.
              </p>
            </div>
            <div className="lg:w-1/2 flex gap-4">
              <div className="w-1/3 h-[200px] overflow-hidden rounded-sm">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover" />
              </div>
              <div className="w-1/3 h-[200px] overflow-hidden rounded-sm">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover" />
              </div>
              <div className="w-1/3 h-[200px] overflow-hidden rounded-sm">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      {/* <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-[#38bdf8] font-bold text-sm mb-4 uppercase tracking-widest">
              <div className="w-5 h-5 bg-[#38bdf8]/10 flex items-center justify-center rounded-sm">
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#38bdf8]">
                  <path d="M12 2L1 21h22L12 2zm0 3.45L19.15 19H4.85L12 5.45z" />
                </svg>
              </div>
              Feedback
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#002147] mb-6">What Say Our Student</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Maecenas tempus tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((item) => (
              <div key={item.id} className="bg-white p-8 shadow-lg rounded-sm relative group hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h5 className="font-serif font-bold text-[#002147] text-lg">{item.name}</h5>
                    <p className="text-gray-400 text-[15px] uppercase font-bold tracking-widest">{item.role}</p>
                  </div>
                </div>
                <p className="text-gray-500 text-[15px] italic leading-relaxed mb-6">
                  "{item.content}"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex text-[#f4b41a]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#38bdf8]/10 group-hover:text-[#38bdf8]/20 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="py-24 bg-white">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <div className="flex items-center justify-center gap-2 text-[#38bdf8] font-bold text-sm mb-4 uppercase tracking-widest">
        <div className="w-5 h-5 bg-[#38bdf8]/10 flex items-center justify-center rounded-sm">
          <Plane className="w-3 h-3" />
        </div>
        Student Feedback
      </div>
      <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#002147] mb-6">What Our Students Say</h2>
      <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
        Join the ranks of our successful graduates who have turned their passion for flying into reality through our dedicated training programs in Florida.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {testimonials.map((item) => (
        <div key={item.id} className="bg-white p-8 shadow-lg rounded-sm relative group hover:-translate-y-2 transition-all duration-300 border border-gray-50">
          <div className="flex items-center gap-4 mb-6">
            <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#38bdf8]/20" />
            <div>
              <h5 className="font-serif font-bold text-[#002147] text-sm">{item.name}</h5>
              <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">{item.role}</p>
            </div>
          </div>
          <p className="text-gray-500 text-[13px] italic leading-relaxed mb-6">
            "{item.content}"
          </p>
          <div className="flex items-center justify-between">
            <div className="flex text-[#f4b41a]">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
            <Quote className="w-8 h-8 text-[#38bdf8]/10 group-hover:text-[#38bdf8]/20 transition-colors" />
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

export default Trainers;
