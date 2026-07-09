# Calvoria Holdings — Website (Next.js)

A one-page site for Calvoria Holdings — a search-fund / acquisition-holdings style page, built as
a standard **Next.js 14 (App Router)** project.

The logo and color palette (deep teal `#0e3d3d` + rose-gold `#cd9777`) were designed fresh for
this brand — a distinct identity, deliberately different from any other project.

## What's placeholder right now

| Item | Where | What to do |
|---|---|---|
| Founder name & bio | `components/Founder.jsx` | Find/replace `[FOUNDER NAME]`, `[industry]`, `[He/She/They]` |
| Founder photo | `public/images/founder.jpg` | Replace with a real photo (same filename) |
| Hero background photo | `public/images/hero-bg.jpg` | Replace with a real photo — a teal-toned city skyline / corporate building shot fits the palette best (see search-term guidance below) |
| Advisors (3x) | `components/Advisors.jsx` | Edit the `ADVISORS` array — no real advisor bios were provided yet |
| Phone / email / location | `components/Contact.jsx` | Replace `[XXX] XXX-XXXX` and `[City, State]` |
| Contact form submission | `components/Contact.jsx` | Currently simulates success on submit — see "Wiring up the contact form" below |

## Finding a real hero background photo

Search terms that fit this palette and brand: `financial district skyline dusk`, `corporate
skyline blue hour`, `glass office tower low angle`. Look on Unsplash or Pexels (free) or
Shutterstock/Adobe Stock (paid, more selection) for something landscape-oriented, at least
1920x1080px, and already on the darker/moodier side — the CSS applies a teal gradient tint on
top of whatever image is there, so a photo that's already dim will look more intentional than a
bright one fighting the tint.

## Setup

```bash
npm install
npm run dev
```
Open http://localhost:3000

## Wiring up the contact form

The form validates properly (required fields, email format) and shows a success message, but
doesn't send a real email yet. Easiest options:

1. **Formspree** (~5 minutes, no code) — create a free form at formspree.io, then change the
   form's `action` to your Formspree endpoint.
2. **Next.js API route** — create `app/api/contact/route.js` and send the email via Resend,
   SendGrid, etc. There's a `TODO` comment in `components/Contact.jsx` marking exactly where to
   hook it in.

## Content structure

Closely related topics were grouped into one section rather than making 16+ separate blocks:

| Topic | Component |
|---|---|
| Who We Are | `WhoWeAre.jsx` |
| What We Do | `WhatWeDo.jsx` |
| Our Approach (6 principles) | `Approach.jsx` |
| What Sets Us Apart | `Different.jsx` |
| What We're Looking For + Sectors of Interest + Acquisition Criteria | `Criteria.jsx` (grouped) |
| How We Create Value | `ValueCreation.jsx` |
| Our Process (7 steps) | `Process.jsx` |
| Our Philosophy (5 principles) | `Philosophy.jsx` |
| Why Calvoria Holdings | `WhyUs.jsx` |
| For Business Owners + closing statement | `ForOwners.jsx` (paired, styled as a banner right before Contact) |

## Icons

All icons are lucide-react (already installed). To swap any icon, change the import and the JSX
tag in the relevant component.

## Project structure

```
app/
  layout.js       -> fonts (Playfair Display + Inter), metadata
  globals.css      -> teal/rose-gold theme, all section styling
  page.js          -> assembles all sections
components/
  Navbar.jsx        -> sticky nav + mobile menu
  Hero.jsx
  WhoWeAre.jsx
  WhatWeDo.jsx       -> improvement-area tag grid
  Approach.jsx       -> 6-principle "how we operate" grid
  Different.jsx      -> "what sets us apart" question list
  Criteria.jsx       -> what we look for + sectors of interest + acquisition criteria
  ValueCreation.jsx  -> "how we create value" 7-area grid
  Process.jsx        -> 7-step acquisition timeline
  Philosophy.jsx      -> 5-principle grid
  Founder.jsx
  Advisors.jsx        -> 3-person advisor/investor grid
  WhyUs.jsx           -> "why Calvoria Holdings" reasons list
  ForOwners.jsx        -> "for business owners" + closing statement banner
  Contact.jsx          -> info + validated form
  Footer.jsx
  Reveal.jsx           -> scroll-fade-in wrapper (zero dependencies)
public/
  images/            -> logo.png (custom-designed), hero-bg.jpg + placeholder photos
```

## Deploying

Standard Next.js app -- deploys as-is to Vercel, Netlify, or any Node host.
# calvoria-holdings
