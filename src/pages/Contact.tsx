// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState('');

//   const API_ENDPOINT = 'http://localhost/funFlight-main (2)/funFlight-main/admin/api-contacts.php';

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus('');

//     try {
//       console.log('Submitting form:', formData);
//       console.log('API endpoint:', API_ENDPOINT);
      
//       const response = await fetch(API_ENDPOINT, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData)
//       });

//       console.log('Response status:', response.status);
//       console.log('Response ok:', response.ok);
//       console.log('Response headers:', response.headers);

//       const responseText = await response.text();
//       console.log('Response text:', responseText);

//       if (response.ok) {
//         try {
//           const result = JSON.parse(responseText);
//           console.log('Parsed response:', result);
          
//           if (result.success) {
//             setSubmitStatus('success');
//             setFormData({ name: '', email: '', phone: '', message: '' });
//           } else {
//             setSubmitStatus('error');
//             console.error('API returned error:', result.error);
//           }
//         } catch (parseError) {
//           console.error('JSON parse error:', parseError);
//           setSubmitStatus('error');
//         }
//       } else {
//         console.error('HTTP error:', response.status, responseText);
//         setSubmitStatus('error');
//       }
//     } catch (error) {
//       console.error('Fetch error:', error);
//       console.error('Error details:', error.message);
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div>
//       {/* Breadcrumb */}
//       <section className="py-20 bg-[#0a1525] text-white relative overflow-hidden">
//         <div className="absolute inset-0 opacity-20">
//           <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1920" alt="bg" className="w-full h-full object-cover" />
//         </div>
//         <div className="container relative z-10 text-center">
//           <h1 className="text-4xl lg:text-6xl font-bold mb-4">Contact Us</h1>
//           <div className="flex justify-center items-center space-x-2 text-sm uppercase tracking-widest font-bold">
//             <a href="/" className="text-[#c5a059]">Home</a>
//             <span className="text-gray-400">/</span>
//             <span>Contact Us</span>
//           </div>
//         </div>
//       </section>

//       {/* Contact Info Cards */}
//       <section className="py-20">
//         <div className="container">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { icon: Phone, title: "Phone Number", info: "+1 (555) 123-4567", subInfo: "Mon - Fri: 9am - 6pm" },
//               { icon: Mail, title: "Email Address", info: "info@funflight.com", subInfo: "support@funflight.com" },
//               { icon: MapPin, title: "Our Location", info: "123 Aviation Way", subInfo: "Sky City, SC 12345" },
//             ].map((item, index) => (
//               <div key={index} className="bg-white p-10 rounded-2xl text-center shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
//                 <div className="w-16 h-16 bg-[#c5a059]/5 rounded-full flex items-center justify-center mx-auto mb-6 text-[#c5a059]">
//                   <item.icon className="w-8 h-8" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-4">{item.title}</h3>
//                 <p className="text-[#0a1525] font-bold mb-1">{item.info}</p>
//                 <p className="text-gray-500 text-sm">{item.subInfo}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Form */}
//       <section className="py-20 bg-gray-50">
//         <div className="container">
//           <div className="max-w-2xl mx-auto">
//             <div className="bg-white p-10 rounded-2xl shadow-xl">
//               <div className="mb-10 text-center">
//                 <h2 className="text-3xl font-extrabold mb-4">Send Us a Message</h2>
//                 <p className="text-gray-600">Have questions about flight training? Get in touch with us!</p>
//               </div>

//               {submitStatus === 'success' && (
//                 <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
//                   Thank you for your message! We'll get back to you soon.
//                 </div>
//               )}

