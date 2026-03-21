

// import React from "react";

// const Courses = () => {

// const courses = [
// {
// id: 1,
// title: "Private Pilot Rating",
// description:
// "The Private Pilot Certificate is the first major step in becoming a professional pilot. This course teaches the fundamental skills needed to safely operate an aircraft.",
// requirements: [
// "Minimum 40 hours total flight time",
// "20 hours dual flight instruction",
// "10 hours solo flight",
// "Hold a valid medical certificate",
// "Pass FAA Private Pilot knowledge test",
// "Pass FAA checkride"
// ],
// image: "/course-img-1.png",
// },
// {
// id: 2,
// title: "Instrument Rating",
// description:
// "The instrument rating allows pilots to fly in reduced visibility by relying on aircraft instruments instead of outside visual references.",
// requirements: [
// "Hold a Private Pilot certificate",
// "50 hours cross country flight time as PIC",
// "40 hours simulated or actual instrument time",
// "Pass FAA Instrument knowledge test",
// "Pass FAA checkride"
// ],
// image: "/course-img-2.png",
// },
// {
// id: 3,
// title: "Commercial Rating",
// description:
// "The Commercial Pilot Rating allows pilots to be compensated for flying and focuses on advanced aircraft maneuvers and flight planning.",
// requirements: [
// "Hold a Private Pilot certificate",
// "250 hours total flight time",
// "100 hours as pilot in command",
// "50 hours cross country flight",
// "Pass FAA Commercial Pilot knowledge test",
// "Pass FAA checkride"
// ],
// image: "/course-img-3.png",
// },
// {
// id: 4,
// title: "Certified Flight Instructor (CFI)",
// description:
// "This certificate allows pilots to teach others while building valuable flight hours toward airline careers.",
// requirements: [
// "Hold Instrument & Commercial certificates",
// "Pass FAA Fundamentals of Instruction test",
// "Pass FAA Instructor knowledge test",
// "Pass FAA practical test"
// ],
// image: "/course-img-4.png",
// },
// {
// id: 5,
// title: "Certified Flight Instructor – Instrument (CFII)",
// description:
// "This certificate allows flight instructors to teach instrument flying and expand career opportunities.",
// requirements: [
// "Hold a Certified Flight Instructor certificate",
// "Pass FAA Instrument Flight Instructor test",
// "Pass FAA CFII checkride"
// ],
// image: "/gal-2.png",
// }
// ];

// return (
// <div className="bg-white">

// {/* HERO SECTION (UNCHANGED) */}

// <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
// <div
// className="absolute inset-0 bg-cover bg-center"
// style={{ backgroundImage: `url('/banner-img.png')` }}
// >
// <div className="absolute inset-0 bg-black/60"></div>
// </div>

// <div className="container relative z-10 text-center text-white">
// <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-4 text-white">
// Training Courses
// </h1>

// <div className="flex justify-center items-center space-x-2 text-xs uppercase tracking-[0.2em] font-bold">
// <a href="/" className="hover:text-[#38bdf8] transition-colors">
// HOME
// </a>
// <span className="text-gray-400">/</span>
// <span className="text-white">COURSES</span>
// </div>
// </div>

// {/* Curved Cutout */}

// <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
// <svg
// viewBox="0 0 1200 120"
// preserveAspectRatio="none"
// className="relative block w-full h-[80px] fill-white"
// >
// <path d="M0,0V120H1200V0C1200,0,900,100,600,100S0,0,0,0Z"></path>
// </svg>
// </div>
// </section>

// {/* COURSES */}

// <section className="py-24 bg-gray-50">

// <div className="max-w-7xl mx-auto px-6">

// <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

// {courses.map((course) => (

// <div
// key={course.id}
// className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-500 group"
// >

// {/* IMAGE */}

// <div className="h-[220px] overflow-hidden">
// <img
// src={course.image}
// alt={course.title}
// className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
// />
// </div>

// {/* CONTENT */}

// <div className="p-6">

// <h3 className="text-xl font-serif font-bold text-[#002147] mb-3">
// {course.title}
// </h3>

// <p className="text-gray-500 text-sm leading-relaxed mb-5">
// {course.description}
// </p>

// <ul className="space-y-2">

