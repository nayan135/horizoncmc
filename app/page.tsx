"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Menu,
  X,
  Users,
  Target,
  Facebook,
  Instagram,
  Linkedin,
  Calendar,
  MapPin,
  Clock,
} from "lucide-react";
import ImageWithFallback from "@/components/ImageWithFallback";
import {
  presidentData,
  teamMembers,
  advisorsData,
  projectsData,
  eventsData,
} from "@/lib/imageData";

export default function CMCClubWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="/image.png"
                alt="CMC Club Logo"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {["Home", "President", "Team", "Projects"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Home", "President", "Team", "Projects", "Events"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 w-full text-left"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50/90 to-orange-100/90"
      >
        {/* Background with curved design */}
        <svg
          className="absolute bottom-0 left-0 w-full h-64 z-10"
          viewBox="0 0 1200 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,186.7C960,192,1056,160,1152,138.7C1200,117,1248,107,1296,112C1344,117,1392,139,1440,154.7L1488,170.7L1488,320L1440,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="#E86E1C"
            fillOpacity="0.1"
          />
        </svg>

        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Welcome to the <span className="text-orange-600">CMC Club</span> of
            NHC
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 animate-fade-in-delay">
            Driving Innovation, Building Tomorrow
          </p>
          <button
            onClick={() => scrollToSection("president")}
            className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Explore More
            <ChevronDown className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* President Section */}
      <section id="president" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-orange-600">President</span>
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <ImageWithFallback
                    src={presidentData.image}
                    alt={presidentData.name}
                    width={400}
                    height={400}
                    className="h-64 md:h-full w-full"
                    fallbackIcon={<Users className="w-16 h-16 text-white" />}
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {presidentData.name}
                  </h3>
                  <p className="text-orange-600 font-semibold mb-4">
                    {presidentData.title}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {presidentData.description}
                  </p>
                  <div className="flex items-center text-orange-600 mb-4">
                    <Target className="w-5 h-5 mr-2" />
                    <span className="font-semibold">
                      Vision: {presidentData.vision}
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={presidentData.social?.facebook || "#"}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href={presidentData.social?.instagram || "#"}
                      className="text-pink-600 hover:text-pink-800 transition-colors"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href={presidentData.social?.linkedin || "#"}
                      className="text-blue-700 hover:text-blue-900 transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background wave */}
        <svg
          className="absolute top-0 left-0 w-full h-32"
          viewBox="0 0 1200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1200,85,1248,75,1296,69.3C1344,64,1392,64,1440,69.3L1488,75L1488,0L1440,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            fill="#E86E1C"
            fillOpacity="0.1"
          />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Amazing <span className="text-orange-600">Team</span>
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group h-80"
              >
                <div className="w-full h-48 relative overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                    fallbackIcon={<Users className="w-12 h-12 text-white" />}
                  />
                </div>
                <div className="p-6 text-center h-32 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-orange-600 font-medium text-sm mb-4">
                      {member.role}
                    </p>
                  </div>
                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.social?.facebook || "#"}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href={member.social?.instagram || "#"}
                      className="text-pink-600 hover:text-pink-800 transition-colors"
                    >
                      <Instagram size={18} />
                    </a>
                    <a
                      href={member.social?.linkedin || "#"}
                      className="text-blue-700 hover:text-blue-900 transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section id="advisors" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Trusted <span className="text-orange-600">Advisors</span>
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisorsData.map((advisor, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group h-80"
              >
                <div className="w-full h-48 relative overflow-hidden">
                  <ImageWithFallback
                    src={advisor.image}
                    alt={advisor.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                    fallbackIcon={<Users className="w-12 h-12 text-white" />}
                  />
                </div>
                <div className="p-6 text-center h-32 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {advisor.name}
                    </h3>
                    <p className="text-orange-600 font-medium text-sm mb-4">
                      {advisor.role}
                    </p>
                  </div>
                  <div className="flex justify-center space-x-3">
                    <a
                      href={advisor.social?.facebook || "#"}
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href={advisor.social?.instagram || "#"}
                      className="text-pink-600 hover:text-pink-800 transition-colors"
                    >
                      <Instagram size={18} />
                    </a>
                    <a
                      href={advisor.social?.linkedin || "#"}
                      className="text-blue-700 hover:text-blue-900 transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Projects We're <span className="text-orange-600">Proud Of</span>
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                    fallbackIcon={<Target className="w-12 h-12 text-white" />}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-orange-100 text-orange-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section - Commented out for now */}
      {/* 
      <section
        id="events"
        className="py-20 bg-gray-50 relative overflow-hidden"
      >
        <svg
          className="absolute top-0 left-0 w-full h-32"
          viewBox="0 0 1200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,85.3C1200,85,1248,75,1296,69.3C1344,64,1392,64,1440,69.3L1488,75L1488,0L1440,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            fill="#E86E1C"
            fillOpacity="0.1"
          />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Upcoming <span className="text-orange-600">Events</span>
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6">
              Join us for exciting events and workshops
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventsData.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={300}
                    className="w-full h-48 group-hover:scale-105 transition-transform duration-300"
                    fallbackIcon={<Calendar className="w-12 h-12 text-white" />}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 mr-2 text-orange-600" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock className="w-4 h-4 mr-2 text-orange-600" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-orange-600" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {event.description}
                  </p>
                  <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors font-medium">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Image
                src="/image.png"
                alt="CMC Club Logo"
                width={120}
                height={60}
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-400 mb-4">
                Driving innovation and building tomorrow through collaborative
                excellence at New Horizon College.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/naranbhusal02"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://instagram.com/naranbhusal02"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/naranbhusal02"
                  className="text-gray-400 hover:text-blue-300 transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "President", "Team", "Projects", "Events"].map(
                  (item) => (
                    <li key={item}>
                      <button
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className="text-gray-400 hover:text-orange-400 transition-colors cursor-pointer text-left"
                      >
                        {item}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>New Horizon College, Butwal</span>
                </div>
                <div className="text-gray-400">
                  <span>cmcnewhorizon.edu@gmail.com</span>
                </div>
                <div className="text-gray-400">
                  <span>(+977) 9767044005</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 CMC Club of NHC. Developed by{" "}
              <a
                href="https://naranbhusal02.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                Narayan Bhusal 
              </a>
              <a
                href="https://nayan135.com.np"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-400 transition-colors"
              >
                NAYAN ACHARYA
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
