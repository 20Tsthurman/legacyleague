"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Tournament data (later this will come from a database)
const tournaments = [
  {
    id: 'spring-championship',
    title: 'Spring Championship',
    date: 'May 15-16, 2025',
    location: 'Bowling Green Country Club',
    city: 'Bowling Green, KY',
    price: '$200',
    image: '/images/spring-championship.png',
    featured: true,
    status: 'open', // open, full, completed
    spotsRemaining: 24,
    totalSpots: 100,
    prizePool: '$5,000',
    format: '2-Day Stroke Play',
    difficulty: 'Championship'
  },
  {
    id: 'summer-classic',
    title: 'Summer Classic',
    date: 'June 22-23, 2025',
    location: 'Riverview Golf Course',
    city: 'Nashville, TN',
    price: '$175',
    image: '/images/summer-classic.jpeg',
    featured: false,
    status: 'open',
    spotsRemaining: 45,
    totalSpots: 80,
    prizePool: '$3,500',
    format: '2-Day Stroke Play',
    difficulty: 'Intermediate'
  },
  {
    id: 'fall-invitational',
    title: 'Fall Invitational',
    date: 'September 10-11, 2025',
    location: 'Pine Ridge Golf Club',
    city: 'Atlanta, GA',
    price: '$225',
    image: '/images/fall-invitational.jpg',
    featured: false,
    status: 'open',
    spotsRemaining: 32,
    totalSpots: 75,
    prizePool: '$4,000',
    format: '2-Day Stroke Play',
    difficulty: 'Championship'
  }
];

export default function TournamentsPage() {
  const [filter, setFilter] = useState('all'); // all, open, featured
  const [sortBy, setSortBy] = useState('date'); // date, price, location

  const filteredTournaments = tournaments.filter(tournament => {
    if (filter === 'featured') return tournament.featured;
    if (filter === 'open') return tournament.status === 'open';
    return true;
  });
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: 'url("/images/hero.jpg")' }}>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              className="block uppercase tracking-widest text-emerald-400 text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              2025 Tournament Schedule
            </motion.span>
            <motion.h1 
              className="font-serif text-4xl md:text-6xl font-medium text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Premium Golf Tournaments
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join passionate golfers from across the country in meticulously organized tournaments at premier golf courses.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filters & Sort */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {[
                { key: 'all', label: 'All Tournaments' },
                { key: 'open', label: 'Open Registration' },
                { key: 'featured', label: 'Featured' }
              ].map((filterOption) => (
                <button
                  key={filterOption.key}
                  onClick={() => setFilter(filterOption.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === filterOption.key
                      ? 'bg-emerald-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filterOption.label}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
              >
                <option value="date">Date</option>
                <option value="price">Price</option>
                <option value="location">Location</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Tournaments Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredTournaments.map((tournament, index) => (
              <motion.div
                key={tournament.id}
                className="group bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Tournament Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={tournament.image}
                    alt={tournament.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      tournament.status === 'open' 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {tournament.status === 'open' ? 'Open Registration' : 'Registration Full'}
                    </span>
                  </div>

                  {/* Featured Badge */}
                  {tournament.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Date & Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-2">
                      {tournament.date}
                    </span>
                    <h3 className="font-serif text-xl font-medium text-white">{tournament.title}</h3>
                  </div>
                </div>

                {/* Tournament Details */}
                <div className="p-6">
                  {/* Location */}
                  <div className="flex items-start gap-3 mb-4">
                    <svg className="w-5 h-5 text-emerald-700 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-900">{tournament.location}</p>
                      <p className="text-sm text-gray-600">{tournament.city}</p>
                    </div>
                  </div>

                  {/* Tournament Info Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-600">Format:</span>
                      <p className="font-medium">{tournament.format}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Difficulty:</span>
                      <p className="font-medium">{tournament.difficulty}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Prize Pool:</span>
                      <p className="font-medium text-emerald-700">{tournament.prizePool}</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Spots Left:</span>
                      <p className="font-medium">{tournament.spotsRemaining}/{tournament.totalSpots}</p>
                    </div>
                  </div>

                  {/* Registration Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Registration</span>
                      <span className="text-sm font-medium">
                        {Math.round((tournament.totalSpots - tournament.spotsRemaining) / tournament.totalSpots * 100)}% Full
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-700 rounded-full transition-all duration-300"
                        style={{ width: `${(tournament.totalSpots - tournament.spotsRemaining) / tournament.totalSpots * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-emerald-700">{tournament.price}</span>
                      <span className="text-gray-600 text-sm ml-1">entry fee</span>
                    </div>
                    <Link 
                      href={`/tournaments/${tournament.id}`}
                      className="px-6 py-2 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredTournaments.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No tournaments found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.h2 
            className="font-serif text-3xl md:text-4xl font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Join the Competition?
          </motion.h2>
          <motion.p 
            className="text-lg text-emerald-100 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Become a Legacy Golf Association member for exclusive access to tournaments, 
            preferred registration, and member-only events.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              href="/membership"
              className="inline-block px-8 py-3 bg-white text-emerald-700 font-medium rounded-md hover:bg-gray-100 transition-colors shadow-md"
            >
              Explore Membership
            </Link>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}
