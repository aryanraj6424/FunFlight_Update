import React from 'react';
import Slider from 'react-slick';
import { Facebook, Twitter, Instagram, Linkedin, ChevronLeft, ChevronRight, Star, Quote, Send } from 'lucide-react';

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

  const testimonials = [
    {
      id: 1,
      name: "Tomas Kishan",
      role: "Student, USA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
      content: "Platea tincidunt praesent auis facilisis vel smare nulltciesoin luctus velilibero. Atligula amet selit est morbi sit eros",
      rating: 5
    },
    {
      id: 2,
      name: "Robar Williams",
      role: "Student, USA",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100",
      content: "Platea tincidunt praesent auis facilisis vel smare nulltciesoin luctus velilibero. Atligula amet selit est morbi sit eros",
      rating: 5
    },
    {
      id: 3,
      name: "Kisan Kingson",
      role: "Student, USA",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
      content: "Platea tincidunt praesent auis facilisis vel smare nulltciesoin luctus velilibero. Atligula amet selit est morbi sit eros",
      rating: 5
    },
    {
      id: 4,
      name: "Mariya Khan",
      role: "Student, USA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
      content: "Platea tincidunt praesent auis facilisis vel smare nulltciesoin luctus velilibero. Atligula amet selit est morbi sit eros",
      rating: 5
    }
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
      {/* <section className="py-20 border-b border-gray-100">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-60">
            {['CIRCLE', 'PAPER', 'MOUNTAIN', 'CIRCLE', 'GLOBE'].map((brand, idx) => (
              <div key={idx} className="flex items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300">
                <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center text-white font-bold text-[10px]">
                  {brand[0]}
                </div>
                <div className="flex flex-col">
                  <span className="font-bold tracking-tighter text-sm leading-none">{brand}</span>
                  <span className="text-[8px] tracking-widest">SLOGAN HERE</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

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
      <section className="py-24 overflow-hidden">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-[#38bdf8] font-bold text-sm mb-4 uppercase tracking-widest">
              <div className="w-5 h-5 bg-[#38bdf8]/10 flex items-center justify-center rounded-sm">
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#38bdf8]">
                  <path d="M12 2L1 21h22L12 2zm0 3.45L19.15 19H4.85L12 5.45z" />
                </svg>
              </div>
              Trainer
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#002147] mb-6">Meet With Our Trainer</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Maecenas tempus tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed
            </p>
          </div>

          <div className="px-10">
            <Slider {...sliderSettings}>
              {trainers.map((trainer) => (
                <div key={trainer.id} className="px-4">
                  <div className="group bg-white shadow-xl rounded-sm overflow-hidden border border-gray-100">
                    <div className="relative h-[320px] overflow-hidden">
                      <img 
                        src={trainer.image} 
                        alt={trainer.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 text-center">
                      <h4 className="text-xl font-serif font-bold text-[#002147] mb-1">{trainer.name}</h4>
                      <p className="text-[#38bdf8] text-xs font-bold uppercase tracking-widest mb-6">{trainer.role}</p>
                      <div className="flex justify-center space-x-3 pt-4 border-t border-gray-100">
                        <a href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#38bdf8] hover:text-white transition-all duration-300">
                          <Facebook className="w-3.5 h-3.5" />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#38bdf8] hover:text-white transition-all duration-300">
                          <Twitter className="w-3.5 h-3.5" />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#38bdf8] hover:text-white transition-all duration-300">
                          <Instagram className="w-3.5 h-3.5" />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#38bdf8] hover:text-white transition-all duration-300">
                          <Linkedin className="w-3.5 h-3.5" />
                        </a>
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
      <section className="py-24 bg-gray-50">
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
      <section className="py-24 bg-gray-50">
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
