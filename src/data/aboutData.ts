import { FacultyMember } from '../types';

export const ABOUT_DATA = {
  departmentName: 'Department of Electronics & Communication Engineering',
  institution: 'Loyola-ICAM College of Engineering and Technology (LICET)',
  tagline: 'Bridging Electromagnetic Principles, Silicon Architecture, & Intelligent Systems.',
  history: `The Department of Electronics and Communication Engineering aims to provide quality technical education that offers creative solutions to the society’s needs, adhering to the professional ethics. The Department has twelve well qualified faculty members including five doctorates and 7 pursuing Ph.D. The annual student in-take of the department is 60. The department has six state-of-the-art laboratories to carry out regular laboratory sessions and research activities.

The students in the department are enthusiastic in attending technical contests, symposia, workshops, internships and in-plant training in India and abroad during their course of study. Students are also guided to excel in various curricular and co-curricular activities to develop teamwork and leadership skills. The department organizes tech-talks and workshops, inviting experts from industries to enrich the knowledge in trending technologies. To augment the technical skills, the department conducts value added courses periodically to bridge the gap between industry and academia.

The department provides an ecosystem for the students to achieve academic excellence and to emerge as a successful professional.`,
  vision: 'To facilitate the transformation of students into globally competent and socially committed engineers, innovators and entrepreneurs',
  mission: [
    'To develop skilled electronics engineers for providing innovative solutions through effective teaching learning practices.',
    'To inculcate ethical values, integrity, leadership qualities, and creativity to build entrepreneurial skills.',
    'To provide a holistic environment for the development of intellectual, social and personal abilities.',
    'To develop a Centre of Excellence in VLSI and Embedded system design.',
    'To provide international exposure to students through collaboration with universities abroad.'
  ],
  electronicsClub: {
    name: 'TEC – The Electronics Club',
    description: 'TEC is the official student body of the Department of ECE at LICET. TEC acts as the vibrant catalyst for technical workshops, hackathons, guest lectures, project expos, and the annual signature national symposium SLICE.',
    instagramUrl: 'https://www.instagram.com/slice_ece/?hl=en',
    linkedinUrl: 'https://www.linkedin.com/in/tec-the-electronics-club-licet-a625332a2/'
  },
  facultyList: [
    {
      name: 'Dr. Jenifer Suriya L J',
      designation: 'Head of the Department',
      department: 'ECE, LICET',
      photoUrl: '/hod.png',
      role: 'Convenor & Chief Advisor',
      email: 'hodece@licet.ac.in',
      linkUrl: 'https://licet.ac.in/electronics-and-communication-engineering/electronics-and-communication-engineering-faculty/'
    },
    {
      name: 'Dr. Krishna Kumari S',
      designation: 'Associate Professor',
      department: 'ECE, LICET',
      photoUrl: '/krishna_kumari.jpg',
      role: 'Faculty Coordinator',
      email: 'krishnakumari.s@licet.ac.in',
      linkUrl: 'https://licet.ac.in/electronics-and-communication-engineering/electronics-and-communication-engineering-faculty/'
    }
  ] as FacultyMember[],
  timelineMilestones: [
    { year: '2010', title: 'Department Inception', description: 'LICET ECE Department started with state-of-the-art laboratory infrastructure.' },
    { year: '2014', title: 'TEC Club Formation', description: 'The Electronics Club was formally founded by enthusiastic student pioneers.' },
    { year: '2018', title: 'SLICE Inaugural Edition', description: 'First edition of SLICE launched as a state-level technical symposium.' },
    { year: '2022', title: 'National Level Expansion', description: 'Expanded to a National Level Technical Symposium drawing 1,000+ delegates.' },
    { year: '2026', title: 'SLICE 26 - Vintage Edition', description: 'Celebrating engineering legacy with 8 technical & non-technical arenas.' }
  ]
};
