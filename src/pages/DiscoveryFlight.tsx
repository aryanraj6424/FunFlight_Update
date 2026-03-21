import React from "react";
import { useNavigate } from "react-router-dom";

const DiscoveryFlight = () => {


const navigate = useNavigate();


const features = [
"Preflight briefing with a Certified Flight Instructor",
"Hands-on time at the aircraft controls",
"Introduction to basic flight maneuvers",
"Complimentary pilot logbook",
"Certificate of First Flight"
];

const packages = [
{
title: "30 Minute Discovery Flight",
price: "$100",
desc: "Perfect introduction to aviation and a great way to experience flying for the first time."
},
{
title: "1 Hour Discovery Flight",
price: "$200",
desc: "Enjoy more time in the air and get a deeper introduction to real flight training."
}
];

return (

<div className="bg-white">

{/* HERO */}

<section className="relative h-[450px] flex items-center justify-center overflow-hidden">

<div
className="absolute inset-0 bg-cover bg-center"
style={{ backgroundImage: `url('/banner-img.png')` }}
>

<div className="absolute inset-0 bg-black/60"></div>

</div>

<div className="container relative z-10 text-center text-white">

<h1 className="text-5xl lg:text-6xl font-serif font-bold mb-4 text-white">
Discovery Flight
</h1>

<div className="flex justify-center items-center space-x-2 text-xs uppercase tracking-[0.2em] font-bold">

<a href="/" className="hover:text-[#38bdf8] transition-colors">
HOME
</a>

<span className="text-gray-400">/</span>

<span className="text-white">DISCOVERY FLIGHT</span>

</div>

</div>

{/* CURVED CUT */}

<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">

<svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] fill-white">

<path d="M0,0V120H1200V0C1200,0,900,100,600,100S0,0,0,0Z"></path>

</svg>

</div>

</section>


{/* INTRO */}

<section className="py-24">

<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div>

<img
src="./discoveryflight.png"
alt="Piper Archer Training Aircraft"
className="rounded-lg shadow-xl"
/>

</div>

<div className="space-y-6">

<h2 className="text-4xl font-serif font-bold text-[#002147]">
Experience Your First Flight
</h2>

<p className="text-gray-600 leading-relaxed">
A Discovery Flight is the perfect way to experience aviation for the
first time. You will fly with one of our Certified Flight Instructors
and get the opportunity to take the controls of a real training
aircraft like the Cessna 172 or Piper Archer.
</p>

<ul className="space-y-3">

{features.map((item, i) => (

<li key={i} className="flex items-start text-gray-600">

<span className="w-2 h-2 mt-2 bg-[#38bdf8] rounded-full mr-3"></span>

{item}

</li>

))}

</ul>

</div>

</div>

</section>


{/* PACKAGES */}

<section className="py-24 bg-gray-50">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-center text-4xl font-serif font-bold text-[#002147] mb-16">
Discovery Flight Packages
</h2>

<div className="grid md:grid-cols-2 gap-10">

{packages.map((pkg, i) => (

<div
key={i}
className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition text-center"
>

<h3 className="text-2xl font-serif font-bold text-[#002147] mb-4">
{pkg.title}
</h3>

<div className="text-5xl font-bold text-[#38bdf8] mb-4">
{pkg.price}
</div>

<p className="text-gray-600 mb-6">
{pkg.desc}
</p>

<button 
onClick={() => navigate("/contact")}
className="bg-[#38bdf8] text-white px-8 py-3 font-bold text-sm uppercase tracking-wider hover:bg-[#002147] transition">
Book Your Flight
</button>

</div>

))}

</div>

</div>

</section>


{/* GIFT CERTIFICATE */}

<section className="py-24">

<div className="max-w-5xl mx-auto text-center px-6">

<h2 className="text-4xl font-serif font-bold text-[#002147] mb-6">
Discovery Flight Gift Certificates
</h2>

<p className="text-gray-600 text-lg leading-relaxed">
Looking for a unique and unforgettable gift? Discovery Flight Gift
Certificates are available and make the perfect present for birthdays,
holidays, graduations, or anyone interested in aviation. Give someone
the chance to experience the thrill of flying an aircraft.
</p>

<button 
onClick={() => navigate("/contact")}
className="mt-8 bg-[#38bdf8] text-white px-10 py-4 font-bold uppercase text-sm tracking-wider hover:bg-[#002147] transition">
Purchase Gift Certificate
</button>

</div>

</section>

</div>

);

};

export default DiscoveryFlight;