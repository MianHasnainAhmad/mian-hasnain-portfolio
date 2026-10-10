# Mian Hasnain Ahmad — Portfolio

My personal portfolio, built with React and Vite. It presents my education, teaching experience, skills and projects, and makes it easy for recruiters to contact me.

## What's on the site

- **Hero and at-a-glance facts**: who I am, what I'm looking for, and my degree, experience and projects in one strip
- **About, Skills, Projects, Education & experience**: written with real details, and every project links to its source code
- **Contact**: email, LinkedIn and GitHub, plus a form that opens the visitor's email app with the message ready to send
- **Responsive layout** with a mobile menu and a light/dark theme toggle
- **Accessibility and SEO basics**: skip link, visible keyboard focus, reduced-motion support, page title and description, social preview tags, favicon and structured data

## Tech

React · Vite · plain CSS · deployed on Netlify

## Run locally

1. Install [Node.js LTS](https://nodejs.org/).
2. In this folder, run:

   ```bash
   npm install
   npm run dev
   ```

3. Open the address shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

This creates the `dist` folder. Netlify builds it automatically using `netlify.toml` (build command `npm run build`, publish directory `dist`).

## Where to edit the content

- `src/data.js`: links, at-a-glance facts, skills, projects, education and experience
- `src/App.jsx`: the hero, about and contact text
- `src/styles.css`: all styling and responsive rules
- `public/profile.jpeg`: profile photo
- `index.html`: page title, description and social tags

## Contact

[LinkedIn](https://www.linkedin.com/in/mian-hasnain-951695325) · [GitHub](https://github.com/MianHasnainAhmad)
