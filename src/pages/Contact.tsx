// import React from 'react';
// import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

// const Contact = () => {
//   return (
//     <div>
//       {/* Breadcrumb */}
//       <section className="py-20 bg-primary text-white relative overflow-hidden">
//         <div className="absolute inset-0 opacity-20">
//           <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1920" alt="bg" className="w-full h-full object-cover" />
//         </div>
//         <div className="container relative z-10 text-center">
//           <h1 className="text-4xl lg:text-6xl font-display font-bold mb-4">Contact Us</h1>
//           <div className="flex justify-center items-center space-x-2 text-sm uppercase tracking-widest font-bold">
//             <a href="/" className="text-secondary">Home</a>
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
//               { icon: Phone, title: "Phone Number", info: "+123 456 7890", subInfo: "Mon - Fri: 9am - 6pm" },
//               { icon: Mail, title: "Email Address", info: "info@viserfly.com", subInfo: "support@viserfly.com" },
//               { icon: MapPin, title: "Our Location", info: "123 Aviation Way", subInfo: "Sky City, SC 12345" },
//             ].map((item, index) => (
//               <div key={index} className="bg-white p-10 rounded-2xl text-center shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
//                 <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
//                   <item.icon className="w-8 h-8" />
//                 </div>
//                 <h3 className="text-xl font-display font-bold mb-4">{item.title}</h3>
//                 <p className="text-primary font-bold mb-1">{item.info}</p>
//                 <p className="text-gray-500 text-sm">{item.subInfo}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Form & Map */}
//       <section className="section-padding bg-gray-50">
//         <div className="container">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//             <div className="bg-white p-10 rounded-2xl shadow-xl">
//               <div className="mb-10">
//                 <h2 className="text-3xl font-display font-extrabold mb-4">Send Us a Message</h2>
//                 <p className="text-gray-500">Have questions? Feel free to reach out to us using the form below.</p>
//               </div>
//               <form className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <label className="text-sm font-bold text-primary uppercase tracking-widest">Full Name</label>
//                     <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-lg py-4 px-6 focus:outline-none focus:border-secondary transition-colors" />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-bold text-primary uppercase tracking-widest">Email Address</label>
//                     <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-lg py-4 px-6 focus:outline-none focus:border-secondary transition-colors" />
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-2">
//                     <label className="text-sm font-bold text-primary uppercase tracking-widest">Phone Number</label>
//                     <input type="text" placeholder="+123 456 7890" className="w-full bg-gray-50 border border-gray-200 rounded-lg py-4 px-6 focus:outline-none focus:border-secondary transition-colors" />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-sm font-bold text-primary uppercase tracking-widest">Subject</label>
//                     <input type="text" placeholder="Inquiry about PPL" className="w-full bg-gray-50 border border-gray-200 rounded-lg py-4 px-6 focus:outline-none focus:border-secondary transition-colors" />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-bold text-primary uppercase tracking-widest">Your Message</label>
//                   <textarea rows={5} placeholder="How can we help you?" className="w-full bg-gray-50 border border-gray-200 rounded-lg py-4 px-6 focus:outline-none focus:border-secondary transition-colors resize-none"></textarea>
//                 </div>
//                 <button className="btn-primary w-full">
//                   <Send className="w-5 h-5 mr-2" />
//                   Send Message
//                 </button>
//               </form>
//             </div>
//             <div className="space-y-10">
//               <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] bg-gray-200">
//                 {/* Placeholder for Google Map */}
//                 <div className="w-full h-full flex items-center justify-center text-gray-400">
//                   <div className="text-center">
//                     <MapPin className="w-12 h-12 mx-auto mb-4 opacity-20" />
//                     <p>Interactive Map Placeholder</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-primary p-10 rounded-2xl text-white">
//                 <h3 className="text-2xl font-display font-bold mb-6">Connect With Us</h3>
//                 <p className="text-gray-400 mb-8">Follow us on social media to stay updated with the latest news and events from ViserFly.</p>
//                 <div className="flex space-x-4">
//                   <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
//                     <Facebook className="w-5 h-5" />
//                   </a>
//                   <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
//                     <Twitter className="w-5 h-5" />
//                   </a>
//                   <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
//                     <Instagram className="w-5 h-5" />
//                   </a>
//                   <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
//                     <Linkedin className="w-5 h-5" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;





