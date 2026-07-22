// -------------------------------------------------------------
// SLICE 2026 Symposium JavaScript Code
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
    // Target Date: October 15, 2026 at 9:00 AM
    const targetDate = new Date("Oct 15, 2026 09:00:00").getTime();

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

    // 4. EVENTS & WORKSHOPS DATA
    const events = [
        {
            id: "coding",
            title: "Coding Quest",
            category: "technical",
            categoryLabel: "Technical",
            prize: "₹5,000",
            desc: "Put your programming speed, accuracy, and algorithmic skills to the test. This contest challenges you to solve complex computational problems within a strict time limit.",
            rules: [
                "Individual participation only.",
                "Languages allowed: C, C++, Java, Python.",
                "Round 1: MCQ Prelims (30 mins) on basics and data structures.",
                "Round 2: Coding Finals (45 mins) - solve 3 coding problems.",
                "Use of AI tools, search engines, or mobile phones is strictly prohibited."
            ],
            contacts: "Dr. A. Kumar (98765 12345) | S. Rajesh (Student: 87654 32101)"
        },
        {
            id: "webdev",
            title: "WebCraft",
            category: "technical",
            categoryLabel: "Technical",
            prize: "₹5,000",
            desc: "Showcase your frontend development chops. Design and build a visually stunning, highly interactive landing page based on a theme revealed on the spot.",
            rules: [
                "Team Size: Max 2 members.",
                "Duration: 2 hours.",
                "Frameworks allowed: Vanilla HTML/CSS/JS, React, or Tailwind.",
                "Evaluation Criteria: Design aesthetics, responsiveness, creativity, clean code.",
                "Assets will be provided; no external templates allowed."
            ],
            contacts: "Dr. R. Preethi (98765 23456) | M. Hari (Student: 87654 43210)"
        },
        {
            id: "paper",
            title: "Paper Pitch",
            category: "technical",
            categoryLabel: "Technical",
            prize: "₹6,000",
            desc: "Present your research papers and innovative projects to a panel of expert judges. Cover domains like Embedded Systems, VLSI, IoT, AI, Signal Processing, and communication networks.",
            rules: [
                "Team Size: Max 3 members.",
                "Presentation time: 8 minutes + 2 minutes Q&A.",
                "IEEE format must be followed for the paper submission.",
                "Soft copy of slides must be submitted to coordinators in advance.",
                "Original projects/hardware models carry extra points."
            ],
            contacts: "Dr. P. Sundar (98765 34567) | K. Shruti (Student: 87654 54321)"
        },
        {
            id: "gaming",
            title: "Cyber Gaming",
            category: "non-technical",
            categoryLabel: "Non-Technical",
            prize: "₹4,000",
            desc: "Clash against the best squads in a high-octane BGMI (Battlegrounds Mobile India) / Valorant tournament. Bring your team, execute strategies, and dominate the lobby.",
            rules: [
                "Team Size: 4 members (Squad).",
                "Players must bring their own mobile devices / laptops.",
                "Strict anti-cheat monitoring will be enforced.",
                "Classic Maps rotation: Erangel and Miramar.",
                "Organizers decision is final in case of dispute or disconnect."
            ],
            contacts: "Mr. J. Daniel (98765 45678) | P. Karthik (Student: 87654 65432)"
        },
        {
            id: "photography",
            title: "LensCraft",
            category: "non-technical",
            categoryLabel: "Non-Technical",
            prize: "₹3,000",
            desc: "Capture the essence of SLICE 2026. A photography competition where you must take photos inside the campus matching the specific prompt given on the symposium morning.",
            rules: [
                "Individual participation.",
                "Photos must be taken within the college campus on the event day.",
                "Camera phones or DSLRs are allowed.",
                "Basic color correction is permitted; heavy editing or manipulation is disqualifying.",
                "Submit your top 2 shots by 2:30 PM."
            ],
            contacts: "Mrs. G. Vidya (98765 56789) | A. Kavitha (Student: 87654 76543)"
        },
        {
            id: "treasure",
            title: "Mystery Hunt",
            category: "non-technical",
            categoryLabel: "Non-Technical",
            prize: "₹4,000",
            desc: "Unravel riddles, decode crypts, and sprint through campus hotspots to find the hidden artifact. Time is of the essence; only the fastest and smartest team will emerge victorious.",
            rules: [
                "Team Size: Max 3 members.",
                "Total Clues: 8 hidden across the campus.",
                "Using physical force or entering restricted areas is prohibited.",
                "All members of the team must stay together during the hunt.",
                "Time limit: 60 minutes."
            ],
            contacts: "Mr. S. Vinay (98765 67890) | R. Dinesh (Student: 87654 87654)"
        },
        {
            id: "aiworkshop",
            title: "Generative AI & Prompt Engineering",
            category: "workshop",
            categoryLabel: "Workshop",
            prize: "Certificate of Mastery",
            desc: "An intensive, hands-on masterclass led by industry experts. Learn the fundamentals of Large Language Models (LLMs), workflow automation, and how to write production-grade prompts.",
            rules: [
                "Open to all students from any stream.",
                "Bring a fully charged laptop with internet connection.",
                "Participants will receive certificates signed by industry mentors.",
                "Duration: 10:30 AM to 03:00 PM (with lunch break).",
                "Includes free premium API credits for hands-on labs."
            ],
            contacts: "Dr. K. Srinivasan (98765 78901) | S. Sneha (Student: 87654 98765)"
        }
    ];

    // 5. RENDER EVENTS GRID DYNAMICALLY
    const eventsGrid = document.getElementById("events-grid");

    function renderEvents(filter = "all") {
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
        const prizeSpan = document.querySelector("#modal-prize span");
        if (event.category === "workshop") {
            document.getElementById("modal-prize").innerHTML = `<i class="fa-solid fa-award"></i> Certificate: <span>${event.prize}</span>`;
        } else {
            document.getElementById("modal-prize").innerHTML = `<i class="fa-solid fa-trophy"></i> Cash Prize: <span>${event.prize}</span>`;
        }

        // Desc
        document.getElementById("modal-desc").innerText = event.desc;
        
        // Rules List
        const rulesList = document.getElementById("modal-rules");
        rulesList.innerHTML = "";
        event.rules.forEach(rule => {
            const li = document.createElement("li");
            li.innerText = rule;
            rulesList.appendChild(li);
        });

        // Contact
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
