MVP Portfolio — Miguel-Vernard Pinpin
A personal e-portfolio built as a final project for WD-302, showcasing my skills, projects, certifications, and experience as a BSIT Web Development student at Holy Angel University.

🔗 Live Site

(https://miguel-pinpineportfolio.netlify.app)


📋 Overview
This portfolio was built in two versions:

HTML/CSS/JS — plain multi-page site, no frameworks
Angular 17 — component-based SPA with routing and services

Both versions feature the same design: a dark theme with a pure black navbar, hints of blue for accents, clean typography using Cormorant Garamond and DM Mono, and full responsiveness across all screen sizes.

📄 Pages
PageDescriptionHomeHero section, featured projects, awardsAboutBio, skill bars, certifications (15), awardsProjectsFilterable project showcase with detailsResumeTimeline of experience and education, PDF downloadContactLive form that sends directly to Gmail via Formspree

🛠️ Built With

HTML5, CSS3, JavaScript
Angular 17 (standalone components, lazy-loaded routes)
Angular Reactive Forms
Formspree (contact form → Gmail delivery)
Google Fonts — Cormorant Garamond, Outfit, DM Mono
IntersectionObserver API (scroll reveal animations)


🚀 Getting Started (Angular Version)
bash# Install dependencies
npm install

# Start development server
npm start
# → http://localhost:4200

# Build for production
npm run build
# → dist/mvp-portfolio/browser/

---

## 📁 Project Structure
```
src/
├── app/
│   ├── components/        Navbar, Footer
│   ├── directives/        Scroll reveal directive
│   ├── pages/             Home, About, Projects, Resume, Contact
│   ├── services/          Portfolio data service
│   └── app.routes.ts      Lazy-loaded routes
├── assets/
│   ├── logo-mark-white.png
│   ├── profile.jpg
│   └── Pinpin_Resume.pdf
└── styles.css             Global dark theme tokens

👤 Author
Miguel-Vernard E. Pinpin
BSIT Web Development · Holy Angel University · Angeles, Pampanga

GitHub: Miggyyypinpan
LinkedIn: miguel-pinpin-34b436316
Email: miggypin1218@gmail.com


📝 License
© 2025 Miguel-Vernard E. Pinpin. All rights reserved.