// {course.requirements.map((req, idx) => (

// <li
// key={idx}
// className="flex items-start text-gray-600 text-sm"
// >

// <span className="w-2 h-2 mt-2 bg-[#38bdf8] rounded-full mr-3"></span>

// {req}

// </li>

// ))}

// </ul>

// 	{/* BOOK THIS COURSE BUTTON */}
// 	<div className="mt-8">
// 		<button
// 			className="w-full bg-[#002147] hover:bg-[#01152e] text-white font-bold py-3 rounded-lg shadow transition-colors duration-300"
// 			type="button"
// 		>
// 			BOOK THIS COURSE
// 		</button>
// 	</div>

// </div>

// </div>

// ))}

// </div>

// </div>

// </section>

// </div>
// );
// };

// export default Courses;




import React from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Private Pilot Rating",
      description:
        "The Private Pilot Certificate is the first major step in becoming a professional pilot. This course teaches the fundamental skills needed to safely operate an aircraft.",
      requirements: [
        "Minimum 40 hours total flight time",
        "20 hours dual flight instruction",
        "10 hours solo flight",
        "Hold a valid medical certificate",
        "Pass FAA Private Pilot knowledge test",
        "Pass FAA checkride",
      ],
      image: "/course-img-1.png",
    },
    {
      id: 2,
      title: "Instrument Rating",
      description:
        "The instrument rating allows pilots to fly in reduced visibility by relying on aircraft instruments instead of outside visual references.",
      requirements: [
        "Hold a Private Pilot certificate",
        "50 hours cross country flight time as PIC",
        "40 hours simulated or actual instrument time",
        "Pass FAA Instrument knowledge test",
        "Pass FAA checkride",
      ],
      image: "/course-img-2.png",
    },
    {
      id: 3,
      title: "Commercial Rating",
      description:
        "The Commercial Pilot Rating allows pilots to be compensated for flying and focuses on advanced aircraft maneuvers and flight planning.",
      requirements: [
        "Hold a Private Pilot certificate",
        "250 hours total flight time",
        "100 hours as pilot in command",
        "50 hours cross country flight",
        "Pass FAA Commercial Pilot knowledge test",
        "Pass FAA checkride",
      ],
      image: "/course-img-3.png",
    },
    {
      id: 4,
      title: "Certified Flight Instructor (CFI)",
      description:
        "This certificate allows pilots to teach others while building valuable flight hours toward airline careers.",
      requirements: [
        "Hold Instrument & Commercial certificates",
        "Pass FAA Fundamentals of Instruction test",
        "Pass FAA Instructor knowledge test",
        "Pass FAA practical test",
      ],
      image: "/course-img-4.png",
    },
    {
      id: 5,
      title: "Certified Flight Instructor – Instrument (CFII)",
      description:
        "This certificate allows flight instructors to teach instrument flying and expand career opportunities.",
      requirements: [
        "Hold a Certified Flight Instructor certificate",
        "Pass FAA Instrument Flight Instructor test",
        "Pass FAA CFII checkride",
      ],
      image: "/gal-2.png",
    },
  ];

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/banner-img.png')` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="container relative z-10 text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-4 text-white">
            Training Courses
          </h1>

          <div className="flex justify-center items-center space-x-2 text-xs uppercase tracking-[0.2em] font-bold">
            <Link to="/" className="hover:text-[#38bdf8] transition-colors">
              HOME
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-white">COURSES</span>
          </div>
        </div>

        {/* Curved Cutout */}
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

      {/* COURSES SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-500 group flex flex-col h-full"
              >
                {/* IMAGE */}
                <div className="h-[220px] overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-serif font-bold text-[#002147] mb-3">
                    {course.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    {course.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {course.requirements.map((req, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-gray-600 text-sm"
                      >
                        <span className="w-2 h-2 mt-2 bg-[#38bdf8] rounded-full mr-3 shrink-0"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BOOK NOW BUTTON - Pushed to bottom by mt-auto */}
                <div className="px-6 pb-8 mt-auto">
                  <Link
                    to="/contact"
                    className="block w-full text-center bg-[#002147] text-white py-3 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-[#38bdf8] transition-colors duration-300 shadow-sm"
                  >
                    Book This Course
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;