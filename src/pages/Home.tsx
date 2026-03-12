import React, { useState } from 'react';
import Slider from 'react-slick';
import { Plane, Users, Award, BookOpen, ArrowRight, Play, CheckCircle2, ChevronRight, Plus, Minus, Quote, Facebook, Twitter, Instagram, Linkedin, Mail, Search } from 'lucide-react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [faqTab, setFaqTab] = useState('All');
  const [galleryTab, setGalleryTab] = useState('All');

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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
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

  const courses = [
    {
      title: "Airline Crew Training",
      image: "course-img-1.png",
      desc: "Lorem ipsum dolor sit amnsectetur adipiscing elit, sedo Training Cources",
      features: ["You must be 16 years old", "You must have a diploma", "Must have medical certificat", "You must be 16 years old"]
    },
    {
      title: "ATP Courses",
      image: "course-img-2.png",
      desc: "Lorem ipsum dolor sit amnsectetur adipiscing elit, sedo Training Cources",
      features: ["You must be 16 years old", "You must have a diploma", "Must have medical certificat", "You must be 16 years old"]
    },
    {
      title: "Aircaft Maintenance",
      image: "course-img-3.png",
      desc: "Lorem ipsum dolor sit amnsectetur adipiscing elit, sedo Training Cources",
      features: ["You must be 16 years old", "You must have a diploma", "Must have medical certificat", "You must be 16 years old"]
    },
    {
      title: "Air Traffic Control",
      image: "course-img-4.png",
      desc: "Lorem ipsum dolor sit amnsectetur adipiscing elit, sedo Training Cources",
      features: ["You must be 16 years old", "You must have a diploma", "Must have medical certificat", "You must be 16 years old"]
    }
  ];

  const trainers = [
    { name: "Kuna Huggo", role: "Trainer", image: "team-1.jpg" },
    { name: "Robart Williams", role: "Trainer", image: "team-2.jpg" },
    { name: "Tomas Kishan", role: "Trainer", image: "team-3.jpg" },
    { name: "Divas Kings", role: "Trainer", image: "team-4.jpg" },
    { name: "Divas Kings", role: "Trainer", image: "team-5.jpg" },
  ];

  const faqs = [
    { question: "Why You should become an Investor?", answer: "Maecenas tempus tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed.", category: "Profile" },
    { question: "Can I Invest Using Cryptocurrency?", answer: "Maecenas tempus tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed.", category: "Messages" },
    { question: "Why You Choose Us?", answer: "Maecenas tempus tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed.", category: "Admission Test" },
    { question: "Why You should become an Investor?", answer: "Maecenas tempus tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed.", category: "Profile" },
  ];

  const filteredFaqs = faqTab === 'All' ? faqs : faqs.filter(f => f.category === faqTab);

  const gallery = [
    { url: "gal-5.png", catgory: "Crew Training" },
    { url: "gal-2.png", category: "Maintenance" },
    { url: "gal-3.png", category: "Private Pilot" },
    { url: "gal-4.png", category: "Crew Training" },
    { url: "course-img-3.png", category: "Maintenance" },
    { url: "gal-6.png", category: "Private Pilot" },
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
      <section className="section-padding">
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
      </section>

      {/* Courses Section */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
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
          {/* <div className="mt-12 text-center">
            <button className="bg-[#38bdf8] text-white font-bold py-4 px-10 rounded-sm hover:bg-primary transition-all duration-300 uppercase tracking-wider text-sm">
              View All Courses
            </button>
          </div> */}
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

      {/* Academy Features Section */}
      <section className="section-padding bg-white">
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
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center space-x-2 text-[#38bdf8]">
              <Plane className="w-5 h-5" />
              <span className="font-bold uppercase tracking-widest text-lg">FAQ</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-display font-extrabold text-primary">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-lg">
              Maecenas tempus tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed
            </p>
          </div>
          <div className="flex justify-center space-x-4 mb-10 text-lg">
            {["All", "Profile", "Messages", "Admission Test"].map((tab) => (
              <button 
                key={tab} 
                onClick={() => setFaqTab(tab)}
                className={`px-6 py-2 rounded-sm text-lg font-bold transition-all ${faqTab === tab ? 'bg-[#38bdf8] text-white' : 'bg-white text-gray-500 border border-gray-200 hover:border-[#38bdf8]'}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-sm overflow-hidden">
                <button 
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="font-bold text-primary">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-sm flex items-center justify-center transition-all ${activeFaq === index ? 'bg-[#38bdf8] text-white' : 'bg-[#38bdf8]/10 text-[#38bdf8]'}`}>
                    {activeFaq === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                {activeFaq === index && (
                  <div className="p-6 pt-0 text-lg text-gray-500 border-t border-gray-50 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
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
              Maecenas tempus tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed
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
      <section className="py-24 bg-primary relative overflow-hidden text-white">
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
      </section>

      {/* Blog Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center space-x-2 text-[#38bdf8]">
              <Plane className="w-5 h-5" />
              <span className="font-bold uppercase tracking-widest text-lg">Blog Post</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-display font-extrabold text-primary">
              Our Latest Blog
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-lg">
              Maecenas tempus tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=600`} alt="Blog" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute bottom-4 left-4 bg-[#38bdf8] text-white p-2 rounded-sm text-center min-w-[60px]">
                    <div className="text-xl font-bold">26</div>
                    <div className="text-[10px] uppercase font-bold">May</div>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-center space-x-4 text-lg text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Users className="w-3 h-3 text-[#38bdf8]" />
                      <span>BY ROBART JONS</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Mail className="w-3 h-3 text-[#38bdf8]" />
                      <span>25 COMMENTS</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-display font-bold text-primary group-hover:text-[#38bdf8] transition-colors line-clamp-2">
                    Faucibus Nullam Quis Ante Eti Qrci Egetros Saucibus...
                  </h4>
                  <p className="text-lg text-gray-500 line-clamp-3">
                    Donec interdum metus ehendrerit auet doldiam sagittis ligula eget egestas libero turpis velsra smiunc nulla testa peina ola oreso loerm ipsum...
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            {/* <button className="bg-[#38bdf8] text-white font-bold py-4 px-10 rounded-sm hover:bg-primary transition-all duration-300 uppercase tracking-wider text-lg">
              View All Posts
            </button> */}
          </div>
        </div>
      </section>

      {/* Become a Pilot Banner */}
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

export default Home;
