# Fardin Hasan Mayen Portfolio

A responsive personal portfolio presented as a VS Code-style workspace. It includes a home view, developer profile, project list, contact form, theme switcher, responsive navigation, and a resume viewer.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Motion for React animations
- Lucide React icons

## Project Structure

```text
src/
   components/
      layout/     Workspace chrome, navigation, tabs, and status bar
      pages/      Home, about, projects, and contact views
      ui/         Reusable cards, syntax elements, icons, and resume modal
   data/         Portfolio content and navigation data
   lib/          Shared utility functions
   types/        TypeScript types
   App.tsx       Application shell and page state
   index.css     Tailwind entry point and workspace styles
public/
   assets/       Static portfolio assets
```

## Requirements

- Node.js 18 or newer
- npm

## Install

```bash
npm install
```

## Development

```bash
npm run dev
```

The development server runs at `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run build
```

`lint` runs the TypeScript compiler without emitting files. `build` creates the production bundle in `dist/`.

## Contact Form

The contact form submits through FormSubmit and falls back to the direct email link when delivery fails. Update the recipient in `src/components/pages/ContactPage.tsx` if the portfolio owner changes.

## Content

Portfolio details, project entries, skills, and social links are maintained in `src/data/portfolioData.ts`.
