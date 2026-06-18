# Vignesh K S — Portfolio (Next.js)

A heavily animated dark-themed portfolio built with Next.js 14 App Router, Three.js, and CSS Modules.

## Features
- 🎨 Dark theme with animated gradient blurs
- ✨ Interactive particles canvas (mouse-reactive)
- 🔷 Three.js 3D rotating icosahedron on hero
- ⌨️ Typing animation cycling through roles
- 📜 Scroll-reveal animations on every section
- 🃏 3D card tilt on project cards (mouse)
- 📊 Animated skill bars (trigger on scroll)
- 📬 Contact form with validation
- 📱 Fully responsive (mobile + desktop)

## Sections
Hero · About · Hire Me · Resume · Projects · Skills · Contact · Articles · Coding Profiles · Social

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push this folder to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy** ✅

No environment variables needed.

## Customize

- Update your links in each component file
- Add your resume PDF to `/public/`
- Edit projects in `components/ProjectsSection.js`
- Edit skills in `components/SkillsSection.js`
