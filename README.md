This is a [Next.js](https://nextjs.org) portfolio site. Content is stored in `data/portfolio.json` and can be edited through a built-in admin panel.

## Admin panel

1. On the home page, **click the logo initials (RP) five times** within about 1.2 seconds.
2. Sign in with the admin password (default: **`200010`**).
3. You are taken to `/admin`, where you can edit profile, about text, experience, or the full JSON (skills, projects, education, certificates).
4. Click **Save changes**, then reload the home page to see updates.

### Environment variables

Copy `.env.example` to `.env.local` and adjust:

| Variable | Purpose |
|----------|---------|
| `ADMIN_PASSWORD` | Admin sign-in password (default `200010`) |
| `ADMIN_SESSION_SECRET` | Signs the admin session cookie — use a long random string in production |
| `NEXT_PUBLIC_SITE_URL` | Public URL for SEO and Open Graph |

**Security:** Change the default password before deploying. The five-click logo is a convenience gate, not strong security.

**Hosting note:** Saving updates writes to `data/portfolio.json` on disk. This works on local dev and VPS/Node hosting. Serverless platforms (e.g. Vercel) usually have a read-only filesystem — use a VPS, commit JSON changes from your machine, or add external storage later.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
