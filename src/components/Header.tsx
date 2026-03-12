import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Search,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronDown,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Home",
      path: "/",
      // dropdown: [
      //   { name: "Home 1", path: "/" },
      //   { name: "Home 2", path: "/home-2" },
      // ],
    },
    {
      name: "Courses",
      path: "/courses",
      // dropdown: [
      //   { name: "Courses", path: "/courses" },
      //   { name: "Courses Details", path: "/course-details" },
      // ],
    },
    {
      name: "About Us",
     path: "/about",
      // dropdown: [
      //   { name: "About", path: "/about" },
      //   { name: "FAQ", path: "/faq" },
      //   { name: "Gallery", path: "/gallery" },
      //   { name: "Become Pilot", path: "/become-pilot" },
      // ],
    },
    {
      name: "Trainer",
      path: "/trainers",
      // dropdown: [
      //   { name: "Trainer", path: "/trainers" },
      //   { name: "Trainer Details", path: "/trainer-details" },
      // ],
    },
    // {
    //   name: "Pages",
    //   path: "#",
    //   dropdown: [
    //     { name: "About", path: "/about" },
    //     { name: "FAQ", path: "/faq" },
    //     { name: "Gallery", path: "/gallery" },
    //     { name: "Become Pilot", path: "/become-pilot" },
    //     { name: "Contact", path: "/contact" },
    //     { name: "404", path: "/404" },
    //   ],
    // },
    {
      name: "Blog",
      path: "/blog",
      // dropdown: [
      //   { name: "Blog Post", path: "/blog" },
      //   { name: "Classic Blog", path: "/classic-blog" },
      //   { name: "Blog Details", path: "/blog-details" },
      // ],
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Contact Us",
      path: "/contact",
      // dropdown: [
      //   { name: "Event", path: "/events" },
      //   { name: "Event Details", path: "/event-details" },
      // ],
    },
  ];

  const isTransparentPage = [
    "/",
    "/home-2",
    "/courses",
    "/course-details",
    "/trainers",
    "/trainer-details",
    "/about",
    "/faq",
    "/gallery",
  ].includes(location.pathname);

  return (
    <header className="w-full">
      {/* Top Bar */}
      {/* <div
        className={cn(
          "bg-primary text-white py-2 hidden lg:block transition-all duration-300",
          isScrolled && "opacity-0 h-0 overflow-hidden",
        )}
      >
        <div className="container flex justify-between items-center text-xs font-medium">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Phone className="w-3 h-3 mr-2 text-secondary" />
              <span>+123 456 7890</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-3 h-3 mr-2 text-secondary" />
              <span>info@viserfly.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-3 h-3 mr-2 text-secondary" />
              <span>123 Aviation Way, Sky City</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-secondary transition-colors">
              <Facebook className="w-3 h-3" />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <Twitter className="w-3 h-3" />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <Instagram className="w-3 h-3" />
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              <Linkedin className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div> */}

      {/* Main Navigation */}
      <nav
        className={cn(
          "w-full z-50 transition-all duration-300",
          isScrolled
            ? "fixed top-0 left-0 bg-white shadow-md py-3"
            : isTransparentPage
              ? "absolute top-auto left-0 bg-transparent py-6 text-white"
              : "relative bg-white py-5",
        )}
      >
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/favicon.png"
              alt="ViserFly Logo"
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={cn(
                    "font-bold uppercase text-sm tracking-widest transition-colors flex items-center",
                    !isScrolled && isTransparentPage
                      ? "text-white hover:text-secondary"
                      : "text-primary hover:text-secondary",
                    location.pathname === link.path && "text-secondary",
                  )}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                </Link>

                {link.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-t-2 border-secondary">
                    {link.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-3 text-sm text-primary hover:bg-gray-50 hover:text-secondary transition-colors border-b border-gray-100 last:border-0"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* <div
              className={cn(
                "relative flex items-center rounded-full px-4 py-2",
                !isScrolled && isTransparentPage
                  ? "bg-white/10"
                  : "bg-gray-100",
              )}
            >
              <input
                type="text"
                placeholder="Search..."
                className={cn(
                  "bg-transparent border-none focus:outline-none text-sm w-32 focus:w-48 transition-all duration-300",
                  !isScrolled && isTransparentPage
                    ? "text-white placeholder:text-white/60"
                    : "text-primary",
                )}
              />
              <Search
                className={cn(
                  "w-4 h-4 ml-2 cursor-pointer",
                  !isScrolled && isTransparentPage
                    ? "text-white"
                    : "text-primary",
                )}
              />
            </div> */}
            <Link to="/contact" className="btn-primary py-3 px-6 text-xs">
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "lg:hidden",
              !isScrolled && isTransparentPage ? "text-white" : "text-primary",
            )}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-primary/95 z-[100] transition-transform duration-500 lg:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="p-6 flex flex-col h-full">
          {/* <div className="flex justify-between items-center mb-12">
            <div className="text-white font-display text-2xl font-extrabold tracking-tighter">
              VISER<span className="text-secondary">FLY</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white"
            >
              <X className="w-8 h-8" />
            </button>
          </div> */}
          {/* <Link to="/" className="flex items-center">
            <img
              src="/favicon.png"
              alt="ViserFly Logo"
              className="h-20 w-auto "
            />
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white "
            >
              <X className="w-8 h-8 " />
            </button>
          </Link> */}

          <div className="flex items-center justify-between w-full p-4">
  {/* Logo Left Side */}
  <Link to="/" className="flex items-center">
    <img
      src="/favicon.png"
      alt="ViserFly Logo"
      className="h-20 w-auto"
    />
  </Link>

  {/* Close Button Right Side */}
  <button
    onClick={() => setIsMobileMenuOpen(false)}
    className="text-white"
  >
    <X className="w-8 h-8" />
  </button>
</div>

          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  className="text-white text-xl font-bold uppercase tracking-widest hover:text-secondary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="mt-4 ml-4 flex flex-col space-y-3">
                    {link.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="text-gray-300 text-sm hover:text-secondary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8">
            {/* <div className="relative flex items-center bg-white/10 rounded-full px-4 py-3 mb-6">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none focus:outline-none text-sm text-white w-full"
              />
              <Search className="w-5 h-5 text-white ml-2 cursor-pointer" />
            </div> */}
            <Link
              to="/contact"
              className="btn-primary w-full py-4 text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Register Now
            </Link>
          </div>

          <div className="mt-auto pt-12 border-t border-white/10">
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:border-secondary transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
