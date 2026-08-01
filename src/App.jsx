import React, { useState, useEffect, useMemo, useRef } from 'react';
import heroCollage from './assets/hero_collage.png';
import registerBtn from './assets/register_btn.png';
import crestLogo from './assets/crest_logo.png';
import heroTitle from './assets/hero_title.png';
import wordmarkLogo from './assets/wordmark.png';
import scriptLeft from './assets/script_left.png';
import scriptRight from './assets/script_right.png';
import aboutPcb from './assets/about_pcb.png';
import blueprintSide from './assets/blueprint_side.png';
import heroDetails from './assets/hero_details.png';
import contactRibbon from './assets/contact_ribbon.png';

// ============================================================================
// 1. Data Definitions & Configuration
// ============================================================================

const config = {
  eventName: "SLICE",
  eventEdition: "v26",
  titleMain: "SLICE",
  titleSuffix: "’26",
  tagline: "A National Level Technical Symposium",
  department: "Loyola - ICAM College of Engineering and Technology",
  departmentShort: "Loyola - ICAM\nCollege of Engineering",
  college: "Loyola-ICAM College of Engineering and Technology",
  countdownTarget: "2026-08-22T09:00:00",
  eventDate: "22 August 2026",
  eventDay: "Saturday",
  eventTime: "9:00 AM Onwards",
  venue: "Main Auditorium",
  venueLine2: "LICET Campus, Chennai",
  registrationsOpen: "1 July 2026",
  registrationsClose: "15 August 2026",
  email: "slice2026@licet.edu.in",
  registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLSe_zgcUhYqafbPwu0mBx6p6vTcQ8wx2VaQLhhiAbaAq95Uc9w/viewform?embedded=true&pli=1",
  social: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com"
  },
  crestSrc: null,
  scriptLeft: "Where Circuits…",
  scriptRight: "…meet Possibilities",
  footerLine: "Be part of the legacy."
};

const events = [
  {
    id: "cirquest",
    name: "Cirquest",
    category: "technical",
    icon: "chip",
    prize: "₹5,000",
    prizeValue: 5000,
    blurb: "Calculate, debug and build functional ECE circuits.",
    description: "A circuit-based engineering quest to solve design hurdles and assemble systems.",
    rounds: [
      { title: "Round 1 — Breadboard Blitz", detail: "Calculate and build physical circuits within a time limit." },
      { title: "Round 2 — Loop Hunt", detail: "Solve clues to find hidden components across the campus and complete the design." }
    ],
    coordinators: ["Jenlin Anne", "Flora Jayaharini B"],
    contacts: ["+91 94864 09404"]
  },
  {
    id: "levelquest",
    name: "Level Quest '26",
    category: "technical",
    icon: "compass",
    prize: "₹5,000",
    prizeValue: 5000,
    blurb: "ECE trivia meets physical obstacles and prototype design.",
    description: "Level Quest '26 is a team-based challenge combining electronics trivia, hands-on obstacles, and creative prototype building.",
    rounds: [
      { title: "Round 1 — Tech Quest", detail: "Answer electronics, IoT, AI, and robotics questions to collect puzzle pieces. First to assemble the complete puzzle qualifies." },
      { title: "Round 2 — The Foundry", detail: "Complete physical obstacles (Memory Tray, Cup Stack) to draw chits and design a feasibility solution on an A4 sheet. 10 minutes." }
    ],
    coordinators: ["Joseeca Anto Francis F", "Dharunesh Varan R", "Sandolo Ramita S"],
    contacts: ["+91 91763 34470"]
  },
  {
    id: "syncorsink",
    name: "SYNC or Sink",
    category: "technical",
    icon: "code",
    prize: "₹5,000",
    prizeValue: 5000,
    blurb: "A collaborative coding game with live segment wheel spins.",
    description: "A high-stakes programming challenge where Coder (writes code) and Spinner (traces sub-tasks and spins options) collaborate live.",
    rounds: [
      { title: "Round 1 — [MisCode]", detail: "Dry-run and fill missing program segments displayed on the board. Shortest time wins. 30 minutes." },
      { title: "Round 2 — [Code Wheel]", detail: "Coder reproduces target output from scratch while Spinner dry-runs sub-tasks and spins a modifier wheel every 5 minutes." }
    ],
    coordinators: ["Vincent Xavier F.R.", "Richard E.J.", "Kingslin Xavier A.D.", "Hemant Nivash G.S."],
    contacts: ["+91 73823 06484"]
  },
  {
    id: "paper",
    name: "Technical Research Presentation",
    category: "technical",
    icon: "scroll",
    prize: "₹6,000",
    prizeValue: 6000,
    blurb: "Present your research findings to an expert technical panel.",
    description: "Showcase your academic, technical, or simulation research insights.",
    rounds: [
      { title: "Presentation", detail: "8 minutes per team — a 6-minute slide pitch followed by a 2-minute Q&A review." }
    ],
    coordinators: ["Tabitha Bennett", "Dhanya"],
    contacts: ["+91 94455 43926"]
  },
  {
    id: "pitchfire",
    name: "Pitch Fire",
    category: "technical",
    icon: "rocket",
    prize: "₹6,000",
    prizeValue: 6000,
    blurb: "Slide deck outline meets Shark-Tank elevator business pitch.",
    description: "PitchFire is a two-round event. Round 1 is a standard project presentation. Round 2 is a Shark-Tank-style elevator business pitch with optional challenge chits.",
    rounds: [
      { title: "Round 1 — Project Presentation", detail: "Standard stage project slide presentation and panel Q&A. 10 minutes slots." },
      { title: "Round 2 — Business Pitch", detail: "Shortlisted teams get 150 seconds to pitch their prototype as a business, followed by investor Q&A and optional challenge chits." }
    ],
    coordinators: ["Christina Rajakumari", "Geena Evans"],
    contacts: ["+91 98841 96824"]
  },
  {
    id: "wattagewar",
    name: "Wattage War",
    category: "technical",
    icon: "resistor",
    prize: "₹5,000",
    prizeValue: 5000,
    blurb: "Optimize power loading and component hardware budget.",
    description: "A circuit engineering challenge centered around low-power design, power budgeting, and load management.",
    rounds: [
      { title: "Round 1 — Power Audit", detail: "Optimize a digital ECE design under a strict power allocation budget." },
      { title: "Round 2 — Load Battle", detail: "Build and run a circuit to handle active fluctuating load tests." }
    ],
    coordinators: ["Jason Goldwin", "Annie Grace Menesa"],
    contacts: ["+91 94889 02270"]
  },
  {
    id: "bingo",
    name: "BINGO",
    category: "nontechnical",
    icon: "dice",
    prize: "₹4,000",
    prizeValue: 4000,
    blurb: "Solve connections and complete the bingo board.",
    description: "A fun ECE-themed puzzle board game where quick connection matching gets you BINGO.",
    rounds: [
      { title: "Round 1 — Connections", detail: "Solve vocabulary association riddles and tech connection boards." },
      { title: "Round 2 — Tech Bingo", detail: "The first to match ECE variables and solve clues on the bingo card wins." }
    ],
    coordinators: ["Sarmika Rufux", "Reno Joe Clement"],
    contacts: ["+91 63820 08709"]
  },
  {
    id: "chances",
    name: "Game of Chances",
    category: "nontechnical",
    icon: "dice",
    prize: "₹4,000",
    prizeValue: 4000,
    blurb: "Calculate odds, adapt to dice rolls and risk modifiers.",
    description: "A strategic game of probability, ECE puzzles, and high-stakes risk/reward choices.",
    rounds: [
      { title: "Round 1 — Prediction Pit", detail: "Calculate odds and wager on puzzle logic outcomes." },
      { title: "Round 2 — Dice Duel", detail: "Adapt to randomized modifiers and challenges on the game board." }
    ],
    coordinators: ["Melvin Raphael R", "Harish P"],
    contacts: ["+91 94877 31280"]
  }
];

