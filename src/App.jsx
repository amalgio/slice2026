import React, { useState, useEffect } from 'react';
import heroCollage from './assets/hero_collage.jpg';
import aboutPcb from './assets/about_pcb.jpg';
import universityFooter from './assets/university_footer.jpg';
import blueprintSide from './assets/blueprint_side.jpg';

// -------------------------------------------------------------
// SLICE v26 Symposium Events Catalog
// -------------------------------------------------------------
const eventsData = [
  {
    id: "coding",
    title: "Code-X",
    category: "technical",
    categoryLabel: "Technical",
    prize: "₹5,000",
    icon: "fa-solid fa-code",
    desc: "Welcome to CODEX, a high-energy coding showdown where logic, speed, and creativity collide. Step in, solve challenges, and prove you’ve got what it takes to outcode the rest!",
    flow: "Round 1 – Code Crackers (Prelims): A fast-paced pen-and-paper challenge where you’ll tackle 15 tricky numeric and symbolic programming puzzles in just 30 minutes. Round 2 – Code Sprint (Finals): A high-intensity coding showdown. Solve as many output-based programming tasks as you can in 40 minutes.",
    coordinators: "Amar NG, Yobin S, TEO ALLEN XAVIER",
    contacts: "+91 7382306484"
  },
  {
    id: "paper",
    title: "Paper Presentation",
    category: "technical",
    categoryLabel: "Technical",
    prize: "₹6,000",
    icon: "fa-solid fa-file-invoice",
    desc: "Welcome to Paper Presentation, the ultimate platform to showcase your innovative research and project ideas. This event empowers participants to present their academic and technical insights, setting the stage for breakthroughs in technology, science, and engineering.",
    flow: "Each team will present their paper/project based on prior research, journal, or original work. A maximum of 8 minutes will be allotted per team, including 2 minutes for live Q&A. Judges will evaluate based on specific criteria.",
    coordinators: "Jenlin Anne, Flora Jayaharini B",
    contacts: "+91 9486409404, +91 9445543926"
  },
  {
    id: "bytebomb",
    title: "Byte The Bomb",
    category: "technical",
    categoryLabel: "Technical",
    prize: "₹5,000",
    icon: "fa-solid fa-bomb",
    desc: "60 Minutes. One Bomb. Cut the Right Wire — or Boom.",
    flow: "Round 1: Build the Digital Dice: Your task is to build a Random Number Generator (RNG) circuit within 45 minutes using standard instructions and support. Round 2: The Circuit Chase: Use your RNG dice to navigate a custom board game, land on hidden trap tiles, solve ECE puzzles to earn defusal clues, and cut the correct wire.",
    coordinators: "Arun Kumar, Melvin Raphael R, Harish P",
    contacts: "+91 9487731280"
  },
  {
    id: "cipher",
    title: "Cipher Odyssey",
    category: "technical",
    categoryLabel: "Technical",
    prize: "₹5,000",
    icon: "fa-solid fa-key",
    desc: "Decode. Dominate. Defy the darkness. A decryption and escape-room style ECE challenge.",
    flow: "Teams of 3 to 4 are locked in a room with a laptop. Using local CMD commands and text files, teams must solve 3 decoding logic puzzles. On success, an escape phrase is revealed. Winners are decided by timing.",
    coordinators: "Ram Siddhaarth, Manikandan, Fauzia Diya",
    contacts: "+91 9361317271"
  },
  {
    id: "astrologiq",
    title: "Astro Logiq",
    category: "technical",
    categoryLabel: "Technical",
    prize: "₹5,000",
    icon: "fa-solid fa-circle-nodes",
    desc: "ASTRO LOGIQ is an engaging digital logic maze challenge that tests participants’ ability to trace and solve logic gate sequences.",
    flow: "Round 1: Signal Uplink (Logic Maze): Navigate through sequential logic gates using binary inputs. Points are awarded for accuracy and speed. Round 2: Orbital Auction: Bidding and purchasing specific gates using team points to build a logic circuit for a given ECE problem statement.",
    coordinators: "Harini JS, Bala Mani Bharathi A, Jagadeeshwaran M",
    contacts: "+91 9176334470"
  },
  {
    id: "cosmoconnect",
    title: "Cosmo-Connect",
    category: "technical",
    categoryLabel: "Technical",
    prize: "₹5,000",
    icon: "fa-solid fa-satellite-dish",
    desc: "A fun and competitive circuit-building event with a twist — teams must first collect the correct components through enactment-based clues and then race to construct a working circuit.",
    flow: "Round 1: Charades-based component collection (3 mins limit). Points awarded per correct component gathered. Round 2: Top 6 teams build and simulate a given circuit using P-Spice software.",
    coordinators: "Mosay Calebian, Archana",
    contacts: "+91 8807882107, +91 9042098603"
  },
  {
    id: "lunarlaunch",
    title: "Lunar Launch",
    category: "technical",
    categoryLabel: "Technical",
    prize: "₹6,000",
    icon: "fa-solid fa-rocket",
    desc: "An exclusive platform for aspiring innovators to pitch their prototypes or ideas, tackle real-world problems, and showcase entrepreneurial thinking.",
    flow: "Round 1: Idea/Prototype Pitch (8 minutes: 6 mins presentation + 2 mins Q&A). Top 5 teams make it to the finals. Round 2: Business Battle where teams present a marketing strategy, revenue model, and implementation roadmap.",
    coordinators: "Christina Rajakumari, Geena Evans",
    contacts: "+91 9884196824"
  },
  {
    id: "stellarquest",
    title: "Stellar Quest",
    category: "technical",
    categoryLabel: "Technical",
    prize: "₹5,000",
    icon: "fa-solid fa-compass",
    desc: "Stellar Quest is a space-themed ECE treasure hunt and pitching challenge testing logical reasoning, coding, and electronics.",
    flow: "Round 1: Written test on Aptitude, Circuit Theory, and C/Python coding. Round 2: Qualifiers solve clues to find ECE components (Input, Processor, Output) across campus, design an SDG-aligned problem statement, and pitch a solution.",
    coordinators: "Tabitha Bennett, Dhanya",
    contacts: "+91 9150232577, +91 8925653833"
  },
  {
    id: "wirewarz",
    title: "Wire Warz",
    category: "technical",
    categoryLabel: "Technical",
    prize: "₹5,000",
    icon: "fa-solid fa-network-wired",
    desc: "WIREWARZ is designed to test circuit design, analytical skills, teamwork, and communication in a competitive format.",
    flow: "Round 1: Circuit Design Challenge: Calculate a missing resistor value using electrical concepts and physically build it using provided components. Round 2: A surprise mystery round testing ECE instincts.",
    coordinators: "Jason Goldwin, Annie Grace Menesa",
    contacts: "+91 9488902270, +91 8925209481"
  },
  {
    id: "bingonauts",
    title: "Bingo-Nauts",
    category: "non-technical",
    categoryLabel: "Non-Technical",
    prize: "₹4,000",
    icon: "fa-solid fa-dice",
    desc: "BINGO-NAUTS is a fun-filled technical game event consisting of ECE connection riddles and custom ECE-themed Bingo boards.",
    flow: "Round 1: Connections: Solve picture connection grids, ECE riddles, and word connect games. Round 2: Bingo: Teams arrange ECE answers on a 5x5 Bingo board, striking them off as questions are solved. First squads to strike Bingo win.",
    coordinators: "Sarmika Rufux, Reno Joe Clement",
    contacts: "+91 6382008709"
  },
  {
    id: "aiworkshop",
    title: "Generative AI Masterclass",
    category: "workshop",
    categoryLabel: "Workshop",
    prize: "Certificate of Mastery",
    icon: "fa-solid fa-brain",
    desc: "An intensive, hands-on workshop led by industry experts. Learn the fundamentals of Large Language Models (LLMs), prompt engineering, and building AI tools.",
    flow: "Runs from 10:30 AM to 03:00 PM (with lunch break). Participants will receive physical certificates signed by mentors. Includes free API credits for hands-on laboratory work.",
    coordinators: "Dr. K. Srinivasan, S. Sneha",
    contacts: "+91 98765 78901, +91 87654 98765"
  }
];

