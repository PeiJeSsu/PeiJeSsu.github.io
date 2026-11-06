# Pei-Je Ssu — Personal Website

My personal website: about me, projects, experience, blog, and resume.

Live at **https://peijessu.github.io**

Built with [Astro](https://astro.build) and deployed to GitHub Pages with GitHub Actions.

## Development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run resume:pdf   # rebuild public/resume.pdf from the resume page (macOS only)
```

## Editing content

- **Profile, skills, projects, experience:** `src/data/profile.ts`
- **Blog posts:** copy `src/content/blog/_template.md`, rename it, and set `draft: false`
- **Photo:** `public/profile.jpg`
- **Resume PDF:** after changing resume content, run `npm run resume:pdf` and check it still fits on one page
- **Share preview image:** `public/og.png` has fixed text, so update it when your title or tagline changes

Pushing to `main` deploys the site automatically.
