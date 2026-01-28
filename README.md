# Minimal Portfolio Template

A modern, minimal portfolio website built with [Next.js](https://nextjs.org), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/). This template includes beautiful UI components, smooth animations, and a fully responsive design.

[Live Demo](https://akkal4.vercel.app/)

## Features

- ✨ Modern and clean design
- 📱 Fully responsive layout
- 🎨 Dark/Light theme support
- 🚀 Fast performance with Next.js
- 🎭 Smooth animations and transitions
- 📧 Contact dialog with form validation
- 🔗 Social media integration
- 🏆 Showcase for projects, skills, and testimonials
- 📋 Work and education timeline

## Project Structure

```
src/
├── app/              # Next.js app directory
├── components/
│   ├── home/        # Homepage components (hero, projects, skills, etc.)
│   ├── providers/   # Theme and context providers
│   └── ui/          # Reusable UI components (buttons, cards, dialogs, etc.)
└── lib/             # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page auto-updates as you edit files.

### Build

Build for production:

```bash
npm run build
npm start
```

## Customization

1. **Update your information**: Edit [src/app/page.tsx](src/app/page.tsx) to add your personal details
2. **Modify components**: Customize sections in [src/components/home/](src/components/home/)
3. **Change colors**: Update Tailwind CSS classes and theme configuration
4. **Add projects**: Update the projects section with your portfolio pieces
5. **Update skills**: Modify the skills section with your technologies

## Deployment

### Deploy on Vercel

The easiest way to deploy your portfolio is using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy your site

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## License

This project is open source and available for personal use.