//               {submitStatus === 'error' && (
//                 <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
//                   There was an error sending your message. Please try again.
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c5a059] focus:border-transparent"
//                       placeholder="Your Name"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c5a059] focus:border-transparent"
//                       placeholder="your@email.com"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c5a059] focus:border-transparent"
//                     placeholder="+1 (555) 123-4567"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={6}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c5a059] focus:border-transparent"
//                     placeholder="Tell us about your flight training goals..."
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-[#c5a059] text-white py-4 rounded-lg font-bold hover:bg-[#d4b068] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:scale-105 cursor-pointer"
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-5 h-5" />
//                       Send Message
//                     </>
//                   )}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Social Media */}
//       <section className="py-16 bg-[#0a1525] text-white">
//         <div className="container text-center">
//           <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
//           <div className="flex justify-center space-x-6">
//             <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c5a059] transition-colors">
//               <Facebook className="w-6 h-6" />
//             </a>
//             <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c5a059] transition-colors">
//               <Twitter className="w-6 h-6" />
//             </a>
//             <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c5a059] transition-colors">
//               <Instagram className="w-6 h-6" />
//             </a>
//             <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c5a059] transition-colors">
//               <Linkedin className="w-6 h-6" />
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  // 1. State Management (Backend integration k liye)
  const [formData, setFormData] = useState({
    name: '',       // Name required by backend
    email: '',      // Email required by backend
    phone: '',
    subject: '',    // Subject for dropdown
    message: ''     // Message required by backend
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // 'success' or 'error'

  // Aapka backend endpoint
  const API_ENDPOINT = 'http://localhost/funFlight-main (2)/funFlight-main/admin/api-contacts.php';

  // 2. Input change handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // 3. Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Data ko backend par bhej rahe hain
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const responseText = await response.text(); // Response text read kar rahe hain

      if (response.ok) {
        try {
          const result = JSON.parse(responseText);
          if (result.success) {
            setSubmitStatus('success');
            // Form reset kar rahe hain
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
          } else {
            setSubmitStatus('error');
            console.error('API Error:', result.error);
          }
        } catch (parseError) {
          console.error('JSON Parse Error:', parseError);
          setSubmitStatus('error');
        }
      } else {
        setSubmitStatus('error');
        console.error('HTTP Error:', response.status);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Fetch Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* 1. Breadcrumb - Exact Same Design */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1920" alt="bg" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl lg:text-6xl font-display font-bold mb-4 text-white">Contact Us</h1>
          <div className="flex justify-center items-center space-x-2 text-sm uppercase tracking-widest font-bold">
            <a href="/" className="text-secondary hover:text-white transition-colors">Home</a>
            <span className="text-gray-400">/</span>
            <span>Contact Us</span>
          </div>
        </div>
      </section>

      {/* 2. Contact Info Cards - Exact Same Design */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-white p-10 rounded-2xl text-center shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Phone className="w-8 h-8"/>
              </div>
              <h3 className="text-xl font-display font-bold mb-4">Phone & WhatsApp</h3>
              <p className="text-primary font-bold mb-1">1-863-270-5572</p>
              <p className="text-gray-500 text-sm">Available 8am to 5pm 7 days a week</p>
            </div>

            {/* Email */}
            <div className="bg-white p-10 rounded-2xl text-center shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <Mail className="w-8 h-8"/>
              </div>
              <h3 className="text-xl font-display font-bold mb-4">Email Address</h3>
              <p className="text-primary font-bold mb-1">info@FunFlightTraining.com</p>
              <p className="text-gray-500 text-sm">We reply within 24 hours</p>
            </div>

            {/* Location */}
            <div className="bg-white p-10 rounded-2xl text-center shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <MapPin className="w-8 h-8"/>
              </div>
              <h3 className="text-xl font-display font-bold mb-4">Our Location</h3>
              <p className="text-primary font-bold mb-1">450 S Airport Rd</p>
              <p className="text-gray-500 text-sm">Lake Wales, FL 33859 (Airport X07)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Contact Form & Map/Hours - Exact Same Layout */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form - Exact Same Design */}
            <div className="bg-white p-10 rounded-2xl shadow-xl">
              <div className="mb-10">
                <h2 className="text-3xl font-display font-extrabold mb-4">Send Us a Message</h2>
                <p className="text-gray-500">Have questions about pilot training? Contact FunFlight Training.</p>
              </div>

              {/* Feedback Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-8 font-medium">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg mb-8 font-medium">
                  Oops! Something went wrong while sending your message. Please try again.
                </div>
              )}

              {/* Submit handler added to form */}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-widest">Full Name *</label>
                    <input
                      type="text"
                      name="name" // Matches backend requirement
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg py-4 px-6 focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-widest">Email Address *</label>
                    <input
                      type="email"
                      name="email" // Matches backend requirement
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg py-4 px-6 focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-widest">Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="1-863-270-5572"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg py-4 px-6 focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-widest">Subject *</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg py-4 px-6 focus:outline-none focus:border-secondary transition-colors tracking-widest"
                    >
                      <option value="">Select Training Program</option>
                      <option value="private">Private Pilot Rating</option>
                      <option value="instrument">Instrument Rating</option>
                      <option value="commercial">Commercial Rating</option>
                      <option value="cfi">Certified Flight Instructor (CFI)</option>
                    </select> 
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary uppercase tracking-widest">Your Message *</label>
                  <textarea
                    rows={5}
                    name="message" // Matches backend requirement
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-4 px-6 focus:outline-none focus:border-secondary resize-none transition-colors"
                  ></textarea>
                </div>

                {/* Button with loading state */}
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center p-4 rounded-lg bg-primary text-white font-bold transition-all disabled:opacity-70 disabled:cursor-not-allowed hover:bg-secondary"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2"/>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map & Hours - Exact Same Design */}
            <div className="space-y-10">
              {/* Google Map */}
              <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">
                <iframe
                  src="https://maps.google.com/maps?q=Fun%20Flight%20Training%20450%20S%20Airport%20Rd%20Lake%20Wales&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border:0 }}
                  loading="lazy"
                  title="FunFlight Location Map"
                ></iframe>
              </div>

              {/* Business Hours */}
              <div className="bg-primary p-10 rounded-2xl text-white">
                <h3 className="text-2xl font-display font-bold mb-6">Business Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Mon – Fri : 07:00 am – 07:00 pm</p>
                  <p>Saturday : 08:00 am – 07:00 pm</p>
                  <p>Sunday : 08:00 am – 05:00 pm</p>
                </div>
                <p className="mt-6 text-gray-400 text-sm">Located at Lake Wales Airport (X07)</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;