const faqs = [
  {
    q: "Is lunch provided?",
    a: "Yes. Lunch is provided to all registered participants on the day of the symposium. Please carry your registration confirmation to collect your pass."
  },
  {
    q: "Is spot registration available?",
    a: "Spot registration is available for a limited number of seats, subject to availability on the day. We strongly recommend registering online before 15 August 2026 to guarantee your place."
  },
  {
    q: "Can I participate with different teammates for different events?",
    a: "Yes. Team composition is per event, so you may enter different events with different teammates. Do check that your event timings do not clash before registering for multiple events."
  },
  {
    q: "Are certificates provided?",
    a: "All participants receive a certificate of participation. Winners and runners-up receive merit certificates."
  },
  {
    q: "Who can participate?",
    a: "Students currently enrolled in any recognised engineering or science programme are welcome. Please carry a valid college ID card for verification at the registration desk."
  }
];

const navigationLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#events", label: "Events" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" }
];

// ============================================================================
// 2. Stateful Hooks & Helpers
// ============================================================================

function createPRNG(seed) {
  let current = seed;
  return () => {
    current = (current * 1664525 + 1013904223) % 4294967296;
    return current / 4294967296;
  };
}

const padZero = (num) => String(num).padStart(2, "0");
const formatTelLink = (phoneStr) => "tel:" + phoneStr.replace(/[^\d+]/g, "");

