# Juventus FC Website - Phase 2

## Project Description

This is a **Phase 2 continuation** of the Juventus FC website project. The application is a modern, responsive web application built with **React 19**, **TypeScript**, and **Tailwind CSS**. It showcases Juventus Football Club with a professional, multi-page interface featuring comprehensive information about the club, its history, squad, and contact information.

The website serves as a complete frontend solution that demonstrates modern web development practices, responsive design principles, and professional UI/UX design patterns.

## Key Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Multi-Page Navigation**: Four main pages (Home, About, Squad, Contact) with smooth client-side routing
- **Modern UI Components**: Built with shadcn/ui and Tailwind CSS for a polished, professional appearance
- **Professional Typography**: Custom font pairing (Playfair Display + Source Sans 3) for enhanced visual hierarchy
- **Interactive Forms**: Contact form with validation and toast notifications
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Performance Optimized**: Fast loading times with optimized assets and efficient code splitting

## Pages Overview

### 1. **Home Page**
- Hero section with compelling call-to-action
- Quick facts about the club (Founded, Location, Nickname, Stadium)
- Club philosophy section
- Community engagement section

### 2. **About Page**
- Detailed club history
- Key achievements (Serie A titles, Coppa Italia, European presence)
- Allianz Stadium information
- Global fan base overview
- Statistics section

### 3. **Squad Page**
- Squad overview statistics
- Detailed player cards with:
  - Player name and number
  - Position and nationality
  - Player description
  - Position-based color coding
- Squad composition breakdown by position

### 4. **Contact Page**
- Contact information (location, phone, email)
- Functional contact form with validation
- Frequently asked questions section
- Multiple ways to reach the organization

## Technologies Used

### Frontend Framework
- **React 19**: Modern UI library with hooks and functional components
- **TypeScript**: Type-safe development for better code quality
- **Wouter**: Lightweight client-side routing

### Styling & UI
- **Tailwind CSS 4**: Utility-first CSS framework
- **shadcn/ui**: High-quality, accessible React components
- **Lucide React**: Beautiful icon library

### Development Tools
- **Vite**: Fast build tool and development server
- **ESBuild**: Fast JavaScript bundler
- **PostCSS**: CSS transformation tool

### Additional Libraries
- **Sonner**: Toast notifications
- **React Hook Form**: Form state management
- **Zod**: Schema validation

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd smart-study-planner-phase2
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Build for production**
   ```bash
   pnpm build
   # or
   npm run build
   ```

5. **Preview production build**
   ```bash
   pnpm preview
   # or
   npm run preview
   ```

## Project Structure

```
client/
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navigation.tsx      # Main navigation header
│   │   ├── Footer.tsx          # Footer component
│   │   ├── ErrorBoundary.tsx   # Error handling
│   │   └── ui/                 # shadcn/ui components
│   ├── pages/
│   │   ├── Home.tsx            # Home page
│   │   ├── About.tsx           # About page
│   │   ├── Squad.tsx           # Squad page
│   │   ├── Contact.tsx         # Contact page
│   │   └── NotFound.tsx        # 404 page
│   ├── contexts/
│   │   └── ThemeContext.tsx    # Theme management
│   ├── lib/
│   │   └── utils.ts            # Utility functions
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # React entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
└── package.json                # Dependencies

server/
└── index.ts                    # Express server (static serving)
```

## Design System

### Color Palette
- **Primary**: Deep Black (#1a1a1a) - Main brand color
- **Accent**: Warm Gold (#f4d35e) - Highlight and emphasis
- **Background**: Light Gray/White (#f8f8f8) - Clean backdrop
- **Foreground**: Dark Gray/Black (#2a2a2a) - Text color

### Typography
- **Headings**: Playfair Display (serif) - Bold, editorial style
- **Body Text**: Source Sans 3 (sans-serif) - Clean, readable

### Spacing & Radius
- **Base Radius**: 0.5rem (8px)
- **Container Padding**: 1rem (mobile), 1.5rem (tablet), 2rem (desktop)

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## Code Quality

- **TypeScript**: Full type safety across the application
- **ESLint**: Code linting and consistency
- **Prettier**: Automatic code formatting
- **Error Boundaries**: Graceful error handling

## Performance Optimizations

- Lazy loading of routes with Wouter
- Optimized bundle size with tree-shaking
- CSS-in-JS with Tailwind for minimal CSS
- Image optimization and lazy loading
- Efficient component re-rendering with React hooks

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance
- Focus management
- Form validation feedback

## Deployment

### Deployment Options

1. **GitHub Pages**
   ```bash
   pnpm build
   # Push dist folder to gh-pages branch
   ```

2. **Vercel**
   ```bash
   vercel
   ```

3. **Netlify**
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Environment Variables
No environment variables required for this static frontend application.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature
   ```

2. **Make changes and test locally**
   ```bash
   pnpm dev
   ```

3. **Run type checking**
   ```bash
   pnpm check
   ```

4. **Format code**
   ```bash
   pnpm format
   ```

5. **Commit and push**
   ```bash
   git add .
   git commit -m "feat: your feature description"
   git push origin feature/your-feature
   ```

## Version Control

- **Repository**: GitHub
- **Branch Strategy**: Feature branches with main branch protection
- **Commit History**: Clear, descriptive commit messages

## Screenshots

### Home Page
- Hero section with club introduction
- Quick facts cards with key information
- Club philosophy section
- Call-to-action buttons

### About Page
- Detailed club history
- Achievement statistics
- Stadium information
- Fan base overview

### Squad Page
- Player cards with detailed information
- Position-based filtering
- Squad composition breakdown
- Player statistics

### Contact Page
- Contact information cards
- Functional contact form
- FAQ section
- Multiple contact methods

## Future Enhancements

- Player detail pages with statistics
- News/Blog section
- Ticket booking integration
- Fan community forum
- Social media integration
- Multi-language support
- Dark mode toggle
- Advanced search functionality

## Contributing

Contributions are welcome! Please follow the code style and commit message conventions.

## License

This project is created for educational purposes as part of CSCI390: Web Programming course.

## Contact

For questions or support regarding this project, please contact:
- Email: info@juventus.it
- Phone: +39 011 6563000

## Project Metadata

- **Course**: CSCI390 - Web Programming
- **Phase**: Phase 2
- **Academic Year**: Spring 2025-2026
- **Submission Date**: May 31, 2026
- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS 4
- **UI Library**: shadcn/ui

---

**Last Updated**: May 7, 2026  
**Version**: 1.0.0
