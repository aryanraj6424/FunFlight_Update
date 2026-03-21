import React, { useState } from "react";
import Slider from "react-slick";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Star,
  Plane,
  Award,
  ShieldCheck,
  Quote,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Calendar,
  Users,
  Clock,
  MessageSquare,
} from "lucide-react";

const About = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState("All");
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
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  const trainerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Computer/Desktop par 3 dikhenge
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile view (Isse fix hoga)
        settings: {
          slidesToShow: 1, // Mobile par ab sirf 1 photo dikhegi
          centerMode: true, // Side se dusri image thodi si dikhegi (premium look)
          centerPadding: "30px", // Side gap
        },
      },
    ],
  };

  const trainers = [
    {
      id: 1,
      name: "Kuna Huggo",
      role: "Trainer",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Robart Williams",
      role: "Trainer",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "Tomas Kishan",
      role: "Trainer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 4,
      name: "Divas Kings",
      role: "Trainer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    },
  ];

  //Flight Features

  const flightFeatures = [
    {
      title: "Accelerated Path",
      desc: "Go from zero experience to Commercial Pilot in as little as 9 months.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Fleet",
      desc: "Train in well-maintained Cessna 172 or Piper PA-28 aircraft.",
      icon: <Plane className="w-6 h-6" />,
    },
    {
      title: "One-on-One Mentoring",
      desc: "100 hours of personalized instruction with passionate flight mentors.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "All-Inclusive Pricing",
      desc: "Fixed career track pricing covering written and practical test fees.",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Wally Gallart",
      content:
        "Manny and his team are professionals. They are able to provide flight training in a secure and fun manner.The most complex maneuvers and lessons are always understandable.I have had several Young Marines go through their discovery flights. They and their parents have been amazed with the potential of careers in aviation.",
      rating: 5,
    },
    {
      id: 2,
      name: "ken de la cruz",
      content:
        "Best flight school in polk county Fl in my opinion. Manny and the staff are amazing. Flight training is top notch. Well kept aircraft and very reasonable prices. 100% recommended.",
      rating: 5,
    },
    {
      id: 3,
      name: "Walter Adamski",
      content:
        "A great place to learn to fly. Not only will the instructors teach the fundamentals of operation of the aircraft but they take the time to make sure you understand why.Knowing how to set a student up for success for the checkride includes preparation for the oral portion of the exam. The training is part 61 so you can pay as you go while working a full time job! Fun Flight Training helped set me up for success.",
      rating: 5,
    },
    {
      id: 4,
      name: "dave edward enriquez",
      content:
        "I highly recommend Fun Flight Training to any student/pilots looking to earn their license and build hours. Great school with great instructor/owner, Manny. Easy to reach out and attentive to details.",
      rating: 5,
    },

    // ✅ Newly added
    {
      id: 5,
      name: "Dalmar Bashir",
      content:
        "Training here goes way beyond just getting your license or rating it’s the kind of top-notch instruction that leaves you excited to tell everyone about it. They are patient, knowledgeable instructors and that is unbeatable.",
      rating: 5,
    },
    {
      id: 6,
      name: "Diego Hass",
      content:
        "Highly recommended for anyone looking to start or continue their aviation training.",
      rating: 5,
    },
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
      category: "General",
      question: "How long does it take to become a professional pilot?",
      answer:
        "At Fun Flight Training, our 'Zero to Hero' career track is designed to take you from zero experience to a Commercial Pilot with CFI & CFI-I ratings in as little as 9 months.",
    },
    {
      category: "Training",
      question:
        "At Fun Flight Training, you will train in a fleet of well-maintained aircraft, specifically the Cessna 172 and Piper PA-28, ensuring a safe and technologically current training environment.",
    },
    {
      category: "Medical",
      question: "What medical certificate do I need?",
      answer:
        "For a Private Pilot certificate, a 3rd Class Medical is required. However, if you plan to fly for the airlines, we recommend obtaining a 1st Class Medical certificate early on.",
    },
    {
      category: "General",
      question: "Can I start training before I'm 16?",
      answer:
        "Yes! There is no age requirement to start lessons. However, the FAA requires you to be 16 to fly solo and 17 to take the practical test for your Private Pilot certificate.",
    },
    {
      category: "Training",
      question:
        "What is included in the 14-Day Accelerated Private Pilot course?",
      answer:
        "The $8,999 course includes 30 hours of dual instruction, 10 hours of solo flight, and 25 hours of ground school. Students must have their written exam completed before starting.",
    },
  ];

  const filteredFaqs =
    activeTab === "All"
      ? faqsData
      : faqsData.filter((faq) => faq.category === activeTab);

  const blogs = [
    {
      id: 1,
      title: "Faucibus Nullam Quis Ante Eti Qrci Egetros Saucibus...",
      author: "ROBART JONS",
      comments: 25,
      date: "26 May",
      image:
        "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=600",
      desc: "Donec interdum metus ehendrerit auet doldiam sagittis ligula eget egestas libero turpis velsra smiunc nulla testa peina ola oreso loerm ipsum...",
    },
    {
      id: 2,
      title: "Faucibus Nullam Quis Ante Eti Qrci Egetros Saucibus...",
      author: "ROBART JONS",
      comments: 25,
      date: "26 May",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
      desc: "Donec interdum metus ehendrerit auet doldiam sagittis ligula eget egestas libero turpis velsra smiunc nulla testa peina ola oreso loerm ipsum...",
    },
    {
      id: 3,
      title: "Faucibus Nullam Quis Ante Eti Qrci Egetros Saucibus...",
      author: "ROBART JONS",
      comments: 25,
      date: "26 May",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
      desc: "Donec interdum metus ehendrerit auet doldiam sagittis ligula eget egestas libero turpis velsra smiunc nulla testa peina ola oreso loerm ipsum...",
    },
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
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
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
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-4 text-white">
            Who We Are
          </h1>
          <div className="flex justify-center items-center space-x-2 text-xs uppercase tracking-[0.2em] font-bold">
            <a href="/" className="hover:text-[#38bdf8] transition-colors">
              HOME
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-white">ABOUT</span>
          </div>
        </div>
        {/* Curved Cutout (Convex) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[80px] fill-white"
          >
            <path d="M0,0V120H1200V0C1200,0,900,100,600,100S0,0,0,0Z"></path>
          </svg>
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

      <section className="py-24 bg-white ml-3 mr-3">
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
              <p className="text-gray-500 text-[18px] leading-relaxed">
                Fun Flight Training is a veteran-owned flight school dedicated
                to providing safe, professional, and comprehensive flight
                instruction. With over 20 years of aviation experience, our team
                is committed to developing confident, capable pilots through
                thorough training. We believe great pilots are built through
                solid fundamentals, clear communication,and real world
                preparation. Whether you are just beginning your journey or are
                advancing your aviation career, our goal is to provide high
                quality instruction in a supportive, professional environment.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#38bdf8] text-white font-bold py-4 px-10 rounded-sm hover:bg-[#002147] transition-all duration-300 uppercase tracking-widest text-xs">
                  Become A Pilot
                </button>
                <div className="flex items-center gap-3 px-6 py-4 border border-gray-100 bg-[#38bdf8] hover:bg-[#002147] rounded-sm">
                  <span className="text-white font-bold text-sm">
                    Call Us: 863-270-5572
                  </span>
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

      {/* Features Section */}

      {/* <section className="py-24 bg-white">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      

      <div className="space-y-8">

        <div className="flex items-center gap-2 text-[#38bdf8] font-bold text-sm uppercase tracking-widest">
          <div className="w-6 h-6 bg-[#38bdf8]/10 flex items-center justify-center rounded-sm">
            <Plane className="w-3.5 h-3.5 fill-[#38bdf8]" />
          </div>
          Key Features
        </div>

        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#002147] leading-tight">
          Choose Our Best Flying Academy
        </h2>

        <p className="text-gray-500 text-[15px] leading-relaxed max-w-xl">
          At Fun Flight Training, we prioritize your safety and career success. 
          Our programs are designed to be intensive yet supportive, providing 
          the most efficient path to the cockpit and helping students build 
          real aviation experience with professional instructors.
        </p>

       

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {flightFeatures.map((feature, idx) => (

            <div key={idx} className="flex gap-4 group">

              <div className="w-12 h-12 bg-[#38bdf8] rounded-full flex-shrink-0 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition">
                {feature.icon}
              </div>

              <div>
                <h4 className="font-serif font-bold text-[#002147] mb-1">
                  {feature.title}
                </h4>

                <p className="text-gray-500 text-xs leading-normal">
                  {feature.desc}
                </p>
              </div>

            </div>

          ))}

        </div>

      </div>

     

      <div className="relative">

        <img
          src="./aircraftimg.png"
          alt="Piper Archer Training Aircraft"
          className="rounded-md shadow-2xl w-full object-cover"
        />

       

        <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-[#38bdf8] rounded-full flex flex-col items-center justify-center text-white border-8 border-white shadow-xl text-center p-4 hidden md:flex">

          <span className="text-4xl font-bold">260</span>

          <span className="text-[10px] uppercase font-bold tracking-widest">
            Flight Hours
          </span>

          <span className="text-[10px] uppercase font-bold tracking-widest">
            Career Program
          </span>

        </div>

      </div>

    </div>
  </div>
</section> */}

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
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#002147] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
              Everything you need to know about starting your aviation career at
              Fun Flight Training in Lakeland, Florida.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Updated Categories */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["All", "General", "Training", "Medical"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setActiveFaq(null); // Reset accordion when switching tabs
                  }}
                  className={`px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                    activeTab === tab
                      ? "bg-[#38bdf8] text-white border-[#38bdf8]"
                      : "bg-white text-gray-500 border-gray-200 hover:border-[#38bdf8] hover:text-[#38bdf8]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-serif font-bold text-[#002147]">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-sm transition-colors ${activeFaq === idx ? "bg-[#38bdf8] text-white" : "bg-gray-100 text-gray-400"}`}
                    >
                      {activeFaq === idx ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
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

      {/* <section className="py-24 bg-white">
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
</section> */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-serif font-bold text-[#002147] mb-4">
              What Our Students Say
            </h2>

            <p className="text-gray-500 max-w-xl mx-auto text-sm">
              Hear from students who have started their aviation journey with
              our training programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Student Name */}
                <h4 className="font-semibold text-[#002147] mb-3">
                  {item.name}
                </h4>

                {/* Review */}
                <p className="text-gray-600 text-sm italic leading-relaxed mb-5">
                  "{item.content}"
                </p>

                {/* Rating */}
                <div className="flex text-[#f4b41a]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Join Form */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Enrollment & Inquiry Form */}
          <div className="max-w-2xl mx-auto bg-white p-12 shadow-2xl rounded-sm border-t-4 border-[#38bdf8]">
            <h3 className="text-3xl font-serif font-bold text-[#002147] mb-2">
              Ready to Take Flight?
            </h3>

            <p className="text-gray-500 text-sm mb-8">
              Start your journey toward becoming a professional pilot.
            </p>

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
                <option value="private">Private Pilot Rating</option>
                <option value="instrument">Instrument Rating</option>
                <option value="commercial">Commercial Rating</option>
                <option value="cfi">Certified Flight Instructor (CFI)</option>
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
      </section>

      {/* Blog Section */}

      {/* CTA Section */}
    </div>
  );
};

export default About;
