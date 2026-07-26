# SLICE v26 Vintage Steampunk Design Specification

Redesign the SLICE v26 college symposium landing page using a premium vintage steampunk/engineering lab aesthetic. The layout is based on the "Electronica '26" design blueprint, featuring parchment paper textures, double sepia borders, mathematical circuit drawings, and elegant serif typography.

The site is built with pure semantic HTML5, custom CSS3 canvas effects, and Vanilla JS, running efficiently on Vercel's free hosting tier.

---

## 1. Design System & Visual Tokens
To implement the hand-drawn digital canvas (Approach 1):
- **Colors:**
  - **Parchment Base (Light):** `#FAF6EB` (center of radial gradient)
  - **Parchment Shade (Dark):** `#EADCBF` (edges of radial gradient)
  - **Ink Color (Primary):** `#3D2517` (deep sepia-brown for text, borders, and outlines)
  - **Copper Accent (Secondary):** `#B55E29` (burnt copper-orange for buttons, active tabs, and highlights)
  - **Leather Shadow:** `rgba(61, 37, 23, 0.15)` (warm brown shadows instead of cold blacks)
- **Typography:**
  - **Main Headers (Serif):** *Cinzel* (Google Font) - uppercase, wide letter-spacing.
  - **Script Accents:** *Pinyon Script* or *Playfair Display* (italic) for secondary details.
  - **Body Copy:** *EB Garamond* (Google Font) - readable traditional serif.
  - **Technical Labels (Typewriter):** *Special Elite* or *Courier New* for logbook stamps, dates, and formulas.
- **Visual Assets:**
  - **Blueprint Schematic Background:** An SVG repeating background pattern representing grid lines, transistor icons, capacitors, and mathematical formulas (e.g., \(f_c = \frac{1}{2\pi RC}\)).
  - **Parchment Dividers:** Custom CSS SVG waves representing frayed paper edges and double-rule separating lines.

---

## 2. Component Design & Layout

### 2.1. Navigation Bar (Parchment Ribbon)
- Translucent parchment overlay utilizing `backdrop-filter: blur(8px); background: rgba(250, 246, 235, 0.85);`.
- Separated from the content by a double-rule sepia border (`border-bottom: 3px double #3D2517`).
- Links in uppercase *Cinzel* typography.
- "Register Now" button styled like a stitched leather patch.

### 2.2. Hero Section (Steampunk Canvas)
- **Header Illustration:** A styled container showcasing steampunk engineering equipment (vacuum tubes, radar dish, oscilloscopes, books on clouds). Drawn using clean CSS shapes and detailed ECE vector elements.
- **Symposium Title:** Large, bold `SLICE v26` heading in *Cinzel* with deep copper gradients.
- **Date & Venue Banner:** Styled like a typed label ribbon pinned to the center page (`22 August 2026` | `Main Auditorium, LICET` | `9:00 AM Onwards`).
- **CTAs:** Copper buttons with double border lines and a "stamped" hover animation.

### 2.3. Event Highlights Section
- A 4-column layout presenting the major categories on paper card panels with handwritten script headings:
  1. *Technical Events:* "Test your skills. Build the future."
  2. *Workshops:* "Learn. Build. Innovate."
  3. *Expert Talks:* "Insights from industry & academia."
  4. *Networking:* "Connect with brilliant minds."

### 2.4. About Section (The Scroll)
- Text placed inside a wide parchment card that has a distressed border effect.
- The right side features a decorative sketch container with SVG lines outlining a vintage electrical schematic (resistors, diodes, battery) and a feather quill.

### 2.5. Events Grid & Filters (Luggage Tags)
- **Filter Tabs:** Circular, copper-colored stamped buttons. Active filters are highlighted with a dark sepia border.
- **Event Cards:** Styled like luggage tags or catalog index cards. Features a double sepia border, *Cinzel* event title, sepia icon tags, and a "View Details" text link with a custom arrow.
- **Blueprint Modal:** Pop-up modal styled as a blue/white blueprint sheet or a detailed engineering specification document with white grid lines and blue tint background.

### 2.6. Timeline Schedule (Logbook)
- A vertical line representing a copper wire with circular ECE terminal nodes.
- Timeline items are styled as vintage notebook sheets with date/time stamped in typewriter font.

### 2.7. FAQs & Contacts
- **FAQs:** Accordion folder style with brass/copper arrows.
- **Contacts:** Styled like old-fashioned business cards with ink prints.
- **Map:** Standard Google Maps frame styled with a CSS sepia filter to match the color palette (`filter: sepia(0.85) contrast(1.1) brightness(0.95);`).

---

## 3. Data Integration & JavaScript Behaviors
- **Event Catalog:** Retains all 11 real ECE events scraped from `slice2025.in` (Code-X, Paper Presentation, Astro Logiq, etc.) in `app.js`.
- **Countdown Widget:** Remains active, but styled in retro flip-clock or vintage dial format.
- **Modal Populator:** Updates to fill the blueprint-style popup template.

---

## 4. Verification Plan
- Verify responsiveness across tablet/mobile viewports.
- Confirm background SVG grid loads smoothly without layout shifts.
- Ensure the sepia map filter does not break map interactions.
