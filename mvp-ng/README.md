# MVP Portfolio — Angular Edition

## Quick Start
```bash
npm install
npm start        # → http://localhost:4200
npm run build    # production build → dist/mvp-portfolio/
```

## Project Structure
```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          # Pure black navbar — logo mark floats
│   │   └── footer/
│   ├── directives/
│   │   └── reveal.directive.ts   # Scroll-reveal via IntersectionObserver
│   ├── pages/
│   │   ├── home/
│   │   ├── about/           # Profile photo + skills + certs
│   │   ├── projects/        # Filterable project list
│   │   ├── resume/          # Timeline + PDF download
│   │   └── contact/         # Reactive form
│   ├── services/
│   │   ├── theme.service.ts      # Dark/light mode, persisted via localStorage
│   │   └── portfolio.service.ts  # All content data
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts        # Lazy-loaded routes
├── assets/
│   ├── logo-mark-white.png  # White MVP mark, transparent bg — used on black navbar
│   ├── logo-mark-dark.png   # Dark MVP mark, transparent bg — used in footer (light mode)
│   ├── profile.jpg          # Professional headshot
│   └── Pinpin_Resume.pdf
└── styles.css               # Global tokens — navbar always #000000
```

## Navbar Design Note
The navbar is permanently `#000000` in BOTH dark and light mode.
`logo-mark-white.png` has a transparent background so only the white
MVP mark is visible — it floats on the black bar with no visible border or square.

## Deploy
```bash
# Netlify: drag dist/mvp-portfolio/browser/ to netlify.com/drop
# GitHub Pages:
npx angular-cli-ghpages --dir=dist/mvp-portfolio/browser
# Add _redirects file: /* /index.html 200
```
