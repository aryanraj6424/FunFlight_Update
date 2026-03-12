import React, { useState } from 'react';
import Slider from 'react-slick';
import { Facebook, Twitter, Instagram, Linkedin, Star, Quote, ChevronLeft, ChevronRight, Plus, Minus, Calendar, User, MessageSquare } from 'lucide-react';

const About = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState('All');

  const trainers = [
    {
      id: 1,
      name: "Kuna Huggo",
      role: "Trainer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Robart Williams",
      role: "Trainer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "Tomas Kishan",
      role: "Trainer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 4,
      name: "Divas Kings",
      role: "Trainer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Robar Williams",
      role: "Student, USA",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100",
      content: "Platea tincidunt praesent auis facilisis vel smare nulltciesoin luctus velilibero. Atligula amet selit est morbi sit eros",
      rating: 5
    },
    {
      id: 2,
      name: "Kisan Kingson",
      role: "Student, USA",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100",
      content: "Platea tincidunt praesent auis facilisis vel smare nulltciesoin luctus velilibero. Atligula amet selit est morbi sit eros",
      rating: 5
    },
    {
      id: 3,
      name: "Mariya Khan",
      role: "Student, USA",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
      content: "Platea tincidunt praesent auis facilisis vel smare nulltciesoin luctus velilibero. Atligula amet selit est morbi sit eros",
      rating: 5
    },
    {
      id: 4,
      name: "Mariya Khan",
      role: "Student, USA",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100",
      content: "Platea tincidunt praesent auis facilisis vel smare nulltciesoin luctus velilibero. Atligula amet selit est morbi sit eros",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Why You should become an Investor?",
      answer: "tara ipsum dolor sit amet consectetur adipisicing elit. Natus quos numquam atque exercitationem reprehenderit voluptas dolores ad repudiandae asperiores. Excepturi error dolor at veniam, modi vel quos tempora pariatur eaque."
    },
    {
      question: "Can I Invest Using Cryptocurrency?",
      answer: "tara ipsum dolor sit amet consectetur adipisicing elit. Natus quos numquam atque exercitationem reprehenderit voluptas dolores ad repudiandae asperiores. Excepturi error dolor at veniam, modi vel quos tempora pariatur eaque."
    },
    {
      question: "Why You Choose Us?",
      answer: "tara ipsum dolor sit amet consectetur adipisicing elit. Natus quos numquam atque exercitationem reprehenderit voluptas dolores ad repudiandae asperiores. Excepturi error dolor at veniam, modi vel quos tempora pariatur eaque."
    },
    {
      question: "Why You should become an Investor?",
      answer: "tara ipsum dolor sit amet consectetur adipisicing elit. Natus quos numquam atque exercitationem reprehenderit voluptas dolores ad repudiandae asperiores. Excepturi error dolor at veniam, modi vel quos tempora pariatur eaque."
    }
  ];

  const blogs = [
    {
      id: 1,
      title: "Faucibus Nullam Quis Ante Eti Qrci Egetros Saucibus...",
      author: "ROBART JONS",
      comments: 25,
      date: "26 May",
      image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=600",
      desc: "Donec interdum metus ehendrerit auet doldiam sagittis ligula eget egestas libero turpis velsra smiunc nulla testa peina ola oreso loerm ipsum..."
    },
    {
      id: 2,
      title: "Faucibus Nullam Quis Ante Eti Qrci Egetros Saucibus...",
      author: "ROBART JONS",
      comments: 25,
      date: "26 May",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
      desc: "Donec interdum metus ehendrerit auet doldiam sagittis ligula eget egestas libero turpis velsra smiunc nulla testa peina ola oreso loerm ipsum..."
    },
    {
      id: 3,
      title: "Faucibus Nullam Quis Ante Eti Qrci Egetros Saucibus...",
      author: "ROBART JONS",
      comments: 25,
      date: "26 May",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
      desc: "Donec interdum metus ehendrerit auet doldiam sagittis ligula eget egestas libero turpis velsra smiunc nulla testa peina ola oreso loerm ipsum..."
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
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  function NextArrow(props: any) {
    const { onClick } = props;
    return (
      <button onClick={onClick} className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#38bdf8] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#002147] transition-colors">
        <ChevronRight className="w-6 h-6" />
      </button>
    );
  }

  function PrevArrow(props: any) {
    const { onClick } = props;
    return (
      <button onClick={onClick} className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#38bdf8] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#002147] transition-colors">
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
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-4 text-white">Who We Are</h1>
          <div className="flex justify-center items-center space-x-2 text-xs uppercase tracking-[0.2em] font-bold">
            <a href="/" className="hover:text-[#38bdf8] transition-colors">HOME</a>
            <span className="text-gray-400">/</span>
            <span className="text-white">ABOUT</span>
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
      <section className="py-20 border-b border-gray-100">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-60">
            {['ENTITY', 'CIRCLE', 'PAPER', 'MOUNTAIN', 'CIRCLE', 'GLOBE'].map((brand, idx) => (
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
      </section>

      {/* About Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-2 text-[#38bdf8] font-bold text-sm uppercase tracking-widest">
                <div className="w-5 h-5 bg-[#38bdf8]/10 flex items-center justify-center rounded-sm">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#38bdf8]">
                    <path d="M12 2L1 21h22L12 2zm0 3.45L19.15 19H4.85L12 5.45z" />
                  </svg>
                </div>
                About
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#002147] leading-tight">
                We're here to make your dreams come true!
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Maecenas tempus, tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed ipsum. Nam quam nunc blandit vel pulviendrerit idlorem.aecenas nec odio et ante tinciduntempus. Donec vitae sapien ut libero venenatis faucibus.
              </p>
              <button className="bg-[#38bdf8] text-white font-bold py-4 px-10 rounded-sm hover:bg-[#002147] transition-all duration-300 uppercase tracking-widest text-xs">
                Become An Pilot
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 h-[500px]">
              <div className="h-full">
                <img src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover rounded-sm" />
              </div>
              <div className="grid grid-rows-2 gap-4 h-full">
                <img src="https://images.unsplash.com/photo-1506012733851-bb0755184526?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover rounded-sm" />
                <img src="https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainer Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
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
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Maecenas tempus tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed
            </p>
          </div>

          <div className="px-10">
            <Slider {...sliderSettings}>
              {trainers.map((trainer) => (
                <div key={trainer.id} className="px-4">
                  <div className="group bg-white shadow-xl rounded-sm overflow-hidden border border-gray-100">
                    <div className="relative h-[320px] overflow-hidden">
                      <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
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

      {/* Features Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-2 text-[#38bdf8] font-bold text-sm uppercase tracking-widest">
                <div className="w-5 h-5 bg-[#38bdf8]/10 flex items-center justify-center rounded-sm">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#38bdf8]">
                    <path d="M12 2L1 21h22L12 2zm0 3.45L19.15 19H4.85L12 5.45z" />
                  </svg>
                </div>
                Features
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#002147] leading-tight">
                Choose Our Best Flying Academy
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magnua. Ut enim ad minim veniam, quis nostrud exercitation lamco laboris nisi ut aliquip ex ea commodo consequat
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Transportation", desc: "Maecenas tempus tndimentum rhoncus sem quam semper" },
                  { title: "Discussion Forum", desc: "Maecenas tempus tndimentum rhoncus sem quam semper" },
                  { title: "Hostel & Health Care", desc: "Maecenas tempus tndimentum rhoncus sem quam semper" },
                  { title: "Monthly Events", desc: "Maecenas tempus tndimentum rhoncus sem quam semper" },
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 bg-[#38bdf8] rounded-full flex-shrink-0 flex items-center justify-center text-white">
                      <Star className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-[#002147] mb-1">{feature.title}</h4>
                      <p className="text-gray-500 text-xs">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&q=80&w=800" className="rounded-sm shadow-2xl" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#38bdf8] rounded-full flex flex-col items-center justify-center text-white border-8 border-white shadow-xl">
                <span className="text-4xl font-bold">56</span>
                <span className="text-[10px] uppercase font-bold tracking-widest">Years</span>
                <span className="text-[10px] uppercase font-bold tracking-widest">Experiences</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-[#38bdf8] font-bold text-sm mb-4 uppercase tracking-widest">
              <div className="w-5 h-5 bg-[#38bdf8]/10 flex items-center justify-center rounded-sm">
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#38bdf8]">
                  <path d="M12 2L1 21h22L12 2zm0 3.45L19.15 19H4.85L12 5.45z" />
                </svg>
              </div>
              FAQ
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#002147] mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Maecenas tempus tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['All', 'Profile', 'Messages', 'Admission Test'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                    activeTab === tab ? 'bg-[#38bdf8] text-white border-[#38bdf8]' : 'bg-white text-gray-500 border-gray-200 hover:border-[#38bdf8] hover:text-[#38bdf8]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-100 rounded-sm overflow-hidden">
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-serif font-bold text-[#002147]">{faq.question}</span>
                    <div className={`w-8 h-8 flex items-center justify-center rounded-sm transition-colors ${activeFaq === idx ? 'bg-[#38bdf8] text-white' : 'bg-gray-100 text-gray-400'}`}>
                      {activeFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  {activeFaq === idx && (
                    <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-6">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
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
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Maecenas tempus tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((item) => (
              <div key={item.id} className="bg-white p-8 shadow-lg rounded-sm relative group hover:-translate-y-2 transition-all duration-300 border border-gray-50">
                <div className="flex items-center gap-4 mb-6">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
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
                <input type="email" placeholder="Email Address" className="w-full border border-gray-200 p-4 text-sm focus:outline-none focus:border-[#38bdf8] transition-colors" />
                <select className="w-full border border-gray-200 p-4 text-sm focus:outline-none focus:border-[#38bdf8] transition-colors text-gray-500">
                  <option>Courses</option>
                  <option>Airline Crew Training</option>
                  <option>ATP Courses</option>
                </select>
                <textarea placeholder="Writing Something" rows={4} className="w-full border border-gray-200 p-4 text-sm focus:outline-none focus:border-[#38bdf8] transition-colors"></textarea>
                <button className="w-full bg-[#38bdf8] text-white font-bold py-4 px-8 rounded-sm hover:bg-[#002147] transition-all duration-300 uppercase tracking-widest text-xs">
                  Become An Pilot
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-[#38bdf8] font-bold text-sm mb-4 uppercase tracking-widest">
              <div className="w-5 h-5 bg-[#38bdf8]/10 flex items-center justify-center rounded-sm">
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#38bdf8]">
                  <path d="M12 2L1 21h22L12 2zm0 3.45L19.15 19H4.85L12 5.45z" />
                </svg>
              </div>
              Blog Post
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#002147] mb-6">Our Latest Blog</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Maecenas tempus tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white shadow-xl rounded-sm overflow-hidden group border border-gray-50">
                <div className="relative h-64 overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute bottom-4 left-4 bg-[#38bdf8] text-white p-2 rounded-sm text-center min-w-[60px]">
                    <div className="text-xl font-bold leading-none">26</div>
                    <div className="text-[10px] uppercase font-bold">May</div>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-serif font-bold text-[#002147] mb-4 group-hover:text-[#38bdf8] transition-colors cursor-pointer">
                    {blog.title}
                  </h4>
                  <div className="flex items-center gap-6 text-gray-400 text-[11px] font-bold uppercase tracking-widest mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-3 h-3 text-[#38bdf8]" />
                      BY {blog.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-3 h-3 text-[#38bdf8]" />
                      {blog.comments} COMMENTS
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {blog.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[#38bdf8] py-20 text-white overflow-hidden">
        <div className="container relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-10">
              <div className="hidden md:block border-r border-white/30 pr-10">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 mb-2">
                    <svg viewBox="0 0 100 100" className="fill-white">
                      <path d="M50 5 L95 25 L95 75 L50 95 L5 75 L5 25 Z M50 15 L85 30 L85 70 L50 85 L15 70 L15 30 Z" />
                      <path d="M50 35 L70 45 L50 55 L30 45 Z" />
                      <path d="M50 60 L65 70 L50 80 L35 70 Z" />
                    </svg>
                  </div>
                  <span className="font-display font-extrabold text-2xl tracking-tighter">VISERFLY</span>
                </div>
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-3">Like To Become A Pilot</h2>
                <p className="text-white/90 text-sm">Lorem ipsum dolor sit amet consectetuer</p>
              </div>
            </div>
            <button className="bg-white text-[#38bdf8] font-bold py-5 px-12 rounded-sm hover:bg-[#002147] hover:text-white transition-all duration-300 uppercase tracking-widest text-xs shadow-lg">
              Become An Pilot
            </button>
          </div>
        </div>
        {/* Bottom V Cutout (Sharp V) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] fill-[#002147]">
            <path d="M0,0 L600,100 L1200,0 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default About;