import React from 'react';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div>

      {/* Breadcrumb */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1920" alt="bg" className="w-full h-full object-cover" />
        </div>

        <div className="container relative z-10 text-center">
          <h1 className="text-4xl lg:text-6xl font-display font-bold mb-4 text-white">Contact Us</h1>

          <div className="flex justify-center items-center space-x-2 text-sm uppercase tracking-widest font-bold">
            <a href="/" className="text-secondary">Home</a>
            <span className="text-gray-400">/</span>
            <span>Contact Us</span>
          </div>
        </div>
      </section>


      {/* Contact Info Cards */}
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
              <p className="text-gray-500 text-sm">Available on WhatsApp</p>
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

              <p className="text-primary font-bold mb-1">
                450 S Airport Rd
              </p>

              <p className="text-gray-500 text-sm">
                Lake Wales, FL 33859 (Airport X07)
              </p>
            </div>

          </div>

        </div>
      </section>



      {/* Contact Form & Map */}
      <section className="section-padding bg-gray-50">
        <div className="container">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">


            {/* Contact Form */}
            <div className="bg-white p-10 rounded-2xl shadow-xl">

              <div className="mb-10">
                <h2 className="text-3xl font-display font-extrabold mb-4">
                  Send Us a Message
                </h2>

                <p className="text-gray-500">
                  Have questions about pilot training? Contact FunFlight Training.
                </p>
              </div>


              <form className="space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-widest">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg py-4 px-6 focus:outline-none focus:border-secondary"
                    />
                  </div>


                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-widest">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg py-4 px-6 focus:outline-none focus:border-secondary"
                    />
                  </div>

                </div>



                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-widest">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      placeholder="1-863-270-5572"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg py-4 px-6 focus:outline-none focus:border-secondary"
                    />
                  </div>


                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-widest">
                      Subject
                    </label>

                    <input
                      type="text"
                      placeholder="Flight Training Inquiry"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg py-4 px-6 focus:outline-none focus:border-secondary"
                    />
                  </div>

                </div>



                <div className="space-y-2">

                  <label className="text-sm font-bold text-primary uppercase tracking-widest">
                    Your Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="How can we help you?"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg py-4 px-6 focus:outline-none focus:border-secondary resize-none"
                  ></textarea>

                </div>


                <button className="btn-primary w-full flex items-center justify-center">

                  <Send className="w-5 h-5 mr-2"/>

                  Send Message

                </button>

              </form>

            </div>



            {/* Map + Hours */}
            <div className="space-y-10">

              {/* Google Map */}
              <div className="rounded-2xl overflow-hidden shadow-xl h-[400px]">

                <iframe
                  src="https://maps.google.com/maps?q=Fun%20Flight%20Training%20450%20S%20Airport%20Rd%20Lake%20Wales&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border:0 }}
                  loading="lazy"
                ></iframe>

              </div>



              {/* Business Hours */}
              <div className="bg-primary p-10 rounded-2xl text-white">

                <h3 className="text-2xl font-display font-bold mb-6">
                  Business Hours
                </h3>

                <div className="space-y-2 text-gray-300">

                  <p>Mon – Fri : 07:00 am – 07:00 pm</p>
                  <p>Saturday : 08:00 am – 07:00 pm</p>
                  <p>Sunday : 08:00 am – 05:00 pm</p>

                </div>

                <p className="mt-6 text-gray-400 text-sm">
                  Located at Lake Wales Airport (X07)
                </p>

              </div>

            </div>


          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;