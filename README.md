# Soham Das Biswas — Portfolio

React.js portfolio with neumorphic dark design, built from scratch.

## 🚀 Quick Start

```bash
npm install
npm start
```

Runs on http://localhost:3000

## 🏗️ Build for Production

```bash
npm run build
```

Deploy the `build/` folder to Vercel, Netlify, or GitHub Pages.

## ✏️ Customisation

All personal data lives in **`src/data.js`** — edit that one file to update:
- Personal info, email, phone, social links
- Skills with proficiency levels
- Work experience and bullet points
- Projects with tags and links
- Education history
- Terminal command responses

## 🎨 Design System

- **Fonts**: Orbitron (headings), Exo 2 (body), Space Mono (code/mono)
- **Primary accent**: `#00d4aa` (teal)
- **Secondary accent**: `#7c3aed` (purple)
- **Icons**: Font Awesome 6

## 🆕 Features (beyond the original HTML)

| Feature | Description |
|---|---|
| 🌙 Dark/Light toggle | Full light-mode with neumorphic inversion |
| 📊 Skill progress bars | Animated on scroll, tabbed by category |
| 💻 Terminal overlay | Type `help`, `skills`, `experience`, etc. Press Ctrl+` |
| 🔢 Animated counters | Hero stats count up on first scroll |
| 🎓 Education section | Timeline with grade badges |
| 🔍 Project filter | Filter projects by tech tag |
| 📈 Scroll progress bar | Thin teal bar at the very top |
| ✨ Reveal animations | Slide-in on scroll for all sections |

## 📁 Structure

```
src/
  data.js              ← all CV data (edit this!)
  index.css            ← global styles + CSS vars
  App.js               ← root: cursor, scroll, loader, terminal
  components/
    Loader/            ← initial loading screen
    Navbar/            ← fixed nav + theme + terminal toggle
    Hero/              ← hero with orbit animation + typewriter
    About/             ← bio + quick stats + achievements
    Skills/            ← tabbed skills + progress bars
    Experience/        ← vertical timeline
    Projects/          ← filterable project cards
    Education/         ← education timeline (new)
    Contact/           ← contact form + social links
    Footer/            ← footer
    Terminal/          ← interactive CLI (new)
```
