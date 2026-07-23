// -------------------------------------------------------------
// SLICE v26 Symposium JavaScript Code
// Features: Countdown, Dynamic Cards, Modals, Filters, Navigation
// -------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    // 1. STICKY NAVBAR CLASS TOGGLE ON SCROLL
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scroll-active");
        } else {
            navbar.classList.remove("scroll-active");
        }
    });

    // 2. MOBILE MENU TOGGLE
    const mobileToggle = document.querySelector(".mobile-toggle");
    const navLinks = document.querySelector(".nav-links");
    if (mobileToggle) {
        mobileToggle.addEventListener("click", () => {
            const isVisible = navLinks.style.display === "flex";
            if (isVisible) {
                navLinks.style.display = "none";
                mobileToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            } else {
                navLinks.style.display = "flex";
                navLinks.style.flexDirection = "column";
                navLinks.style.position = "absolute";
                navLinks.style.top = "100%";
                navLinks.style.left = "0";
                navLinks.style.width = "100%";
                navLinks.style.background = "rgba(11, 15, 25, 0.95)";
                navLinks.style.padding = "20px";
                navLinks.style.borderBottom = "1px solid rgba(0, 242, 254, 0.1)";
                mobileToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            }
        });
        
        // Close menu when clicking nav link
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                if (window.innerWidth <= 768) {
                    navLinks.style.display = "none";
                    mobileToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
                }
            });
        });
    }

    // 3. COUNTDOWN TIMER
    // Target Date: August 22, 2026 at 9:00 AM
    const targetDate = new Date("Aug 22, 2026 09:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            document.querySelector(".countdown-wrapper").innerHTML = "<h3 style='color: var(--primary); font-size: 1.8rem; margin: 20px 0;'>The Symposium has Started!</h3>";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = days.toString().padStart(2, '0');
        document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
    }
    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial trigger

    // 4. EVENTS & WORKSHOPS DATA FROM PREVIOUS YEAR
    const events = [
        {
            id: "coding",
            title: "Code-X",
            category: "technical",
            categoryLabel: "Technical",
            prize: "₹5,000",
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
            desc: "An intensive, hands-on workshop led by industry experts. Learn the fundamentals of Large Language Models (LLMs), prompt engineering, and building AI tools.",
            flow: "Runs from 10:30 AM to 03:00 PM (with lunch break). Participants will receive physical certificates signed by mentors. Includes free API credits for hands-on laboratory work.",
            coordinators: "Dr. K. Srinivasan, S. Sneha",
            contacts: "+91 98765 78901, +91 87654 98765"
        }
    ];

    // 5. RENDER EVENTS GRID DYNAMICALLY
    const eventsGrid = document.getElementById("events-grid");

    function renderEvents(filter = "all") {
        if (!eventsGrid) return;
        eventsGrid.innerHTML = "";
        
        const filteredEvents = filter === "all" 
            ? events 
            : events.filter(e => e.category === filter);

        filteredEvents.forEach(event => {
            const card = document.createElement("div");
            card.className = "event-card";
            card.setAttribute("data-id", event.id);

            // Add class for specific categories to apply conditional styling
            let headerClass = "event-card-header";
            if (event.category === "non-technical") headerClass += " non-technical";
            if (event.category === "workshop") headerClass += " workshop";

            card.innerHTML = `
                <div class="${headerClass}">
                    <span class="event-tag">${event.categoryLabel}</span>
                    <span class="prize-tag"><i class="fa-solid fa-trophy"></i> ${event.prize}</span>
                </div>
                <h3>${event.title}</h3>
                <p>${event.desc}</p>
                <div class="event-card-footer">
                    <span class="details-link">View Details <i class="fa-solid fa-arrow-right"></i></span>
                </div>
            `;
            
            // Add click listener to card to open modal
            card.addEventListener("click", () => openModal(event));
            eventsGrid.appendChild(card);
        });
    }
    
    // Initial Render
    renderEvents();

    // 6. EVENT FILTER CLICKS
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Add active class to clicked button
            button.classList.add("active");
            
            // Render events based on filter value
            const filterValue = button.getAttribute("data-filter");
            renderEvents(filterValue);
        });
    });

    // 7. INTERACTIVE DETAIL MODAL LOGIC
    const modal = document.getElementById("event-modal");
    const modalClose = document.querySelector(".modal-close");
    const modalOverlay = document.querySelector(".modal-overlay");

    function openModal(event) {
        document.getElementById("modal-title").innerText = event.title;
        document.getElementById("modal-category").innerText = event.categoryLabel;
        
        // Conditional colors/badges for categories in modal
        const catBadge = document.getElementById("modal-category");
        catBadge.className = "event-tag";
        if (event.category === "non-technical") catBadge.classList.add("non-tech-badge");
        if (event.category === "workshop") catBadge.classList.add("workshop-badge");

        // Prize
        if (event.category === "workshop") {
            document.getElementById("modal-prize").innerHTML = `<i class="fa-solid fa-award"></i> Certificate: <span>${event.prize}</span>`;
        } else {
            document.getElementById("modal-prize").innerHTML = `<i class="fa-solid fa-trophy"></i> Cash Prize: <span>${event.prize}</span>`;
        }

        // Desc, Flow, Coordinators, Contacts
        document.getElementById("modal-desc").innerText = event.desc;
        document.getElementById("modal-rules").innerText = event.flow;
        document.getElementById("modal-coordinators").innerText = event.coordinators;
        document.getElementById("modal-contacts").innerText = event.contacts;

        // Open modal with animation
        modal.classList.add("active");
        document.body.style.overflow = "hidden"; // disable background scrolling
    }

    function closeModal() {
        modal.classList.remove("active");
        document.body.style.overflow = ""; // enable background scrolling
    }

    if (modalClose) modalClose.addEventListener("click", closeModal);
    if (modalOverlay) modalOverlay.addEventListener("click", closeModal);
    
    // Close modal on ESC key
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });

    // 8. FAQ ACCORDION TOGGLE
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    accordionHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const item = header.parentElement;
            const isActive = item.classList.contains("active");

            // Close all FAQ items
            document.querySelectorAll(".accordion-item").forEach(i => i.classList.remove("active"));

            // If it wasn't active, open it
            if (!isActive) {
                item.classList.add("active");
            }
        });
    });

    // 9. ACTIVE NAVIGATION LINKS ON SCROLL (INTERSECTION OBSERVER)
    const sections = document.querySelectorAll("section");
    const navLinksList = document.querySelectorAll(".nav-links a");

    const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -60% 0px", // triggers when section covers screen center
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                
                navLinksList.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
});
