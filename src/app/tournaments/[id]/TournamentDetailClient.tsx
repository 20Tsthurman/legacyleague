"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import MainLayout from '@/components/layouts/MainLayout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { tournamentData } from './tournamentData'; // Changed './page' to './tournamentData'

// Define the tournament type based on the data structure
type Tournament = typeof tournamentData[keyof typeof tournamentData];

interface TournamentDetailClientProps {
  tournament: Tournament;
}

export default function TournamentDetailClient({ tournament }: TournamentDetailClientProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const registrationProgress = Math.round((tournament.totalSpots - tournament.spotsRemaining) / tournament.totalSpots * 100);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src={tournament.image}
          alt={tournament.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10 h-full flex items-center">
          <div className="max-w-3xl">
            <motion.span 
              className="block uppercase tracking-widest text-emerald-400 text-sm font-medium mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {tournament.date}
            </motion.span>
            <motion.h1 
              className="font-serif text-4xl md:text-6xl font-medium text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {tournament.title}
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {tournament.subtitle}
            </motion.p>
            <motion.div 
              className="flex items-center gap-4 text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{tournament.location}, {tournament.city}</span>
              </div>
              <div className="w-1 h-1 bg-white/60 rounded-full"></div>
              <span>{tournament.format}</span>
              <div className="w-1 h-1 bg-white/60 rounded-full"></div>
              <span>${tournament.prizePool.toLocaleString()} Prize Pool</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-emerald-700 text-white py-4">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold">${tournament.price}</div>
                <div className="text-emerald-200 text-sm">Entry Fee</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{tournament.spotsRemaining}</div>
                <div className="text-emerald-200 text-sm">Spots Left</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{registrationProgress}%</div>
                <div className="text-emerald-200 text-sm">Full</div>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="px-8 py-3 bg-white text-emerald-700 font-medium rounded-md hover:bg-gray-100 transition-colors">
                Register Now
              </button>
              <button className="px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors">
                Add to Calendar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Navigation Tabs */}
              <div className="border-b border-gray-200 mb-8">
                <nav className="flex space-x-8">
                  {[
                    { key: 'overview', label: 'Overview' },
                    { key: 'schedule', label: 'Schedule' },
                    { key: 'course', label: 'Course Info' },
                    { key: 'prizes', label: 'Prizes' }
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`py-2 px-1 border-b-2 font-medium text-sm ${
                        activeTab === tab.key
                          ? 'border-emerald-700 text-emerald-700'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="prose prose-lg max-w-none">
                {activeTab === 'overview' && (
                  <div>
                    <h3>Tournament Overview</h3>
                    <p>{tournament.description}</p>
                    
                    <h4>What&apos;s Included</h4>
                    <ul>
                      {tournament.included?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>

                    <h4>Requirements</h4>
                    <ul>
                      {tournament.requirements?.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'schedule' && tournament.schedule && (
                  <div>
                    <h3>Tournament Schedule</h3>
                    {tournament.schedule.map((day, dayIndex) => (
                      <div key={dayIndex} className="mb-8">
                        <h4>{day.day}</h4>
                        <div className="space-y-3">
                          {day.events.map((event, eventIndex) => (
                            <div key={eventIndex} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                              <div className="font-medium text-emerald-700 min-w-[80px]">
                                {event.time}
                              </div>
                              <div>{event.event}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'course' && tournament.courseInfo && (
                  <div>
                    <h3>Course Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4>Course Details</h4>
                        <ul className="list-none p-0">
                          <li><strong>Established:</strong> {tournament.courseInfo.established}</li>
                          <li><strong>Designer:</strong> {tournament.courseInfo.designer}</li>
                          <li><strong>Par:</strong> {tournament.courseInfo.par}</li>
                          <li><strong>Yardage:</strong> {tournament.courseInfo.yards}</li>
                          <li><strong>Course Rating:</strong> {tournament.courseInfo.rating}</li>
                          <li><strong>Slope Rating:</strong> {tournament.courseInfo.slope}</li>
                        </ul>
                      </div>
                    </div>
                    
                    <h4>Course Features</h4>
                    <ul>
                      {tournament.courseInfo.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'prizes' && (
                  <div>
                    <h3>Prize Structure</h3>
                    <p>Total Prize Pool: <strong>${tournament.prizePool.toLocaleString()}</strong></p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {tournament.prizes?.map((prize, index) => (
                        <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                          <span className="font-medium">{prize.place}</span>
                          <span className="text-emerald-700 font-bold">{prize.prize}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Registration Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg">
                <h3 className="font-serif text-2xl font-medium mb-4">Registration</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>Entry Fee:</span>
                    <span className="font-bold text-xl text-emerald-700">${tournament.price}</span>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Registration Progress</span>
                      <span>{registrationProgress}% Full</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-700 rounded-full transition-all"
                        style={{ width: `${registrationProgress}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      {tournament.spotsRemaining} spots remaining
                    </div>
                  </div>
                </div>

                <button className="w-full px-6 py-3 bg-emerald-700 text-white font-medium rounded-md hover:bg-emerald-800 transition-colors mb-3">
                  Register Now
                </button>
                <button className="w-full px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors">
                  Add to Wishlist
                </button>
              </div>

              {/* Tournament Details */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-medium mb-4">Tournament Details</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Format:</span>
                    <span className="font-medium">{tournament.format}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className="font-medium">{tournament.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className={`font-medium ${tournament.status === 'open' ? 'text-emerald-700' : 'text-red-700'}`}>
                      {tournament.status === 'open' ? 'Open Registration' : 'Registration Closed'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h4 className="font-medium mb-4">Need Help?</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Have questions about this tournament? Our team is here to help.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>tournaments@legacygolf.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>(555) 123-GOLF</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Tournaments */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-medium text-center mb-12">Other Tournaments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.values(tournamentData)
              .filter(t => t.id !== tournament.id)
              .slice(0, 2)
              .map((relatedTournament) => (
                <Link
                  key={relatedTournament.id}
                  href={`/tournaments/${relatedTournament.id}`}
                  className="group block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedTournament.image}
                      alt={relatedTournament.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full mb-2">
                        {relatedTournament.date}
                      </span>
                      <h3 className="font-serif text-xl font-medium text-white">{relatedTournament.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-emerald-700">${relatedTournament.price}</span>
                      <span className="text-gray-600">{relatedTournament.spotsRemaining} spots left</span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}