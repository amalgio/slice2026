# SLICE v26 Vintage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the SLICE v26 symposium website to match the vintage steampunk engineering aesthetic using clean HTML5, custom CSS3, and Vanilla JavaScript, without pushing to GitHub.

**Architecture:** Update `index.html` structure and layout containers, overhaul `style.css` with a parchment color scheme, double sepia borders, and custom background SVG blueprints, and adjust `app.js` dynamic mapping for the new details layout.

**Tech Stack:** HTML5, CSS3, Vanilla JavaScript, Google Fonts (Cinzel, EB Garamond, Special Elite).

## Global Constraints
- **Do NOT push to GitHub:** All changes must remain local. No `git push` commands.
- **Visual Palette:** Base cream `#FAF6EB` to `#EADCBF`, text/lines `#3D2517`, highlights `#B55E29`.
- **Aesthetic integrity:** Ensure map sepia filters are applied and typography pairs properly.

---

### Task 1: Typography and Scaffolding Updates

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Update Google Fonts imports**
  Modify the stylesheet imports in the `<head>` of `index.html` to include *Cinzel*, *EB Garamond*, and *Special Elite*:
  ```html
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;800&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Special+Elite&display=swap" rel="stylesheet">
  ```

- [ ] **Step 2: Update HTML layout wrappers**
  - Adjust navbar layout to support the Double Border style.
  - Update the Hero subtitle, title, and countdown wrappers.
  - Structure the Event Highlights grid wrapper into 4 cards with ECE/vintage descriptions.
  - Restructure the About section grid into a wide parchment card and a sidebar for the SVG schematic representation.
  - Adjust the Events Grid section for the new luggage-tag design.

- [ ] **Step 3: Manual Verification**
  Reload the local site.
  Expected result: Content updates reflect new titles, but layout is unstyled since CSS is not yet modified.

---

### Task 2: CSS Variables, Background Blueprint & Reset Overhaul

**Files:**
- Modify: `style.css`

- [ ] **Step 1: Set vintage variables and repeating background pattern**
  Overwrite the `:root` variables in `style.css` with the new design color tokens:
  ```css
  :root {
      --bg-cream: #FAF6EB;
      --bg-sepia: #EADCBF;
      --ink: #3D2517;
      --copper: #B55E29;
      --copper-hover: #8C4518;
      --font-heading: 'Cinzel', serif;
      --font-body: 'EB Garamond', serif;
      --font-stamp: 'Special Elite', monospace;
      --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  ```
  Implement the repeating circuit blueprint grid background on the `body`:
  ```css
  body {
      background: radial-gradient(circle, var(--bg-cream) 60%, var(--bg-sepia) 100%);
      background-size: cover;
      color: var(--ink);
      font-family: var(--font-body);
      /* Custom background grid pattern representing blueprint lines */
      background-image: 
          linear-gradient(rgba(61, 37, 23, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(61, 37, 23, 0.03) 1px, transparent 1px);
      background-size: 30px 30px;
  }
  ```

- [ ] **Step 2: Implement double sepia borders and custom headings**
  Add styling rules for sepia borders, title underlines, and uppercase headings:
  ```css
  .double-border {
      border: 3px double var(--ink);
  }
  .title-underline {
      width: 80px;
      height: 3px;
      background: var(--ink);
      margin: 10px auto;
  }
  ```

---

### Task 3: Overhaul Component Styling

**Files:**
- Modify: `style.css`

- [ ] **Step 1: Style Navigation and Hero Section**
  - Navbar: Sticky styling with a double bottom border `border-bottom: 3px double var(--ink);` and blur effect.
  - Stitched Register CTA button:
    ```css
    .nav-cta {
        background: var(--copper);
        color: var(--bg-cream);
        border: 2px dashed var(--ink);
        padding: 8px 18px;
        font-family: var(--font-heading);
        font-weight: 600;
        border-radius: 4px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.05);
    }
    .nav-cta:hover {
        background: var(--copper-hover);
        transform: translateY(-1px);
    }
    ```
  - Hero Section: Center Flexbox layout. Make "SLICE v26" stand out using an elegant copper text fill and typewriter stamps for the dates.

- [ ] **Step 2: Style Highlights and About Scroll**
  - Highlights: Style the 4 outlines cards with thin sepia borders.
  - About Scroll: Wrap text in a parchment container `#about-scroll` with shadow overlays. Design the SVG schematic box.

- [ ] **Step 3: Style Luggage-Tag Event Cards, Timeline, and Sepia Maps**
  - Event Cards: Design luggage-tag shapes using rounded borders, sepia text, and active copper state highlights.
  - Timeline: Draw vertical ECE terminal wire timeline.
  - Sepia Maps: Apply filter `filter: sepia(0.85) contrast(1.1) brightness(0.95);` to the iframe.

- [ ] **Step 4: Style Blueprint Modal**
  - Overhaul the modal styles. Give the modal card a blueprint theme:
    ```css
    .modal-card {
        background-color: #1A365D; /* Blueprint Blue */
        border: 2px solid #E2E8F0;
        color: #F7FAFC;
        background-image: 
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
        background-size: 20px 20px;
    }
    ```

---

### Task 4: JavaScript Logic Adjustments

**Files:**
- Modify: `app.js`

- [ ] **Step 1: Update Modal Data Mapping**
  Open `app.js` and modify the `openModal` function to match the new modal IDs and details structure:
  ```javascript
  document.getElementById("modal-title").innerText = event.title;
  document.getElementById("modal-category").innerText = event.categoryLabel;
  document.getElementById("modal-desc").innerText = event.desc;
  document.getElementById("modal-rules").innerText = event.flow;
  document.getElementById("modal-coordinators").innerText = event.coordinators;
  document.getElementById("modal-contacts").innerText = event.contacts;
  ```

- [ ] **Step 2: Update Countdown Date details**
  Ensure the countdown target date is set to `August 22, 2026 09:00:00`.

- [ ] **Step 3: Manual Verification**
  Open the website in browser. Verify:
  - Responsive filters work.
  - Detailed popups load the blueprint layout with correct event details.

---

### Task 5: Local Git Commit

**Files:**
- Modify: None (run terminal commands)

- [ ] **Step 1: Run Git Stage and Commit**
  Stage the files and commit locally:
  ```bash
  git add index.html style.css app.js
  git commit -m "feat: redesign website with vintage steampunk parchment aesthetic"
  ```
