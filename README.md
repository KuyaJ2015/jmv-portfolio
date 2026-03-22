# 🚀 James Marvin Valmeo — Space Portfolio

Space-themed portfolio built with React + Vite + Tailwind CSS.

## ✨ Features
- 🌌 Animated starfield + shooting stars
- 🌙 Dark / Light mode toggle
- ✍️ Typing animation (Hero)
- 👨 About section with stats
- 📊 Dynamic skills with filter tabs + animated progress bars
- 🖼️ Project cards with hover zoom effect + demo links
- 📬 Contact form with success state
- 🎞️ Scroll-triggered animations throughout

## 🚀 How to Run

```bash
npm install
npm run dev
```

Open: http://localhost:5173

## 📁 Structure

```
src/
├── App.jsx
├── index.css
├── main.jsx
├── hooks/
│   ├── useTheme.js       ← Dark/light mode
│   └── useInView.js      ← Scroll animations
└── components/
    ├── StarField.jsx     ← Animated background
    ├── Navbar.jsx        ← Nav + theme toggle
    ├── Hero.jsx          ← Typing + CTA
    ├── About.jsx         ← Bio + stats
    ├── Skills.jsx        ← Filter tabs + bars
    ├── Projects.jsx      ← Hover zoom cards
    ├── Contact.jsx       ← Contact form
    └── Footer.jsx
```
