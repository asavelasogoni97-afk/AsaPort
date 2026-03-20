# Asavela Portfolio

A stunning portfolio website built with Next.js, React, and Tailwind CSS featuring an animated galaxy background with gold, black, and silver color scheme.

## Features

- ✨ Animated galaxy background with particle system
- 🎨 Gold, black, and silver color theme
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and TypeScript
- 🎭 Smooth animations and transitions

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and animations
│   ├── layout.tsx        # Root layout
│   └── page.tsx         # Home page
└── components/
    ├── GalaxyBackground.tsx  # Animated galaxy background
    ├── Navbar.tsx            # Navigation bar
    ├── Hero.tsx              # Hero section
    ├── About.tsx             # About section
    ├── Projects.tsx          # Projects showcase
    └── Contact.tsx           # Contact form
```

## Customization

- Update your information in the respective component files
- Modify colors in `tailwind.config.ts`
- Adjust animations in `src/app/globals.css`

## Build

```bash
npm run build
```

## License

MIT
