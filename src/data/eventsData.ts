import { EventItem } from '../types';

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'level-quest',
    name: 'LEVEL QUEST',
    category: 'Non-Technical',
    shortDescription: 'A multi-stage mystery treasure hunt across campus uncovering vintage clues and hidden keys.',
    fullDescription: 'Step into the shoes of an explorer! Follow encrypted parchment clues, cipher keys, and physical map landmarks scattered across campus to claim the ultimate chest.',
    roundsCount: 3,
    teamSize: '3 - 4 Members',
    timing: '10:00 AM – 01:00 PM',
    venue: 'Central Lawn & Campus-wide',
    cashPrize: '₹ 5,000 + Explorer Medals',
    iconName: 'Compass',
    featured: true,
    rounds: [
      {
        title: 'Stage 1 – Deciphering the Manuscript',
        time: '10:00 AM – 11:00 AM',
        description: 'Solve Caesar ciphers, Morse codes, and optical illusions to locate your team map.'
      },
      {
        title: 'Stage 2 – Campus Landmark Trail',
        time: '11:00 AM – 12:15 PM',
        description: 'Locate 5 physical check-points hidden across campus and complete quick mini-challenges.'
      },
      {
        title: 'Stage 3 – Unlocking the Vault',
        time: '12:30 PM – 01:00 PM',
        description: 'Combine vault combination numbers obtained at check-points to unlock the prize chest.'
      }
    ],
    rules: [
      'Teams of 3 to 4 members.',
      'Stay within designated safety zones.',
      'Damaging campus property or interfering with other teams leads to immediate disqualification.'
    ],
    requirements: ['College ID Card', 'Smartphone for QR scanning (1 per team)'],
    coordinators: [
      { name: 'Dr. M. Arul Raj', role: 'Faculty Coordinator', phone: '+91 94440 22110' },
      { name: 'Abhishek M', role: 'Student Coordinator', phone: '+91 98411 77665' }
    ]
  },
  {
    id: 'sync-or-sink',
    name: 'SYNC OR SINK',
    category: 'Non-Technical',
    shortDescription: 'Test your non-verbal communication, charades, and synchronization skills with your partner.',
    fullDescription: 'A popular non-technical team event! Decode gestures, build mirror structures without looking, and stay in perfect sync with your teammate before time runs out.',
    roundsCount: 2,
    teamSize: '2 Members',
    timing: '02:00 PM – 04:30 PM',
    venue: 'Auditorium Hall B',
    cashPrize: '₹ 3,000 + Trophy',
    iconName: 'Users',
    featured: true,
    rounds: [
      {
        title: 'Round 1 – Silent Mimicry',
        time: '02:00 PM – 03:00 PM',
        description: 'Convey complex engineering terms, pop culture phenomena, and movie names purely through non-verbal gestures.'
      },
      {
        title: 'Round 2 – Blindfold Grid',
        time: '03:15 PM – 04:30 PM',
        description: 'One blindfolded partner navigates a maze guided solely by acoustic audio cues from their partner.'
      }
    ],
    rules: [
      'Teams must consist of 2 members.',
      'No mouth movements or spelling letters in the air during Round 1.',
      'Safety equipment provided for blindfold tasks.'
    ],
    requirements: ['College ID Card'],
    coordinators: [
      { name: 'Prof. T. Divya', role: 'Faculty Coordinator', phone: '+91 98403 99887' },
      { name: 'Swetha R', role: 'Student Coordinator', phone: '+91 96770 55443' }
    ]
  },
  {
    id: 'technical-research-presentation',
    name: 'TECHNICAL RESEARCH PRESENTATION',
    category: 'Technical',
    shortDescription: 'Present your groundbreaking research papers on modern ECE advancements, IoT, VLSI, and AI.',
    fullDescription: 'Showcase your technical writing and verbal defense skills in front of an esteemed panel of academic and industry experts. Topics include 6G Wireless, VLSI Design, Edge AI, Embedded Systems, Biomedical Electronics, and Quantum Signal Processing.',
    roundsCount: 1,
    teamSize: '1 - 3 Members',
    timing: '09:30 AM – 01:00 PM',
    venue: 'Seminar Hall B',
    cashPrize: '₹ 6,000 + Certificate of Excellence',
    iconName: 'FileText',
    featured: true,
    rounds: [
      {
        title: 'Final Defense Presentation',
        time: '09:30 AM – 01:00 PM',
        description: '10-minute presentation followed by a 3-minute Q&A session with the expert panel.'
      }
    ],
    rules: [
      'Abstract and full paper must be submitted in IEEE format during registration or before deadline.',
      'Max 3 authors per paper.',
      'Presentation slides must be brought on a USB flash drive or accessible via cloud.',
      'Plagiarism content must not exceed 15%.'
    ],
    requirements: ['Presentation PPT / PDF', 'Printed copy of paper', 'College ID'],
    coordinators: [
      { name: 'Dr. P. Rajesh Kumar', role: 'Faculty Coordinator', phone: '+91 98412 11223' },
      { name: 'David Preetham', role: 'Student Coordinator', phone: '+91 97890 12345' }
    ]
  },
  {
    id: 'pitch-fire',
    name: 'PITCH FIRE',
    category: 'Technical',
    shortDescription: 'Elevator startup pitch competition showcasing tech innovations to venture mentors.',
    fullDescription: 'Got a revolutionary product idea or startup concept in DeepTech, Green Energy, IoT, or Consumer Electronics? Pitch it to our panel in 3 minutes flat and field rapid investor questions.',
    roundsCount: 2,
    teamSize: '1 - 3 Members',
    timing: '01:30 PM – 04:00 PM',
    venue: 'Incubation Center Conference Room',
    cashPrize: '₹ 6,000 + Incubation Support Mentorship',
    iconName: 'Flame',
    featured: true,
    rounds: [
      {
        title: 'Round 1 – 3-Minute Elevator Pitch',
        time: '01:30 PM – 03:00 PM',
        description: 'Pitch your problem statement, technical solution, market feasibility, and revenue model.'
      },
      {
        title: 'Round 2 – Q&A & Valuation Challenge',
        time: '03:15 PM – 04:00 PM',
        description: 'Top 5 finalists face intense questions on unit economics, manufacturing feasibility, and IP protection.'
      }
    ],
    rules: [
      '3 minutes maximum presentation time without interruption.',
      'Slides limited to 6 slides maximum.',
      'Proof of concept or prototype awards bonus points.'
    ],
    requirements: ['Pitch Deck (PDF/PPT)', 'College ID Card'],
    coordinators: [
      { name: 'Dr. V. Sundar', role: 'Faculty Coordinator', phone: '+91 98408 55443' },
      { name: 'Rohan Sharma', role: 'Student Coordinator', phone: '+91 98842 33112' }
    ]
  },
  {
    id: 'wattage-war',
    name: 'WATTAGE WAR',
    category: 'Technical',
    shortDescription: 'A high-voltage technical challenge testing deep circuit knowledge, speed, and hardware troubleshooting.',
    fullDescription: 'Wattage War is a fun-filled technical event consisting of 3 rounds designed to test participants’ knowledge of Electronics and Communication through activity-based, hands-on, and rapid-fire challenges under high voltage pressure.',
    roundsCount: 3,
    teamSize: '2 - 3 Members',
    timing: '10:20 AM – 2:30 PM',
    venue: 'ECE Hardware Lab, Ground Floor',
    cashPrize: '₹ 5,000 + Trophies',
    iconName: 'Zap',
    featured: true,
    rounds: [
      {
        title: 'Round 1 – Track Path',
        time: '10:20 AM – 11:30 AM',
        description: 'Rapid diagnostic test tracing electronic signal flows, solving schematics puzzles, and identifying burnt component anomalies.'
      },
      {
        title: 'Round 2 – Cubic Mechanism',
        time: '11:50 AM – 12:40 PM',
        description: 'Hands-on hardware assembly on breadboards. Build modular power supply units under strict voltage constraints.'
      },
      {
        title: 'Round 3 – Circuit Fix-It (Finale)',
        time: '1:30 PM – 2:30 PM',
        description: 'Final showdown where teams are given broken circuit blocks with injected faults and must debug and calibrate live waveforms.'
      }
    ],
    rules: [
      'Teams must consist of 2 to 3 registered participants.',
      'All breadboards, ICs, and measuring equipment will be provided at the venue.',
      'Use of external smartphones or AI assistance during circuit building is strictly prohibited.',
      'Decision of the lab faculty judges will be final and binding.',
      'Participants must adhere to standard laboratory safety protocols.'
    ],
    requirements: ['College ID Card', 'Basic Stationery (Pens, Notepad)', 'Scientific Calculator'],
    coordinators: [
      { name: 'Dr. S. John Michael', role: 'Faculty Coordinator', phone: '+91 98401 23456', email: 'john.michael@licet.ac.in' },
      { name: 'Karthik Raja S', role: 'Student Coordinator', phone: '+91 98765 43210' }
    ]
  },
  {
    id: 'bingo',
    name: 'BINGO',
    category: 'Non-Technical',
    shortDescription: 'Vintage ECE Bingo with custom technical terms, rapid calls, and instant prizes.',
    fullDescription: 'A relaxed yet thrilling vintage ECE Bingo game! Cross off custom electronic components, inventors, formulas, and landmark dates on your parchment ticket to win fast cash and gift hampers.',
    roundsCount: 1,
    teamSize: 'Individual / Pair',
    timing: '03:00 PM – 04:30 PM',
    venue: 'Main Auditorium Stage',
    cashPrize: 'Instant Cash Prizes + Hampers',
    iconName: 'Sparkles',
    featured: true,
    rounds: [
      {
        title: 'Grand Bingo Session',
        time: '03:00 PM – 04:30 PM',
        description: 'Multiple winning patterns: Early 5, Corners, Top/Middle/Bottom Line, and Full House!'
      }
    ],
    rules: [
      'Bingo tickets provided upon entry.',
      'Verify winning numbers with live stage referee.',
      'Multiple winners in a category split the prize pool.'
    ],
    requirements: ['College ID Card', 'Pen'],
    coordinators: [
      { name: 'Prof. L. Stella', role: 'Faculty Coordinator', phone: '+91 98416 33221' },
      { name: 'Kavya S', role: 'Student Coordinator', phone: '+91 97100 88776' }
    ]
  },
  {
    id: 'game-of-chances',
    name: 'GAME OF CHANCES',
    category: 'Non-Technical',
    shortDescription: 'An exhilarating non-technical event blending strategy, luck, logic, and mini-games.',
    fullDescription: 'Unwind from heavy circuits with an energetic game testing probability, split-second decision making, physical precision, and team synergy.',
    roundsCount: 3,
    teamSize: '2 - 3 Members',
    timing: '01:30 PM – 04:00 PM',
    venue: 'Open Courtyard',
    cashPrize: '₹ 3,000 + Goodies',
    iconName: 'Dices',
    featured: true,
    rounds: [
      {
        title: 'Round 1 – Probability Wheel & Trivia',
        time: '01:30 PM – 02:15 PM',
        description: 'Combine rapid trivia answers with strategic dice bets to accumulate points.'
      },
      {
        title: 'Round 2 – Mind Maze & Balance',
        time: '02:30 PM – 03:15 PM',
        description: 'Obstacle coordination combined with memory retention puzzles.'
      },
      {
        title: 'Round 3 – Golden Chest Auction',
        time: '03:30 PM – 04:00 PM',
        description: 'Bidding showdown using accumulated tokens to unlock final mystery tasks.'
      }
    ],
    rules: [
      'Open to all registered symposium attendees.',
      'Fair play rules enforced by student coordinators.',
      'Fun spirit mandatory!'
    ],
    requirements: ['College ID Card'],
    coordinators: [
      { name: 'Ms. S. Kavitha', role: 'Faculty Coordinator', phone: '+91 98415 66778' },
      { name: 'Harish Kumar S', role: 'Student Coordinator', phone: '+91 95000 44332' }
    ]
  },
  {
    id: 'project-expo',
    name: 'PROJECT EXPO',
    category: 'Technical',
    shortDescription: 'Exhibit working hardware & software engineering prototypes to industry leaders and judges.',
    fullDescription: 'The flagship exhibition of SLICE 26. Bring your physical working models, robotics projects, IoT smart grids, embedded devices, or biomedical instruments to showcase innovation and compete for top honours.',
    roundsCount: 1,
    teamSize: '2 - 4 Members',
    timing: '10:00 AM – 03:00 PM',
    venue: 'Main Foyer & Exhibition Hall',
    cashPrize: '₹ 8,000 + Innovation Trophy',
    iconName: 'Bot',
    featured: true,
    rounds: [
      {
        title: 'Live Prototype Demonstration & Pitch',
        time: '10:00 AM – 03:00 PM',
        description: 'Continuous demonstration to judges and visitors, evaluating novelty, engineering quality, cost efficiency, and practical impact.'
      }
    ],
    rules: [
      'Projects must feature a working hardware prototype or functional software demonstration.',
      'Power supply (230V AC) and tables will be provided.',
      'Teams must display a clear poster explaining project architecture.',
      'Safety measures must be taken for high voltage or chemical setups.'
    ],
    requirements: ['Working Hardware Model', 'Project Display Poster (A1/A2 size)'],
    coordinators: [
      { name: 'Dr. Joseph Bernard', role: 'Faculty Coordinator', phone: '+91 99400 33445' },
      { name: 'Sanjay Kumar R', role: 'Student Coordinator', phone: '+91 96001 88990' }
    ]
  }
];
