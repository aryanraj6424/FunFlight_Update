import React, { useState } from 'react';
import { Plane, Users, Award, BookOpen, ArrowRight, Play, CheckCircle2, ChevronRight, Plus, Minus, Quote, Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Search, Send } from 'lucide-react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';

const Home2 = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [eventTab, setEventTab] = useState('All');

  const courses = [
    { title: "Aircraft Maintenance", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400" },
    { title: "Airline Crew Training", image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=400" },
    { title: "Airline Crew Training", image: "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?auto=format&fit=crop&q=80&w=400" },
    { title: "Air Traffic Control", image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=400" },
  ];

  const testimonials = [
    { name: "Robar Williams", role: "Student, USA", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400", text: "Platea tincidunt praesent mauris, facilisis vel srnare nulltcies proin luctus velilibero. At ligula amet selit est morbi sit eros tempus mus sit at ut tortor utorbi nulla antmauris" },
    { name: "Kisan Kingson", role: "Student, USA", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400", text: "Platea tincidunt praesent mauris, facilisis vel srnare nulltcies proin luctus velilibero. At ligula amet selit est morbi sit eros tempus mus sit at ut tortor utorbi nulla antmauris" },
    { name: "Mariya Khan", role: "Student, USA", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400", text: "Platea tincidunt praesent mauris, facilisis vel srnare nulltcies proin luctus velilibero. At ligula amet selit est morbi sit eros tempus mus sit at ut tortor utorbi nulla antmauris" },
    { name: "Mariya Khan", role: "Student, USA", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400", text: "Platea tincidunt praesent mauris, facilisis vel srnare nulltcies proin luctus velilibero. At ligula amet selit est morbi sit eros tempus mus sit at ut tortor utorbi nulla antmauris" },
  ];

  const team = [
    { name: "John Doe", role: "Senior Pilot", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600" },
    { name: "Jane Smith", role: "Flight Instructor", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600" },
    { name: "Mike Johnson", role: "Technical Trainer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600" },
  ];

  const faqs = [
    { question: "Why You should become an Investor?", answer: "tara ipsum dolor sit amet consectetur adipisicing elit. Natus quos numquam atque exercitationem reprehenderit voluptas dolores ad repudiandae asperiores. Excepturi error dolor at veniam, modi vel quos tempora pariatur eaque." },
    { question: "Can I Invest Using Cryptocurrency?", answer: "tara ipsum dolor sit amet consectetur adipisicing elit. Natus quos numquam atque exercitationem reprehenderit voluptas dolores ad repudiandae asperiores. Excepturi error dolor at veniam, modi vel quos tempora pariatur eaque." },
    { question: "Why You Choose Us?", answer: "tara ipsum dolor sit amet consectetur adipisicing elit. Natus quos numquam atque exercitationem reprehenderit voluptas dolores ad repudiandae asperiores. Excepturi error dolor at veniam, modi vel quos tempora pariatur eaque." },
    { question: "Why You should become an Investor?", answer: "tara ipsum dolor sit amet consectetur adipisicing elit. Natus quos numquam atque exercitationem reprehenderit voluptas dolores ad repudiandae asperiores. Excepturi error dolor at veniam, modi vel quos tempora pariatur eaque." },
  ];

  const events = [
    { title: "Donec Sodales Sagittis Magna Dedcona", category: "Training", date: "30 May 2021", image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=400" },
    { title: "Donec Sodales Sagittis Magna Dedcona", category: "Crew Training", date: "30 May 2021", image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=400" },
    { title: "Donec Sodales Sagittis Magna Dedcona", category: "Maintenance", date: "30 May 2021", image: "https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&q=80&w=400" },
    { title: "Donec Sodales Sagittis Magna Dedcona", category: "Private Pilot", date: "30 May 2021", image: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&q=80&w=400" },
    { title: "Donec Sodales Sagittis Magna Dedcona", category: "Training", date: "30 May 2021", image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=400" },
    { title: "Donec Sodales Sagittis Magna Dedcona", category: "Crew Training", date: "30 May 2021", image: "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?auto=format&fit=crop&q=80&w=400" },
  ];

  const filteredEvents = eventTab === 'All' ? events : events.filter(e => e.category === eventTab);

  const blogs = [
    { title: "Aenean Mulputate Eleifen Enean Ligula Porttitor", date: "30 May 2021", image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=600" },
    { title: "Aenean Mulputate Eleifen Enean Ligula Porttitor", date: "30 May 2021", image: "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?auto=format&fit=crop&q=80&w=600" },
    { title: "Aenean Mulputate Eleifen Enean Ligula Porttitor", date: "30 May 2021", image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=600" },
  ];

  const partners = [
    { name: "PAPER", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200" },
    { name: "MOUNTAIN", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200" },
    { name: "CIRCLE", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200" },
    { name: "GLOBE", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200" },
    { name: "IDENTITY", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=200" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1920')` }}
        >
          <div className="absolute inset-0 bg-primary/40"></div>
        </div>
        <div className="container relative z-10 text-center text-white">
          <div className="inline-block bg-[#38bdf8]/20 backdrop-blur-sm border border-[#38bdf8]/30 px-4 py-2 rounded-full text-[#38bdf8] text-xs font-bold uppercase tracking-widest mb-6 animate-fadeInDown">
            Welcome to Viserfly Academy
          </div>
          <h1 className="text-5xl lg:text-8xl font-display font-bold mb-8 leading-tight animate-fadeInUp">
            True Your Own <br /> <span className="text-[#38bdf8]">Dream</span> With Viserfly
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 mb-12 text-lg leading-relaxed animate-fadeInUp delay-200">
            Maecenas tempus tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed ipsum.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp delay-300">
            <button className="bg-[#38bdf8] text-white font-bold py-5 px-12 rounded-sm hover:bg-white hover:text-primary transition-all duration-300 uppercase tracking-widest text-sm shadow-xl shadow-[#38bdf8]/20">
              Become an Pilot
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white font-bold py-5 px-12 rounded-sm hover:bg-white hover:text-primary transition-all duration-300 uppercase tracking-widest text-sm border border-white/20">
              Our Courses
            </button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="absolute bottom-0 left-0 w-full translate-y-1/2 z-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl rounded-sm overflow-hidden">
              <div className="bg-[#002244] p-16 text-center text-white group hover:bg-[#38bdf8] transition-all duration-500 cursor-pointer">
                <div className="w-20 h-20 bg-[#38bdf8]/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-white/20 transition-colors">
                  <Users className="w-10 h-10 text-[#38bdf8] group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Expert Trainer</h3>
                <p className="text-gray-400 text-sm group-hover:text-white/80 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eius mod tempor incididunt ut labore dolore magna.
                </p>
              </div>
              <div className="bg-[#38bdf8] p-16 text-center text-white cursor-pointer hover:bg-[#002244] transition-all duration-500">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Job Guideline</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eius mod tempor incididunt ut labore dolore magna.
                </p>
              </div>
              <div className="bg-[#002244] p-16 text-center text-white group hover:bg-[#38bdf8] transition-all duration-500 cursor-pointer">
                <div className="w-20 h-20 bg-[#38bdf8]/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-white/20 transition-colors">
                  <Quote className="w-10 h-10 text-[#38bdf8] group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">24/7 Support</h3>
                <p className="text-gray-400 text-sm group-hover:text-white/80 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eius mod tempor incididunt ut labore dolore magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="pt-64 pb-24">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-primary max-w-md">
              We Help Our Student To Achieve Their Industry Goals
            </h2>
            <div className="flex flex-wrap gap-8 lg:gap-16">
              <div className="text-center">
                <div className="text-4xl font-display font-black text-[#38bdf8] flex items-center justify-center">
                  <Odometer value={80} format="d" />
                  <span>+</span>
                </div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-2">Staffs</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display font-black text-[#38bdf8] flex items-center justify-center">
                  <Odometer value={195} format="d" />
                </div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-2">Awards</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display font-black text-[#38bdf8] flex items-center justify-center">
                  <Odometer value={895} format="d" />
                </div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-2">Students</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-display font-black text-[#38bdf8] flex items-center justify-center">
                  <Odometer value={100} format="d" />
                  <span>+</span>
                </div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mt-2">Courses</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden h-[400px]">
                  <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=600" alt="About" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-4">
                  <div className="bg-[#38bdf8] p-8 rounded-sm text-white h-[200px] flex flex-col justify-center">
                    <div className="text-5xl font-display font-black mb-2">36</div>
                    <p className="text-sm font-bold uppercase tracking-widest">Years Of Experience.</p>
                  </div>
                  <div className="rounded-xl overflow-hidden h-[184px]">
                    <img src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=600" alt="About" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-xl overflow-hidden border-8 border-white shadow-2xl hidden lg:block">
                <img src="https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&q=80&w=400" alt="About" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-8">
              <h3 className="text-3xl font-display font-bold text-primary leading-tight">
                Fusce Vulputate Eleifend Sapien Vestibulum Purus Quam Scelerisque.
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Maecenas tempus, tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed ipsum. Nam quam nunc blandit vel pulviendrerit idlorem.aecenas nec odio et ante tinciduntempus.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Maecenas tempus, tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed ipsum. Nam quam nunc blandit vel pulviendrerit idlorem.aecenas nec odio et ante tinciduntempus.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-[#38bdf8]"></div>
                  <span>You must be 16 years old</span>
                </li>
                <li className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-[#38bdf8]"></div>
                  <span>You must have a diploma</span>
                </li>
              </ul>
              <div className="bg-[#38bdf8] p-6 rounded-sm flex items-center space-x-6 text-white max-w-xs">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest opacity-80">Call Us Anytime</p>
                  <p className="text-lg font-bold">+123 - 456 - 7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-display font-bold text-primary">Our Pilot Training Courses</h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">
              Maecenas tempus tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="group relative overflow-hidden rounded-sm h-80">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-90"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <h3 className="text-xl font-display font-bold mb-2">{course.title}</h3>
                  <p className="text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Lorem ipsum doamnsectetur adipiscing elit sedo
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-display font-bold text-primary">What Say Our Student</h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">
              Maecenas tempus tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-sm relative group hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-primary text-sm">{t.name}</h4>
                    <p className="text-[10px] text-gray-400">{t.role}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 italic leading-relaxed mb-6">
                  "{t.text}"
                </p>
                <div className="flex space-x-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => <Award key={i} className="w-3 h-3 fill-current" />)}
                </div>
                <Quote className="absolute bottom-4 right-4 w-8 h-8 text-[#38bdf8] opacity-10 group-hover:opacity-30 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-display font-bold text-primary">Meet With <br /> Our Expert Team</h2>
              <p className="text-gray-500 max-w-md text-sm">
                Maecenas tempus, tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed ipsum. Nam quam nunc blandit vel pulviendrerit idlorem.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 w-full lg:w-auto">
              {team.map((member, index) => (
                <div key={index} className="rounded-sm overflow-hidden h-64 lg:w-48">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-display font-bold text-primary">Frequently Asked Questions</h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">
              Maecenas tempus tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-sm overflow-hidden">
                <button 
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="font-bold text-primary text-sm">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-sm flex items-center justify-center transition-all ${activeFaq === index ? 'bg-[#38bdf8] text-white' : 'bg-[#38bdf8]/10 text-[#38bdf8]'}`}>
                    {activeFaq === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                {activeFaq === index && (
                  <div className="p-6 pt-0 text-xs text-gray-500 border-t border-gray-50 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-[15px] border-white shadow-2xl mx-auto">
                <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800" alt="Facilities" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full overflow-hidden border-8 border-white shadow-xl hidden lg:block">
                <img src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?auto=format&fit=crop&q=80&w=400" alt="Facilities" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-display font-bold text-primary leading-tight">
                We Provide The Best <br /> Facilites For Student
              </h2>
              <p className="text-gray-500 text-sm">
                Maecenas tempus tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#38bdf8] flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                    <Plane className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Transportation</h4>
                    <p className="text-[10px] text-gray-500">Maecenas tempus tndimentum rhoncus sem quam semper</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#38bdf8] flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                    <Quote className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Discussion Forum</h4>
                    <p className="text-[10px] text-gray-500">Maecenas tempus tndimentum rhoncus sem quam semper</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#38bdf8] flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Hostel & Health Care</h4>
                    <p className="text-[10px] text-gray-500">Maecenas tempus tndimentum rhoncus sem quam semper</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#38bdf8] flex items-center justify-center flex-shrink-0 text-white shadow-lg">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">Monthly Events</h4>
                    <p className="text-[10px] text-gray-500">Maecenas tempus tndimentum rhoncus sem quam semper</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Event Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-display font-bold text-primary">Our Upcoming Event</h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">
              Maecenas tempus tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed
            </p>
          </div>
          <div className="flex justify-center space-x-4 mb-12">
            {["All", "Crew Training", "Maintenance", "Private Pilot"].map((tab) => (
              <button 
                key={tab} 
                onClick={() => setEventTab(tab)}
                className={`px-6 py-2 rounded-sm text-xs font-bold transition-all ${eventTab === tab ? 'bg-[#38bdf8] text-white' : 'bg-white text-gray-500 border border-gray-200 hover:border-[#38bdf8]'}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-8 space-y-4">
                  <h4 className="text-lg font-display font-bold text-primary group-hover:text-[#38bdf8] transition-colors">
                    {event.title}
                  </h4>
                  <div className="flex items-center space-x-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    <div className="flex items-center space-x-1">
                      <Award className="w-3 h-3 text-[#38bdf8]" />
                      <span>{event.category}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="w-3 h-3 text-[#38bdf8]" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#38bdf8] relative overflow-hidden text-white">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <h2 className="text-4xl font-display font-bold">Get In Touch With <br /> Our Academy</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-sm bg-white/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Office Address</h4>
                    <p className="text-sm opacity-80">28 Benin, south of Niger #5 San Francisco, United States of America</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 rounded-sm bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email Address</h4>
                    <p className="text-sm opacity-80">info@viserfly.com</p>
                    <p className="text-sm opacity-80">support@viserfly.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-sm shadow-2xl text-primary max-w-md mx-auto lg:ml-auto">
              <h3 className="text-2xl font-display font-bold mb-8">Join With Us</h3>
              <form className="space-y-6">
                <input type="email" placeholder="Email Address" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-[#38bdf8] transition-colors" />
                <select className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-[#38bdf8] transition-colors bg-white">
                  <option>Courses</option>
                  <option>Private Pilot</option>
                  <option>Commercial Pilot</option>
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
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-display font-bold text-primary">Our Latest Blog</h2>
            <p className="text-gray-500 max-w-lg mx-auto text-sm">
              Maecenas tempus tellus eget condimentu honemn quam semper libero sit amet adipiscing sem neque sed
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div key={index} className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-8 space-y-4">
                  <h4 className="text-lg font-display font-bold text-primary group-hover:text-[#38bdf8] transition-colors">
                    {blog.title}
                  </h4>
                  <div className="flex items-center space-x-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    <div className="flex items-center space-x-1">
                      <Award className="w-3 h-3 text-[#38bdf8]" />
                      <span>Training</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className="w-3 h-3 text-[#38bdf8]" />
                      <span>{blog.date}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-3">
                    Maecenas tempus, tellus eget condimen rhoncus sem quam semper libero sitamet adipiscing sem neque sed ipsum. Nam quam nunc blandit
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100" alt="Author" className="w-8 h-8 rounded-full object-cover" />
                      <span className="text-[10px] font-bold text-primary uppercase">Robar Son</span>
                    </div>
                    <a href="#" className="text-[10px] font-bold text-[#38bdf8] uppercase hover:text-primary transition-colors flex items-center">
                      See Details <ArrowRight className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 border-t border-gray-100">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center space-x-2 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <img src={partner.logo} alt={partner.name} className="h-8 w-auto" />
                <span className="font-display font-bold text-lg tracking-widest">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home2;
