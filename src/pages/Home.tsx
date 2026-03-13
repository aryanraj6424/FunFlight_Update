import React, { useState , useEffect } from 'react';

import Slider from 'react-slick';
import { Plane, Users, Award, BookOpen, ArrowRight,Link, Play, CheckCircle2, ChevronRight, Plus, Minus, Quote, Facebook, Twitter, Instagram, Linkedin, Mail, Search } from 'lucide-react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState('All');
  const [galleryTab, setGalleryTab] = useState('All');

  // const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   const savedBlogs = JSON.parse(localStorage.getItem('funflight_blogs') || '[]');
  //   setBlogs(savedBlogs.slice(0, 3));
  // }, []);

  

  const heroSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
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

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };


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

  const slides = [
    {
      title: "Enroll In Our FAA Certified Airline Pilot Program!",
      subtitle: "Professional Flight School",
      description: "Start your journey to becoming a professional pilot with our comprehensive training programs and world-class instructors.",
      image: "hero-bg.png",
      buttonText: "Become an Pilot",
    },
    {
      title: "Advanced Aviation Courses for All Levels",
      subtitle: "Fly High with ViserFly",
      description: "From private pilot licenses to commercial aviation, we offer the best courses tailored to your career goals.",
      image: "hero-bg.png",
      buttonText: "Explore Courses",
    },
  ];

  const partners = [
    { name: "IDENTITY", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200" },
    { name: "CIRCLE", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200" },
    { name: "PAPER", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200" },
    { name: "MOUNTAIN", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200" },
    { name: "CIRCLE", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200" },
  ];
       
  //course section data
  // const courses = [
  //   {
  //     title: "Airline Crew Training",
  //     image: "course-img-1.png",
  //     desc: "Lorem ipsum dolor sit amnsectetur adipiscing elit, sedo Training Cources",
  //     features: ["You must be 16 years old", "You must have a diploma", "Must have medical certificat", "You must be 16 years old"]
  //   },
  //   {
  //     title: "ATP Courses",
  //     image: "course-img-2.png",
  //     desc: "Lorem ipsum dolor sit amnsectetur adipiscing elit, sedo Training Cources",
  //     features: ["You must be 16 years old", "You must have a diploma", "Must have medical certificat", "You must be 16 years old"]
  //   },
  //   {
  //     title: "Aircaft Maintenance",
  //     image: "course-img-3.png",
  //     desc: "Lorem ipsum dolor sit amnsectetur adipiscing elit, sedo Training Cources",
  //     features: ["You must be 16 years old", "You must have a diploma", "Must have medical certificat", "You must be 16 years old"]
  //   },
  //   {
  //     title: "Air Traffic Control",
  //     image: "course-img-4.png",
  //     desc: "Lorem ipsum dolor sit amnsectetur adipiscing elit, sedo Training Cources",
  //     features: ["You must be 16 years old", "You must have a diploma", "Must have medical certificat", "You must be 16 years old"]
  //   }
  // ];

     const courses = [
    {
      title: "Private Pilot Training",
      desc: "Begin your aviation journey with a solid foundation. Start as early as age 16 to fly solo!",
      image: "course-img-1.png",
      features: [
        "Minimum 40 flight hours (avg. 65)",
        "Pass FAA Knowledge Written Exam",
        "Obtain 3rd Class Medical Certificate",
        "Fast-track: 14-Day Option ($8,999)"
      ]
    },
    {
      title: "Instrument Rating (IFR)",
      desc: "Enhance your safety and precision. Don't let weather limit your travel plans.",
      image: "course-img-2.png",
      features: [
        "50 hours Cross-Country (PIC)",
        "40 hours Actual/Simulated Instrument",
        "15 hours Instrument Training",
        "Required for career advancement"
      ]
    },
    {
      title: "Commercial Pilot (CSEL)",
      desc: "Turn your passion into a career. Ideal for airline, charter, or pipeline patrol roles.",
      image: "course-img-3.png",
      features: [
        "250 Total Flight Hours",
        "10 Hours Solo Night Cross-Country",
        "10 Hours Complex Aircraft training",
        "Zero to Hero Program ($59,990)"
      ]
    },
    {
      title: "Certified Flight Instructor",
      desc: "The ideal job for building hours toward the airlines while sharing your knowledge.",
      image: "course-img-4.png",
      features: [
        "Spin Training endorsement",
        "CFI-A & FOI Written Exams",
        "15 hours PIC in category/class",
        "Training available for CFI & CFI-I"
      ]
    }
  ];

  //blog map
  

  
  const trainers = [
    { name: "Kuna Huggo", role: "Trainer", image: "team-1.jpg" },
    { name: "Robart Williams", role: "Trainer", image: "team-2.jpg" },
    { name: "Tomas Kishan", role: "Trainer", image: "team-3.jpg" },
    { name: "Divas Kings", role: "Trainer", image: "team-4.jpg" },
    { name: "Divas Kings", role: "Trainer", image: "team-5.jpg" },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Robar Williams",
      role: "Recent Private Pilot Graduate, USA",
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
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&q=80&w=100",
      content: "The instrument rating course opened up a whole new world of flying. I can now confidently navigate through clouds and bad weather. Highly recommend!",
      rating: 5
    },
    {
      id: 4,
      name: "Ben Affleck",
      role: "Student, USA",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
      content: "Platea tincidunt praesent mauris, facilisis vel srnare nulltcies proin luctus velilibero. At ligula amet selit est morbi sit eros tempus mus sit at ut tortor utorbi nulla antmauris Maecenas tempus tellondimentum rhoncus sem quam semper libero",
      rating: 5
    }
  ];

  // const faqs = [
  //   { question: "Why You should become an Investor?", answer: "Maecenas tempus tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed.", category: "Profile" },
  //   { question: "Can I Invest Using Cryptocurrency?", answer: "Maecenas tempus tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed.", category: "Messages" },
  //   { question: "Why You Choose Us?", answer: "Maecenas tempus tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed.", category: "Admission Test" },
  //   { question: "Why You should become an Investor?", answer: "Maecenas tempus tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed.", category: "Profile" },
  // ];

  // const filteredFaqs = faqTab === 'All' ? faqs : faqs.filter(f => f.category === faqTab);


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


  const gallery = [
    { url: "/gallery/img1.png", catgory: "Crew Training" },
    { url: "/gallery/img2.png", category: "Maintenance" },
    { url: "/gallery/img3.png", category: "Private Pilot" },
    { url: "/gallery/img4.png", category: "Crew Training" },
    { url: "/gallery/img5.png", category: "Maintenance" },
    { url: "/gallery/img6.png", category: "Private Pilot" },
  ];

  const filteredGallery = galleryTab === 'All' ? gallery : gallery.filter(g => g.category === galleryTab);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[850px]">
        <Slider {...heroSettings} className="h-full">
          {slides.map((slide, index) => (
            <div key={index} className="relative h-[600px] lg:h-[850px]">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
              <div className="container relative h-full flex items-center justify-center text-center">
                <div className="max-w-4xl text-white">
                  <h1 className="text-4xl lg:text-7xl font-display font-bold mb-8 leading-tight animate-slideUp drop-shadow-lg !text-white">
                    {slide.title}
                  </h1>
                  <div className="flex justify-center animate-fadeIn delay-500">
                    <button className="bg-[#38bdf8] text-white font-bold py-4 px-10 rounded-sm hover:bg-primary transition-all duration-300 uppercase tracking-wider text-sm">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        
        {/* Cloud Shape Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="relative block w-[calc(130%+1.3px)] h-[100px] lg:h-[150px] fill-white"
          >
            <path d="M0,0 C150,110 300,10 450,110 C600,10 750,110 900,10 C1050,110 1200,0 1200,0 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Partners Section */}
      
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
      {/* <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-[#38bdf8]">
                  <Plane className="w-5 h-5" />
                  <span className="font-bold uppercase tracking-widest text-sm">About</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-display font-extrabold leading-tight text-primary">
                  We're here to make your dreams come true!
                </h2>
              </div>
              <p className="text-gray-500 leading-relaxed max-w-lg text-lg">
                Maecenas tempus, tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed ipsum. Nam quam nunc blandit vel pulviendrerit idlorem.aecenas nec odio et ante tinciduntempus. Donec vitae sapien ut libero venenatis faucibus.
              </p>
              <div className="grid grid-cols-2 gap-8 py-4">
                <div className="space-y-1">
                  <div className="text-3xl font-display font-black text-primary">25+</div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Years Experience</p>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-display font-black text-primary">1500+</div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Graduated Pilots</p>
                </div>
              </div>
              <button className="bg-[#38bdf8] text-white font-bold py-3 px-8 rounded-sm hover:bg-primary transition-all duration-300 text-sm">
                About Us
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-xl h-full">
                <img src="/about-img1.png" alt="About 1" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-xl h-[300px]">
                  <img src="/about-img2.png" alt="About 2" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden shadow-xl h-[300px]">
                  <img src="/about-img3.png" alt="About 3" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="section-padding bg-white">
  <div className="container">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-[#38bdf8]">
            <Plane className="w-5 h-5" />
            <span className="font-bold uppercase tracking-widest text-sm">About Fun Flight Training</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-display font-extrabold leading-tight text-primary">
            We're here to make your dreams come true!
          </h2>
        </div>
        <p className="text-gray-500 leading-relaxed max-w-lg text-lg">
          At Fun Flight Training, our mission is to provide the highest quality flight instruction while prioritizing safety and satisfaction. Whether you're looking for a 14-day accelerated private pilot course or a 9-month journey to the airlines, our team of passionate, certified instructors is ready to help you reach new heights.
        </p>
        <div className="grid grid-cols-2 gap-8 py-4">
          <div className="space-y-1">
            <div className="text-3xl font-display font-black text-primary">9 Months</div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Zero to Commercial</p>
          </div>
          <div className="space-y-1">
            <div className="text-3xl font-display font-black text-primary">260+</div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Total Flight Hours</p>
          </div>
        </div>
        <button className="bg-[#38bdf8] text-white font-bold py-3 px-8 rounded-sm hover:bg-primary transition-all duration-300 text-sm">
          Start Your Journey
        </button>
      </div>
      
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl overflow-hidden shadow-xl h-full">
          {/* Main image representing the fleet (Cessna 172/Piper PA-28) */}
          <img src="/about-img1.png" alt="Fun Flight Training Aircraft" className="w-full h-full object-cover" />
        </div>
        <div className="space-y-4">
          <div className="rounded-xl overflow-hidden shadow-xl h-[300px]">
            {/* Image representing student success/solo flights */}
            <img src="/about-img2.png" alt="Student Solo Success" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl h-[300px]">
            {/* Image representing instruction/ground school */}
            <img src="/about-img3.png" alt="Professional Flight Instruction" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Courses Section */}
      {/* <section className="section-padding bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1920" alt="bg" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center space-x-2 text-[#38bdf8]">
              <Plane className="w-5 h-5" />
              <span className="font-bold uppercase tracking-widest text-lg">Courses</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-display font-extrabold text-primary">
              Our Pilot Training Cources
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3 h-48 md:h-auto rounded-xl overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-2/3 space-y-4">
                  <h3 className="text-2xl font-display font-bold text-primary">{course.title}</h3>
                  <p className="text-gray-500 text-lg">{course.desc}</p>
                  <ul className="grid grid-cols-1 gap-2">
                    {course.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center space-x-2 text-lg text-gray-600">
                        <div className="w-2 h-2 rounded-full bg-[#38bdf8]"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1920" 
          alt="bg" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center space-x-2 text-[#38bdf8]">
            <Plane className="w-5 h-5" />
            <span className="font-bold uppercase tracking-widest text-lg">Our Programs</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-display font-extrabold text-primary">
            Our Pilot Training Courses
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto italic">
            "0 to Commercial Airplane Single Engine Land & Both CFI & CFI-I in 9 Months"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6"
            >
              <div className="w-full md:w-1/3 h-48 md:h-auto rounded-xl overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-2/3 space-y-4">
                <h3 className="text-2xl font-display font-bold text-primary">{course.title}</h3>
                <p className="text-gray-500 text-lg">{course.desc}</p>
                <ul className="grid grid-cols-1 gap-2">
                  {course.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-2 text-lg text-gray-600">
                      <div className="w-2 h-2 rounded-full bg-[#38bdf8]"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Trainer Section */}
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

      {/* Academy Features Section */}
      {/* <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-[#38bdf8]">
                  <Plane className="w-5 h-5" />
                  <span className="font-bold uppercase tracking-widest text-sm">Features</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-display font-extrabold leading-tight text-primary">
                  Choose Our Best Flying Academy
                </h2>
              </div>
              <p className="text-gray-500 text-lg leading-relaxed">
                Our flying academy provides top-tier aviation education with a focus on safety, precision, and career readiness. We utilize state-of-the-art flight simulators and a modern fleet to ensure our students are prepared for the challenges of commercial aviation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#38bdf8]/10 flex items-center justify-center flex-shrink-0 text-[#38bdf8]">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1">24/7 Support</h4>
                    <p className="text-lg text-gray-500">Lorem ipsum dolor sit amet consect elit.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#38bdf8]/10 flex items-center justify-center flex-shrink-0 text-[#38bdf8]">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-1">Low Cost</h4>
                    <p className="text-lg text-gray-500">Lorem ipsum dolor sit amet consect elit.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 pt-4">
                <div className="w-full md:w-1/2 rounded-xl overflow-hidden h-48">
                  <img src="feature-img-sm.png" alt="Feature 1" className="w-full h-full object-cover" />
                </div>
                <ul className="space-y-3 w-full md:w-1/2 ">
                  {["You must have a diploma", "Must have medical certificat", "You must be 16 years old", "You must have a diploma", "Must have medical certificat"].map((item, i) => (
                    <li key={i} className="flex items-center space-x-2 text-lg text-gray-600 ">
                      <div className="w-2 h-2 rounded-full bg-[#38bdf8]"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl h-[600px]">
                <img src="about-img2.png" alt="Academy" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-10 -left-10 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-8 border-white hidden lg:block">
                <img src="course-img-1.png" alt="Academy Sub" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="section-padding bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-[#38bdf8]">
                <Plane className="w-5 h-5" />
                <span className="font-bold uppercase tracking-widest text-sm">Why Fun Flight Training</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-display font-extrabold leading-tight text-primary">
                Experience the Thrill of Flight with Experts
              </h2>
            </div>
            <p className="text-gray-500 text-lg leading-relaxed">
              Join a vibrant, supportive community where your success is our priority. From our modern fleet of Cessna 172s and Piper PA-28s to our passionate mentors, we provide a personal approach tailored to your specific needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#38bdf8]/10 flex items-center justify-center flex-shrink-0 text-[#38bdf8]">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-1">Dedicated Mentors</h4>
                  <p className="text-lg text-gray-500">100 hours of 1-on-1 instruction with experienced pilots.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#38bdf8]/10 flex items-center justify-center flex-shrink-0 text-[#38bdf8]">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-1">Affordable Options</h4>
                  <p className="text-lg text-gray-500">Competitive hourly rates and significant time-block savings.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 pt-4">
              <div className="w-full md:w-1/2 rounded-xl overflow-hidden h-48 border border-gray-100 shadow-sm">
                {/* Image representing the Cessna or Piper fleet */}
                <img src="feature-img-sm.png" alt="Cessna 172 and Piper PA-28" className="w-full h-full object-cover" />
              </div>
              <ul className="space-y-3 w-full md:w-1/2 ">
                {[
                  "US/Canadian Citizenship or TSA Approval",
                  "FAA Private Pilot Knowledge Test completed",
                  "Hold a 3rd Class Medical or BasicMed",
                  "Be at least 16 years old to fly solo",
                  "Modern fleet with latest technology"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 text-lg text-gray-600 ">
                    <div className="w-2 h-2 rounded-full bg-[#38bdf8]"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[600px]">
              {/* Main image: A student pilot or cockpit view */}
              <img src="about-img2.png" alt="Fun Flight Training Success" className="w-full h-full object-cover" />
            </div>
            {/* Floating sub-image */}
            <div className="absolute top-10 -left-10 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-8 border-white hidden lg:block">
              <img src="course-img-1.png" alt="Flight Instruction" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* FAQ Section */}
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

      {/* Testimonial Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-[#38bdf8] opacity-10 hidden lg:block"></div>
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="relative w-full lg:w-1/2">
              <div className="w-full aspect-square rounded-full overflow-hidden border-[15px] border-white shadow-2xl relative z-10">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" alt="Testimonial" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#38bdf8] rounded-full opacity-20 blur-3xl"></div>
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <Quote className="w-16 h-16 text-[#38bdf8] opacity-50" />
              <div className="space-y-4">
                <h4 className="text-2xl font-display font-bold text-primary">Ben Affleck</h4>
                <p className="text-[#38bdf8] font-bold text-sm uppercase tracking-widest">Student, USA</p>
              </div>
              <p className="text-lg text-gray-500 italic leading-relaxed">
                Platea tincidunt praesent mauris, facilisis vel srnare nulltcies proin luctus velilibero. At ligula amet selit est morbi sit eros tempus mus sit at ut tortor utorbi nulla antmauris Maecenas tempus tellondimentum rhoncus sem quam semper libero
              </p>
              <div className="flex space-x-1 text-yellow-400">
                {[...Array(5)].map((_, i) => <Award key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <div className="flex space-x-4 pt-4">
                <button className="w-12 h-12 rounded-sm bg-[#38bdf8] text-white flex items-center justify-center hover:bg-primary transition-all"><ChevronRight className="w-6 h-6 rotate-180" /></button>
                <button className="w-12 h-12 rounded-sm bg-[#38bdf8] text-white flex items-center justify-center hover:bg-primary transition-all"><ChevronRight className="w-6 h-6" /></button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center space-x-2 text-[#38bdf8]">
              <Plane className="w-5 h-5" />
              <span className="font-bold uppercase tracking-widest text-lg">Gallery</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-display font-extrabold text-primary">
              Our Photo Gallery
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-lg">
              There's much to see here. So, take your time, look around, and learn all there is to know about us. We hope you enjoy our site and take a moment to drop us a line.
            </p>
          </div>
          <div className="flex justify-center space-x-4 mb-12">
            {["All", "Crew Training", "Maintenance", "Private Pilot"].map((tab) => (
              <button 
                key={tab} 
                onClick={() => setGalleryTab(tab)}
                className={`px-6 py-2 rounded-sm text-lg font-bold transition-all ${galleryTab === tab ? 'bg-[#38bdf8] text-white' : 'bg-white text-gray-500 border border-gray-200 hover:border-[#38bdf8]'}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl h-80 shadow-lg">
                <img src={item.url} alt={`Gallery ${index}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary transform scale-0 group-hover:scale-100 transition-transform duration-500">
                    <Plus className="w-6 h-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Join Section */}
      {/* <section className="py-24 bg-primary relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-20 grayscale">
          <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1920" alt="bg" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-4 text-center lg:text-left">
                <div className="text-5xl font-display font-black flex items-center justify-center lg:justify-start">
                  <Odometer value={80} format="d" />
                  <span>+</span>
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Total Staffs</p>
                <div className="w-12 h-1 bg-white/20 mx-auto lg:ml-0"></div>
              </div>
              <div className="space-y-4 text-center lg:text-left">
                <div className="text-5xl font-display font-black flex items-center justify-center lg:justify-start">
                  <Odometer value={195} format="d" />
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Winning Awards</p>
                <div className="w-12 h-1 bg-white/20 mx-auto lg:ml-0"></div>
              </div>
              <div className="space-y-4 text-center lg:text-left">
                <div className="text-5xl font-display font-black flex items-center justify-center lg:justify-start">
                  <Odometer value={895} format="d" />
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Happy Students</p>
                <div className="w-12 h-1 bg-white/20 mx-auto lg:ml-0"></div>
              </div>
              <div className="space-y-4 text-center lg:text-left">
                <div className="text-5xl font-display font-black flex items-center justify-center lg:justify-start">
                  <Odometer value={100} format="d" />
                  <span>+</span>
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Total Courses</p>
                <div className="w-12 h-1 bg-white/20 mx-auto lg:ml-0"></div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-2xl text-primary max-w-md mx-auto lg:ml-auto">
              <h3 className="text-2xl font-display font-bold mb-8">Join With Us</h3>
              <form className="space-y-6">
                <input type="email" placeholder="Email Address" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-[#38bdf8] transition-colors" />
                <select className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-[#38bdf8] transition-colors bg-white">
                  <option>Courses</option>
                  <option>FAA Pilot Training</option>
                  <option>Online Pilot Training</option>
                  <option>EASA Pilot Training</option>
                </select>
                <textarea placeholder="Writing Something" rows={3} className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-[#38bdf8] transition-colors resize-none"></textarea>
                <button className="bg-[#38bdf8] text-white font-bold py-4 px-8 rounded-sm hover:bg-primary transition-all duration-300 w-full text-sm uppercase tracking-widest">
                  Become An Pilot
                </button>
              </form>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-24 bg-[#002147] relative overflow-hidden text-white">
      {/* Background with Aviation Feel */}
      <div className="absolute inset-0 opacity-20 grayscale">
        <img 
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1920" 
          alt="Fun Flight Training Fleet" 
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Odometer Stats Grid */}
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-4 text-center lg:text-left">
              <div className="text-5xl font-display font-black flex items-center justify-center lg:justify-start">
                <Odometer value={15} format="d" />
                <span>+</span>
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Flight Mentors</p>
              <div className="w-12 h-1 bg-[#38bdf8] mx-auto lg:ml-0"></div>
            </div>

            <div className="space-y-4 text-center lg:text-left">
              <div className="text-5xl font-display font-black flex items-center justify-center lg:justify-start">
                <Odometer value={12} format="d" />
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Modern Aircraft</p>
              <div className="w-12 h-1 bg-[#38bdf8] mx-auto lg:ml-0"></div>
            </div>

            <div className="space-y-4 text-center lg:text-left">
              <div className="text-5xl font-display font-black flex items-center justify-center lg:justify-start">
                <Odometer value={450} format="d" />
                <span>+</span>
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Happy Pilots</p>
              <div className="w-12 h-1 bg-[#38bdf8] mx-auto lg:ml-0"></div>
            </div>

            <div className="space-y-4 text-center lg:text-left">
              <div className="text-5xl font-display font-black flex items-center justify-center lg:justify-start">
                <Odometer value={6} format="d" />
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Career Tracks</p>
              <div className="w-12 h-1 bg-[#38bdf8] mx-auto lg:ml-0"></div>
            </div>
          </div>

          {/* Contact / Enrollment Form */}
          <div className="bg-white p-10 rounded-xl shadow-2xl text-[#002147] max-w-md mx-auto lg:ml-auto">
            <h3 className="text-2xl font-display font-bold mb-2">Join With Us</h3>
            <p className="text-gray-500 text-xs mb-8">Take the first step toward your pilot wings.</p>
            
            <form className="space-y-6">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-[#38bdf8] transition-colors" 
              />
              
              <select className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-[#38bdf8] transition-colors bg-white text-gray-600 text-sm">
                <option value="">Select Training Pathway</option>
                <option value="14-day">14-Day Accelerated PPL</option>
                <option value="9-month">0 to Commercial (9 Months)</option>
                <option value="ifr">Instrument Rating (IFR)</option>
                <option value="cfi">CFI / Instructor Training</option>
              </select>

              <textarea 
                placeholder="Tell us about your flight goals" 
                rows={3} 
                className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-[#38bdf8] transition-colors resize-none"
              ></textarea>

              <button className="bg-[#38bdf8] text-white font-bold py-4 px-8 rounded-sm hover:bg-[#002147] transition-all duration-300 w-full text-sm uppercase tracking-widest shadow-lg shadow-[#38bdf8]/30">
                Become A Pilot
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>

      {/* Blog Section */}
    

      {/* Become a Pilot Banner */}
      
    </div>
  );
};

export default Home;
