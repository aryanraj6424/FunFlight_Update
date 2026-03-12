import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Star, Plus, Minus, User, MessageSquare } from 'lucide-react';

const FAQ = () => {
  const [activeFaq1, setActiveFaq1] = useState<number | null>(0);
  const [activeFaq2Left, setActiveFaq2Left] = useState<number | null>(0);
  const [activeFaq2Right, setActiveFaq2Right] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState('All');

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

  const stats = [
    { label: "Total Staffs", value: "80+" },
    { label: "Winning Awards", value: "195" },
    { label: "Happy Students", value: "895" },
    { label: "Total Courses", value: "100+" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1506012733851-bb0755184526?auto=format&fit=crop&q=80&w=1920')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-4">FAQ</h1>
          <div className="flex justify-center items-center space-x-2 text-xs uppercase tracking-[0.2em] font-bold">
            <a href="/" className="hover:text-[#38bdf8] transition-colors">HOME</a>
            <span className="text-gray-400">/</span>
            <span className="text-white">FAQ</span>
          </div>
        </div>
        {/* Curved Cutout (Convex) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] fill-white">
            <path d="M0,0V120H1200V0C1200,0,900,100,600,100S0,0,0,0Z"></path>
          </svg>
        </div>
      </section>

      {/* FAQ Section 1 (Single Column) */}
      <section className="py-24">
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
                    onClick={() => setActiveFaq1(activeFaq1 === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-serif font-bold text-[#002147]">{faq.question}</span>
                    <div className={`w-8 h-8 flex items-center justify-center rounded-sm transition-colors ${activeFaq1 === idx ? 'bg-[#38bdf8] text-white' : 'bg-gray-100 text-gray-400'}`}>
                      {activeFaq1 === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  {activeFaq1 === idx && (
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

      {/* Stats & Join Form */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-px bg-gray-200 border border-gray-200">
              {stats.map((stat, idx) => (
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

      {/* FAQ Section 2 (Two Columns) */}
      <section className="py-24">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-100 rounded-sm overflow-hidden">
                  <button
                    onClick={() => setActiveFaq2Left(activeFaq2Left === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-serif font-bold text-[#002147]">{faq.question}</span>
                    <div className={`w-8 h-8 flex items-center justify-center rounded-sm transition-colors ${activeFaq2Left === idx ? 'bg-[#38bdf8] text-white' : 'bg-gray-100 text-gray-400'}`}>
                      {activeFaq2Left === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  {activeFaq2Left === idx && (
                    <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-6">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border border-gray-100 rounded-sm overflow-hidden">
                  <button
                    onClick={() => setActiveFaq2Right(activeFaq2Right === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-serif font-bold text-[#002147]">{faq.question}</span>
                    <div className={`w-8 h-8 flex items-center justify-center rounded-sm transition-colors ${activeFaq2Right === idx ? 'bg-[#38bdf8] text-white' : 'bg-gray-100 text-gray-400'}`}>
                      {activeFaq2Right === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  {activeFaq2Right === idx && (
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
                  <span className="font-display font-extrabold text-2xl tracking-tighter text-white">VISERFLY</span>
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

export default FAQ;
