<div align="center">

# ✦ Soham Das Biswas — Portfolio

**A production-grade, fully responsive developer portfolio built with React.js**
featuring a neumorphic dark design system, interactive terminal, EmailJS contact form, and smooth animations throughout.

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-SohamDasBiswas.github.io-00d4aa?style=for-the-badge)](https://SohamDasBiswas.github.io/Portfolio-Website)
[![GitHub](https://img.shields.io/badge/GitHub-SohamDasBiswas-181717?style=for-the-badge&logo=github)](https://github.com/SohamDasBiswas)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/soham-das-biswas-b5460b1a9/)

</div>

---

## 📋 Table of Contents

- [Preview](#-preview)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Build & Deploy](#️-build--deploy)
- [Project Structure](#-project-structure)
- [Customisation](#️-customisation)
- [EmailJS Setup](#-emailjs-setup)
- [Design System](#-design-system)
- [Features](#-features)
- [Sections](#-sections)
- [Terminal Commands](#-terminal-commands)
- [Components In Depth](#-components-in-depth)

---

## 🖥️ Preview

> Dark neumorphic theme with teal (`#00d4aa`) and purple (`#7c3aed`) accents.
> Fully supports **Light Mode** via CSS variable inversion — toggle in the navbar.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React.js 18 (Create React App) |
| **Styling** | Pure CSS with custom properties (no UI library) |
| **Fonts** | Orbitron · Exo 2 · Space Mono (Google Fonts) |
| **Icons** | Font Awesome 6 (CDN) |
| **Email** | EmailJS (no backend required) |
| **Deployment** | GitHub Pages via `gh-pages` |
| **Animations** | CSS keyframes + IntersectionObserver API |

---

## 🚀 Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/SohamDasBiswas/Portfolio-Website.git
cd Portfolio-Website

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

Opens at **http://localhost:3000** with hot reload enabled.

---

## 🏗️ Build & Deploy

### Build for Production

```bash
npm run build
```

Compiles and minifies the app into the `build/` folder. All assets are optimised, code-split, and ready to serve.

### Deploy to GitHub Pages

```bash
npm run deploy
```

This single command:
1. Runs `npm run build` automatically (via `predeploy` script)
2. Pushes the `build/` folder to the `gh-pages` branch using `gh-pages -d build`
3. GitHub Pages serves it live from that branch

**Prerequisites in `package.json`:**

```json
{
  "homepage": "https://SohamDasBiswas.github.io/Portfolio-Website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

Install `gh-pages` if not already present:

```bash
npm install --save-dev gh-pages
```

---

## 📁 Project Structure

```
Portfolio-Website/
│
├── public/
│   ├── index.html              ← HTML shell: fonts, FA icons, meta tags
│   └── favicon.svg             ← SVG favicon
│
├── src/
│   ├── App.js                  ← Root component — wires everything together
│   ├── index.css               ← Global styles, CSS variables, theme system
│   ├── data.js                 ← ✏️  ALL personal content lives here
│   │
│   └── components/
│       ├── Loader/             ← Animated splash screen on first load
│       ├── Navbar/             ← Fixed nav with scroll spy, theme & terminal buttons
│       ├── Hero/               ← Full-height hero with typewriter + orbit animation
│       ├── About/              ← Bio, quick stats, info grid, achievements
│       ├── Skills/             ← Tabbed categories, icon cards, progress bars, tag cloud
│       ├── Experience/         ← Vertical timeline of all work history
│       ├── Projects/           ← Filterable project cards with tag-based filtering
│       ├── Education/          ← Academic timeline with grade badges
│       ├── Hobbies/            ← Hobby cards: Gaming & Live Streaming
│       ├── Contact/            ← EmailJS form + social links + auto-reply
│       ├── Footer/             ← Footer with links and copyright
│       └── Terminal/           ← Interactive CLI overlay (Ctrl+`)
│
├── build/                      ← Production output (auto-generated, not committed)
└── package.json
```

---

## ✏️ Customisation

**All personal content lives in a single file: `src/data.js`**

Edit this one file to update everything across the site — no need to touch any component.

### `personal`
Controls the hero section, about section, navbar, and footer.

```js
export const personal = {
  name:     'Soham Das Biswas',
  role:     'DevOps Engineer',
  email:    'sohamdb456@gmail.com',
  phone:    '+91 8167735148',
  location: 'Durgapur, West Bengal, India',
  github:   'https://github.com/SohamDasBiswas',
  linkedin: '...',
  twitter:  '...',
  instagram:'...',
  youtube:  '...',
  bio:      'Your bio paragraph...',
  typewriterPhrases: ['Multi-Cloud Architect', 'CI/CD Pipeline Engineer', ...],
  stats: [
    { num: '1+',    label: 'Years Exp' },
    { num: '99.9%', label: 'Uptime SLA' },
    ...
  ],
};
```

### `skills`
Array of skill categories. Each category has an icon, name, and items with proficiency levels (0–100).

```js
export const skills = [
  {
    category: 'Cloud & Infrastructure',
    icon: 'fa-cloud',
    items: [
      { name: 'AWS', icon: '☁️', level: 92 },
      ...
    ],
  },
  ...
];
```

### `experience`
Work history displayed on the vertical timeline. Set `current: true` for the active role.

```js
export const experience = [
  {
    title:   'DevOps Engineer',
    company: 'IntegrityWeb Informatics',
    type:    'Full-Time Remote',
    date:    '03/2025 – Present',
    current: true,
    points:  ['Bullet point 1...', 'Bullet point 2...'],
    tags:    ['AWS', 'Azure', 'SRE'],
  },
  ...
];
```

### `projects`
Cards in the Projects section. Leave `live: null` to hide the live link button.

```js
export const projects = [
  {
    emoji:  '☁️',
    title:  'Full-Stack CI/CD on AWS',
    desc:   'Description...',
    tags:   ['AWS', 'Docker', 'DevOps'],
    github: 'https://github.com/...',
    live:   null,
  },
  ...
];
```

### `education`
Academic history cards.

```js
export const education = [
  {
    degree:      'B.Tech — Computer Science & Engineering',
    institution: 'Kalyani Government Engineering College',
    period:      '2020 – 2024',
    grade:       'CGPA: 8.62',
    icon:        '🎓',
  },
  ...
];
```

### `terminalCommands`
Custom responses for terminal commands like `skills`, `projects`, `whoami`. Add any key here and it becomes a usable terminal command.

```js
export const terminalCommands = {
  skills:     'Cloud: AWS · Azure ...',
  experience: '[Current] IntegrityWeb ...',
  projects:   '1. Full-Stack CI/CD ...',
};
```

---

## 📧 EmailJS Setup

The contact form works entirely from the browser — no backend, no server needed.

### Step-by-step Guide

**1.** Create a free account at [emailjs.com](https://emailjs.com)

**2.** Go to **Email Services → Add New Service → Gmail**
- Connect your Gmail account
- ✅ Tick **"Send email on your behalf"** in the Google permission dialog
- Click **Send Test Email** to confirm it works

**3.** Go to **Email Templates** and create two templates:

#### Template 1 — "Contact Us" (notification to you)

| Field | Value |
|---|---|
| To Email | `sohamdb456@gmail.com` |
| From Name | `{{from_name}}` |
| Subject | `Contact Us: {{subject}}` |
| Reply To | `{{from_email}}` |
| Body | Use your `notification_template.html` |

**Template variables available:** `{{from_name}}`, `{{from_email}}`, `{{from_phone}}`, `{{from_company}}`, `{{subject}}`, `{{message}}`

#### Template 2 — "Auto-Reply" (confirmation to visitor)

| Field | Value |
|---|---|
| To Email | `{{from_email}}` |
| To Name | `{{to_name}}` |
| From Name | `Soham Das Biswas` |
| Reply To | `sohamdb456@gmail.com` |
| Subject | `We've received your message` |
| Body | Use your `autoreply_template.html` |

**4.** Copy your credentials and hardcode them in `src/components/Contact/Contact.js`:

```js
const EMAILJS_SERVICE_ID   = 'service_xxxxxxx';  // from Email Services tab
const EMAILJS_TEMPLATE_ID  = 'template_xxxxxxx'; // Contact Us template ID
const EMAILJS_AUTOREPLY_ID = 'template_xxxxxxx'; // Auto-Reply template ID
const EMAILJS_PUBLIC_KEY   = 'xxxxxxxxxxxx';      // from Account → API Keys
```

> **ℹ️ Note:** EmailJS public keys are designed to be used in frontend code — they are safe to hardcode. Never hardcode database passwords or private API secrets.

### How the Form Works

```
User fills form → clicks Send
        ↓
EmailJS loads via CDN (only on first submit)
        ↓
emailjs.init(PUBLIC_KEY) ← called every time to ensure key is set
        ↓
Send notification email to Soham  (awaited)
Send auto-reply to visitor         (fire-and-forget, won't break form if it fails)
        ↓
Show success message + reset form
```

---

## 🎨 Design System

The entire visual design is controlled by CSS variables in `src/index.css`. The light mode is achieved purely by overriding these variables on `body.light-mode` — no duplicate CSS.

### Color Tokens

| Variable | Dark Value | Light Value | Usage |
|---|---|---|---|
| `--accent` | `#00d4aa` | `#009e82` | Teal — primary highlight |
| `--accent2` | `#7c3aed` | `#6d28d9` | Purple — gradient accent |
| `--base` | `#0f121e` | `#cdd3de` | Page background |
| `--card-bg` | `#1a1e2e` | `#d2d8e6` | Cards and panels |
| `--text-primary` | `#e8eaf0` | `#1a1e2e` | Main readable text |
| `--text-secondary` | `#8b92a8` | `#3d4460` | Subtitles, descriptions |
| `--text-muted` | `#5a6075` | `#7a829a` | Labels, placeholders |

### Neumorphic Shadow System

```css
--nm-raised     /* Raised card effect */
--nm-raised-sm  /* Small raised element */
--nm-inset      /* Inset / pressed-in effect (inputs) */
--nm-hover      /* Hover state elevation */
```

### Typography

| Font | Weight | Usage |
|---|---|---|
| **Orbitron** | 400–900 | Section headings, logo, labels |
| **Exo 2** | 300–600 | Body text, paragraphs, UI text |
| **Space Mono** | 400–700 | Terminal, code blocks, mono labels |

---

## ✨ Features

| Feature | Details |
|---|---|
| 🌙 **Dark / Light Mode** | Full theme toggle with CSS variable inversion. Warm slate light theme — not stark white. Transition is smooth at 0.3s. |
| 🖱️ **Custom Cursor** | Teal dot cursor with a floating ring. The ring expands on hover over interactive elements. Desktop only. |
| ⏳ **Loader Screen** | Animated splash screen shown on first render. Disappears after 1.5 seconds before revealing the app. |
| 📈 **Scroll Progress Bar** | 3px teal-to-purple gradient bar pinned to the very top of the viewport — tracks reading progress. |
| ✨ **Reveal Animations** | Every section animates in using `IntersectionObserver` at 12% visibility threshold. Three variants: `reveal` (fade up), `reveal-left`, `reveal-right`. |
| ⌨️ **Typewriter Effect** | Hero section cycles through role titles character by character — types at 100ms/char, deletes at 60ms/char, pauses 2s between phrases. |
| 🔢 **Animated Counters** | Hero stats count up from 0 to their target value on first scroll into view. Handles numeric suffixes like `1+`, `99.9%`, `4`. |
| 💻 **Interactive Terminal** | Full CLI overlay with command history (↑↓ arrows), 13+ built-in commands, and custom responses from `data.js`. Open with `Ctrl+\`` or the navbar button. |
| 🗂️ **Tabbed Skills** | Four skill category tabs. Switching tabs re-triggers the progress bar animation. Each skill has an icon card + animated fill bar. |
| 🔍 **Project Filter** | Click any tech tag to filter project cards. Cards not matching the tag fade out. Click the active tag again to clear the filter. |
| 📧 **EmailJS Contact Form** | Six-field form (name, email, phone, company, subject, message). Sends a notification email to Soham and a styled auto-reply to the visitor. No backend needed. |
| 📬 **Auto-Reply Email** | Visitor receives a beautifully styled dark-themed HTML confirmation email with their message echoed back, response time info, and portfolio links. |
| 📱 **Fully Responsive** | Mobile-first layout. Navbar collapses to hamburger menu. Grid layouts switch to single column. Terminal adapts to smaller screens. |
| ↑ **Scroll to Top** | Floating button appears after scrolling 400px. Smooth scrolls back to top. |

---

## 📌 Sections

The portfolio is a single-page app with eight scrollable sections:

| # | Section | Description |
|---|---|---|
| 00 | **Hero** | Name, role, typewriter, orbit visual, stats, CTA buttons |
| 01 | **About** | Bio paragraphs, contact info grid, quick stats, Email/LinkedIn buttons |
| 02 | **Skills** | Tabbed skill categories with icon cards, progress bars, and a full tech tag cloud |
| 03 | **Experience** | Vertical timeline — 4 roles from Intern to current DevOps Engineer |
| 04 | **Projects** | 6+ project cards with tag filtering and GitHub links |
| 05 | **Education** | Academic timeline — B.Tech CGPA 8.62, 12th, 10th |
| 06 | **Hobbies** | Gaming (FPS/RPG) and Live Streaming cards with YouTube link |
| 07 | **Contact** | EmailJS-powered form with auto-reply + social links |

---

## 💻 Terminal Commands

Open the terminal with **`Ctrl+\``** or click the `>_` button in the navbar.

```
guest@sdb.dev:~$ help
```

| Command | Output |
|---|---|
| `help` | Formatted table of all available commands |
| `whoami` | Visitor info — role, access level, host |
| `about` | Bio and background (from `data.js`) |
| `skills` | Full tech stack list (from `data.js`) |
| `experience` | Work history summary (from `data.js`) |
| `projects` | All featured projects list (from `data.js`) |
| `education` | Academic background (from `data.js`) |
| `hobbies` | Gaming & live streaming details with YouTube link |
| `contact` | Email, phone, location, response time |
| `email` | EmailJS integration details |
| `social` | All social media platform links |
| `date` | Current UTC date and time (live) |
| `clear` | Clears all terminal output |
| `exit` | Closes the terminal overlay |

**Keyboard behaviour inside terminal:**
- `↑` / `↓` — navigate through command history
- `Enter` — execute command
- `Esc` or click backdrop — close terminal
- Custom commands can be added via `terminalCommands` in `data.js`

---

## 🧩 Components In Depth

### `App.js`
The root component. Orchestrates everything:
- Manages `loading`, `darkMode`, `terminalOpen`, `scrollProgress`, `showTop` state
- `useCursor()` hook — tracks `mousemove`, attaches `mouseenter`/`mouseleave` to all interactive elements
- `useEffect` for loader timeout (1.5s)
- `useEffect` for scroll progress bar + scroll-to-top button visibility
- `useEffect` for `IntersectionObserver` reveal animations (runs after loader clears)
- `useEffect` for `Ctrl+\`` keyboard shortcut to toggle terminal

---

### `Loader`
Shown for 1.5 seconds on first render. Simple animated splash screen with the `SDB` monogram. Replaced by the full app once the timeout fires.

---

### `Navbar`
Fixed top navigation with:
- **Scroll spy** — highlights the active nav link based on `window.scrollY` vs each section's `offsetTop`
- **Logo** — `SDB` text, scrolls to `#hero` on click
- **Nav links** — smooth scroll to each section via `scrollIntoView`
- **Terminal button** — opens the Terminal overlay
- **Theme button** — toggles dark/light mode (sun/moon icon swaps)
- **Hamburger menu** — collapses nav links on mobile with slide-down animation
- Background box-shadow appears after scrolling 50px

---

### `Hero`
Full-height landing section with:
- **`useTypewriter` hook** — custom hook with type/delete/pause cycle across `personal.typewriterPhrases`
- **`useCounter` hook** — animates numbers from 0 to target, triggered by `IntersectionObserver`
- **Orbit rings** — two CSS-animated rotating rings around the `SDB` avatar
- **Tech badges** — floating chips (AWS, Azure, Docker, CI/CD) positioned around the orbit
- **CTA buttons** — Hire Me (scrolls to contact), GitHub, LinkedIn, Resume download
- **Background** — subtle dot grid pattern + two radial glow effects

---

### `About`
Two-column layout:
- **Left** — three bio paragraphs, info grid (location, email, phone, availability), Email/LinkedIn CTA buttons
- **Right** — quick stats grid: 15+ Production Systems, 20% Cost Reduction, 55% Faster Deployments, 99.9% Uptime

---

### `Skills`
Three-part layout:
1. **Tab bar** — Cloud, DevOps, Containers, Development categories
2. **Panel** — Icon cards (emoji + name + level badge) alongside animated progress bars
3. **Tag cloud** — All skills from all categories shown as flat teal-bordered tags

Progress bars animate from 0% to their target width when the panel enters the viewport. Switching tabs resets and re-triggers the animation.

---

### `Experience`
Vertical timeline with a central teal line. Each entry includes:
- Company, role, remote/type, date range
- Bullet points (from `data.js`)
- Tech tags
- Pulsing green dot on the current role

---

### `Projects`
Tag-filter system:
- All unique tags extracted from all projects
- Clicking a tag filters the visible cards
- Cards use CSS transitions to fade in/out
- Each card has: emoji icon, title, date, description, tag chips, GitHub link, optional Live link

---

### `Education`
Cards for each academic entry: degree, institution, period, and grade badge. Displayed with `reveal` scroll animation.

---

### `Hobbies`
Cards for **Gaming** (FPS, RPG, Strategy) and **Gaming Live Stream** (OBS, Discord, community). Each card has:
- Emoji icon in a neumorphic icon wrap
- Title + subtitle in monospace
- Description paragraph
- Tag chips
- Optional external link button (YouTube for the stream card)
- Hover effect: `translateY(-6px)` + teal gradient top border reveals

---

### `Contact`
Two-column layout:
- **Left** — email, phone, location contact items + social icon strip (GitHub, LinkedIn, Twitter, Instagram, YouTube)
- **Right** — six-field form: Name*, Email*, Phone, Company, Subject, Message*

Form logic:
1. Validates required fields before sending
2. Dynamically loads EmailJS SDK via `<script>` tag on first submit (no npm package needed)
3. Calls `emailjs.init(PUBLIC_KEY)` on every submit to ensure the key is always set
4. `await`s the notification email to Soham
5. Fires the auto-reply as a non-blocking promise (failure is only console-warned)
6. Shows success/error/validation status messages inline

---

### `Terminal`
Full-screen backdrop overlay with a macOS-style terminal window:
- **Title bar** — red/yellow/green traffic dots, title, close button
- **Boot sequence** — 5 lines shown on open (version, connection status, EmailJS init, help hint)
- **Command history** — navigable with ↑/↓ arrow keys, stored in state
- **Built-in commands** — defined in `BUILTIN` object inside Terminal.js (help, hobbies, contact, email, social, whoami, date, exit)
- **Data commands** — falls back to `terminalCommands` from `data.js` for about, skills, experience, projects, education
- **`date`** — computed fresh on each call (not static)
- **`exit`** — calls `onClose()` to unmount the overlay

---

## 📄 License

MIT — free to use and adapt for your own portfolio. Attribution appreciated but not required.

---

<div align="center">

Made with ☁️ and `> _ ` by **Soham Das Biswas**

</div>
