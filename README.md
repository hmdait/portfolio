# Hamid AIT BAJJA — Portfolio

Personal portfolio website for **Hamid AIT BAJJA**, Systems Integration Engineer & Software Testing specialist.

Live site: [hmdait.github.io/portfolio](https://hmdait.github.io/portfolio/)

---

## Overview

A fully responsive, single-page portfolio built with vanilla HTML/CSS/JavaScript and Vue.js 3 (via CDN). All content — experience, projects, skills, and certifications — is managed from a single data file (`data.js`), making updates simple without touching the markup.

---

## Sections

| Section | Description |
|---|---|
| About | Profile summary, role, and social links |
| Experience | Timeline of professional experience with expandable detail |
| Projects | Project cards with demo and GitHub links |
| Skills | Animated skill bars grouped by category |
| Certifications | Image carousel of training certificates |
| Contact | Email contact form |

---

## Tech Stack

- **HTML5 / CSS3** — semantic markup, CSS custom properties, responsive layout
- **JavaScript (ES6+)** — DOM manipulation, EmailJS integration
- **Vue.js 3** (CDN) — reactive rendering for dynamic sections
- **Swiper.js 11** — touch-friendly carousels (experience, certifications)
- **Font Awesome 6** — icons
- **Google Fonts** — Poppins typeface

---

## Project Structure

```
portfolio/
├── index.html          # Single-page app entry point
├── data.js             # All content data (edit this to update the portfolio)
├── js_index.js         # App logic, Vue instances, Swiper init
├── images/             # Project screenshots, logos, certificates
└── styles/
    ├── main.css            # Imports all stylesheets
    ├── base/
    │   ├── reset.css       # CSS reset/normalize
    │   └── variables.css   # CSS custom properties (colors, spacing, etc.)
    ├── layout/
    │   ├── header.css      # Header & navigation
    │   ├── footer.css      # Footer
    │   └── section.css     # Shared section layout
    ├── components/
    │   ├── buttons.css     # Button styles
    │   ├── cards.css       # Card components
    │   └── modals.css      # Modal/popup styles
    ├── sections/
    │   ├── about.css
    │   ├── experience.css
    │   ├── projects.css
    │   ├── skills.css
    │   ├── certifications.css
    │   └── contact.css
    └── utilities/
        ├── animations.css  # Keyframes & transitions
        └── helpers.css     # Utility classes
```

---

## Updating Content

All portfolio content lives in `data.js`. No need to touch the HTML.

- **Add a project** — append an object to the `projects` array
- **Add a certification** — append an object to the `certifications` array
- **Update experience** — edit or add entries in the `experiences` array
- **Update skills** — modify the `skills` object categories

---

## Running Locally

No build step required. Open `index.html` directly in a browser, or serve with any static file server:

```bash
npx serve .
# or
python -m http.server 8080
```

---

## Contact

- Email: hmdaitbjj@gmail.com
- LinkedIn: [hamid-ait-bajja](https://www.linkedin.com/in/hamid-ait-bajja-b2ba41167/)
- GitHub: [hmdait](https://github.com/hmdait)
