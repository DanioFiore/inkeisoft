# Inkeisoft - In Case Of Software

Welcome to my personal portfolio and software development showcase.

Live site: [https://inkeisoft.com](https://inkeisoft.com)

## Features

- **Modern Portfolio Design** - Clean, professional layout showcasing projects and skills
- **Advanced Navigation System** - Complete navbar with search, notifications, and mobile menu
- **Blog Integration** - Technical articles and insights powered by MDX
- **Project Showcase** - Interactive portfolio with detailed case studies
- **Responsive Design** - Optimized for all devices and screen sizes
- **Dark/Light Mode** - Seamless theme switching with system preference support
- **Animated Components** - Smooth animations powered by [Motion-Primitives](https://motion-primitives.com)
- **SEO Optimized** - Built-in metadata and OpenGraph support
- **Performance First** - Optimized for Core Web Vitals and loading speed

## Getting Started

To run this project locally for development or contribution purposes:

```bash
git clone https://github.com/DanioFiore/inkeisoft.git
cd inkeisoft
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Navigation Components

This project features a comprehensive navigation system with:

- **Main Navbar** - Responsive navigation with animated background
- **Search Functionality** - Global search with keyboard shortcuts
- **Notification Center** - Real-time notifications system
- **Mobile Navigation** - Advanced mobile menu with submenu support
- **Breadcrumb Navigation** - Contextual navigation breadcrumbs
- **Social Links** - Integrated social media links

For detailed documentation on the navigation components, see [NAVBAR_README.md](./NAVBAR_README.md).

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **React**: Version 19 with modern hooks and patterns
- **Styling**: Tailwind CSS v4 with custom design system
- **Animations**: Motion (Framer Motion) for smooth interactions
- **Icons**: Lucide React for consistent iconography
- **Theme**: next-themes for dark/light mode support
- **Content**: MDX for blog posts and dynamic content
- **Typography**: Geist font family for optimal readability
- **Development**: TypeScript, ESLint, Prettier

## Project Structure

```
inkeisoft/
├── app/                    # Next.js app directory
│   ├── navbar.tsx         # Main navigation component
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   └── blog/             # Blog pages
├── components/            # Reusable UI components
│   └── ui/               # Navigation & UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and configuration
│   ├── utils.ts          # Helper functions
│   └── navbar-config.ts  # Navigation configuration
└── public/               # Static assets
```

## Contact & Connect

- **Website**: [inkeisoft.com](https://inkeisoft.com)
- **GitHub**: [@DanioFiore](https://github.com/DanioFiore)
- **LinkedIn**: [Danio Fiore](https://linkedin.com/in/danio-fiore)
- **Email**: [info@inkeisoft.com](mailto:daniofioredev@gmail.com)

Template used: https://vercel.com/new/danios-projects-4156cbf8/templates/portfolio/nim-minimalist-personal-site
