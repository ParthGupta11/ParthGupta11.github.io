# Portfolio Website — Parth Gupta
## CLAUDE.md — Read this at the start of every session

---

## Project Overview

Personal portfolio website for Parth Gupta, a robotics and computer vision engineer (MS Robotics, Carnegie Mellon University). The site lives at `ParthGupta11.github.io` and is deployed via GitHub Pages from the `main` branch root.

**Goal:** A lasting professional presence for future opportunities in robotics/CV — industry and academia.

---

## Tech Stack

- **Plain HTML + CSS + minimal vanilla JS** — no frameworks, no build tools, no npm
- Single `index.html` at repo root
- Companion `style.css` and `script.js` in root (or `/assets/`)
- No Jekyll, no React, no bundler — GitHub Pages serves static files directly
- Any images go in `/assets/images/`, any project media in `/assets/projects/`

**Why no framework:** Simplicity, zero build pipeline, and maximum Claude Code compatibility.

---

## Design System

### Aesthetic
- **Clean and minimal** — generous whitespace, restrained use of color
- Light background (`#FAFAFA` or pure white), dark text
- Navy/slate blue as the single accent color: `#1E3A5F` (primary), `#2E5494` (hover states), `#EBF0F8` (light tint backgrounds)
- No gradients, no drop shadows on layout elements
- Cards get a very subtle `box-shadow: 0 1px 3px rgba(0,0,0,0.08)`

### Typography
- Font stack: `'Inter', system-ui, -apple-system, sans-serif` (loaded from Google Fonts)
- Body: 16px / line-height 1.7
- Section headings (h2): 28px, font-weight 600
- Card titles: 18px, font-weight 600
- Muted text: `#6B7280`
- Max content width: 900px, centered with `margin: 0 auto`

### Spacing
- Section padding: `80px 0`
- Mobile: `48px 0`
- Container horizontal padding: `24px`

---

## Site Structure

Single-page, smooth scroll. One `index.html`. Sections in order:

```
#hero        → Name, title, one-line bio, CTA buttons
#about       → Photo (optional), background summary, skills
#experience  → Timeline of jobs
#projects    → Card grid with images/GIFs
#contact     → Email, LinkedIn, GitHub links
```

### Navigation
- Sticky top nav, transparent → white on scroll
- Links: About | Experience | Projects | Contact
- Nav also contains name/logo on the left
- Hamburger menu on mobile

---

## Section Specs

### Hero (`#hero`)
- Full viewport height (`100vh`) or at minimum 85vh
- Layout: centered text, or split (text left / headshot right)
- Name: large (48–56px), weight 700
- Title: "Robotics & Computer Vision Engineer"
- One-line bio: "MS Robotics @ CMU · Building perception systems for autonomous robots"
- Two CTA buttons: "View Projects" (filled, navy) and "Get in Touch" (outlined)
- Subtle animated background optional (keep it tasteful — NO particle storms)

### About (`#about`)
- 2-column on desktop: left = photo placeholder, right = text
- Short bio paragraph (3–4 sentences): CMU MSRSD, robotics software, computer vision, previously at Niqo Robotics and Salin 247
- Skills displayed as **tag pills** grouped by category:
  - **Perception & Vision:** Object Detection, Instance Segmentation, Image Processing, Sensor Fusion, LiDAR
  - **ML & Deep Learning:** PyTorch, Deep Learning, Model Fine-tuning, TensorRT, CUDA
  - **Robotics:** ROS1/ROS2, Robot Autonomy, Reinforcement Learning, SLAM
  - **Programming:** Python, C++, MATLAB, Docker, Git, Linux, AWS
- Mention education inline (CMU 4.0 GPA, MAIT 9.6/10)
- IEEE publication can be mentioned as one line: "IEEE publication on dynamical systems prediction (undergraduate research)"

### Experience (`#experience`)
- Vertical timeline layout (line on left, cards on right)
- Each entry: Company name, role, dates, location, 2–3 bullet points (most impactful metrics)

**Entries (in order, newest first):**

1. **Salin 247** — Robotics Engineer — May 2025 – Aug 2025 — Ames, IA
   - Perception subsystem: 2 LiDARs + 4 RGB cameras, 360° obstacle detection, 8 mph autonomous driving
   - Latency optimization: 230ms → 40ms via TensorRT, CUDA, multiprocessing; 20 FPS
   - Built orchestrator managing 25+ ROS nodes