export default function App() {
  const [filter, setFilter] = useState('all');
  const [activeModalEvent, setActiveModalEvent] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Countdown Timer state
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });
  const [isTimerExpired, setIsTimerExpired] = useState(false);

  useEffect(() => {
    const targetDate = new Date("Aug 22, 2026 09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsTimerExpired(true);
        clearInterval(interval);
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: days.toString().padStart(2, '0'),
          hours: hours.toString().padStart(2, '0'),
          minutes: minutes.toString().padStart(2, '0'),
          seconds: seconds.toString().padStart(2, '0')
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const filteredEvents = filter === 'all' 
    ? eventsData 
    : eventsData.filter(e => e.category === filter);

  return (
    <div className="app-container">
      {/* Decorative blueprint sheets at margins (desktop only) */}
      <img src={blueprintSide} alt="Schematic decoration" className="blueprint-side-dec left-dec" />
      <img src={blueprintSide} alt="Schematic decoration" className="blueprint-side-dec right-dec" />

      {/* 1. Header Navigation Bar */}
      <header className="navbar">
        <div className="nav-container">
          <div className="nav-logo-area">
            <div className="ece-shield-logo">
              <i className="fa-solid fa-compass-drafting"></i>
            </div>
            <div className="ece-text-signature">
              <span className="dept-title">DEPARTMENT OF</span>
              <span className="dept-sub">ELECTRONICS & COMMUNICATION ENGINEERING</span>
            </div>
          </div>

          {/* Central parchment menu */}
          <nav className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
            <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#events" onClick={() => setMobileMenuOpen(false)}>Events</a>
            <a href="#why-join" onClick={() => setMobileMenuOpen(false)}>Why Join</a>
            <a href="#timeline" onClick={() => setMobileMenuOpen(false)}>Timeline</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </nav>

          <div className="nav-right-area">
            <div className="nav-socials">
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSenQDNZ2I51vD8Ohyj0ytLwAIxw5GhNUY7WmZ2LJ7CnfSzbkg/viewform?usp=dialog" target="_blank" rel="noreferrer" className="nav-cta">
              REGISTER NOW →
            </a>
            <button className="mobile-toggle" aria-label="Toggle menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <main>
        <section id="home" className="hero">
          {/* Background Script Messages */}
          <div className="hero-script-left cursive-script">
            Connecting Ideas...<br />
            Creating Impact...
          </div>
          <div className="hero-script-right cursive-script">
            Where Circuits meet<br />
            Possibilities
          </div>

          <div className="hero-content">
            {/* Collage central artwork */}
            <div className="hero-collage-wrapper">
              <img src={heroCollage} alt="Steampunk lab collage" className="hero-collage-img" />
              <div className="cloud-fog-overlay"></div>
            </div>

            <div className="hero-title-area">
              <p className="hero-organizer">DEPARTMENT OF ELECTRONICS & COMMUNICATION ENGINEERING</p>
              <h1 className="hero-title">SLICE v26</h1>
              <p className="hero-subtitle">A National Level Technical Hackathon & Symposium</p>
            </div>

            {/* Stitched date banner ribbon */}
            <div className="date-banner-ribbon double-border">
              <div className="ribbon-item">
                <i className="fa-solid fa-calendar-days"></i>
                <span>22 AUGUST 2026</span>
              </div>
              <div className="ribbon-divider"></div>
              <div className="ribbon-item">
                <i className="fa-solid fa-location-dot"></i>
                <span>MAIN AUDITORIUM, LICET</span>
              </div>
              <div className="ribbon-divider"></div>
              <div className="ribbon-item">
                <i className="fa-solid fa-clock"></i>
                <span>9:00 AM ONWARDS</span>
              </div>
            </div>

            {/* Countdown Flip Box Timer */}
            <div className="countdown-container">
              {isTimerExpired ? (
                <div className="timer-expired-msg">THE SYMPOSIUM HAS STARTED!</div>
              ) : (
                <div className="countdown-wrapper">
                  <div className="countdown-box">
                    <span className="time-val">{timeLeft.days}</span>
                    <span className="time-label">DAYS</span>
                  </div>
                  <div className="countdown-box">
                    <span className="time-val">{timeLeft.hours}</span>
                    <span className="time-label">HOURS</span>
                  </div>
                  <div className="countdown-box">
                    <span className="time-val">{timeLeft.minutes}</span>
                    <span className="time-label">MINUTES</span>
                  </div>
                  <div className="countdown-box">
                    <span className="time-val">{timeLeft.seconds}</span>
                    <span className="time-label">SECONDS</span>
                  </div>
                </div>
              )}
            </div>

            <div className="hero-buttons">
              <a href="#events" className="btn-secondary-link">Explore Events</a>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSenQDNZ2I51vD8Ohyj0ytLwAIxw5GhNUY7WmZ2LJ7CnfSzbkg/viewform?usp=dialog" target="_blank" rel="noreferrer" className="btn-primary-leather">
                Register Now →
              </a>
            </div>
          </div>
        </section>

        {/* 3. Event Highlights */}
        <section id="highlights" className="highlights">
          <div className="cursive-divider">
            <span>Event Highlights</span>
          </div>
          
          <div className="highlights-grid">
            <div className="highlight-card paper-torn-card">
              <i className="fa-solid fa-microchip highlight-icon"></i>
              <h3>Technical Events</h3>
              <p>Test your skills. Build the future.</p>
            </div>
            <div className="highlight-card paper-torn-card">
              <i className="fa-solid fa-screwdriver-wrench highlight-icon"></i>
              <h3>Workshops</h3>
              <p>Learn. Build. Innovate.</p>
            </div>
            <div className="highlight-card paper-torn-card">
              <i className="fa-solid fa-user-tie highlight-icon"></i>
              <h3>Expert Talks</h3>
              <p>Insights from industry & academia.</p>
            </div>
            <div className="highlight-card paper-torn-card">
              <i className="fa-solid fa-network-wired highlight-icon"></i>
              <h3>Networking</h3>
              <p>Connect with brilliant minds.</p>
            </div>
          </div>
        </section>

        {/* 4. About SLICE Section */}
        <section id="about" className="about-section">
          <div className="about-scroll-container parchment-scroll-card double-border">
            <div className="about-scroll-content">
              <div className="about-text-column">
                <h2 className="cursive-section-header">About SLICE</h2>
                <p>
                  SLICE v26 is the annual flagship National Level Technical Hackathon and Symposium organized by the Department of Electronics and Communication Engineering at Loyola-ICAM College of Engineering and Technology (LICET).
                </p>
                <p>
                  We host a series of intensive challenges testing coding, logic, circuit design, and entrepreneurial pitching. Join us to compete with the finest minds in the country, show your talent, and win exciting cash prizes!
                </p>
                <div className="about-cta-container">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSenQDNZ2I51vD8Ohyj0ytLwAIxw5GhNUY7WmZ2LJ7CnfSzbkg/viewform?usp=dialog" target="_blank" rel="noreferrer" className="btn-primary-leather">
                    Register Now →
                  </a>
                </div>
              </div>
              <div className="about-image-column">
                <img src={aboutPcb} alt="Circuit Schematic Drawing" className="about-pcb-illustration" />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Our Events Grid */}
        <section id="events" className="events-section">
          <div className="cursive-divider">
            <span>Our Events</span>
          </div>

          {/* Stamped filter buttons */}
          <div className="event-filters">
            <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All Events</button>
            <button className={`filter-btn ${filter === 'technical' ? 'active' : ''}`} onClick={() => setFilter('technical')}>Technical</button>
            <button className={`filter-btn ${filter === 'non-technical' ? 'active' : ''}`} onClick={() => setFilter('non-technical')}>Non-Technical</button>
            <button className={`filter-btn ${filter === 'workshop' ? 'active' : ''}`} onClick={() => setFilter('workshop')}>Workshops</button>
          </div>

          {/* Dynamic Events Luggage Grid */}
          <div className="events-grid-container">
            <div className="events-grid">
              {filteredEvents.map(event => (
                <div key={event.id} className="event-tag-card" onClick={() => setActiveModalEvent(event)}>
                  <div className="tag-header">
                    <span className="tag-category-label">{event.categoryLabel}</span>
                    <span className="tag-prize"><i className="fa-solid fa-trophy"></i> {event.prize}</span>
                  </div>
                  <div className="tag-body">
                    <div className="tag-icon-area">
                      <i className={event.icon}></i>
                    </div>
                    <h3>{event.title}</h3>
                    <p className="tag-short-desc">{event.desc.slice(0, 75)}...</p>
                  </div>
                  <div className="tag-footer">
                    <span className="tag-details-link">View Details →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Why Join Section */}
        <section id="why-join" className="why-join-section">
          <div className="cursive-divider">
            <span>Why Join?</span>
          </div>

          <div className="why-join-scroll parchment-scroll-card double-border">
            <div className="why-join-grid">
              <div className="why-join-bullets">
                <ul>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    <span>Sharpen your technical skills and solve real-world challenges</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    <span>Win exciting cash prizes and university recognition certificates</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    <span>Network with like-minded peers and industry mentors</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    <span>Gain hands-on laboratory experience with Generative AI tools</span>
                  </li>
                </ul>
              </div>
              <div className="why-join-formula">
                <div className="formula-box">
                  <div className="formula-math">
                    f<sub>c</sub> = 1 / (2πRC)
                  </div>
                  {/* Decorative Hand-drawn wave trace */}
                  <svg className="math-wave-svg" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 0 30 Q 25 5, 50 30 T 100 30 T 150 30 T 200 30" fill="none" stroke="#3D2517" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Event Timeline */}
        <section id="timeline" className="timeline-section">
          <div className="cursive-divider">
            <span>Event Timeline</span>
          </div>

          <div className="timeline-banner-container double-border">
            <div className="timeline-row">
              <div className="timeline-banner-item">
                <i className="fa-solid fa-pen-to-square"></i>
                <div className="t-item-content">
                  <span className="t-title">Registrations Open</span>
                  <span className="t-date">1 July 2026</span>
                </div>
              </div>
              <div className="timeline-banner-divider"></div>
              <div className="timeline-banner-item">
                <i className="fa-solid fa-calendar-check"></i>
                <div className="t-item-content">
                  <span className="t-title">Last Date to Register</span>
                  <span className="t-date">15 August 2026</span>
                </div>
              </div>
              <div className="timeline-banner-divider"></div>
              <div className="timeline-banner-item">
                <i className="fa-solid fa-play"></i>
                <div className="t-item-content">
                  <span className="t-title">Event Day (SLICE v26)</span>
                  <span className="t-date">22 August 2026</span>
                </div>
              </div>
              <div className="timeline-banner-divider"></div>
              <div className="timeline-banner-item">
                <i className="fa-solid fa-trophy"></i>
                <div className="t-item-content">
                  <span className="t-title">Prize Distribution</span>
                  <span className="t-date">22 August 2026 (Evening)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Venue & Maps Section */}
        <section id="contact" className="venue-section">
          <div className="cursive-divider">
            <span>Contact & Venue</span>
          </div>

          <div className="venue-grid">
            <div className="venue-contact-card paper-torn-card">
              <h3>COORDINATORS</h3>
              <p><strong>Amar NG (Student Coordinator):</strong> +91 7382306484</p>
              <p><strong>Jenlin Anne (Student Coordinator):</strong> +91 9486409404</p>
              <p><strong>Email:</strong> slice2026@licet.edu.in</p>
              <p><strong>Address:</strong> Department of ECE, LICET, Loyola Campus, Nungambakkam, Chennai - 600034</p>
            </div>
            <div className="venue-map-card double-border">
              <iframe
                title="LICET Campus Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5369795646193!2d80.23126747576579!3d13.06518171281699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52666fa5a0f585%3A0xa1fa877ad45fe22d!2sLoyola-ICAM%20College%20of%20Engineering%20and%20Technology%20(LICET)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="sepia-map"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      {/* 9. Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo-area">
            <div className="ece-shield-logo-footer">
              <i className="fa-solid fa-compass-drafting"></i>
            </div>
            <div className="ece-text-signature">
              <span className="dept-title">DEPARTMENT OF</span>
              <span className="dept-sub">ELECTRONICS & COMMUNICATION ENGINEERING</span>
              <p className="footer-slogan">Be part of the legacy.</p>
            </div>
          </div>

          <div className="footer-socials-center">
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a>
          </div>

          <div className="footer-engraving-area">
            <img src={universityFooter} alt="University Campus facade engraving" className="university-engraving-img" />
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Loyola-ICAM College of Engineering and Technology (LICET). All Rights Reserved.
        </div>
      </footer>

      {/* 10. Blueprint Event Detail Modal */}
      {activeModalEvent && (
        <div className="modal active">
          <div className="modal-overlay" onClick={() => setActiveModalEvent(null)}></div>
          <div className="modal-card blueprint-card">
            <button className="modal-close" aria-label="Close modal" onClick={() => setActiveModalEvent(null)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="blueprint-header">
              <span className="blueprint-stamp">SPECIFICATION SHEET</span>
              <span className="event-tag">{activeModalEvent.categoryLabel}</span>
            </div>
            <div className="modal-body">
              <h2>{activeModalEvent.title}</h2>
              <p className="modal-prize-tag">
                <i className={activeModalEvent.category === 'workshop' ? 'fa-solid fa-award' : 'fa-solid fa-trophy'}></i> 
                {activeModalEvent.category === 'workshop' ? ' Certificate: ' : ' Cash Prize: '}
                <span>{activeModalEvent.prize}</span>
              </p>
              <div className="modal-section">
                <h3>Description</h3>
                <p>{activeModalEvent.desc}</p>
              </div>
              <div className="modal-section">
                <h3>Flow of Event / Rounds</h3>
                <p>{activeModalEvent.flow}</p>
              </div>
              <div className="modal-section">
                <h3>Coordinators</h3>
                <p>{activeModalEvent.coordinators}</p>
              </div>
              <div className="modal-section">
                <h3>Contact Numbers</h3>
                <p>{activeModalEvent.contacts}</p>
              </div>
              <div className="modal-footer">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSenQDNZ2I51vD8Ohyj0ytLwAIxw5GhNUY7WmZ2LJ7CnfSzbkg/viewform?usp=dialog" target="_blank" rel="noreferrer" className="btn-primary-leather">
                  Register for {activeModalEvent.title}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
