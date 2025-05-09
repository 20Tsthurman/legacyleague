// This is your main homepage with Squarespace-inspired design
"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import MainLayout from '@/components/layouts/MainLayout';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';

// Component for section headers
interface SectionHeaderProps {
  overline?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left' | 'right';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ overline, title, subtitle = '', align = 'center' }) => (
  <div className={`max-w-3xl mx-auto mb-16 text-${align}`}>
    {overline && (
      <motion.span 
        className="block uppercase tracking-widest text-emerald-700 text-sm font-medium mb-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {overline}
      </motion.span>
    )}
    <motion.h2 
      className="font-serif text-4xl md:text-5xl font-medium text-gray-900 mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        className="text-lg text-gray-600"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default function Home() {
  // Parallax scroll effect for hero image
  const { scrollY } = useScroll();
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef);
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  
  // Upcoming tournaments data
  const tournaments = [
    {
      id: 'spring-championship',
      title: 'Spring Championship',
      date: 'May 15-16, 2025',
      location: 'Bowling Green Country Club',
      price: '$200',
      image: '/images/tournaments/spring-championship.jpg', // Updated path
      featured: true
    },
    {
      id: 'summer-classic',
      title: 'Summer Classic',
      date: 'June 22-23, 2025',
      location: 'Riverview Golf Course',
      price: '$175',
      image: '/images/tournaments/summer-classic.jpg' // Updated path
    },
    {
      id: 'fall-invitational',
      title: 'Fall Invitational',
      date: 'September 10-11, 2025',
      location: 'Pine Ridge Golf Club',
      price: '$225',
      image: '/images/tournaments/fall-invitational.jpg' // Updated path
    }
  ];
  
  // Testimonials data
  const testimonials = [
    {
      quote: "The Legacy Golf Association tournaments are truly world-class. Every detail is carefully considered to create an exceptional experience.",
      author: "Michael Johnson",
      role: "Professional Golfer"
    },
    {
      quote: "Joining LGA was one of the best decisions I've made. The tournaments are competitive yet welcoming, and the network is invaluable.",
      author: "Sarah Williams",
      role: "Club Member since 2021"
    },
    {
      quote: "The level of organization and professionalism sets LGA apart. From registration to awards, every aspect is flawlessly executed.",
      author: "David Chen",
      role: "Tournament Director"
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: 'url("/images/hero.jpg")',
            y: heroInView ? y : 0
          }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </motion.div>
        
        {/* Content */}
        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            className="font-serif text-5xl md:text-7xl text-white font-medium mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Premium Golf Tournaments
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience meticulously organized tournaments designed for passionate players across the country
          </motion.p>
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              href="/tournaments"
              className="px-8 py-3 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-colors shadow-md"
            >
              View Tournaments
            </Link>
            <Link 
              href="/membership"
              className="px-8 py-3 bg-emerald-700 text-white font-medium rounded-md hover:bg-emerald-800 transition-colors shadow-md"
            >
              Join Legacy Golf
            </Link>
          </motion.div>
        </div>
        
        {/* Scroll Down Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>
      
      {/* Introduction Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="block uppercase tracking-widest text-emerald-700 text-sm font-medium mb-3">About Legacy Golf</span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-gray-900 mb-6">Elevating the Game</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Legacy Golf Association was founded with a clear mission: to create exceptional golf tournaments that challenge and inspire players of all levels. Our meticulously organized events take place at the finest courses across the country.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We believe in the traditions of golf while embracing innovation to enhance the player experience. From registration to the final award ceremony, every detail reflects our commitment to excellence.
              </p>
              <Link 
                href="/about"
                className="inline-flex items-center text-emerald-700 font-medium hover:text-emerald-800 transition-colors group"
              >
                Learn more about our story
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
            
            <motion.div
              className="relative rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/images/intro-experience.png"
                width={1800}
                height={1200}
                alt="Golf Experience"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Tournament */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader 
            overline="Featured Tournament"
            title="Spring Championship 2025"
            subtitle="Our flagship tournament returns with an expanded two-day format at the prestigious Bowling Green Country Club"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative rounded-lg overflow-hidden h-96 md:h-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="https://placehold.co/800x600/001f3f/ffffff?text=Spring+Championship"
                alt="Spring Championship"
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ul className="space-y-5 mb-8">
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-lg">May 15-16, 2025</h3>
                    <p className="text-gray-600">Two-day tournament with qualifying rounds</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-lg">Bowling Green Country Club</h3>
                    <p className="text-gray-600">Championship course with challenging layout</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 text-lg">$5,000 Prize Pool</h3>
                    <p className="text-gray-600">Prizes for top finishers and category winners</p>
                  </div>
                </li>
              </ul>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-medium text-gray-900">Entry Fee</span>
                  <span className="text-2xl font-medium text-emerald-700">$200</span>
                </div>
                <p className="text-gray-600 mb-4">Includes tournament entry, practice round, welcome reception, and awards dinner</p>
                <div className="flex gap-4 items-center">
                  <div className="h-2 bg-gray-200 rounded-full flex-grow overflow-hidden">
                    <div className="h-full bg-emerald-700 rounded-full w-3/4"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-600">24 spots remaining</span>
                </div>
              </div>
              
              <Link 
                href="/tournaments/spring-championship"
                className="inline-block px-8 py-3 bg-emerald-700 text-white font-medium rounded-md hover:bg-emerald-800 transition-colors shadow-md"
              >
                Register Now
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Upcoming Tournaments */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader 
            overline="Upcoming Events"
            title="2025 Tournament Schedule"
            subtitle="Secure your spot in our upcoming tournaments"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tournaments.map((tournament, index) => (
              <motion.div
                key={tournament.id}
                className={`group rounded-lg overflow-hidden shadow-lg border border-gray-100 bg-white hover:shadow-xl transition-shadow ${tournament.featured ? 'md:col-span-3 md:grid md:grid-cols-2 md:items-center' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden h-60">
                  <Image
                    src={tournament.image}
                    alt={tournament.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-2">
                      {tournament.date}
                    </span>
                    <h3 className="font-serif text-2xl font-medium text-white">{tournament.title}</h3>
                  </div>
                </div>
                
                <div className={`p-6 ${tournament.featured ? 'md:pr-12' : ''}`}>
                  <div className="flex items-start gap-3 mb-4">
                    <svg className="w-5 h-5 text-emerald-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600">{tournament.location}</span>
                  </div>
                  
                  {tournament.featured && (
                    <p className="text-gray-600 mb-4">
                      Our flagship tournament returns with an expanded two-day format. 
                      Experience competitive play at the prestigious Bowling Green Country Club.
                    </p>
                  )}
                  
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-medium text-emerald-700">{tournament.price}</span>
                    <Link 
                      href={`/tournaments/${tournament.id}`}
                      className="px-5 py-2 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/tournaments"
              className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-md hover:bg-gray-900 hover:text-white transition-colors"
            >
              View All Tournaments
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {[
              { number: "28", label: "Tournaments" },
              { number: "12", label: "Premium Courses" },
              { number: "100+", label: "Active Members" },
              { number: "$10k+", label: "Prize Money" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="font-serif text-5xl md:text-6xl font-medium mb-2">{stat.number}</div>
                <div className="text-emerald-200 uppercase tracking-wide font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <SectionHeader 
            overline="Testimonials"
            title="What Our Members Say"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <svg className="w-10 h-10 text-emerald-700 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-lg text-gray-600 mb-6">{testimonial.quote}</blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                    <span className="text-gray-500 font-medium">{testimonial.author.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080/001f3f/ffffff?text=Join+LGA')] bg-cover bg-center opacity-20"></div>
        <div className="container relative mx-auto px-6 lg:px-8 text-center">
          <motion.h2 
            className="font-serif text-4xl md:text-5xl font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Join Legacy Golf Association
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Become part of a passionate community dedicated to the sport of golf. 
            Membership provides exclusive access to tournaments, practice facilities, 
            and networking events.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              href="/membership"
              className="inline-block px-8 py-3 bg-white text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-colors shadow-md"
            >
              Explore Membership
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <motion.h2 
              className="font-serif text-3xl font-medium text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Stay Updated
            </motion.h2>
            <motion.p 
              className="text-gray-600 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Subscribe to our newsletter for tournament announcements, golf tips, and exclusive content
            </motion.p>
            <motion.form 
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-emerald-700 text-white font-medium rounded-md hover:bg-emerald-800 transition-colors shadow-md whitespace-nowrap"
              >
                Subscribe
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}