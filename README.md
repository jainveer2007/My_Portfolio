# Developer Portfolio — VS Code theme

A single-page developer portfolio styled like a VS Code window (title bar, tabs, activity bar, status bar), built with **React + Vite + Tailwind CSS v4** and animated with **Framer Motion**.

## Run it

```bash
npm install
npm run dev
```

Open the printed local URL. Build for production with `npm run build` (output goes to `dist/`).

## Customize — start here

### 1. Your info: `src/data/profile.js`
Everything personal lives in this one file: name, role, tagline, bio paragraphs, location, email, phone, resume link, and social URLs. Edit the values and the whole site updates.

### 2. Your photo
Drop your photo in `public/` and name it **`profile-photo.jpg`** (matches the `photo` path already set in `profile.js`). If no photo is found, the hero automatically falls back to a circular initials avatar, so the site still looks correct in the meantime.

- Use a square-ish photo (at least 400x400px) for the best crop.
- To use a different filename/extension, just update `photo` in `profile.js` to match, e.g. `"/photo.png"`.

### 3. Your resume
Drop a PDF in `public/resume.pdf` (or update `resumeUrl` in `profile.js` to point elsewhere).

### 4. Skills: `src/data/skills.js`
Grouped by category with a 0-100 `level` that drives the animated proficiency bar.

### 5. Projects: `src/data/projects.js`
Each project has a title, description, tech stack, repo link, live demo link, and a `status` of `"shipped"` or `"in-progress"`.

## What's inside

- `TitleBar` - fake window chrome (traffic-light dots)
- `TabBar` - the top navigation, styled as open editor tabs (Home / About / Skills / Projects / Contact) with a scrollspy-driven active indicator
- `ActivityBar` - left icon rail (decorative + your GitHub link), hidden on small screens
- `StatusBar` - bottom bar with a live clock, active section, and "open to work" badge
- `BootScreen` - a short workspace-loading animation on first load
- Section components (`Home`, `About`, `Skills`, `Projects`, `Contact`) styled like syntax-highlighted code

Colors follow the VS Code Dark+ palette and live in `src/index.css` under `@theme` - change any `--color-*` variable there to retheme the whole site.

## Deploy

Any static host works (Vercel, Netlify, GitHub Pages, Cloudflare Pages). Build first:

```bash
npm run build
```

Then deploy the `dist/` folder.