function useScrollReveal() {
  useEffect(() => {
    const revealTargets = Array.from(document.querySelectorAll(".rv"));
    if (typeof IntersectionObserver === "undefined") {
      revealTargets.forEach(el => el.classList.add("in"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    revealTargets.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function useCountdown(targetDateStr) {
  const targetTime = useMemo(() => new Date(targetDateStr).getTime(), [targetDateStr]);

  const calculateTimeLeft = () => {
    const difference = targetTime - Date.now();
    if (!Number.isFinite(difference) || difference <= 0) {
      return { d: 0, h: 0, m: 0, s: 0, done: true };
    }
    return {
      d: Math.floor(difference / 86400000),
      h: Math.floor(difference / 3600000) % 24,
      m: Math.floor(difference / 60000) % 60,
      s: Math.floor(difference / 1000) % 60,
      done: false
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  return timeLeft;
}

// ============================================================================
// 3. UI Structural Layout Components
// ============================================================================

function PaperCard({ variant = "a", tilt = 0, dx = 0, dy = 0, className = "", children, onClick, as: Component = "div" }) {
  const variantMaskClass = { a: "", b: "t-b", c: "t-c", w: "t-w" }[variant] || "";
  return (
    <Component
      className={`paper ${variantMaskClass} ${className}`.trim()}
      style={{
        "--tilt": `${tilt}deg`,
        "--dx": `${dx}px`,
        "--dy": `${dy}px`
      }}
      onClick={onClick}
    >
      <div className="paper-in">{children}</div>
    </Component>
  );
}

function PaperStack({ className = "", sheets, children }) {
  const stackSheets = sheets || [
    { variant: "b", tilt: -1.7, dx: -13, dy: 10 },
    { variant: "c", tilt: 1.5, dx: 12, dy: -7 }
  ];
  return (
    <div className={`stack ${className}`.trim()}>
      {stackSheets.map((sheet, index) => (
        <PaperCard key={index} {...sheet} className="sheet" />
      ))}
      {children}
    </div>
  );
}

function MotesGenerator() {
  const motes = useMemo(() => {
    const prng = createPRNG(20260822);
    return Array.from({ length: 22 }, (_, index) => ({
      id: index,
      left: prng() * 100,
      top: 20 + prng() * 80,
      size: 1.4 + prng() * 2.6,
      dur: 20 + prng() * 22,
      delay: prng() * 26,
      op: 0.25 + prng() * 0.4
    }));
  }, []);

  return (
    <div className="pg pg-motes" aria-hidden="true">
      {motes.map((mote) => (
        <span
          key={mote.id}
          className="mote"
          style={{
            left: `${mote.left}%`,
            top: `${mote.top}%`,
            width: `${mote.size}px`,
            height: `${mote.size}px`,
            opacity: mote.op,
            animation: `mote-rise ${mote.dur}s linear ${mote.delay}s infinite`
          }}
        />
      ))}
    </div>
  );
}

function SectionHeader({ children, id }) {
  return (
    <div className="orn-head rv" id={id}>
      <div className="orn-row">
        <Ornament />
        <span className="script">{children}</span>
        <Ornament flip />
      </div>
    </div>
  );
}

// ============================================================================
// 4. Vector SVG Components
// ============================================================================

const svgStyleDefaults = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

function Crest() {
  if (config.crestSrc) {
    return <img src={config.crestSrc} alt="Department crest" />;
  }
  return (
    <svg viewBox="0 0 60 74" {...svgStyleDefaults} strokeWidth="1.2" aria-hidden="true">
      <path d="M14 20 C4 30 4 48 14 60" strokeWidth="1.4" />
      <path d="M46 20 C56 30 56 48 46 60" strokeWidth="1.4" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <path d={`M${12 - i * 0.4} ${26 + i * 8} c-6 -3 -8 3 -4 6 c4 2 7 -2 4 -6`} />
          <path d={`M${48 + i * 0.4} ${26 + i * 8} c6 -3 8 3 4 6 c-4 2 -7 -2 -4 -6`} />
        </g>
      ))}
      <path d="M30 8 L46 14 V38 C46 52 38 60 30 66 C22 60 14 52 14 38 V14 Z" strokeWidth="1.4" />
      <path d="M22 30 h6 M32 30 h6" />
      <rect x="28" y="26" width="4" height="8" />
      <path d="M30 34 v6 M24 40 h12" />
      <circle cx="24" cy="40" r="1.6" />
      <circle cx="36" cy="40" r="1.6" />
      <path d="M30 20 v6" />
      <circle cx="30" cy="48" r="4" />
      <path d="M22 56 h16" />
    </svg>
  );
}

function Ornament({ flip }) {
  return (
    <svg
      className="orn-svg"
      width="150"
      height="26"
      viewBox="0 0 150 26"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      {...svgStyleDefaults}
      strokeWidth="1.05"
      aria-hidden="true"
    >
      <path style={{ "--len": 240 }} d="M26 13 C46 13 50 6 64 6 C74 6 76 13 84 13 C92 13 94 6 104 6 C118 6 122 13 140 13" />
      <path style={{ "--len": 240 }} d="M26 13 C46 13 50 20 64 20 C74 20 76 13 84 13 C92 13 94 20 104 20 C118 20 122 13 140 13" />
      <path style={{ "--len": 90 }} d="M26 13 C18 13 12 9 12 5 C12 2 15 1 17 3 C19 5 17 9 12 11 C7 13 4 17 6 21 C7.6 24 12 24 13.5 21" />
      <path style={{ "--len": 30 }} d="M84 8.6 L88.4 13 L84 17.4 L79.6 13 Z" />
      <circle style={{ "--len": 14 }} cx="64" cy="13" r="1.5" />
      <circle style={{ "--len": 14 }} cx="104" cy="13" r="1.5" />
      <circle style={{ "--len": 14 }} cx="146" cy="13" r="1.8" />
    </svg>
  );
}

function Glint({ className }) {
  return (
    <svg className={`glint ${className}`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0 Z" fill="currentColor" />
    </svg>
  );
}

function TitleFlourish() {
  return (
    <svg className="title-flourish" viewBox="0 0 340 30" {...svgStyleDefaults} strokeWidth="1.1" aria-hidden="true">
      <path d="M4 15 C40 15 54 6 84 6 C104 6 112 15 128 15" />
      <path d="M336 15 C300 15 286 6 256 6 C236 6 228 15 212 15" />
      <path d="M128 15 C144 15 150 22 170 22 C190 22 196 15 212 15" />
      <path d="M128 15 C144 15 150 8 170 8 C190 8 196 15 212 15" />
      <path d="M170 15 m-4 0 a4 4 0 1 0 8 0 a4 4 0 1 0 -8 0" />
      <path d="M4 15 C-4 15 -6 9 0 7" strokeWidth="0.9" />
      <path d="M336 15 C344 15 346 9 340 7" strokeWidth="0.9" />
      <circle cx="112" cy="15" r="1.6" />
      <circle cx="228" cy="15" r="1.6" />
    </svg>
  );
}

function CornerStamp({ className }) {
  return (
    <svg className={`corner ${className}`} viewBox="0 0 20 20" {...svgStyleDefaults} strokeWidth="1.2" aria-hidden="true">
      <path d="M19 1 H6 C3 1 1 3 1 6 V19" />
      <path d="M15 5 H8 C6.4 5 5 6.4 5 8 V15" strokeWidth="0.7" opacity="0.7" />
      <circle cx="2.6" cy="2.6" r="1.4" />
    </svg>
  );
}

function WatermarkGears() {
  return (
    <svg viewBox="0 0 400 400" {...svgStyleDefaults} strokeWidth="1.4" aria-hidden="true">
      <circle cx="200" cy="200" r="186" />
      <circle cx="200" cy="200" r="152" strokeWidth="1" />
      <circle cx="200" cy="200" r="58" />
      <circle cx="200" cy="200" r="30" strokeWidth="1" />
      {Array.from({ length: 16 }, (_, i) => {
        let r = (i * Math.PI * 2) / 16;
        let x1 = 200 + Math.cos(r) * 58;
        let y1 = 200 + Math.sin(r) * 58;
        let x2 = 200 + Math.cos(r) * 152;
        let y2 = 200 + Math.sin(r) * 152;
        let cx = 200 + Math.cos(r) * 172;
        let cy = 200 + Math.sin(r) * 172;
        return (
          <g key={i}>
            <path d={`M${x1} ${y1} L${x2} ${y2}`} />
            <circle cx={cx} cy={cy} r="9" strokeWidth="1" />
          </g>
        );
      })}
      {Array.from({ length: 8 }, (_, i) => {
        let r = (i * Math.PI * 2) / 8 + Math.PI / 8;
        let x = 200 + Math.cos(r) * 105;
        let y = 200 + Math.sin(r) * 105;
        return (
          <g key={i} transform={`translate(${x} ${y}) rotate(${(r * 180) / Math.PI})`}>
            <rect x="-16" y="-9" width="32" height="18" rx="2" strokeWidth="1" />
            <path d="M-16 0 h-14 M16 0 h14" strokeWidth="1" />
          </g>
        );
      })}
    </svg>
  );
}

function WatermarkClock() {
  return (
    <svg viewBox="0 0 400 400" {...svgStyleDefaults} strokeWidth="1.4" aria-hidden="true">
      <circle cx="200" cy="200" r="188" />
      <circle cx="200" cy="200" r="164" strokeWidth="0.9" />
      <circle cx="200" cy="200" r="92" strokeWidth="0.9" />
      {Array.from({ length: 32 }, (_, i) => {
        let r = (i * Math.PI * 2) / 32;
        let limit = i % 4 === 0 ? 150 : 158;
        return (
          <path
            key={i}
            d={`M${200 + Math.cos(r) * limit} ${200 + Math.sin(r) * limit} L${200 + Math.cos(r) * 164} ${200 + Math.sin(r) * 164}`}
            strokeWidth={i % 4 === 0 ? 1.4 : 0.8}
          />
        );
      })}
      {[0, 1, 2, 3].map((index) => {
        let rotationAngle = (index * Math.PI) / 2 - Math.PI / 2;
        let rightAngle = rotationAngle + Math.PI / 4;
        let leftAngle = rotationAngle - Math.PI / 4;
        return (
          <g key={index}>
            <path d={`M200 200 L${200 + Math.cos(rotationAngle) * 92} ${200 + Math.sin(rotationAngle) * 92}`} strokeWidth="1.1" />
            <circle cx={200 + Math.cos(rotationAngle) * 92} cy={200 + Math.sin(rotationAngle) * 92} r="4" />
            <path
              d={`M${200 + Math.cos(rightAngle) * 58} ${200 + Math.sin(rightAngle) * 58} C${200 + Math.cos(rotationAngle) * 78} ${200 + Math.sin(rotationAngle) * 78} ${200 + Math.cos(leftAngle) * 58} ${200 + Math.sin(leftAngle) * 58}`}
            />
          </g>
        );
      })}
      <circle cx="200" cy="200" r="16" />
      <path d="M200 200 L242 152 M200 200 L166 234" strokeWidth="1.8" />
    </svg>
  );
}

function CampusPlate() {
  return (
    <svg viewBox="0 0 1200 200" preserveAspectRatio="xMidYMax meet" {...svgStyleDefaults} strokeWidth="1.15" aria-hidden="true">
      <path d="M0 196 H1200" strokeWidth="1" />
      {/* Left campus building block */}
      <path d="M60 196 V108 H300 V196" />
      <path d="M60 108 L180 74 L300 108" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <path d={`M${84 + i * 44} 196 V140 a12 12 0 0 1 24 0 V196`} strokeWidth="0.8" />
        </g>
      ))}

      {/* Main middle cathedral entrance block */}
      <path d="M420 196 V96 H780 V196" strokeWidth="1.25" />
      <path d="M420 96 L600 44 L780 96" strokeWidth="1.25" />
      <path d="M540 196 V120 a60 60 0 0 1 120 0 V196" />
      <path d="M556 196 V132 a44 44 0 0 1 88 0 V196" strokeWidth="0.7" opacity="0.8" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path key={i} d={`M${446 + i * 22} 196 V132 a11 11 0 0 1 22 0 V196`} strokeWidth="0.7" opacity="0.85" />
      ))}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path key={"r" + i} d={`M${688 + i * 22} 196 V132 a11 11 0 0 1 22 0 V196`} strokeWidth="0.7" opacity="0.85" />
      ))}
      <path d="M566 44 V-4 H634 V44" strokeWidth="1.2" />
      <path d="M566 -4 L600 -46 L634 -4" strokeWidth="1.2" />
      <circle cx="600" cy="18" r="19" />
      <path d="M600 18 V6 M600 18 L609 24" strokeWidth="1" />
      <path d="M600 -46 V-64" strokeWidth="1" />
      <path d="M594 -64 h12 M600 -64 v-10" strokeWidth="0.9" />

      {/* Right campus building block */}
      <path d="M900 196 V108 H1140 V196" />
      <path d="M900 108 L1020 74 L1140 108" />
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M${924 + i * 44} 196 V140 a12 12 0 0 1 24 0 V196`} strokeWidth="0.8" />
      ))}

      {/* Ground foundations details */}
      {[24, 356, 848, 1176].map((x, idx) => (
        <g key={idx}>
          <path d={`M${x} 196 V170`} strokeWidth="1.1" />
          <path d={`M${x} 170 c-22 0 -30 -14 -22 -26 c-6 -16 12 -28 22 -20 c10 -8 28 4 22 20 c8 12 0 26 -22 26 z`} strokeWidth="0.9" />
        </g>
      ))}
      <path d="M540 196 h120 M528 190 h144 M516 184 h168" strokeWidth="0.7" opacity="0.7" />
    </svg>
  );
}

function HeroArt() {
  return (
    <svg viewBox="0 0 900 400" {...svgStyleDefaults} strokeWidth="1.15" aria-hidden="true" style={{ color: "var(--ink-2)" }}>
      <defs>
        <radialGradient id="tubeGlow" cx="50%" cy="42%" r="52%">
          <stop offset="0%" stopColor="#C98A3C" stopOpacity="0.38" />
          <stop offset="60%" stopColor="#C98A3C" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#C98A3C" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Decorative outlines: Antenna grid */}
      <g opacity="0.62">
        <path d="M64 344 L92 176 L120 344" />
        <path d="M92 176 V152" />
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} d={`M${74 + i * 3.6} ${306 - i * 32} L${110 - i * 3.6} ${306 - i * 32}`} strokeWidth="0.8" />
        ))}
        {[0, 1, 2, 3].map((i) => (
          <path key={i} d={`M${74 + i * 3.6} ${306 - i * 32} L${106 - i * 3.6} ${274 - i * 32} M${110 - i * 3.6} ${306 - i * 32} L${78 + i * 3.6} ${274 - i * 32}`} strokeWidth="0.55" />
        ))}
        <path d="M150 344 L168 236 L186 344" strokeWidth="0.9" opacity="0.8" />
        <path d="M168 236 V218" strokeWidth="0.8" />
      </g>

      {/* Oscilloscope instrument panel */}
      <g>
        <rect x="150" y="252" width="164" height="104" rx="5" />
        <rect x="163" y="264" width="94" height="70" rx="3" />
        {[1, 2, 3].map((i) => (
          <path key={"h" + i} d={`M163 ${264 + i * 17.5} h94`} strokeWidth="0.4" opacity="0.5" />
        ))}
        {[1, 2, 3, 4].map((i) => (
          <path key={"v" + i} d={`M${163 + i * 18.8} 264 v70`} strokeWidth="0.4" opacity="0.5" />
        ))}
        <path d="M165 316 q11 -42 22 0 t22 0 t22 0 t22 0" strokeWidth="1.3" />
        <circle cx="284" cy="282" r="12" />
        <circle cx="284" cy="282" r="3.4" />
        <path d="M284 270 v-4" />
        <circle cx="284" cy="318" r="12" />
        <circle cx="284" cy="318" r="3.4" />
        <path d="M292 310 l3 -3" />
        <path d="M150 344 h164" strokeWidth="0.7" />
        <path d="M170 356 v8 M294 356 v8" strokeWidth="1" />
      </g>

      {/* Vacuum tube glows and housing */}
      <ellipse cx="452" cy="176" rx="118" ry="130" fill="url(#tubeGlow)" stroke="none" />
      <g>
        <path d="M420 292 V128 C420 96 430 74 452 64 C474 74 484 96 484 128 V292 Z" strokeWidth="1.35" />
        <path d="M452 64 v-12" />
        <circle cx="452" cy="48" r="4.6" />
        <rect x="434" y="126" width="36" height="104" rx="2" strokeWidth="0.8" opacity="0.75" />
        <path d="M441 134 v88 M463 134 v88" strokeWidth="0.6" opacity="0.7" />
        <path d="M452 136 l-7 12 l14 16 l-14 16 l14 16 l-14 16 l7 10" strokeWidth="1.15" />
        <path d="M429 118 q23 -14 46 0" strokeWidth="0.6" opacity="0.6" />
        <path d="M418 292 h68 v30 a8 8 0 0 1 -8 8 h-52 a8 8 0 0 1 -8 -8 z" strokeWidth="1.25" />
        <path d="M418 302 h68 M418 312 h68" strokeWidth="0.55" opacity="0.7" />
        {[0, 1, 2, 3].map((i) => (
          <path key={i} d={`M${430 + i * 15} 330 v14`} strokeWidth="1.5" />
        ))}
      </g>

      {/* ECE categories plate labels list */}
      <g>
        {[
          ["COMMUNICATION", 0],
          ["V L S I", 1],
          ["EMBEDDED", 2],
          ["SIGNAL PROCESSING", 3]
        ].map(([label, idx], r) => {
          let yCoord = 300 + r * 20;
          let insetWidth = r * 6;
          return (
            <g key={label}>
              <rect x={326 + insetWidth} y={yCoord} width={248 - insetWidth * 2} height="18" rx="2" />
              <path d={`M${332 + insetWidth} ${yCoord} v18`} strokeWidth="0.6" opacity="0.7" />
              <text
                x={450}
                y={yCoord + 12.6}
                textAnchor="middle"
                fontFamily="'EB Garamond',Georgia,serif"
                fontSize="8.4"
                letterSpacing="1.6"
                fill="currentColor"
                stroke="none"
                opacity="0.85"
              >
                {label}
              </text>
            </g>
          );
        })}
      </g>

      {/* Steampunk Satellite Dish */}
      <g transform="translate(694 214) rotate(-26)">
        <ellipse cx="0" cy="0" rx="88" ry="60" strokeWidth="1.3" />
        <ellipse cx="0" cy="0" rx="64" ry="43" strokeWidth="0.65" opacity="0.8" />
        <ellipse cx="0" cy="0" rx="38" ry="26" strokeWidth="0.65" opacity="0.7" />
        <ellipse cx="0" cy="0" rx="14" ry="10" strokeWidth="0.65" opacity="0.6" />
        <path d="M-88 0 h176 M0 -60 v120" strokeWidth="0.5" opacity="0.55" />
        <path d="M-62 -42 L62 42 M-62 42 L62 -42" strokeWidth="0.4" opacity="0.4" />
        <path d="M0 0 L4 -74" strokeWidth="1.1" />
        <circle cx="4" cy="-78" r="7" strokeWidth="1.1" />
        <path d="M4 -85 v-8" strokeWidth="0.9" />
      </g>

      {/* Satellite platform support structure */}
      <g>
        <path d="M716 250 L716 328" strokeWidth="1.4" />
        <path d="M688 356 L716 328 L744 356" strokeWidth="1.2" />
        <path d="M700 342 h32" strokeWidth="0.7" />
        <path d="M676 356 h80" strokeWidth="0.8" />
      </g>

      {/* Mini component box */}
      <g opacity="0.8">
        <path d="M786 344 V300 C786 288 791 280 800 276 C809 280 814 288 814 300 V344 Z" strokeWidth="1" />
        <path d="M800 288 l-4 8 l8 9 l-8 9 l4 6" strokeWidth="0.8" />
        <path d="M784 344 h32 v14 h-32 z" strokeWidth="1" />
        {[0, 1, 2].map((i) => (
          <path key={i} d={`M${791 + i * 9} 358 v7`} strokeWidth="1.1" />
        ))}
      </g>

      {/* Schematic diagram snippet */}
      <g transform="translate(806 78) rotate(-14)" opacity="0.72">
        <rect x="-15" y="-13" width="30" height="26" rx="2.5" />
        <path d="M-15 -5 h30 M-15 4 h30" strokeWidth="0.5" opacity="0.7" />
        <path d="M-15 0 h-16 M15 0 h16" strokeWidth="1" />
        <rect x="-70" y="-11" width="39" height="22" rx="1.5" />
        <rect x="31" y="-11" width="39" height="22" rx="1.5" />
        {[1, 2].map((i) => (
          <g key={i}>
            <path d={`M${-70 + i * 13} -11 v22`} strokeWidth="0.45" opacity="0.7" />
            <path d={`M${31 + i * 13} -11 v22`} strokeWidth="0.45" opacity="0.7" />
          </g>
        ))}
        <path d="M0 -13 v-11" strokeWidth="0.9" />
        <path d="M-7 -24 q7 -8 14 0" strokeWidth="0.9" />
      </g>

      {/* Cloud fog lines details */}
      <g opacity="0.55" strokeWidth="0.9">
        {[[246, 122], [268, 108], [292, 128], [604, 96], [628, 84], [650, 104]].map(([x, y], r) => (
          <path key={r} d={`M${x} ${y} q5 -5 10 0 q5 -5 10 0`} />
        ))}
      </g>

      {/* Bottom ground wave accents */}
      <g opacity="0.5" strokeWidth="1">
        <path d="M40 372 c18 -22 52 -22 66 -4 c12 -22 52 -22 62 2 c22 -10 42 4 44 18" />
        <path d="M196 384 c14 -18 44 -18 56 -2 c14 -18 44 -14 50 6" />
        <path d="M556 380 c16 -22 50 -22 64 -4 c14 -20 48 -18 56 6 c20 -8 38 4 40 16" />
        <path d="M720 388 c14 -16 42 -16 54 -2" />
        <path d="M330 390 c18 -20 50 -20 64 -4 c14 -16 44 -14 52 8" />
      </g>
      <path d="M20 396 h860" strokeWidth="0.55" opacity="0.38" />
    </svg>
  );
}

function AboutArt() {
  return (
    <svg viewBox="0 0 260 200" {...svgStyleDefaults} strokeWidth="1.1" aria-hidden="true">
      <rect x="18" y="58" width="168" height="112" rx="4" strokeWidth="1.3" />
      <path d="M18 74 h168 M18 154 h168" strokeWidth="0.45" opacity="0.55" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path key={i} d={`M${34 + i * 26} 170 v10`} strokeWidth="1.2" />
      ))}
      <rect x="40" y="86" width="42" height="30" rx="2" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <path d={`M${46 + i * 10} 86 v-7`} strokeWidth="0.8" />
          <path d={`M${46 + i * 10} 116 v7`} strokeWidth="0.8" />
        </g>
      ))}
      <circle cx="120" cy="96" r="13" />
      <circle cx="120" cy="96" r="6" strokeWidth="0.7" />
      <path d="M120 83 v-8" strokeWidth="0.8" />
      <circle cx="156" cy="100" r="9" />
      <path d="M156 91 v-8" strokeWidth="0.8" />
      <path d="M34 136 h34 l8 -10 h30 l8 10 h44" strokeWidth="0.8" />
      <path d="M60 136 v14 M112 126 v-14" strokeWidth="0.6" opacity="0.7" />

      {/* Floating Feather Quill */}
      <g transform="translate(150 6) rotate(24)">
        <path d="M40 8 C14 24 -4 60 -6 100 C16 94 40 70 48 42 C52 28 50 16 40 8 Z" strokeWidth="1.2" />
        <path d="M36 16 c-16 22 -28 52 -32 78" strokeWidth="0.55" opacity="0.8" />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path key={i} d={`M${34 - i * 5} ${26 + i * 11} q-9 3 -14 12`} strokeWidth="0.45" opacity="0.7" />
        ))}
        <path d="-6 100 l-14 24" strokeWidth="1.2" />
      </g>
      <path d="M10 188 c40 -8 80 6 120 0 c40 -6 80 4 120 -2" strokeWidth="0.6" opacity="0.5" />
    </svg>
  );
}

function SectionTornScrapLeft() {
  return (
    <svg viewBox="0 0 200 160" {...svgStyleDefaults} strokeWidth="1.15" aria-hidden="true">
      <path d="M10 12 C56 4 128 6 186 14 C190 56 188 104 180 140 C120 152 56 150 14 138 C8 100 6 52 10 12 Z" strokeWidth="1.3" />
      <path d="M180 140 C158 140 146 126 150 112 C162 118 172 130 180 140 Z" strokeWidth="1.1" />
      <path d="M150 112 C160 118 170 128 180 140" strokeWidth="0.6" opacity="0.7" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <path key={i} d={`M28 ${38 + i * 17} h${i % 3 === 2 ? 78 : 132}`} strokeWidth="0.55" opacity="0.62" />
      ))}
      <path d="M28 24 h56" strokeWidth="1.1" />
      <path d="M34 130 h18 M60 130 h18" strokeWidth="0.8" />
      <path d="M52 122 v16 M60 122 v16" strokeWidth="1" />
    </svg>
  );
}

function SectionTornScrapRight() {
  return (
    <svg viewBox="0 0 220 130" {...svgStyleDefaults} strokeWidth="1.1" aria-hidden="true">
      <path d="M6 22 C50 8 132 10 212 20 C216 52 214 92 208 120 C140 128 62 126 12 116 C4 88 2 50 6 22 Z" strokeWidth="1.3" />
      <path d="M46 96 L70 44 L94 96" strokeWidth="1" />
      <path d="M58 70 h24" strokeWidth="0.7" />
      <path d="M70 44 v-14" strokeWidth="0.9" />
      <path d="M104 40 C118 52 118 78 104 90" strokeWidth="0.8" opacity="0.8" />
      <path d="M118 30 C138 48 138 82 118 100" strokeWidth="0.8" opacity="0.65" />
      <path d="M132 20 C158 44 158 86 132 110" strokeWidth="0.8" opacity="0.5" />
      <text x="164" y="72" fontFamily="'EB Garamond',serif" fontSize="13" fontStyle="italic" fill="currentColor" stroke="none">
        λ / 4
      </text>
    </svg>
  );
}

function SectionTornScrapBottom() {
  return (
    <svg viewBox="0 0 240 150" {...svgStyleDefaults} strokeWidth="1.1" aria-hidden="true">
      <path d="M14 26 C54 10 138 8 226 22 C228 54 224 94 218 122 C154 130 78 128 20 118 C12 90 10 52 14 26 Z" strokeWidth="1.3" />
      <path d="M110 50 a18 18 0 1 1 -36 0 a18 18 0 1 1 36 0" />
      <path d="M92 68 L76 118 H88 L82 76 Z" strokeWidth="1.3" />
      <path d="M74 60 C112 36 176 12 224 12" strokeWidth="0.55" opacity="0.75" />
      <path d="M96 74 C136 52 194 28 234 22" strokeWidth="0.55" opacity="0.6" />
      <path d="M172 20 L190 44" strokeWidth="0.9" />
      <path d="M182 15 L200 39" strokeWidth="0.9" />
      <path d="M212 10 C222 12 226 20 222 30" strokeWidth="1" />
      <path d="M4 110 C26 116 54 112 78 104" strokeWidth="0.7" opacity="0.7" />
    </svg>
  );
}

function MarginaliaFig1() {
  return (
    <svg viewBox="0 0 160 190" {...svgStyleDefaults} strokeWidth="1.1" aria-hidden="true">
      <path d="M20 20 h44 l4 -9 l8 18 l8 -18 l8 18 l4 -9 h44" />
      <path d="M140 20 v40 M20 20 v40" />
      <path d="M20 60 h50 M90 60 h50" />
      <path d="M70 46 v28 M90 46 v28" strokeWidth="1.3" />
      <path d="M20 60 v50 M140 60 v50" />
      <path d="M20 110 h44 M96 110 h44" />
      <circle cx="80" cy="110" r="16" />
      <path d="M74 104 l12 12 M74 116 l12 -12" strokeWidth="0.8" />
      <path d="M20 110 v46 h120 v-46" />
      <path d="M66 156 v10 M94 156 v10" strokeWidth="1.4" />
      <path d="M60 166 h12 M88 166 h12" strokeWidth="1.4" />
      <text x="80" y="186" textAnchor="middle" fontFamily="'EB Garamond',serif" fontSize="11" fontStyle="italic" fill="currentColor" stroke="none">
        fig. 1 — RC network
      </text>
    </svg>
  );
}

function MarginaliaFig2() {
  return (
    <svg viewBox="0 0 180 150" {...svgStyleDefaults} strokeWidth="1.1" aria-hidden="true">
      <path d="M60 30 L60 110 L124 70 Z" strokeWidth="1.25" />
      <path d="M20 50 h40 M20 90 h40 M124 70 h36" />
      <text x="68" y="54" fontFamily="'EB Garamond',serif" fontSize="14" fill="currentColor" stroke="none">
        −
      </text>
      <text x="68" y="96" fontFamily="'EB Garamond',serif" fontSize="14" fill="currentColor" stroke="none">
        +
      </text>
      <path d="M92 30 v-16 M92 110 v16" strokeWidth="0.8" />
      <path d="M30 50 v-28 h74 l4 -7 l7 14 l7 -14 l7 14 l4 -7 h20 v58" strokeWidth="0.85" />
      <circle cx="20" cy="50" r="2.2" strokeWidth="0.9" />
      <circle cx="20" cy="90" r="2.2" strokeWidth="0.9" />
      <circle cx="160" cy="70" r="2.2" strokeWidth="0.9" />
      <text x="90" y="146" textAnchor="middle" fontFamily="'EB Garamond',serif" fontSize="11" fontStyle="italic" fill="currentColor" stroke="none">
        fig. 2 — inverting amp
      </text>
    </svg>
  );
}

function MarginaliaFig3() {
  return (
    <svg viewBox="0 0 150 180" {...svgStyleDefaults} strokeWidth="1.05" aria-hidden="true">
      <path d="M14 16 h108 a6 6 0 0 1 6 6 v128 l-18 16 h-96 a6 6 0 0 1 -6 -6 z" strokeWidth="1.25" />
      <path d="M110 166 v-16 h18" strokeWidth="0.9" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <path key={i} d={`M26 ${44 + i * 16} h${i % 3 === 2 ? 58 : 84}`} strokeWidth="0.55" opacity="0.65" />
      ))}
      <path d="M26 28 h40" strokeWidth="1.2" />
      <path d="M96 4 v26 a9 9 0 0 1 -18 0 v-22 a5 5 0 0 1 10 0 v22" strokeWidth="1.5" opacity="0.9" />
    </svg>
  );
}

function MarginaliaFig4() {
  return (
    <svg viewBox="0 0 200 150" {...svgStyleDefaults} strokeWidth="1" aria-hidden="true">
      <g fill="currentColor" stroke="none" fontFamily="'EB Garamond',Georgia,serif">
        <text x="4" y="46" fontSize="30" fontStyle="italic">
          f
        </text>
        <text x="19" y="53" fontSize="17" fontStyle="italic">
          c
        </text>
        <text x="36" y="46" fontSize="26">
          =
        </text>
        <text x="102" y="34" fontSize="25" textAnchor="middle">
          1
        </text>
        <text x="102" y="72" fontSize="25" textAnchor="middle" fontStyle="italic">
          2πRC
        </text>
      </g>
      <path d="M66 41 H138" strokeWidth="1.5" />
      <g className="wave">
        <path d="M6 116 q10 -26 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0" strokeWidth="1.2" />
      </g>
      <path d="M6 138 h188" strokeWidth="0.5" opacity="0.6" />
      <path d="M6 96 v42" strokeWidth="0.5" opacity="0.6" />
    </svg>
  );
}

function MarginaliaFig5() {
  return (
    <svg viewBox="0 0 170 130" {...svgStyleDefaults} strokeWidth="1.15" aria-hidden="true">
      <rect x="38" y="28" width="94" height="74" rx="4" strokeWidth="1.3" />
      <path d="M52 42 h66 M52 54 h66" strokeWidth="0.5" opacity="0.5" />
      <circle cx="56" cy="40" r="3.4" strokeWidth="0.9" />
      <text x="86" y="76" textAnchor="middle" fontFamily="'EB Garamond',serif" fontSize="13" fontStyle="italic" fill="currentColor" stroke="none">
        ECE
      </text>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i} strokeWidth="1.3">
          <path d={`M${48 + i * 15} 28 v-14 h-6`} />
          <path d={`M${48 + i * 15} 102 v14 h6`} />
        </g>
      ))}
      <path d="M16 20 q8 -10 18 -6" strokeWidth="0.7" opacity="0.7" />
      <path d="M136 112 q10 8 20 4" strokeWidth="0.7" opacity="0.7" />
    </svg>
  );
}

const iconsMap = {
  code: <><path d="M14 12 L5 20 L14 28" /><path d="M26 12 L35 20 L26 28" /><path d="M22.5 9 L17.5 31" /></>,
  scroll: <><path d="M11 8 h18 a3 3 0 0 1 3 3 v18 a3 3 0 0 0 3 3 h-21 a3 3 0 0 1 -3 -3 v-18 a3 3 0 0 0 -3 -3 z" /><path d="M15 15 h11 M15 20 h11 M15 25 h7" strokeWidth="1" /></>,
  bomb: <><circle cx="18" cy="24" r="11" /><path d="M25 15 l4 -4" /><rect x="27.5" y="8.5" width="5" height="5" rx="1" transform="rotate(45 30 11)" /><path d="M30 8 c2 -5 7 -4 7 -8" /><path d="M13 20 a7 7 0 0 1 5 -4" strokeWidth="0.9" /></>,
  key: <><circle cx="14" cy="16" r="7" /><circle cx="14" cy="16" r="2.4" strokeWidth="0.9" /><path d="M19 21 L32 34" /><path d="M27 29 l4 -4 M24 26 l3.5 -3.5" /></>,
  gate: <><path d="M13 9 h9 a11 11 0 0 1 0 22 h-9 z" /><path d="M13 15 h-7 M13 25 h-7 M33 20 h7" /><circle cx="35" cy="20" r="0" /></>,
  dish: <><ellipse cx="18" cy="17" rx="12" ry="8" transform="rotate(-28 18 17)" /><ellipse cx="18" cy="17" rx="6" ry="4" transform="rotate(-28 18 17)" strokeWidth="0.8" /><path d="M20 12 L23 5" strokeWidth="0.9" /><circle cx="23.5" cy="4" r="2" strokeWidth="0.9" /><path d="M20 22 v10" /><path d="M13 36 L20 32 L27 36" /></>,
  rocket: <><path d="M20 5 c7 6 10 15 10 22 h-20 c0 -7 3 -16 10 -22 z" /><circle cx="20" cy="17" r="3.6" /><path d="M10 27 l-4 7 l7 -2 M30 27 l4 7 l-7 -2" /><path d="M16 27 v5 h8 v-5" strokeWidth="0.9" /><path d="M20 34 v4" strokeWidth="1.4" /></>,
  compass: <><circle cx="20" cy="20" r="13" /><path d="M25.5 14.5 L17.5 17.5 L14.5 25.5 L22.5 22.5 z" /><circle cx="20" cy="20" r="1.4" strokeWidth="0.8" /><path d="M20 7 v-3 M20 36 v-3 M7 20 h-3 M36 20 h-3" strokeWidth="0.9" /></>,
  resistor: <><path d="M4 20 h7 l3 -8 l5 16 l5 -16 l5 16 l3 -8 h4" /><circle cx="35" cy="20" r="1.6" strokeWidth="0.9" /><circle cx="4" cy="20" r="0" /></>,
  dice: <><rect x="7" y="7" width="26" height="26" rx="4" />{[[14, 14], [26, 14], [20, 20], [14, 26], [26, 26]].map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="1.9" fill="currentColor" strokeWidth="0" />)}</>,
  bulb: <><path d="M20 6 a10 10 0 0 1 6 18 v3 h-12 v-3 a10 10 0 0 1 6 -18 z" /><path d="M15 31 h10 M16.5 35 h7" /><path d="M17 24 l3 -6 l3 6" strokeWidth="0.9" /><path d="M20 2 v-0 M6 14 h-3 M34 14 h3 M9 5 l2 2 M31 5 l-2 2" strokeWidth="0.9" /></>,
  chip: <><rect x="11" y="11" width="18" height="18" rx="2" /><rect x="16" y="16" width="8" height="8" rx="1" strokeWidth="0.9" />{[0, 1, 2].map(e => <g key={e} strokeWidth="1"><path d={`M${15 + e * 5} 11 v-6`} /><path d={`M${15 + e * 5} 29 v6`} /><path d={`M11 ${15 + e * 5} h-6`} /><path d={`M29 ${15 + e * 5} h6`}/></g>)}</>,
  people: <><circle cx="14" cy="14" r="5" /><circle cx="27" cy="16" r="4.2" /><path d="M5 32 c0 -6 4 -10 9 -10 c5 0 9 4 9 10" /><path d="M23 32 c0 -5 3.5 -8.5 8 -8.5 c3.6 0 6 2.4 7 6" /></>,
  trophy: <><path d="M13 7 h14 v10 a7 7 0 0 1 -14 0 z" /><path d="M13 9 h-5 v3 a6 6 0 0 0 5 6" /><path d="M27 9 h5 v3 a6 6 0 0 1 -5 6" /><path d="M20 24 v6 M14 33 h12 M16 30 h8" /></>,
  cal: <><rect x="6" y="9" width="28" height="26" rx="3" /><path d="M6 17 h28" /><path d="M13 5 v7 M27 5 v7" /><path d="M13 23 h4 M23 23 h4 M13 29 h4 M23 29 h4" strokeWidth="1" /></>,
  pin: <><path d="M20 36 c0 0 -11 -12 -11 -20 a11 11 0 0 1 22 0 c0 8 -11 20 -11 20 z" /><circle cx="20" cy="16" r="4.4" /></>,
  clock: <><circle cx="20" cy="20" r="14" /><path d="M20 11 v9 l6 4" /></>
};

function EceIcon({ name, size = 34, sw = 1.25 }) {
  const iconNode = iconsMap[name] || iconsMap.chip;
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" {...svgStyleDefaults} strokeWidth={sw} aria-hidden="true">
      {iconNode}
    </svg>
  );
}

const socialIconsMap = {
  instagram: <path d="M3 3 h18 rx5 v18 rx5"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4.4" /><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" strokeWidth="0" /></path>,
  linkedin: <path d="M3 3 h18 rx3"><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7.5 10.5 v7 M7.5 7.2 v.1" /><path d="M11.6 17.5 v-7 M11.6 13.2 c0 -2 1.4 -2.9 2.8 -2.9 c1.6 0 2.4 1.1 2.4 3.1 v4.1" /></path>,
  youtube: <path d="M2 5 h20 rx4"><rect x="2" y="5" width="20" height="14" rx="4" /><path d="M10 9 L15 12 L10 15 z" /></path>
};

function SocialLink({ kind, href }) {
  const iconMarkup = socialIconsMap[kind];
  return (
    <a href={href} target="_blank" rel="noreferrer" aria-label={kind}>
      <svg width="19" height="19" viewBox="0 0 24 24" {...svgStyleDefaults} strokeWidth="1.4">
        {iconMarkup.props.children}
      </svg>
    </a>
  );
}

// ============================================================================
// 5. Page Subsections & Blocks
// ============================================================================

function HeaderSection() {
  const [activeHash, setActiveHash] = useState("#top");

  useEffect(() => {
    const scrollTargets = navigationLinks
      .map(link => link.href.slice(1))
      .map(id => document.getElementById(id))
      .filter(Boolean);

    if (!scrollTargets.length || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash("#" + entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    scrollTargets.forEach(target => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="topbar">
      <div className="topbar-in">
        <div className="crest">
          <img src={crestLogo} alt="LICET Crest Logo" className="crest-img" />
          <div className="crest-txt">{config.departmentShort}</div>
        </div>
        <div className="navstrip">
          {navigationLinks.map((link) => (
            <a key={link.href} href={link.href} className={activeHash === link.href ? "on" : ""}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="topbar-r">
          <div className="socials">
            <SocialLink kind="instagram" href={config.social.instagram} />
            <SocialLink kind="linkedin" href={config.social.linkedin} />
            <SocialLink kind="youtube" href={config.social.youtube} />
          </div>
          <a className="btn-img-wrap" href={config.registerUrl} target="_blank" rel="noreferrer">
            <img src={registerBtn} alt="Register Now" className="reg-btn-topbar" />
          </a>
        </div>
      </div>
    </div>
  );
}

function CountdownTimer() {
  const timer = useCountdown(config.countdownTarget);
  const cells = [
    [timer.d, "Days"],
    [padZero(timer.h), "Hours"],
    [padZero(timer.m), "Minutes"],
    [padZero(timer.s), "Seconds"]
  ];

  return (
    <div className="countwrap">
      <div className="count-lbl">
        {timer.done ? "The symposium has begun" : "Counting down to the day"}
      </div>
      <div className="count-grid">
        {cells.map(([val, label]) => (
          <div className="count-cell" key={label}>
            <div className="count-n">{val}</div>
            <div className="count-u">{label}</div>
          </div>
        ))}
      </div>
      <div className="count-note">
        {timer.done ? `Live now — ${config.venue}` : `Registrations close ${config.registrationsClose}`}
      </div>
    </div>
  );
}

function HeroBlock() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-art">
          <img src={scriptLeft} alt="Connecting Ideas... Creating Impact..." className="hero-script-img l" />
          <img src={scriptRight} alt="Circuits meet Possibilities" className="hero-script-img r" />
          <img src={heroCollage} alt="Steampunk ECE Lab Collage" className="hero-collage-img" />
        </div>
        <div className="hero-title-img-wrap">
          <Glint className="g1" />
          <Glint className="g2" />
          <Glint className="g3" />
          <Glint className="g4" />
          <img src={heroTitle} alt="SLICE '26 Title" className="hero-title-img" />
        </div>
        <div className="hero-details-wrap">
          <img src={heroDetails} alt="Event Details Ribbon" className="hero-details-img" />
        </div>
      </div>
    </section>
  );
}



function AboutBlock() {
  return (
    <section className="sec" id="about" style={{ paddingTop: 20 }}>
      <div className="wm wm-spin" aria-hidden="true">
        <WatermarkGears />
      </div>
      <div className="wrap">
        <PaperCard variant="a" className="about-paper about rv">
          <div className="about-grid">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <h2 className="script" style={{ marginBottom: 18 }}>About Slice'26</h2>
              <p style={{ fontSize: 16.5, lineHeight: 1.6, marginBottom: 20 }}>
                SLICE'26 is the signature technical symposium of the Department of Electronics & Communication Engineering, a platform that brings together innovation, knowledge and creativity. Join us to explore, compete and be inspired in the ever-evolving world of technology.
              </p>
              <a className="btn-img-wrap" href={config.registerUrl} target="_blank" rel="noreferrer">
                <img src={registerBtn} alt="Register Now" className="reg-btn-body" style={{ width: 180 }} />
              </a>
            </div>
            <div className="about-art">
              <img src={aboutPcb} alt="Steampunk Oscilloscope Sketch" className="about-pcb-img" />
            </div>
          </div>
        </PaperCard>
      </div>
    </section>
  );
}

function EventDetailModal({ event, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  if (!event) return null;

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={event.name} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <PaperCard variant="w" className="modal-paper">
        <button className="close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="modal-head">
          <div style={{ display: "flex", justifyContent: "center", color: "var(--accent)" }}>
            <EceIcon name={event.icon} size={42} />
          </div>
          <h3>{event.name}</h3>
        </div>
        <p className="modal-desc">{event.description}</p>
        <div className="blk">
          <div className="blk-h">Format</div>
          {event.rounds.map((round, idx) => (
            <div className="round" key={idx}>
              <span className="round-n">{padZero(idx + 1)}</span>
              <div>
                <b>{round.title}</b>
                <span>{round.detail}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="blk">
          <div className="blk-h">Student Coordinators</div>
          <div className="chips">
            {event.coordinators.map((name) => (
              <span className="chip" key={name}>
                {name}
              </span>
            ))}
          </div>
        </div>
        <div className="blk">
          <div className="blk-h">Contact</div>
          <div className="chips">
            {event.contacts.map((contact) => (
              <a className="chip chip-tel" key={contact} href={formatTelLink(contact)}>
                {contact}
              </a>
            ))}
          </div>
        </div>
        <div className="modal-foot">
          <span>Entries close {config.registrationsClose}</span>
          <a className="btn-img-wrap" href={config.registerUrl} target="_blank" rel="noreferrer">
            <img src={registerBtn} alt="Register Now" className="reg-btn-modal" />
          </a>
        </div>
      </PaperCard>
    </div>
  );
}

function EventsCatalogBlock() {
  const [modalEvent, setModalEvent] = useState(null);
  const cardsTilts = ["a", "b", "c"];

  return (
    <section className="sec" id="events">
      <div className="wm wm-spin" aria-hidden="true">
        <WatermarkClock />
      </div>
      <div className="wrap">
        <SectionHeader>Our Events</SectionHeader>
        <div className="ev-grid rv">
          {events.map((item, idx) => (
            <PaperCard
              key={item.id}
              as="button"
              variant={cardsTilts[idx % 3]}
              tilt={idx % 2 ? 0.6 : -0.6}
              className="ev"
              onClick={() => setModalEvent(item)}
            >
              <CornerStamp className="tl" />
              <CornerStamp className="br" />
              <EceIcon name={item.icon} size={36} />
              <h3>{item.name}</h3>
              <span className="ev-more">Read More →</span>
            </PaperCard>
          ))}
        </div>
      </div>
      {modalEvent && <EventDetailModal event={modalEvent} onClose={() => setModalEvent(null)} />}
    </section>
  );
}

function FaqBlock() {
  const [activeFaqIdx, setActiveFaqIdx] = useState(0);

  return (
    <section className="sec" id="faq">
      <div className="wrap">
        <SectionHeader>Frequently Asked</SectionHeader>
        <PaperStack className="faq-wrap rv" sheets={[{ variant: "b", tilt: -0.5, dx: -10, dy: 8 }, { variant: "c", tilt: 0.5, dx: 10, dy: -6 }]}>
          <PaperCard variant="w" tilt={0.25}>
            {faqs.map((faq, idx) => (
              <div className={`faq-item ${activeFaqIdx === idx ? "open" : ""}`} key={faq.q}>
                <button
                  className="faq-q"
                  onClick={() => setActiveFaqIdx(activeFaqIdx === idx ? -1 : idx)}
                  aria-expanded={activeFaqIdx === idx}
                >
                  <h3>{faq.q}</h3>
                  <span className="plus" aria-hidden="true" />
                </button>
                <div className="faq-a">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </PaperCard>
        </PaperStack>
      </div>
    </section>
  );
}

function ContactBlock() {
  return (
    <section className="sec" id="contact" style={{ paddingBottom: 40, paddingTop: 10 }}>
      <div className="wrap">
        <SectionHeader>Contact Us</SectionHeader>
        <div className="contact-ribbon-container">
          <div className="contact-ribbon-inner">
            <p className="script contact-ribbon-title">For queries, reach out to our Student Coordinators</p>
            <div className="contact-ribbon-links">
              <div className="contact-ribbon-item">
                <span className="contact-label">Shwithin:</span>
                <a href="tel:+919500128440" className="contact-value">+91 95001 28440</a>
              </div>
              <div className="contact-ribbon-divider" aria-hidden="true">|</div>
              <div className="contact-ribbon-item">
                <span className="contact-label">Sathesh:</span>
                <a href="tel:+919345451604" className="contact-value">+91 93454 51604</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterBlock() {
  return (
    <footer className="footer">
      <div className="campus" aria-hidden="true">
        <CampusPlate />
      </div>
      <div className="wrap">
        <div className="footer-in">
          <div className="crest">
            <Crest />
            <div className="crest-txt">{config.departmentShort}</div>
          </div>
          <div className="footer-mid">
            <div className="script">{config.footerLine}</div>
            <p>
              <a href={`mailto:${config.email}`}>{config.email}</a>
            </p>
            <p>
              {config.venue}, {config.venueLine2} · {config.eventDate}
            </p>
          </div>
          <div className="socials">
            <SocialLink kind="instagram" href={config.social.instagram} />
            <SocialLink kind="linkedin" href={config.social.linkedin} />
            <SocialLink kind="youtube" href={config.social.youtube} />
          </div>
        </div>
        <div className="footer-fine">
          Registrations open {config.registrationsOpen} · close {config.registrationsClose} — © {new Date().getFullYear()} {config.college}
        </div>
      </div>
    </footer>
  );
}

// ============================================================================
// 6. Main App Shell Component
// ============================================================================

export default function App() {
  useScrollReveal();

  return (
    <div className="slice">
      {/* Dynamic Background Overlays & Particle generator */}
      <div className="pg pg-base" aria-hidden="true" />
      <div className="pg pg-mottle" aria-hidden="true" />
      <div className="pg pg-stain" aria-hidden="true" />
      <div className="pg pg-splat" aria-hidden="true" />
      <div className="pg pg-fibre" aria-hidden="true" />
      <div className="pg pg-vig" aria-hidden="true" />
      <div className="pg pg-edge" aria-hidden="true" />
      <MotesGenerator />

      <div className="sl-site">
        {/* Torn paper corner scraps */}
        <div className="scrap sc-tl" aria-hidden="true">
          <SectionTornScrapLeft />
        </div>
        <div className="scrap sc-tr" aria-hidden="true">
          <SectionTornScrapRight />
        </div>
        <div className="scrap sc-bl" aria-hidden="true">
          <SectionTornScrapLeft />
        </div>
        <div className="scrap sc-br" aria-hidden="true">
          <SectionTornScrapBottom />
        </div>

        {/* Marginalia blue prints */}
        <div className="marg m1 float-a" aria-hidden="true">
          <img src={blueprintSide} alt="Circuit Diagram Notebook Page" className="blueprint-side-img" />
        </div>
        <div className="marg m2 float-b" aria-hidden="true">
          <MarginaliaFig3 />
        </div>
        <div className="marg m3 float-a" aria-hidden="true">
          <MarginaliaFig2 />
        </div>
        <div className="marg m4 float-b" aria-hidden="true">
          <MarginaliaFig4 />
        </div>
        <div className="marg m5 float-a" aria-hidden="true">
          <MarginaliaFig5 />
        </div>

        {/* Structural Sections */}
        <HeaderSection />
        <HeroBlock />
        <div className="dot-rule" aria-hidden="true" />
        <AboutBlock />
        <div className="dot-rule" aria-hidden="true" />
        <EventsCatalogBlock />
        <div className="dot-rule" aria-hidden="true" />
        <FaqBlock />
        <div className="dot-rule" aria-hidden="true" />
        <ContactBlock />
        <FooterBlock />
      </div>
    </div>
  );
}
