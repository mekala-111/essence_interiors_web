# Essence Interiors — web

Next.js implementation of the "Book a Consultation" page from the Claude Design
handoff bundle (see `../README.md`, `../chats/chat1.md`, and `../project/BookConsultation.dc.html`
at the repo root for the original design source and intent).

## Scope

Only the Book a Consultation page is implemented here, along with the shared
`Header` and `Footer` it depends on:

- `/book-consultation` — the page itself (hero, perks, form, studio info strip)
- `src/components/Header.tsx`, `src/components/Footer.tsx` — shared nav/footer
- `/` redirects to `/book-consultation` since no other pages exist yet

The header's nav links point at routes for the rest of the site (`/about`,
`/projects`, `/services`, etc.) described in the design chat, but those pages
haven't been built — they'll 404 until implemented.

## Consultation form

The form posts to `POST /api/consultation` (`src/app/api/consultation/route.ts`),
which validates the payload and emails it to the studio via SMTP (nodemailer).
Copy `.env.example` to `.env.local` and fill in real SMTP credentials:

```bash
cp .env.example .env.local
```

Without SMTP configured, the endpoint responds with a clear 503 rather than
silently succeeding.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for `next dev`. Production (`npm start`) listens on port 6061.
