# Tensho International Sports Academy

A modern, responsive landing page for Tensho International Sports Academy - the global standard for martial arts excellence, certification, and dojo management.

## 🚀 Features

### Core Functionality
- **Comprehensive Landing Page**: Single-page application with 20+ sections including hero, about, stats, programs, masters, academies, certificates, membership, events, testimonials, and more
- **Multi-Page Application**: Dedicated pages for about, blogs, calendar, certificates, contact, dashboard, events, FAQ, gallery, leadership, login, masters, membership, programs, register, resources, shop, and testimonials
- **Responsive Design**: Mobile-first approach with adaptive layouts for all screen sizes

### Interactive Elements
- **Magnetic Cursor**: Custom animated cursor that responds to mouse movement and interactive elements (desktop only)
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Scroll Effects**: Progress indicator, reveal animations, and parallax effects
- **Magnetic Buttons**: Interactive buttons with hover effects
- **Particle Background**: Dynamic background animations

### User Experience
- **Dark Theme**: Professional dark theme with light mode support
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance**: Optimized loading with Next.js App Router and image optimization
- **Error Handling**: Comprehensive error boundaries and loading states

## 🛠️ Tech Stack

### Framework & Language
- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **shadcn/ui** - Component library built on Radix UI
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

### Forms & Validation
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Additional Libraries
- **date-fns** - Date utilities
- **Recharts** - Data visualization
- **Embla Carousel** - Slider component
- **Sonner** - Toast notifications
- **next-themes** - Theme management
- **Vercel Analytics** - Web analytics

## 📁 Project Structure

```
tensho-landing-page/
├── app/                    # Next.js app directory
│   ├── (pages)/           # Route groups
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── animations/        # Animation components
│   ├── common/           # Common components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   └── ui/               # UI components
├── lib/                   # Utilities and data
├── public/               # Static assets
├── styles/               # Additional styles
└── package.json          # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ahmedKhlif/tensho_Project.git
cd tensho-landing-page
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors
The project uses custom CSS variables for branding:
- `--brand-red: #d01c1c`
- `--brand-black: #111111`
- `--brand-gold: #d4af37`
- `--brand-blue: #0f3460`

### Fonts
- **Headings**: Oswald (Google Fonts)
- **Body**: Inter (Google Fonts)

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality
- TypeScript for type checking
- ESLint for code linting
- Prettier for code formatting (recommended)

## 📦 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Environment variables are automatically configured

### Other Platforms
The application can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'Add your feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Framer Motion** for animation capabilities
- **Next.js** team for the amazing framework
- **Tailwind CSS** for the utility-first approach

## 📞 Support

For support, email support@tenshoacademy.com or join our Discord community.

---

**Tensho International Sports Academy** - Building champions, one technique at a time.