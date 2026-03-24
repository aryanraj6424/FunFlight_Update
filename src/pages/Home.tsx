import React, { useState , useEffect } from 'react';

import Slider from 'react-slick';
import { Plane, Users, Award, BookOpen, ArrowRight,Link, Play, CheckCircle2, ChevronRight, Plus, Minus,Loader2, Quote, Facebook, Twitter, Instagram, Linkedin, Mail, Search } from 'lucide-react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Home = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState('All');
  const [galleryTab, setGalleryTab] = useState('All');


  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Admin API Endpoint jo apne pehle bataya tha
  const API_ENDPOINT = 'http://localhost/funFlight-main (2)/funFlight-main/admin/api-gallery.php';

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_ENDPOINT);
        if (response.ok) {
          const data = await response.json();
          setGalleryItems(data);
        }
      } catch (err) {
        console.error("Error fetching gallery:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);


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
      // title: "Professional Flight for Every Stage of Your Journey!",
      // subtitle: "Professional Flight School",
      // description: "Start your journey to becoming a professional pilot with our comprehensive training programs and world-class instructors.",
      // image: "hero-bg.png",
      // buttonText: "Become an Pilot",
      title: "Professional Flight Training for Every Stage of Your Journey",
      subtitle: "Professional Flight School",
      description: "Start your journey to becoming a professional pilot with our comprehensive training programs and world-class instructors.",
      image: "hero-bg.png",
      buttonText: "Become an Pilot",
    },
    {
      title: "From Discovery Flight to Certified Flight Instructor",
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
       

     const courses = [
  {
    title: "Private Pilot Rating",
    desc: "The first major step toward becoming a pilot. Learn the fundamental skills required to safely operate an aircraft and begin your aviation journey.",
    image: "course-img-1.png",
    features: [
      "Minimum 40 hours total flight time",
      "20 hours dual flight instruction",
      "10 hours solo flight",
      "Pass FAA Private Pilot knowledge test",
      "Pass FAA checkride"
    ]
  },
  {
    title: "Instrument Rating",
    desc: "Learn to fly safely in reduced visibility using aircraft instruments instead of outside visual references.",
    image: "course-img-2.png",
    features: [
      "Must hold a Private Pilot certificate",
      "50 hours cross country flight time (PIC)",
      "40 hours actual or simulated instrument time",
      "Pass FAA Instrument Rating knowledge test",
      "Pass FAA checkride"
    ]
  },
  {
    title: "Commercial Rating",
    desc: "Turn your passion into a profession. This course focuses on advanced flight maneuvers and professional flight planning.",
    image: "course-img-3.png",
    features: [
      "250 hours total flight time",
      "100 hours flight time as pilot in command",
      "50 hours cross country flight time",
      "Pass FAA Commercial Pilot knowledge test",
      "Pass FAA checkride"
    ]
  },
  {
    title: "Certified Flight Instructor (CFI)",
    desc: "Teach others to fly while building valuable flight hours toward your airline career.",
    image: "course-img-4.png",
    features: [
      "Must hold Instrument & Commercial certificate",
      "Pass FAA Fundamentals of Instruction test",
      "Pass FAA Instructor knowledge test",
      "Pass FAA practical test"
    ]
  }
];

  //blog map
  
  const trainers = [
    { name: "Manuel Grimaldo", role: "Owner and Flight Instructor", image: "team-1.jpg" },
    { name: "Walter Adamski", role: "Chief Flight Instructor", image: "team-2.jpg" },
    { name: "Brennan McArthur", role: "Flight Instructor", image: "team-3.jpg" },
    { name: "Madison Casale", role: "Operations Manager", image: "team-4.jpg" },
    
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
        
        {/* Container mein 'justify-center' aur 'text-center' hata kar 'items-center' aur alignment set ki gayi hai */}
        <div className="container mx-auto relative h-full flex items-center px-6 lg:px-16">
          <div className="max-w-3xl text-left"> 
            
            {/* Dynamic Color Splitting inside h1 - Left Aligned */}
            <h1 className="text-4xl lg:text-7xl font-display font-bold mb-8 leading-tight animate-slideUp drop-shadow-lg">
              {/* "Become a" (White) */}
              <span className="text-white block">
                {slide.title.split(' ').slice(0, 2).join(' ')}
              </span>
              {/* "Professional Pilot" (Blue) */}
              <span className="text-[#38bdf8] block">
                {slide.title.split(' ').slice(2).join(' ')}
              </span>
            </h1>
            
            {/* Button Container ko bhi left-align kar diya gaya hai */}
            <div className="flex justify-start animate-fadeIn delay-500">
              <button className="bg-[#38bdf8] text-white font-bold py-4 px-10 rounded-sm hover:bg-primary transition-all duration-300 uppercase tracking-wider text-sm">
                {slide.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </Slider>
  
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
      
       

      {/* About Section */}
      <section className="section-padding bg-white">
  <div className="container">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8 ml-3">
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
          Fun Flight
Training is a veteran-owned flight school dedicated to providing safe,
professional, and comprehensive flight instruction. With over 20 years of
aviation experience, our team is committed to developing confident,
capable pilots through thorough training. We believe great pilots are built
through solid fundamentals, clear communication,and real world
preparation. Whether you are just beginning your journey or are advancing
your aviation career, our goal is to provide high quality instruction in a
supportive, professional environment.
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
      
      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-4 mr-3">
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
        <span className="font-bold uppercase tracking-widest text-sm md:text-lg">
          Our Team
        </span>
      </div>

      <h2 className="text-3xl md:text-5xl font-display font-extrabold text-[#0a1525]">
        Meet Our Team
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
              
              {/* Image */}
              <img 
                src={trainer.image} 
                alt={trainer.name} 
                className="w-full h-[320px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1525]/90 via-[#0a1525]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-8">
                
                <div className="bg-white p-5 md:p-6 rounded-xl text-center space-y-2 md:space-y-3 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl">
                  
                  <h4 className="text-lg md:text-xl font-bold text-[#0a1525]">
                    {trainer.name}
                  </h4>

                  <p className="text-[#c5a059] text-xs md:text-sm font-black uppercase tracking-widest">
                    {trainer.role}
                  </p>

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
      
    <section className="section-padding bg-white">
  <div className="container ml-3 ">
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
        
        {/* Removed "modern" from the fleet description below */}
        <p className="text-gray-500 text-lg leading-relaxed">
          Join a vibrant, supportive community where your success is our priority. From our fleet of Cessna 172s and Piper PA-28s to our passionate mentors, we provide a personal approach tailored to your specific needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#38bdf8]/10 flex items-center justify-center flex-shrink-0 text-[#38bdf8]">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-primary mb-1">Dedicated Mentors</h4>
              {/* Removed "100 hours of" from the instruction text below */}
              <p className="text-lg text-gray-500">1-on-1 instruction with experienced pilots.</p>
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
          {/* Maintained the small fleet image container; removed the <ul> requirements list that was here */}
          <div className="w-full md:w-3/4 rounded-xl overflow-hidden h-64 border border-gray-100 shadow-sm">
            <img src="feature-img-sm.png" alt="Cessna 172 and Piper PA-28" className="w-full h-full object-cover" />
          </div>
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
      

      {/* Testimonial Section */}
      {/* <section className="py-24 relative overflow-hidden">
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
      </section> */}

      {/* Gallery Section */}
      {/* <section className="section-padding bg-gray-50">
      <div className="container">
        
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center space-x-2 text-[#38bdf8]">
            <Plane className="w-5 h-5" />
            <span className="font-bold uppercase tracking-widest text-lg">Gallery</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-display font-extrabold text-primary">
            Our Photo Gallery
          </h2>
          
        </div>

       

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-[#38bdf8]" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {galleryItems.slice(0, 6).map((item, index) => (
              <div key={item.id || index} className="group relative overflow-hidden rounded-xl h-80 shadow-lg cursor-pointer">
                <img 
                  src={item.image} 
                  alt={`Gallery ${index}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary transform scale-0 group-hover:scale-100 transition-transform duration-500">
                    <Plus className="w-6 h-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        
        {!loading && galleryItems.length > 6 && (
          <div className="text-center mt-12">
            <a 
              href="/gallery" 
              className="inline-block px-8 py-3 bg-[#38bdf8] text-white font-bold rounded-sm hover:bg-primary transition-all shadow-md"
            >
              VIEW ALL PHOTOS
            </a>
          </div>
        )}
      </div>
    </section> */}

      {/* Stats & Join Section */}
      
   

    <section className="relative py-16 text-white overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1920&q=80"
      alt="Flight Training"
      className="w-full h-full object-cover"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-[#001632]/75"></div>
  </div>

  <div className="relative z-10 max-w-6xl mx-auto px-6">

    {/* Sub Heading */}
    <div className="text-center mb-10">
      <p className="text-xl font-medium text-white">
        From Discovery Flight to Certified Flight Instructor
      </p>
    </div>

    {/* Contact Card */}
    <div className="flex justify-center">

      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-8 w-full max-w-md shadow-2xl">

        <h3 className="text-xl font-semibold text-white mb-2">
          Start Your Aviation Journey
        </h3>

        <p className="text-gray-300 text-sm mb-6">
          Contact our team and begin your professional flight training today.
        </p>

        <form className="space-y-5">

          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-transparent border border-white/30 rounded-md px-4 py-2.5 text-white placeholder-gray-300 focus:outline-none focus:border-sky-400 transition"
          />

          <select
            className="w-full bg-transparent border border-white/30 rounded-md px-4 py-2.5 text-white focus:outline-none focus:border-sky-400 transition"
          >
            <option className="text-black">Select Training Pathway</option>
            <option className="text-black">Private Pilot Rating</option>
            <option className="text-black">Instrument Rating</option>
            <option className="text-black">Commercial Pilot Rating</option>
            <option className="text-black">Certified Flight Instructor</option>
          </select>

          <textarea
            rows="2"
            placeholder="Tell us about your flight goals"
            className="w-full bg-transparent border border-white/30 rounded-md px-4 py-2.5 text-white placeholder-gray-300 resize-none focus:outline-none focus:border-sky-400 transition"
          ></textarea>

          <button
            className="w-full bg-sky-500 hover:bg-sky-400 text-white font-semibold py-3 rounded-md transition duration-300 shadow-lg"
          >
            Contact Us
          </button>

        </form>

      </div>

    </div>

  </div>

</section>

      {/* Blog Section */}
    

      
      
    </div>
  );
};

export default Home;
