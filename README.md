# Cometic IT Care - Professional IT Services Website

![Cometic IT Care Logo](public/favicon.svg)

A modern, responsive website for Cometic IT Care, showcasing professional IT services including AI solutions, software development, networking, and comprehensive technology consulting.

## 🌟 Features

### ✨ Modern Design & UX
- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile)
- **Professional UI**: Clean, modern interface with blue gradient themes
- **Smooth Navigation**: Intuitive navigation with React Router
- **Interactive Elements**: Hover effects, smooth transitions, and engaging animations

### 🚀 Core Functionality
- **Multi-page Website**: Home, About, Services, Portfolio, Contact pages
- **Portfolio Showcase**: Detailed project presentations with case studies
- **Contact Form**: Integrated contact form with backend API support
- **Legal Pages**: Privacy Policy and Terms & Conditions
- **SEO Optimized**: Meta tags, structured content, and semantic HTML

### 🛠️ Technical Stack
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Routing**: React Router v6 for navigation
- **Icons**: Lucide React for consistent iconography
- **Build Tool**: Vite for fast development and building
- **Deployment**: Vercel-ready configuration

## 📱 Pages Overview

### 🏠 Home Page
- Hero section with company introduction
- Services overview with interactive cards
- Company statistics and achievements
- Call-to-action sections

### 👥 About Page
- Company story and mission
- Team expertise and experience
- Company values and approach
- Professional achievements

### 🔧 Services Page
- **AI Solutions**: Machine learning, automation, intelligent systems
- **Software Development**: Custom applications, web development, mobile apps
- **Networking Solutions**: Infrastructure, security, cloud services
- **Data Management**: Analytics, databases, business intelligence
- **Project Management**: Agile methodologies, delivery excellence
- **Cloud Services**: Migration, optimization, maintenance

### 💼 Portfolio Page
- **Featured Projects**: Detailed case studies with results
- **Industry Coverage**: E-commerce, automotive, education, healthcare, and more
- **Technology Stack**: React, Node.js, various databases and tools
- **Project Metrics**: Duration, team size, outcomes, and impact

### 📞 Contact Page
- Contact form with validation
- Company contact information
- Office location and business hours
- Social media links

### ⚖️ Legal Pages
- **Privacy Policy**: Comprehensive data protection information
- **Terms & Conditions**: Service terms and user agreements

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cometic-web.git
   cd cometic-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🏗️ Project Structure

```
cometic-web/
├── public/                 # Static assets
│   ├── favicon.svg        # Website favicon
│   ├── apple-touch-icon.png
│   └── favicon.png
├── src/
│   ├── assets/            # Images and logos
│   │   ├── Logo.tsx
│   │   └── Reg-Cometic-It-Care-Logo.svg
│   ├── components/        # Reusable components
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── hooks/             # Custom React hooks
│   │   └── useScrollToTop.ts
│   ├── pages/             # Page components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Home.tsx
│   │   ├── Portfolio.tsx
│   │   ├── PrivacyPolicy.tsx
│   │   ├── Services.tsx
│   │   └── TermsAndConditions.tsx
│   ├── App.tsx            # Main application component
│   ├── index.css          # Global styles
│   ├── main.tsx           # Application entry point
│   └── vite-env.d.ts      # Vite type definitions
├── api/                   # Backend API files
│   ├── contact.js         # Contact form API
│   └── CONTACT_FORM_SETUP.md
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite build configuration
└── vercel.json            # Vercel deployment configuration
```

## 🎨 Customization

### Colors and Themes
The website uses a consistent color scheme defined in Tailwind CSS:
- **Primary Blue**: `#2563eb` (blue-600)
- **Secondary Blue**: `#4338ca` (indigo-700)
- **Accent Red**: `#ef4444` (red-500)
- **Accent Sky**: `#0ea5e9` (sky-400)

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation in `src/components/Navbar.tsx` if needed

### Modifying Services
Update the services data in `src/pages/Services.tsx` to reflect your current offerings.

### Portfolio Updates
Modify the projects array in `src/pages/Portfolio.tsx` to showcase new projects.

## 📧 Contact Form Setup

The contact form is configured to work with a backend API. See `api/CONTACT_FORM_SETUP.md` for detailed setup instructions.

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the React + Vite setup
3. Deploy with zero configuration

### Other Platforms
The project is compatible with:
- Netlify
- AWS S3 + CloudFront
- Any static hosting service

## 🔧 Development Scripts

```json
{
  "dev": "Start development server",
  "build": "Build for production",
  "preview": "Preview production build",
  "lint": "Run ESLint",
  "type-check": "Check TypeScript types"
}
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software owned by Cometic IT Care. All rights reserved.

## 📞 Support

For support and inquiries:
- **Email**: cometicitcare@gmail.com | info@cometicitcare.com
- **Phone**: +94 (113) 123-737 | +94 (773) 077-759
- **Address**: 309-B, Kapuwagara Road, Batagama South, Kandana, Sri Lanka

## 🚀 Future Enhancements

- [ ] Blog/News section
- [ ] Client testimonials
- [ ] Interactive project demos
- [ ] Multi-language support
- [ ] Advanced analytics integration
- [ ] CMS integration for content management

---

**Built with ❤️ by Cometic IT Care Team**

*Empowering Your Business with Cutting-Edge IT Solutions*
