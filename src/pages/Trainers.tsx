import React from 'react';
import Slider from 'react-slick';
import { Facebook, Twitter, Instagram, Linkedin, Plane, ChevronLeft, ChevronRight, Star, Quote, Send } from 'lucide-react';

const Trainers = () => {
  const trainers = [
     { name: "Manuel Grimaldo", role: "Owner and Flight Instructor", image: "Team3Manuel.png" },
    { name: "Walter Adamski", role: "Chief Flight Instructor", image: "Team4Walter.png" },
    { name: "Brennan McArthur", role: "Flight Instructor", image: "Team1Brennan.png" },
    { name: "Madison Casale", role: "Operations Manager", image: "Team2madison.png" },
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
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2500,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "30px"
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: "20px"
      }
    }
  ]
};

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
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-4 text-white">Our Expert Team</h1>
          <div className="flex justify-center items-center space-x-2 text-xs uppercase tracking-[0.2em] font-bold">
            <a href="/" className="hover:text-[#38bdf8] transition-colors">HOME</a>
            <span className="text-gray-400">/</span>
            <span className="text-white">Our Team</span>
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
      

      {/* Meet With Our Trainer */}
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

      {/* Stats & Join Form */}
      <section className="py-24 bg-gray-50">
  <div className="container mx-auto px-4">
    
    {/* Enrollment Form */}
    <div className="max-w-2xl mx-auto bg-white p-12 shadow-2xl rounded-sm border-t-4 border-[#38bdf8]">
      
      <h3 className="text-3xl font-serif font-bold text-[#002147] mb-2">
        Ready to Take Flight?
      </h3>

      <p className="text-gray-500 text-sm mb-8">
        Start your journey from zero to Commercial Pilot in 9 months.
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
      
      <section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <h2 className="text-4xl font-serif font-bold text-[#002147] mb-4">
        What Our Students Say
      </h2>

      <p className="text-gray-500 max-w-xl mx-auto text-sm">
        Hear from students who have started their aviation journey with our training programs.
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

      {/* CTA Section */}
      
    </div>
  );
};

export default Trainers;
