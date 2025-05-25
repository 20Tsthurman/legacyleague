// src/app/tournaments/[id]/tournament-data.ts

export const tournamentData = {
  'spring-championship': {
    id: 'spring-championship',
    title: 'Spring Championship',
    subtitle: 'Our Premier Tournament Experience',
    date: 'May 15-16, 2025',
    location: 'Bowling Green Country Club',
    city: 'Bowling Green, KY',
    price: 200,
    image: '/images/spring-championship.png',
    featured: true,
    status: 'open',
    spotsRemaining: 24,
    totalSpots: 100,
    prizePool: 5000,
    format: '2-Day Stroke Play',
    difficulty: 'Championship',
    description: 'Join us for our flagship tournament at the prestigious Bowling Green Country Club. This championship-level event features two days of competitive stroke play on one of Kentucky&apos;s premier golf courses.',
    schedule: [
      {
        day: 'Day 1 - Saturday, May 15',
        events: [
          { time: '7:00 AM', event: 'Registration & Check-in' },
          { time: '8:00 AM', event: 'Welcome Reception & Continental Breakfast' },
          { time: '9:00 AM', event: 'Opening Ceremony' },
          { time: '9:30 AM', event: 'Round 1 - Shotgun Start' },
          { time: '2:30 PM', event: 'Lunch Break' },
          { time: '6:00 PM', event: 'Day 1 Wrap-up & Dinner' }
        ]
      },
      {
        day: 'Day 2 - Sunday, May 16',
        events: [
          { time: '8:00 AM', event: 'Continental Breakfast' },
          { time: '9:00 AM', event: 'Round 2 - Shotgun Start' },
          { time: '2:30 PM', event: 'Final Scoring & Verification' },
          { time: '4:00 PM', event: 'Awards Ceremony' },
          { time: '5:30 PM', event: 'Closing Reception' }
        ]
      }
    ],
    courseInfo: {
      name: 'Bowling Green Country Club',
      established: '1922',
      designer: 'A.W. Tillinghast',
      par: 72,
      yards: 6847,
      rating: 73.2,
      slope: 135,
      features: [
        'Championship 18-hole course',
        'Bentgrass greens and fairways',
        'Strategic bunkers and water hazards',
        'Professional practice facilities',
        'Full-service clubhouse'
      ]
    },
    prizes: [
      { place: '1st Place', prize: '$1,500' },
      { place: '2nd Place', prize: '$1,000' },
      { place: '3rd Place', prize: '$750' },
      { place: 'Low Net', prize: '$500' },
      { place: 'Longest Drive', prize: '$250' },
      { place: 'Closest to Pin', prize: '$250' }
    ],
    included: [
      'Two rounds of championship golf',
      'Welcome reception and continental breakfast',
      'Lunch on both days',
      'Awards ceremony and closing reception',
      'Tournament gift bag',
      'Professional scoring and handicap verification',
      'Course yardage book',
      'Range balls for practice rounds'
    ],
    requirements: [
      'USGA Handicap Index required',
      'Maximum handicap: 18',
      'Proper golf attire required',
      'Soft spikes only',
      'Must be 18 years or older'
    ]
  },
  'summer-classic': {
    id: 'summer-classic',
    title: 'Summer Classic',
    subtitle: 'Mid-Season Championship',
    date: 'June 22-23, 2025',
    location: 'Riverview Golf Course',
    city: 'Nashville, TN',
    price: 175,
    image: '/images/summer-classic.jpeg',
    featured: false,
    status: 'open',
    spotsRemaining: 35,
    totalSpots: 80,
    prizePool: 3500,
    format: '2-Day Stroke Play',
    difficulty: 'Intermediate',
    description: 'Experience the beauty of summer golf at Nashville&apos;s premier riverside course. This tournament combines competitive play with scenic views along the Cumberland River.',
    schedule: [
      {
        day: 'Day 1 - Saturday, June 22',
        events: [
          { time: '7:30 AM', event: 'Registration & Check-in' },
          { time: '8:30 AM', event: 'Continental Breakfast' },
          { time: '9:15 AM', event: 'Round 1 - Tee Times Start' },
          { time: '1:00 PM', event: 'Lunch & Networking' },
          { time: '6:30 PM', event: 'Evening Social Hour' }
        ]
      },
      {
        day: 'Day 2 - Sunday, June 23',
        events: [
          { time: '8:00 AM', event: 'Light Breakfast' },
          { time: '9:00 AM', event: 'Round 2 - Tee Times Start' },
          { time: '2:00 PM', event: 'Scoring & Verification' },
          { time: '3:30 PM', event: 'Awards Ceremony' },
          { time: '4:30 PM', event: 'Farewell Reception' }
        ]
      }
    ],
    courseInfo: {
      name: 'Riverview Golf Course',
      established: '1965',
      designer: 'Robert Trent Jones',
      par: 71,
      yards: 6542,
      rating: 71.8,
      slope: 128,
      features: [
        'Scenic riverside holes',
        'Rolling hills and mature trees',
        'Well-maintained bermuda greens',
        'Practice facility with driving range',
        'Pro shop and restaurant'
      ]
    },
    prizes: [
      { place: '1st Place', prize: '$1,200' },
      { place: '2nd Place', prize: '$800' },
      { place: '3rd Place', prize: '$600' },
      { place: 'Low Net', prize: '$400' },
      { place: 'Longest Drive', prize: '$200' },
      { place: 'Closest to Pin', prize: '$200' }
    ],
    included: [
      'Two rounds of golf',
      'Continental breakfast both days',
      'Lunch on Saturday',
      'Awards ceremony reception',
      'Tournament merchandise',
      'Professional scoring',
      'Cart rental for both rounds'
    ],
    requirements: [
      'USGA Handicap Index preferred',
      'Maximum handicap: 20',
      'Appropriate golf attire',
      'Soft spikes required',
      'Age 16+ (under 18 with guardian consent)'
    ]
  },
  'fall-invitational': {
    id: 'fall-invitational',
    title: 'Fall Invitational',
    subtitle: 'Season Finale Tournament',
    date: 'October 12-13, 2025',
    location: 'Highland Ridge Golf Club',
    city: 'Louisville, KY',
    price: 150,
    image: '/images/fall-invitational.jpg',
    featured: false,
    status: 'open',
    spotsRemaining: 42,
    totalSpots: 75,
    prizePool: 3000,
    format: '2-Day Stroke Play',
    difficulty: 'Recreational',
    description: 'Celebrate the end of the golf season with our Fall Invitational at Highland Ridge. Enjoy spectacular autumn foliage while competing for prizes in a relaxed, friendly atmosphere.',
    schedule: [
      {
        day: 'Day 1 - Saturday, October 12',
        events: [
          { time: '8:00 AM', event: 'Registration Opens' },
          { time: '9:00 AM', event: 'Welcome Coffee & Donuts' },
          { time: '9:45 AM', event: 'Round 1 - Shotgun Start' },
          { time: '2:00 PM', event: 'Lunch & Fall Festival' },
          { time: '5:00 PM', event: 'Harvest Dinner' }
        ]
      },
      {
        day: 'Day 2 - Sunday, October 13',
        events: [
          { time: '8:30 AM', event: 'Breakfast Buffet' },
          { time: '9:30 AM', event: 'Round 2 - Shotgun Start' },
          { time: '2:00 PM', event: 'Final Scoring' },
          { time: '3:00 PM', event: 'Awards & Prizes' },
          { time: '4:00 PM', event: 'Season Wrap-up Celebration' }
        ]
      }
    ],
    courseInfo: {
      name: 'Highland Ridge Golf Club',
      established: '1988',
      designer: 'Pete Dye',
      par: 72,
      yards: 6234,
      rating: 69.5,
      slope: 122,
      features: [
        'Picturesque mountain views',
        'Tree-lined fairways',
        'Strategic water features',
        'Family-friendly atmosphere',
        'Full dining facilities'
      ]
    },
    prizes: [
      { place: '1st Place', prize: '$1,000' },
      { place: '2nd Place', prize: '$650' },
      { place: '3rd Place', prize: '$450' },
      { place: 'Low Net', prize: '$300' },
      { place: 'Longest Drive', prize: '$150' },
      { place: 'Closest to Pin', prize: '$150' }
    ],
    included: [
      'Two rounds of golf with cart',
      'Welcome refreshments',
      'Lunch and fall festival activities',
      'Harvest dinner on Saturday',
      'Breakfast buffet on Sunday',
      'Awards ceremony',
      'Fall-themed tournament gifts'
    ],
    requirements: [
      'Open to all skill levels',
      'Handicap not required',
      'Casual golf attire acceptable',
      'Any golf shoes permitted',
      'Family-friendly event'
    ]
  }
};

// Export the type for use in other files
export type Tournament = typeof tournamentData[keyof typeof tournamentData];