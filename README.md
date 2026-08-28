# Mian Hasnain Ahmad — Portfolio

A responsive personal portfolio built with React and Vite. It includes a mobile navigation menu, light/dark theme toggle, reusable project and section components, smooth scrolling, and a contact-form interaction.

## Run locally

1. Install [Node.js LTS](https://nodejs.org/).
2. Open this folder in VS Code.
3. Open the VS Code terminal and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the address shown in the terminal (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
```

This creates the production-ready `dist` folder.

## Publish to GitHub

1. Create an empty GitHub repository, for example `mian-portfolio`.
2. In this project folder, run:

   ```bash
   git init
   git add .
   git commit -m "Create personal portfolio"
   git branch -M main
   git remote add origin https://github.com/MianHasnainAhmad/mian-portfolio.git
   git push -u origin main
   ```

   Replace the repository URL if you choose a different repository name.

## Deploy on Netlify

1. Sign in to [Netlify](https://app.netlify.com/).
2. Choose **Add new site** → **Import an existing project** → **GitHub**.
3. Select the portfolio repository.
4. Use these build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Select **Deploy site**. Netlify will provide the live URL.

## Files to customize

- `src/data.js` contains external links, skills, and project information.
- `src/App.jsx` contains the written portfolio content and timeline.
- `public/profile.jpeg` is the profile photo.
- `src/styles.css` contains all visual styling and responsive layout rules.
