"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header - transparent initially, then white on scroll */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className={`h-12 w-12 rounded-full overflow-hidden ${scrolled ? 'bg-gray-900' : 'bg-white'}`}>
                <Image
                  src="/images/Main Logo.PNG"
                  alt="Legacy Golf Association logo"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <span className={`font-serif text-xl font-medium tracking-wide ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                LEGACY GOLF ASSOCIATION
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {['Tournaments', 'Membership', 'The Course', 'About', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`font-medium ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-emerald-700 transition-colors relative group`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-700 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <Link
                href="/register"
                className="ml-2 px-6 py-2.5 bg-emerald-700 text-white font-medium rounded hover:bg-emerald-800 transition-colors shadow-md"
              >
                Register
              </Link>
            </nav>
            
            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-2xl p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                className={`w-6 h-6 ${scrolled ? 'stroke-gray-900' : 'stroke-white'}`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-72 bg-white z-50 shadow-2xl p-6 flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gray-900 flex items-center justify-center">
                    <div className="rounded-full overflow-hidden">
                      <Image src="/images/Main Logo2.PNG" alt="Legacy Golf Association logo" width={32} height={32} className="object-cover" />
                    </div>
                  </div>
                  <span className="font-serif text-base font-medium">LEGACY GOLF</span>
                </div>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <nav className="flex flex-col gap-6 mb-8">
                {['Tournaments', 'Membership', 'The Course', 'About', 'Contact'].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="font-medium text-gray-800 hover:text-emerald-700 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </nav>
              
              <Link
                href="/register"
                className="mt-auto px-6 py-3 bg-emerald-700 text-white font-medium rounded text-center hover:bg-emerald-800 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Register
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                  <span className="font-bold text-lg text-gray-900">LGA</span>
                </div>
                <span className="font-serif text-xl font-medium tracking-wide text-white">
                  LEGACY GOLF ASSOCIATION
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Experience premium golf tournaments meticulously designed for passionate players. 
                Established in 2020, Legacy Golf Association brings together the finest courses and players.
              </p>
              <div className="flex gap-4">
                {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                  <a 
                    key={social}
                    href={`#${social}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social}
                  >
                    <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-serif text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'Tournaments', 'Membership', 'Gallery', 'About Us', 'Contact'].map((link) => (
                  <li key={link}>
                    <Link 
                      href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif text-lg font-medium mb-4">Contact Us</h3>
              <address className="not-italic text-gray-400 space-y-3">
                <p>Legacy Golf Association</p>
                <p>1234 Fairway Drive</p>
                <p>Bowling Green, KY 42101</p>
                <p className="mt-4">info@legacygolf.com</p>
                <p>(555) 123-4567</p>
              </address>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Legacy Golf Association. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;