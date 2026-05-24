# Ravindu Ponnamperuma — Portfolio

Personal portfolio website for **Ravindu Ponnamperuma**, an IT Support Engineer based in Sri Lanka. The site presents professional background, skills, work experience, projects, education, certifications, and contact details in a single scrollable layout.

## About

I am a BIT graduate from the University of Moratuwa with hands-on experience in IT support, system administration, and enterprise infrastructure. I currently work as **IT Coordinator** at the Sri Lanka Institute of Textile & Apparel (SLITA), where I manage web platforms, ERP/LMS systems, Microsoft 365, and end-user support. My background also includes IT support and digital media at Pulse Academy and a Trainee Software Developer role at Maxim Impressions Lanka.

This repository is the source for my public portfolio: a fast, accessible site that highlights what I do, the systems I support, and the technologies I work with.

## What’s on the site

| Section | Content |
|---------|---------|
| **Hero** | Name, role, summary, and quick stats |
| **Skills** | Grouped technical and professional skills |
| **Experience** | Roles, companies, and responsibilities |
| **Projects** | Selected work with descriptions and links |
| **Education** | Academic background |
| **Certifications** | Professional certificates |
| **Contact** | Email, phone, and social profiles (LinkedIn, GitHub) |

Site copy and structured data live in `data/portfolio.json`, which drives the UI and SEO metadata (Open Graph, JSON-LD).

## Tech stack

- **[Next.js](https://nextjs.org)** (App Router) — React framework, server components, and API routes
- **React 19** — UI
- **[Tailwind CSS](https://tailwindcss.com)** — Styling (navy/gold theme)
- **[Framer Motion](https://www.framer.com/motion/)** — Section and navigation animations
- **[Lucide](https://lucide.dev)** — Icons
- **TypeScript** — Types for portfolio data and components

Features include responsive navigation, skip-to-content link, structured data for search engines, and a client-side portfolio context so content can be refreshed without a full rebuild where the API is used.

## Project structure

```
app/                 # Pages and React components
data/portfolio.json  # Portfolio content (profile, experience, skills, etc.)
lib/                 # Data loading, types, metadata helpers
public/              # Static assets (e.g. profile image)
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build      # Production build
npm run start      # Run production server locally
npm run lint       # ESLint
npm run typecheck  # TypeScript check
```

### Environment variables

Copy `.env.example` to `.env.local` for local development. Set `NEXT_PUBLIC_SITE_URL` to your public URL when deploying (used for SEO and social previews).

## License

Private project — all rights reserved unless stated otherwise.
