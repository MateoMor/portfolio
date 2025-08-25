# Portfolio - Mateo Morales

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing my skills, projects, and experience as a Full Stack & ML Developer.

## 🎨 Sections

### Hero Section
- Animated introduction with name and title
- Call-to-action email button
- Smooth entrance animations

### About Me
- Personal introduction and background

### Projects
- Showcase of personal and academic projects
- Animated project cards with hover effects
- Links to live demos, repositories, and videos
- Technology tags for each project

### Skills
- Comprehensive list of technical skills
- Animated skill badges with icons
- Organized by categories (Languages, Frameworks, Tools, etc.)
- Fast, staggered animations

### Contact
- Email copy functionality
- Social media links
- Clean, minimalist design

## 🚀 Getting Started

### Prerequisites
- Node.js 16.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/MateoMor/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding New Projects
Edit `src/app/utils/data.ts` and add your project to the `projectsData` array:

```typescript
{
  name: 'Project Name',
  repo: 'GitHub repository URL',
  url: 'Live demo URL or false',
  video: 'Video URL or false',
  image: 'Project image URL',
  description: 'Project description',
  tags: ['Technology', 'Stack', 'Used']
}
```

### Adding New Skills
Edit `src/app/utils/data.ts` and add your skill to the `skillsData` array:

```typescript
{
  img: 'devicon-path/icon-name.svg',
  name: 'Skill Name'
}
```

### Updating Personal Information
- Update contact email in `src/app/components/EmailBtn.tsx`
- Update social links in `src/app/components/SocialLinks.tsx` and `src/app/components/Footer.tsx`
- Update CV link in the footer
- Modify the About section in `src/app/components/About.tsx`

### Theme Customization
Colors and theme variables are defined in `src/app/globals.css`. Modify the CSS custom properties to change the color scheme:

```css
:root {
  --color-primary: 255 255 255;
  --color-secondary: 245 245 245;
  --color-target: 0 123 255;
  /* ... other colors */
}
```

## 📱 Responsive Design

The portfolio is fully responsive with custom breakpoints:
- **Desktop**: Default styles
- **Tablet** (`md`): max-width 865px
- **Mobile** (`sm`): max-width 670px

## 🌙 Theme Support

The portfolio supports three theme modes:
- **Light**: Light color scheme
- **Dark**: Dark color scheme  
- **System**: Follows system preference

## 📧 Contact

- **Email**: mateo.morales.dev@gmail.com
- **LinkedIn**: [Mateo Morales Ramirez](https://www.linkedin.com/in/mateo-morales-ramirez/)
- **GitHub**: [MateoMor](https://github.com/MateoMor)