import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { FaCode, FaShareAlt, FaVideo, FaPen, FaLanguage, FaBook, FaFeather } from 'react-icons/fa';
import Header from './Header';
export default function Services() {
  const compRef = useRef();

  useEffect(() => {
    const elements = compRef.current.querySelectorAll('.service-card');
    gsap.fromTo(elements, 
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      }
    );
  }, []);

  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'We create modern, responsive, and user-friendly websites using cutting-edge technologies like React, Node.js, and more.',
      icon: <FaCode />
    },
    {
      id: 2,
      title: 'Social Media Marketing',
      description: 'Strategic social media management to boost your brand presence and engage with your target audience effectively.',
      icon: <FaShareAlt />
    },
    {
      id: 3,
      title: 'Video Editing',
      description: 'Professional video editing services to create compelling visual content that tells your story and captures attention.',
      icon: <FaVideo />
    },
    {
      id: 4,
      title: 'Content Writing',
      description: 'Expert content creation that drives engagement, improves SEO, and communicates your message clearly.',
      icon: <FaPen />
    },
    {
      id: 5,
      title: 'Translation & Transcription',
      description: 'Accurate translation and transcription services in multiple languages to help you reach a global audience.',
      icon: <FaLanguage />
    },
    {
      id: 6,
      title: 'Technical Writing',
      description: 'Clear and concise technical documentation, user guides, and API documentation for your software products.',
      icon: <FaBook />
    },
    {
      id: 7,
      title: 'Story Telling',
      description: 'Compelling storytelling that connects with your audience and brings your brand narrative to life.',
      icon: <FaFeather />
    }
  ];
   
  return (
    <>
    <Header/>
    <div ref={compRef} className="min-h-screen py-16 px-4" >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-purple-400 mb-2">Our Services</h1>
        <h2 className="text-2xl text-center text-green-600 mb-12">Explore what we can do for you!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" >
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-card rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative"
            >
              <div className="text-4xl text-green-600 mb-4 relative">{service.icon}</div>
              <h2 className="text-xl font-semibold text-gray-100 mb-3">{service.title}</h2>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
</>  );
}