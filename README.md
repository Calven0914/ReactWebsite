# Calven Chow — Personal Portfolio

A clean, responsive portfolio website built with React and Bootstrap 5.

## Tech Stack

- **React 18** — functional components + hooks
- **Bootstrap 5** + **React-Bootstrap** — layout & UI
- **Bootstrap Icons** — icon set
- **Google Fonts** — DM Serif Display, DM Mono, Outfit
- Fully static — no backend yet

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 3. Build for production

```bash
npm run build
```

The optimized build will be in the `/build` folder — ready to deploy to GitHub Pages, Vercel, or Netlify.

---

## Folder Structure

```
portfolio/
├── public/
│   └── index.html            # HTML template with font imports
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky nav with active section tracking
│   │   ├── Footer.jsx         # Footer with social links
│   │   └── ProjectCard.jsx    # Reusable project card component
│   ├── pages/
│   │   ├── Home.jsx           # Hero / landing section
│   │   ├── About.jsx          # About, skills, education
│   │   ├── Projects.jsx       # Project grid
│   │   └── Contact.jsx        # Contact form + social links
│   ├── styles/
│   │   └── global.css         # Design system, variables, animations
│   ├── App.jsx                # Root component
│   └── index.js               # React entry point
├── package.json
└── README.md
```

## Customisation Checklist

Update the following with your real info:

- [ ] **Name** — search for "Calven Chow" and replace throughout
- [ ] **Role / bio** — `pages/About.jsx` and `pages/Home.jsx`
- [ ] **Skills** — `SKILLS` array in `pages/About.jsx`
- [ ] **Education** — edu cards in `pages/About.jsx`
- [ ] **Projects** — `PROJECTS` array in `pages/Projects.jsx`
- [ ] **GitHub URL** — `pages/Contact.jsx` and `components/Footer.jsx`
- [ ] **LinkedIn URL** — `pages/Contact.jsx` and `components/Footer.jsx`
- [ ] **Email** — `pages/Contact.jsx`
- [ ] **Location** — `pages/Contact.jsx`
- [ ] **Page title** — `public/index.html`

## Deploying to GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Then run:
```bash
npm run deploy
```
