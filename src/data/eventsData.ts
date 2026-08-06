import { EventItem } from '../types';

export const EVENTS_DATA: EventItem[] = [
  {
  id: "level-quest",
  name: "LEVEL QUEST",
  category: "Technical",
  roundsCount: 2,
  teamSize: "2 - 4 Members",
  timing: "10:00 AM – 02:30 PM",
  venue: "J32",
  iconName: "Compass",
  featured: true,

  genrules: [
    "Each team shall consist of 2–4 members.",
    "Participants must report to the venue at least 15 minutes before the event starts.",
    "The decision of the event coordinators will be final and binding.",
    "Any form of malpractice, use of mobile phones, internet access, or unfair means during the event will result in immediate disqualification.",
    "Participants are expected to maintain discipline and follow the instructions given by the coordinators throughout the event.",
    "In case of any dispute, the organizing committee reserves the right to make the final decision."
  ],

  rounds: [
    {
      title: "Round 1 – Tech Quest",
      time: "10:00 AM – 12:40 PM",
      description:
        "Teams compete by answering electronics and technology-related questions to collect puzzle pieces and assemble the complete puzzle.",

      rules: [
        "Questions will be asked one at a time.",
        "Teams must raise their hands to answer.",
        "The first team recognized by the event coordinator will get the opportunity to answer.",
        "Teams will be given 10 seconds to respond after being selected.",
        "A correct answer earns one puzzle piece.",
        "An incorrect answer results in the puzzle piece being returned (if applicable), and the question may be passed to another team.",
        "Questions cover Electronics, Embedded Systems, IoT, AI & Machine Learning, Robotics, Communication Systems, and Current Technology Trends.",
        "Teams may attempt to assemble the puzzle only after collecting all six puzzle pieces.",
        "The first team to correctly assemble the complete puzzle qualifies for Round 2."
      ]
    },

    {
      title: "Round 2 – The Foundry",
      time: "01:30 PM – 02:30 PM",
      description:
        "Qualified teams design an innovative and technically feasible solution to a real-world problem using randomly assigned constraints.",

      rules: [
        "Qualified teams will draw one chit from each of the four bowls: User, Problem Statement, Core Technology, and Sensor.",
        "Before drawing a chit from each bowl, teams must successfully complete the assigned technical obstacle.",
        "Obstacle 1: Memory Tray – Identify and write the displayed electronic components in the correct order.",
        "Obstacle 2: Cup Stack – Arrange the given cups in the correct hierarchy within the allotted time.",
        "Obstacle 3: Dice Challenge – Roll two dice and complete the assigned technical challenge depending on the outcome.",
        "Obstacle 4: Flip the Bottle Challenge.",
        "Teams will have approximately 10 minutes to discuss and develop their solution.",
        "Teams must present their idea creatively using methods such as a block diagram, storytelling, or sketches on an A4 sheet."
      ]
    }
  ],

  coordinators: [
    {
      name: "Joseeca Anto Francis F",
      role: "Student Coordinator",
      phone: "+919566087977"
    },
    {
      name: "Dharunesh Varan R",
      role: "Student Coordinator",
      phone: "+916381777823"
    }
  ],

},
  {
  id: "wattage-war",
  name: "WATTAGE WAR",
  category: "Technical",
  roundsCount: 3,
  teamSize: "3 Members",
  timing: "10:20 AM – 02:30 PM",
  venue: "J23",
  iconName: "Zap",
  featured: true,

  genrules: [
    "Each team shall consist of 3 members.",
    "Participants must report to the venue before their allotted slot.",
    "Mobile phones are strictly prohibited during Rounds 1 and 2.",
    "During Round 3, one mobile phone per team is permitted only for scanning the QR codes used in the game.",
    "The decision of the judges and event coordinators will be final and binding.",
    "Participants are expected to maintain discipline throughout the event."
  ],

  rounds: [
    {
      title: "Round 1 – Track Path",
      time: "10:20 AM – 11:30 AM",
      description:
        "An icebreaker activity where one member acts out an electronics component or technical term while teammates identify it within the time limit.",

      rules: [
        "One member from each team draws an activity by lot.",
        "The selected participant explains or enacts an electronics component or technical term without revealing its name.",
        "Teammates must identify the correct term within the allotted time.",
        "Each question has a maximum time limit of 1 minute.",
        "Each team attempts 3 questions.",
        "Scoring is based on correct guesses and the speed of identification.",
        "Round is conducted in four slots.",
        "Mobile phones are not allowed."
      ]
    },

    {
      title: "Round 2 – Cubic Mechanism",
      time: "11:50 AM – 12:40 PM",
      description:
        "Shortlisted teams solve scrambled electronics-based questions in a competitive passing format.",

      rules: [
        "Only the shortlisted teams from Round 1 participate.",
        "Teams are seated in a semicircle facing the projector.",
        "Questions contain scrambled electronics-related terms.",
        "Each team gets 20 seconds to answer.",
        "If a team fails to answer within the time limit, the question is passed according to the specified rotation pattern.",
        "Questions alternate between forward and reverse passing order.",
        "Scoring is based on correct answers.",
        "Top-performing teams qualify for the final round."
      ]
    },

    {
      title: "Round 3 – Circuit Fix-It (Finale)",
      time: "01:30 PM – 02:30 PM",
      description:
        "Teams troubleshoot and repair a faulty electronic circuit using hints unlocked through QR-code mini games.",

      rules: [
        "Only the Top 5 shortlisted teams participate.",
        "Each team receives one faulty electronic circuit.",
        "Five QR codes are hidden around the venue.",
        "Each QR code unlocks a mini-game that reveals a troubleshooting hint.",
        "Only one mobile phone per team is allowed, solely for scanning QR codes.",
        "Teams must diagnose and repair the circuit using the collected hints.",
        "Scoring is based on repair time and the number of hints used.",
        "Fewer hints and faster completion receive higher scores.",
        "A sudden-death tie-breaker will be conducted if required."
      ]
    }
  ],

  coordinators: [
    {
      name: "Sarumathi",
      role: "Student Coordinator",
      phone: "+919489794855"
    },
    {
      name: "Kevin Lawrence",
      role: "Student Coordinator",
      phone: "+918220090546"
    }
  ],

},
{
  id: "cirquest",
  name: "CIRQUEST",
  category: "Technical",
  roundsCount: 2,
  teamSize: "2 - 3 Members",
  timing: "10:00 AM – 02:00 PM",
  venue: "J22",
  iconName: "CircuitBoard",
  featured: true,

  genrules: [
    "Each team must consist of 2–3 members.",
    "Participants must report to the venue at least 5 minutes before their allotted slot.",
    "Mobile phones, smart devices, AI tools, calculators with stored data, or internet access are not permitted unless specifically allowed by the event coordinators.",
    "Discussion or sharing answers with other teams is strictly prohibited.",
    "Teams must complete every round within the allotted time.",
    "In Round 2, only the components obtained during the auction may be used unless otherwise announced by the judges.",
    "Innovation is encouraged, provided it follows the event rules.",
    "The decision of the judges and event coordinators will be final and binding.",
    "Participants are expected to maintain discipline and respect the event volunteers throughout the competition."
  ],

  rounds: [
    {
      title: "Round 1 – One Truth, Two Lies",
      time: "10:00 AM – 12:30 PM",
      description:
        "Teams answer engineering-based multiple-choice questions by identifying the single correct answer among three options.",

      rules: [
        "Each question consists of three options: one correct answer and two incorrect answers.",
        "Questions cover Electronics, Electrical Engineering, Basic Science, Mathematics, Logical Reasoning, Engineering Aptitude, and Technology.",
        "Correct Answer: +5 Points.",
        "Incorrect Answer: −2 Points.",
        "Unanswered Question: 0 Points.",
        "The Top 8 teams with the highest scores qualify for Round 2.",
        "If scores are tied, the team finishing in the least amount of time will be ranked higher.",
        "If a tie still exists, a tie-breaker question will be conducted."
      ]
    },

    {
      title: "Round 2 – Circuit Auction",
      time: "01:00 PM – 02:00 PM",
      description:
        "Qualified teams bid for electronic components using virtual currency and build a working circuit using Tinkercad.",

      rules: [
        "Each shortlisted team receives ₹10,000 virtual currency.",
        "Teams participate in an auction for various electronic components.",
        "Components are grouped into Main Components, Sensors, Passive Components, Power Components, and Extra Components.",
        "Teams must strategically manage their virtual budget.",
        "After the auction, each team constructs any one circuit from the provided list using Tinkercad.",
        "Additional innovative features may be added to improve the circuit.",
        "Judging is based on working efficiency, correctness, innovation, remaining virtual balance, and time efficiency."
      ]
    }
  ],

  coordinators: [
    {
      name: "Vasanthan A",
      role: "Event Volunteer",
      phone: "+919442262487"
    },
    {
      name: "Sanjai S",
      role: "Event Volunteer",
      phone: "+919342480920"
    }
  ]
},
{
  id: "sync-or-sink",
  name: "SYNC OR SINK",
  category: "Technical",
  roundsCount: 2,
  teamSize: "2 Members",
  timing: "10:00 AM – 02:30 PM",
  venue: "E11",
  iconName: "Code2",
  featured: true,

  genrules: [
    "Participants must register as teams of two before the event begins.",
    "Any form of malpractice, including copying another team's code or receiving unauthorized external help, will result in immediate disqualification.",
    "Only one team member may perform the designated role at a time during each round.",
    "Teams are not allowed to communicate with or copy from other teams.",
    "Any violation of the rules may result in time penalties or disqualification at the judges' discretion.",
    "The decision of the judges and event coordinators will be final and binding."
  ],

  rounds: [
    {
      title: "Round 1 – MisCode",
      time: "10:00 AM – 12:00 PM",
      description:
        "Teams work together to identify and complete missing code segments in a given program using teamwork and observation.",

      rules: [
        "Each team consists of two members.",
        "A Python, Java, or C program with missing code segments will be provided.",
        "Missing code snippets will be displayed on a common board.",
        "Only one team member may approach the board at a time.",
        "The member visiting the board cannot carry a phone, paper, or pen.",
        "Team members must collaborate to identify the missing code.",
        "Teams must not copy from or communicate with other teams.",
        "Completed programs must be submitted to the coordinators.",
        "The team with the correct solution in the shortest time receives the highest score."
      ]
    },

    {
      title: "Round 2 – Code Wheel",
      time: "01:00 PM – 02:30 PM",
      description:
        "One teammate codes while the other spins a wheel that introduces live constraints, bonuses, penalties, and technical mini-tasks.",

      rules: [
        "One member is the Coder and the other is the Spinner.",
        "The Coder writes and edits the code but cannot touch the wheel.",
        "The Spinner controls the wheel and solves parallel technical mini-tasks.",
        "The Spinner verbally communicates the mini-task solution to the Coder.",
        "Teams are shown only the expected output and must recreate the program.",
        "Each problem has a time limit of approximately 20–25 minutes.",
        "The wheel spins every 5 minutes or at strategic moments.",
        "Wheel outcomes include coding constraints, bonuses, and penalties that must be followed immediately.",
        "Final scoring is based on correctness, adaptability, teamwork, and completion time."
      ]
    }
  ],

  coordinators: [
    {
      name: "Vincent Xavier F.R.",
      role: "Event Volunteer",
      phone: "+917305197580"
    },
    {
      name: "Richard E.J.",
      role: "Event Volunteer",
      phone: "+917708224476"
    }
  ]
},
{
  id: "bingo",
  name: "BINGO",
  category: "Technical",
  roundsCount: 2,
  teamSize: "1 - 2 Members",
  timing: "10:00 AM – 02:00 PM",
  venue: "D22",
  iconName: "Grid3X3",
  featured: false,

  genrules: [
    "Participants can register individually or as a team of two.",
    "Participants must report to the venue before their allotted slot.",
    "The decision of the event coordinators and judges will be final and binding.",
    "Participants are expected to maintain discipline throughout the event.",
    "Any malpractice or unfair means will lead to disqualification."
  ],

  rounds: [
    {
      title: "Round 1 – Who Am I?",
      time: "10:00 AM – 12:30 PM",
      description:
        "Participants solve 'Who Am I?' questions based on general engineering concepts using progressive clues.",

      rules: [
        "Each participant/team receives 12 'Who Am I?' questions.",
        "Each question contains four progressive clues.",
        "Questions are based on general engineering concepts.",
        "The participant/team with the highest number of correct answers qualifies for Round 2.",
        "Three teams from each slot will be shortlisted for the next round."
      ]
    },

    {
      title: "Round 2 – BINGO",
      time: "01:30 PM – 02:00 PM",
      description:
        "Teams arrange engineering-related answers on a Bingo sheet and mark the correct responses as questions are asked.",

      rules: [
        "Each team receives 25 answers corresponding to 25 questions.",
        "Teams must arrange the answers in a 5×5 Bingo grid before the round begins.",
        "Participants must write the corresponding question number beside each answer.",
        "Questions are asked one by one by the coordinators.",
        "Teams mark the correct answer on their Bingo sheet.",
        "A Bingo can be completed vertically, horizontally, or diagonally.",
        "The first team to complete a valid Bingo wins.",
        "Incorrect markings will result in deduction of marks.",
        "If two teams achieve Bingo simultaneously, Round 1 scores will be used to determine the winner."
      ]
    }
  ],

  coordinators: [
    {
      name: "Maran Francis S",
      role: "Event Coordinator",
      phone: "+919597553400"
    },
    {
      name: "Sancho L",
      role: "Event Volunteer",
      phone: "+917639755028"
    }
  ]
},
  {
  id: "pitchfire",
  name: "PITCHFIRE",
  category: "Technical",
  roundsCount: 2,
  teamSize: "1 - 3 Members",
  timing: "10:00 AM – 02:00 PM",
  venue: "E33",
  iconName: "Flame",
  featured: true,
  sponsor: true,
  genrules: [
    "Each team must consist of 1–3 members.",
    "Registration is online only.",
    "Teams must report a few minutes before their allotted presentation slot.",
    "Only the shortlisted 8–9 teams from Round 1 qualify for Round 2.",
    "The prototype presented in Round 2 must be the team's original work.",
    "The 4-minute pitch and 30-second challenge are strictly timed.",
    "Challenge chits cannot be exchanged, skipped, or redrawn.",
    "Original ideas only. Plagiarism will result in immediate disqualification.",
    "Participants must bring their own laptop or prototype hardware if required.",
    "No mobile phones are allowed during the judging rounds.",
    "The decision of the judges and event coordinators will be final and binding."
  ],

  rounds: [
    {
      title: "Round 1 – Idea Pitch Presentation",
      time: "10:00 AM – 12:30 PM",
      description:
        "Teams present their innovative idea before the judges, showcasing its technical feasibility, innovation, and practical application.",

      rules: [
        "Teams are grouped into presentation slots based on registrations.",
        "Each team gets 6 minutes for the presentation.",
        "A 4-minute Q&A session follows every presentation.",
        "Presentations are evaluated on clarity, innovation, delivery, and time management.",
        "Judges shortlist the top 8–9 teams for the final round.",
        "Teams must submit their PPT, idea brief, and prototype details before the event."
      ]
    },

    {
      title: "Round 2 – Business Pitch Challenge",
      time: "01:00 PM – 02:00 PM",
      description:
        "Shortlisted teams pitch their prototype as a business idea and immediately complete a surprise challenge drawn by lot.",

      rules: [
        "Only shortlisted teams participate.",
        "Each team gets 4 minutes for the business pitch.",
        "Judges may ask Shark Tank-style questions during the presentation.",
        "Immediately after the pitch, the team draws one challenge chit.",
        "Teams have exactly 30 seconds to complete the drawn challenge.",
        "Challenge chits include business, marketing, and creative tasks.",
        "Business viability, pitch quality, challenge completion, confidence, and creativity are considered for final scoring.",
        "Failure to complete within the allotted time may result in score deductions."
      ]
    }
  ],

  coordinators: [
    {
      name: "Jack Iniyan G",
      role: "Student Coordinator",
      phone: "+919384212815"
    },
    {
      name: "Ashokkumar A",
      role: "Student Coordinator",
      phone: "+919074066575"
    }
  ]
},{
  id: "technical-research-presentation",
  name: "TECHNICAL RESEARCH PRESENTATION",
  category: "Technical",
  roundsCount: 2,
  teamSize: "1 - 3 Members",
  timing: "10:30 AM – 01:30 PM",
  venue: "E31",
  iconName: "Presentation",
  featured: true,

  genrules: [
    "Each team may consist of 1–3 participants.",
    "The event is open to students of Engineering Colleges.",
    "Students from different institutions may form a single team.",
    "An individual can participate in only one team for this event.",
    "A team shall register only one technical presentation in a department.",
    "The same work should not be registered in multiple departments.",
    "Participants must carry their College ID Card.",
    "Participants should bring their presentation (PPT/PDF).",
    "Teams presenting prototypes must make necessary arrangements for demonstration.",
    "The decision of the judges and event coordinators will be final and binding."
  ],

  rounds: [
    {
      title: "Round 1 – Technical Research Presentation",
      time: "10:30 AM – 01:30 PM",
      description:
        "Participants present their research paper, project, prototype, or technical poster before the panel of judges.",

      rules: [
        "Teams may present a Research Paper, Project/Prototype, or Technical Poster.",
        "Participants may choose any technical topic related to AI&DS, CSE, IT, ECE, EEE, Mechanical Engineering, or interdisciplinary domains.",
        "Research papers should preferably follow IEEE format (6–15 pages).",
        "Project reports should be 3–10 pages describing the problem statement, methodology, implementation, results, and future scope.",
        "Poster presentations must include a one-page abstract.",
        "Each team is allotted 7 minutes for presentation.",
        "A 3-minute Question & Answer session follows every presentation.",
        "Participants must submit their abstract, presentation slides, and relevant documents during registration.",
        "A panel of judges evaluates every presentation.",
        "Evaluation is based on Technical Content & Innovation, Problem Identification, Methodology, Results, Presentation Skills, and Response to Questions."
      ]
    },

    {
      title: "Round 2 – Interdepartmental Finale",
      time: "After Shortlisting",
      description:
        "The top-performing teams from each department compete against one another for the overall championship.",

      rules: [
        "Only the top two teams from each department qualify for the final round.",
        "Shortlisted teams must be present on 08 August 2026.",
        "Finalists present before the judging panel.",
        "Three teams will be awarded prizes.",
        "The best presentations receive prizes and certificates.",
        "The decision of the judges is final and no appeals will be entertained."
      ]
    }
  ],

  coordinators: [
    {
      name: "Mithran S",
      role: "Student Coordinator",
      phone: "+919150153953"
    },
    {
      name: "Catherine Infanta M",
      role: "Student Coordinator",
      phone: "+919566049401"
    }
  ]
},
  {
  id: "game-of-chances",
  name: "GAME OF CHANCES",
  category: "Technical",
  roundsCount: 2,
  teamSize: "2 Members",
  timing: "10:00 AM – 02:00 PM",
  venue: "E11",
  iconName: "Dice6",
  featured: true,

  genrules: [
    "Each team must consist of 2 participants.",
    "Participants must report to the venue before their allotted slot.",
    "Only teams that successfully complete Round 1 qualify for Round 2.",
    "The use of mobile phones, smart devices, or any form of external assistance is strictly prohibited during the event.",
    "Any form of unfair practice or damage to the provided components will result in immediate disqualification.",
    "The decision of the judges and event coordinators will be final and binding."
  ],

  rounds: [
    {
      title: "Round 1 – Build the Digital Dice",
      time: "40 Minutes",
      description:
        "Teams build an electronic Random Number Generator (RNG) circuit capable of generating numbers from 0 to 9. The completed circuit serves as the Mission Controller for the final round.",

      rules: [
        "Each team must consist of 2 participants.",
        "No prior circuit knowledge is required.",
        "All necessary electronic components and instructions will be provided.",
        "Teams must successfully build and demonstrate a working RNG circuit within the allotted time.",
        "The completed RNG must generate random numbers from 0 to 9.",
        "Only teams that successfully complete Round 1 qualify for Round 2.",
        "The use of mobile phones or any external assistance is strictly prohibited."
      ]
    },

    {
      title: "Round 2 – The Final Second",
      time: "15 Minutes",
      description:
        "Using the RNG circuit built in Round 1, teams unlock classified missions, collect clues, determine the Bomb Deactivation Number, and disconnect the correct wire before time runs out.",

      rules: [
        "Only Round 1 qualifiers may participate.",
        "The Bomb Deactivation Setup and Instruction Manual will be provided.",
        "Each unique RNG number unlocks a classified mission.",
        "Successfully completing missions rewards teams with clues.",
        "All clues must be preserved to determine the correct Bomb Deactivation Number.",
        "If an RNG number repeats, the team must complete a Security Protocol Challenge.",
        "The Bomb Deactivation Number corresponds to a coloured wire in the Instruction Manual.",
        "Teams are allowed only ONE chance to unplug the correct wire.",
        "Disconnecting the wrong wire results in mission failure.",
        "The use of mobile phones, smart devices, or external assistance is strictly prohibited.",
        "Any unfair practice or damage to the provided components will result in immediate disqualification."
      ]
    }
  ],

  coordinators: [
    {
      name: "Priyanka",
      role: "Student Coordinator",
      phone: "+916281517075"
    },
    {
      name: "Tanya Merlin",
      role: "Student Coordinator",
      phone: "+918148923556"
    }
  ]
},
];