2. **Niqo Robotics** — Computer Vision Engineer — Aug 2023 – May 2024 — Bangalore, India
   - ROS2 pipeline for high-precision agricultural robots; <2ms software latency
   - Cross-functional RCA; increased spraying precision by 67% at 3 mph
   - Virtual mapping system for crop rows and spray region visualization

3. **Niqo Robotics** — Computer Vision Intern — Jul 2022 – Jul 2023 — Bangalore, India
   - Crop row detection + selective spray with <50ms latency
   - Deep learning pipeline (CVAT, Python, AWS); crop detection at 99% accuracy

### Projects (`#projects`)
- **Card grid:** 2 columns on desktop, 1 on mobile
- Each card: image/GIF placeholder (16:9), project title, 2-line description, tech tags, optional GitHub/demo link
- Cards have hover effect (slight lift: `transform: translateY(-4px)`)
- Image area shows a placeholder with a subtle pattern until real media is added

**Projects (in order of impressiveness):**

1. **Autonomous Food Assembly Kiosk** *(CMU, Aug 2024 – Present)*
   - 7-DOF robot arm assembling meals; RL for deformable ingredient grasping
   - 80% pick accuracy for lettuce/onions; UNet+SAM2 for ingredient localization at 95%
   - Tags: ROS2, PyTorch, Reinforcement Learning, SAM2, UNet
   - [Has a link — include as "View Project" button]

2. **Sparse-H3D: 3D Human Segmentation from Sparse LiDAR** *(May–Aug 2025)*
   - Human segmentation from sparse outdoor LiDAR using models trained on dense indoor data
   - Fine-tuned transformers: 2% → 90%+ average precision on sparse data
   - Tags: LiDAR, Point Clouds, Transformers, PyTorch, 3D Vision

3. **Virtual Clothing Assistant** *(Jan–Mar 2022)*
   - Virtual try-on for e-commerce using VITON paper
   - OpenPose + UNet + ResNet pipeline deployed as Django web app
   - Tags: Deep Learning, OpenPose, UNet, Django, Computer Vision
   - [Has a link — include as "View Project" button]

### Contact (`#contact`)
- Simple centered section
- Short line: "Open to research collaborations and future opportunities."
- Three icon+link items: Email, LinkedIn, GitHub
  - Email: parthgupta.eleven@gmail.com
  - LinkedIn: linkedin.com/in/parthgupta11
  - GitHub: github.com/ParthGupta11
- No contact form (keep it simple)

---

## File Structure

```
ParthGupta11.github.io/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/
│   │   └── profile.jpg          ← add later
│   └── projects/
│       ├── food-kiosk.gif        ← add later
│       ├── sparse-h3d.gif        ← add later
│       └── virtual-clothing.jpg  ← add later
└── CLAUDE.md                     ← this file
```

---

## Responsive Breakpoints

- Desktop: ≥ 768px — 2-column layouts, full nav
- Mobile: < 768px — single column, hamburger nav, reduced font sizes

---

## Deployment

- GitHub Pages, `main` branch, root folder `/`
- **No build step.** Edit files → `git add . && git commit -m "..." && git push origin main` → live in ~1 minute
- Verify at: https://ParthGupta11.github.io

---

## Claude Code Working Instructions

- Build **one section at a time**. Finish hero → commit → start about → commit, etc.
- After each section, run a quick local check: `open index.html` or use `python3 -m http.server 8000`
- Use **planning mode** (`/plan`) before starting a new section to confirm the approach
- **Clear context** between sections — don't carry a 400-line context from hero into building the projects grid
- All placeholder images: use a `<div>` with `background: #EBF0F8` and the project name as text — no broken `<img>` tags
- When adding real media later: replace placeholder divs with `<img>` tags pointing to `/assets/projects/`
- Keep CSS in `style.css`, JS in `script.js` — not inline in HTML
- Commit message format: `feat: add [section name] section` or `fix: [what was fixed]`

---

## What NOT to do

- No CSS frameworks (no Tailwind, no Bootstrap)
- No JavaScript frameworks (no React, no Vue)
- No external dependencies beyond Google Fonts and maybe one icon library (e.g. Lucide or Heroicons via CDN)
- No animations that are distracting — subtle only (hover lifts, smooth scroll, nav fade)
- No dark mode toggle (keep it simple for now, can add later)
