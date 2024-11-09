"use client"

/* eslint-disable react/no-unescaped-entities */
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Send } from 'lucide-react';

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl font-bold text-white">Portfolio</span>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
          
          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
       
      </div>
    </nav>
  );
};

// Home Section
const Home = () => (
  <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 pt-16">
    <div className="max-w-6xl mx-auto px-4 py-16 text-center">
      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Huzaifa Aziz</h1>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
        Passionate about creating beautiful and functional applications using Flutter, React,
        Laravel, and more.
      </p>
      <div className="flex justify-center gap-4">
        <a 
          href="#contact" 
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          Get in Touch
        </a>
        <a 
          href="#about" 
          className="px-6 py-3 border border-gray-600 hover:border-gray-500 text-white rounded-lg transition-colors"
        >
          Learn More
        </a>
      </div>
    </div>
  </section>
);

// About Section
const About = () => (
  <section id="about" className="min-h-screen bg-gray-800 py-16">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
      
      <div className="bg-gray-700/50 rounded-xl p-8 mb-12">
        <p className="text-gray-300 leading-relaxed mb-4">
          I'm a Computer Science student passionate about software development. My journey in 
          programming has led me to explore various technologies and frameworks, allowing me 
          to build both web and mobile applications.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Currently focusing on full-stack development, I enjoy working with modern technologies 
          and am always eager to learn more.
        </p>
      </div>

      <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
        {[
          "Flutter",
          "React",
          "Laravel",
          "PHP",
          "HTML/CSS",
          "JavaScript",
          "TypeScript",
          "C#",
          ".NET",
          "MySQL",
          "MS SQL",
          "MongoDB"
        ].map((skill) => (
          <div 
            key={skill}
            className="bg-gray-700/50 rounded-lg p-4 text-gray-300 hover:bg-gray-600/50 transition-colors"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Contact Section
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800/50 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-gray-300 mb-6">
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out!
              </p>
              <div className="space-y-4">
                <a 
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  azizh4495@gmail.com
                </a>
                <a 
                  href="https://github.com/huzaifa-aziz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/huzaifa-aziz-a898a3301/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App Component
const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Home />
      <About />
      <Contact />
    </div>
  );
};

export default Portfolio;