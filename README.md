# Saathi — India's Safety-First Social Gathering Platform

> *Stop being lonely in a city of millions.*

Saathi is India's first verified social gathering discovery platform — connecting young professionals and students with trusted, real-world social events in their city.

---

## Project Structure

```
saathi/
├── index.html       # Page structure and content
├── styles.css       # All styling, layout, animations
├── script.js        # Interactivity and behaviour
└── README.md        # You are here
```

---

## Getting Started

No build tools. No dependencies. No server required.

1. Download all four files into the same folder
2. Open `index.html` in any modern browser
3. That's it — the site works immediately

---

## Page Sections

| Section | Description |
|---|---|
| **Nav** | Fixed top bar with smooth-scroll links and a CTA button |
| **Hero** | Headline, sub-copy, CTA buttons, and 3 key statistics |
| **Problem Strip** | Why Tinder BFF, WhatsApp, Instagram, and Meetup.com fail |
| **How It Works** | 4-step user journey from signup to post-event rating |
| **Events** | Sample event cards (house party, stranger dinner, rooftop, game night) |
| **Safety Architecture** | 6-layer safety system explained with icons |
| **Trust Score** | Interactive slider showing the 4 trust tiers |
| **Waitlist** | Email capture form with validation |
| **Footer** | Brand tagline and copyright |

---

## Features

- Fully responsive — works on mobile, tablet, and desktop
- Smooth scroll navigation
- Scroll-reveal animations on cards (IntersectionObserver)
- Interactive Trust Score slider with dynamic color changes
- Waitlist form with email validation and success state
- Sticky nav with shadow on scroll
- Zero external dependencies — pure HTML, CSS, and JavaScript

---

## Customisation Guide

### Change the brand color
Open `styles.css` and update the root variables:
```css
:root {
  --saffron: #FF6B1A;       /* primary brand color */
  --saffron-light: #FFF0E8; /* light tint for badges */
  --saffron-dark: #C44A00;  /* hover/dark variant */
}
```

### Change fonts
The site uses Google Fonts (loaded via `@import` in `styles.css`):
- **Syne** — display headings
- **DM Sans** — body text

Replace the `@import` URL and update `font-family` references to switch fonts.

### Add real event data
Find the `.events-scroll` section in `index.html` and edit each `.event-card` block with real event names, cities, prices, and attendee counts.

### Connect the waitlist form to a real backend
In `script.js`, find the `handleWaitlist()` function and replace the UI-only logic with a fetch call:

```javascript
async function handleWaitlist() {
  const input = document.getElementById('email-input');
  const email = input.value.trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    input.style.borderColor = '#C0392B';
    setTimeout(() => { input.style.borderColor = ''; }, 1500);
    return;
  }

  // Example: post to your own API or a service like Mailchimp / ConvertKit
  await fetch('https://your-api.com/waitlist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });

  document.getElementById('success-msg').style.display = 'block';
  input.style.display = 'none';
}
```

Popular free options for collecting waitlist emails:
- [Google Forms](https://forms.google.com) — embed or redirect
- [Mailchimp](https://mailchimp.com) — free up to 500 contacts
- [ConvertKit](https://convertkit.com) — free up to 1,000 subscribers
- [Tally.so](https://tally.so) — simple form backend

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, grid, flexbox, animations) |
| Scripting | Vanilla JavaScript (ES6+) |
| Fonts | Google Fonts (Syne + DM Sans) |
| Hosting | Any static host (see below) |

---

## Deploying the Site

### Option 1 — GitHub Pages (free, recommended)
1. Push all files to a GitHub repository
2. Go to Settings → Pages
3. Set source to `main` branch → `/root`
4. Your site is live at `https://yourusername.github.io/saathi`

### Option 2 — Netlify (free, drag and drop)
1. Go to [netlify.com](https://netlify.com)
2. Drag your project folder onto the Netlify dashboard
3. Get a live URL instantly (custom domain optional)

### Option 3 — Vercel (free)
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repo or drag and drop
3. Deployed in seconds

---

## Startup Context

Saathi is being built to solve India's urban loneliness epidemic:

- India ranks **#1 globally in youth loneliness** (Meta-Gallup 2023)
- **4.7 crore+** young Indians migrate to metro cities every year
- **67%** of Indians aged 18–35 feel lonely at least once a week

The platform differentiates through a **6-layer safety architecture** including Aadhaar-based identity verification, a Trust Score system (0–100), one-tap SOS with police integration, and a dedicated Women Safety Suite.

**Target cities (Phase 1):** Bengaluru  
**Target users:** Working professionals aged 22–30 who have relocated

---

## Roadmap

- [ ] Connect waitlist form to email backend
- [ ] Add city selector to hero section
- [ ] Build host-side landing page
- [ ] Add testimonials / social proof section
- [ ] Integrate Google Analytics or Plausible
- [ ] Add OG meta tags for WhatsApp / Instagram link previews
- [ ] Build mobile app (React Native)

---

## License

This project is proprietary. All rights reserved.  
Built for the Saathi startup — India's safety-first social discovery platform.

---

*Made with care for a less lonely India.*



