## Overview

This portfolio includes a polished landing page, an about section, a technology stack showcase, featured projects, and a contact section. It also includes social links and a resume download so visitors can learn more about my background in one place.

## Highlights

- Responsive single-page portfolio with animated section reveals
- Project showcase with descriptions, technologies, and live/GitHub links
- About section that summarizes my experience with frontend, backend, database, and design work
- Contact section with email access and social links
- Built for fast deployment on Vercel

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Inertia.js UI helpers
- Radix UI primitives
- Lucide and Tabler icons

## Local Development

### Prerequisites

- Node.js 20 or newer
- npm

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Deployment

This project is ready for Vercel deployment as a standard Vite app.

Recommended Vercel settings:

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install` or `npm ci`

Make sure any static assets are placed in the `public` directory so they can be served from the site root.

## Project Structure

```text
src/
  components/   Reusable UI and section components
  data/         Portfolio content and project data
  hooks/        Custom React hooks
  lib/          Shared utility helpers
  routes/       Route helpers used by the app
  assets/       Local source assets
public/         Static files served directly by Vite
```
