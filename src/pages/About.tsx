import React, { useState } from 'react';
import Slider from 'react-slick';
import { Facebook, Twitter, Instagram, Linkedin, Star,Plane, Award, ShieldCheck, Quote, ChevronLeft, ChevronRight, Plus, Minus, Calendar, Users,Clock, MessageSquare } from 'lucide-react';


const About = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState('All');





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
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2500,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } }
  ]
};

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

  //Flight Features 

 const flightFeatures = [
    { 
      title: "Accelerated Path", 
      desc: "Go from zero experience to Commercial Pilot in as little as 9 months.",
      icon: <Clock className="w-6 h-6" />
    },
    { 
      title: "Modern Fleet", 
      desc: "Train in well-maintained Cessna 172 or Piper PA-28 aircraft.",
      icon: <Plane className="w-6 h-6" />
    },
    { 
      title: "One-on-One Mentoring", 
      desc: "100 hours of personalized instruction with passionate flight mentors.",
      icon: <Users className="w-6 h-6" />
    },
    { 
      title: "All-Inclusive Pricing", 
      desc: "Fixed career track pricing covering written and practical test fees.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
  ];

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

  // const faqs = [
  //   {
  //     question: "Why You should become an Investor?",
  //     answer: "tara ipsum dolor sit amet consectetur adipisicing elit. Natus quos numquam atque exercitationem reprehenderit voluptas dolores ad repudiandae asperiores. Excepturi error dolor at veniam, modi vel quos tempora pariatur eaque."
  //   },
  //   {
  //     question: "Can I Invest Using Cryptocurrency?",
  //     answer: "tara ipsum dolor sit amet consectetur adipisicing elit. Natus quos numquam atque exercitationem reprehenderit voluptas dolores ad repudiandae asperiores. Excepturi error dolor at veniam, modi vel quos tempora pariatur eaque."
  //   },
  //   {
  //     question: "Why You Choose Us?",
  //     answer: "tara ipsum dolor sit amet consectetur adipisicing elit. Natus quos numquam atque exercitationem reprehenderit voluptas dolores ad repudiandae asperiores. Excepturi error dolor at veniam, modi vel quos tempora pariatur eaque."
  //   },
  //   {
  //     question: "Why You should become an Investor?",
  //     answer: "tara ipsum dolor sit amet consectetur adipisicing elit. Natus quos numquam atque exercitationem reprehenderit voluptas dolores ad repudiandae asperiores. Excepturi error dolor at veniam, modi vel quos tempora pariatur eaque."
  //   }
  // ];


  const faqsData = [
  {
    category: 'General',
    question: "How long does it take to become a professional pilot?",
    answer: "At Fun Flight Training, our 'Zero to Hero' career track is designed to take you from zero experience to a Commercial Pilot with CFI & CFI-I ratings in as little as 9 months."
  },
  {
    category: 'Training',
    question: "What aircraft will I be training in?",
    answer: "We maintain a modern fleet of well-maintained aircraft, specifically the Cessna 172 and Piper PA-28, ensuring a safe and technologically current training environment."
  },
  {
    category: 'Medical',
    question: "What medical certificate do I need?",
    answer: "For a Private Pilot certificate, a 3rd Class Medical is required. However, if you plan to fly for the airlines, we recommend obtaining a 1st Class Medical certificate early on."
  },
  {
    category: 'General',
    question: "Can I start training before I'm 16?",
    answer: "Yes! There is no age requirement to start lessons. However, the FAA requires you to be 16 to fly solo and 17 to take the practical test for your Private Pilot certificate."
  },
  {
    category: 'Training',
    question: "What is included in the 14-Day Accelerated Private Pilot course?",
    answer: "The $8,999 course includes 30 hours of dual instruction, 10 hours of solo flight, and 25 hours of ground school. Students must have their written exam completed before starting."
  }
];

const filteredFaqs = activeTab === 'All' 
  ? faqsData 
  : faqsData.filter(faq => faq.category === activeTab);

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

      {/* About Section */}
      {/* <section className="py-24">
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
      </section> */}

      <section className="py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-[#38bdf8] font-bold text-sm uppercase tracking-widest">
              <div className="w-5 h-5 bg-[#38bdf8]/10 flex items-center justify-center rounded-sm">
                <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#38bdf8]">
                  <path d="M12 2L1 21h22L12 2zm0 3.45L19.15 19H4.85L12 5.45z" />
                </svg>
              </div>
              About Fun Flight Training
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#002147] leading-tight">
              We're here to make your dreams come true!
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              At Fun Flight Training, our mission is to provide the highest quality flight instruction while prioritizing your safety and satisfaction. With a fleet of modern, well-maintained Cessna 172 and Piper PA-28 aircraft, our passionate instructors are dedicated to helping you transform your passion into a real career—taking you from zero experience to a Commercial Pilot in as little as 9 months.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#38bdf8] text-white font-bold py-4 px-10 rounded-sm hover:bg-[#002147] transition-all duration-300 uppercase tracking-widest text-xs">
                Become A Pilot
              </button>
              <div className="flex items-center gap-3 px-6 py-4 border border-gray-100 bg-[#38bdf8] hover:bg-[#002147] rounded-sm">
                <span className="text-white font-bold text-sm">Call Us: 863-270-5572</span>
              </div>
            </div>
          </div>
          
          {/* Visual Gallery representing Cessna 172/Piper PA-28 Fleet */}
          <div className="grid grid-cols-2 gap-4 h-[500px]">
            <div className="h-full">
              <img 
                src="/about-img1.png" 
                alt="Student Success at Fun Flight Training" 
                className="w-full h-full object-cover rounded-sm shadow-lg" 
              />
            </div>
            <div className="grid grid-rows-2 gap-4 h-full">
              <img 
                src="/about-img2.png" 
                alt="Cessna 172 Cockpit" 
                className="w-full h-full object-cover rounded-sm shadow-md" 
              />
              <img 
                src="/about-img3.png" 
                alt="Flight Training in Florida" 
                className="w-full h-full object-cover rounded-sm shadow-md" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Trainer Section */}
      <section className="section-padding">
              <div className="container">
                <div className="text-center mb-16 space-y-4">
                  <div className="flex items-center justify-center space-x-2 text-[#38bdf8]">
                    <Plane className="w-5 h-5" />
                    <span className="font-bold uppercase tracking-widest text-lg">Trainer</span>
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-display font-extrabold text-primary">
                    Meet With Our Trainer
                  </h2>
                  <p className="text-gray-500 max-w-lg mx-auto text-lg">
                    Maecenas tempus tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed
                  </p>
                </div>
                <Slider {...trainerSettings} className="trainer-slider">
                  {trainers.map((trainer, index) => (
                    <div key={index} className="px-4">
                      <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                        <img src={trainer.image} alt={trainer.name} className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                          <div className="bg-white p-6 rounded-xl text-center space-y-3 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                            <h4 className="text-xl font-display font-bold text-primary">{trainer.name}</h4>
                            <p className="text-[#38bdf8] text-sm font-bold uppercase tracking-widest">{trainer.role}</p>
                            <div className="flex justify-center space-x-3 pt-2">
                              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-primary hover:bg-[#38bdf8] hover:text-white transition-all"><Facebook className="w-4 h-4" /></a>
                              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-primary hover:bg-[#38bdf8] hover:text-white transition-all"><Twitter className="w-4 h-4" /></a>
                              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-primary hover:bg-[#38bdf8] hover:text-white transition-all"><Instagram className="w-4 h-4" /></a>
                              <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-primary hover:bg-[#38bdf8] hover:text-white transition-all"><Linkedin className="w-4 h-4" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </section>

      {/* Features Section */}
      {/* <section className="py-24">
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
      </section> */}

      

      <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-[#38bdf8] font-bold text-sm uppercase tracking-widest">
              <div className="w-5 h-5 bg-[#38bdf8]/10 flex items-center justify-center rounded-sm">
                <Plane className="w-3 h-3 fill-[#38bdf8]" />
              </div>
              Key Features
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#002147] leading-tight">
              Choose Our Best Flying Academy
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              At Fun Flight Training, we prioritize your safety and career success. Our programs are designed to be intensive yet supportive, providing the most efficient path to the cockpit.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {flightFeatures.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 bg-[#38bdf8] rounded-full flex-shrink-0 flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#002147] mb-1">{feature.title}</h4>
                    <p className="text-gray-500 text-xs leading-normal">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Using one of your existing images */}
            <img 
              src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&q=80&w=800" 
              alt="Professional Flight Instruction"
              className="rounded-sm shadow-2xl w-full" 
            />
            {/* Experience Badge updated to highlight the 260-hour program */}
            <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-[#38bdf8] rounded-full flex flex-col items-center justify-center text-white border-8 border-white shadow-xl text-center p-4 hidden md:flex">
              <span className="text-4xl font-bold text-white">260</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-white">Flight Hours</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-white">Career Program</span>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* FAQ Section */}
      {/* <section className="py-24 bg-gray-50">
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
      </section> */}

      <section className="py-24 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 text-[#38bdf8] font-bold text-sm mb-4 uppercase tracking-widest">
          <div className="w-5 h-5 bg-[#38bdf8]/10 flex items-center justify-center rounded-sm">
             <Plane className="w-3 h-3" />
          </div>
          Flight School FAQ
        </div>
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#002147] mb-6">Frequently Asked Questions</h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
          Everything you need to know about starting your aviation career at Fun Flight Training in Lakeland, Florida.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Updated Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['All', 'General', 'Training', 'Medical'].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setActiveFaq(null); // Reset accordion when switching tabs
              }}
              className={`px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                activeTab === tab 
                  ? 'bg-[#38bdf8] text-white border-[#38bdf8]' 
                  : 'bg-white text-gray-500 border-gray-200 hover:border-[#38bdf8] hover:text-[#38bdf8]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm">
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-serif font-bold text-[#002147]">{faq.question}</span>
                <div className={`w-8 h-8 flex items-center justify-center rounded-sm transition-colors ${activeFaq === idx ? 'bg-[#38bdf8] text-white' : 'bg-gray-100 text-gray-400'}`}>
                  {activeFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>
              {activeFaq === idx && (
                <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-6 animate-in fade-in duration-300">
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
      {/* <section className="py-24">
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

      {/* Stats & Join Form */}
      <section className="py-24 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Academy Statistics */}
      <div className="grid grid-cols-2 gap-px bg-gray-200 border border-gray-200 shadow-sm">
        {[
          { label: "Flight Mentors", value: "15+" },
          { label: "Modern Fleet", value: "12" },
          { label: "Happy Students", value: "450+" },
          { label: "Career Tracks", value: "6" },
        ].map((stat, idx) => (
          <div key={idx} className="bg-gray-50 p-12 text-center group hover:bg-white transition-colors duration-300">
            <div className="text-5xl font-bold text-[#38bdf8] mb-2">{stat.value}</div>
            <div className="text-gray-600 font-bold text-sm uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Enrollment & Inquiry Form */}
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
            <option value="">Select Training Program</option>
            <option value="private">Private Pilot (PPL)</option>
            <option value="accelerated">14-Day Accelerated PPL</option>
            <option value="instrument">Instrument Rating (IFR)</option>
            <option value="commercial">Commercial Pilot Track</option>
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
                      <Users className="w-3 h-3 text-[#38bdf8]" />
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

export default About;
