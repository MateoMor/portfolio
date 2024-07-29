export const navigationLinks = [
  { label: 'Home', path: '#home' },
  { label: 'About me', path: '#about' },
  { label: 'Projects', path: '#projects' },
  { label: 'Skills', path: '#skills' },
  { label: 'Contact me', path: '#contact' }
]

export type projectType = {
  name: string
  repo: string
  url: string | false
  image: string
  description: string
  tags: string[]
}

export const projectsData: projectType[] = [
  {
    name: 'Geographey',
    repo: 'https://github.com/MateoMor/geographey',
    url: 'https://mateomor.github.io/geographey/',
    image:
      'https://i.ibb.co/PhSQ8hL/geographey-screenshot.png',
    description:
      'A geography knowledge game where the objective is to correctly locate all the countries on a map. Five maps are available for play.',
    tags: ['react', "JavaScript", 'TopJSON', 'react-router', 'react-simple-maps']
  },
  {
    name: 'Qr Scanner',
    repo: 'https://github.com/MateoMor/qr_scanner',
    url: false,
    image:
      'https://i.ibb.co/8mxtkmK/qr-scanner.png',
    description: "A mobile QR scanner with history and configuration functionalities, utilizing the device's camera, storage, and vibration.",
    tags: ['react-native', 'JavaScript', 'expo']
  },
  {
    name: 'Fluid Simulator',
    repo: 'https://github.com/MateoMor/Fluid-Simulator',
    url: false,
    image:
      'https://i.ibb.co/jwrcHr7/fluid-simulator.png',
    description: 'A fluid simulation app built with Qt, C++, and OpenGL, featuring interactive simulations using the SPH (Smoothed Particle Hydrodynamics) method.',
    tags: ['Qt', 'C++', 'OpenGL', 'OpenMP']
  },
  {
    name: 'Cinema App',
    repo: 'https://github.com/MateoMor/Cinema-App',
    url: 'https://shiny-lolly-8ad7ad.netlify.app/',
    image:
      'https://i.ibb.co/k5jPp3M/cinema-app.png',
    description: 'A catalog app for movies and series with filters, searchbar and pagination, consuming an API to provide detailed information.',
    tags: ['react', 'JavaScript','react-router', 'api']
  },
  {
    name: 'News App',
    repo: 'https://github.com/MateoMor/News-App',
    url: 'https://66a72fce9bd459f5d4255ee2--inquisitive-lily-e115dc.netlify.app/',
    image:
      'https://i.ibb.co/9qPwzQd/News-App.png',
    description: 'A news app that pulls data from a news API to deliver up-to-date information, styled with TailwindCSS, Shadcn, and V0.dev.',
    tags: ['react', 'JavaScript', 'tailwind', 'react-router', 'api', 'V0.dev']
  },
  {
    name: 'Christmas Memory Game with only HTML and CSS',
    repo: 'https://github.com/MateoMor/Christmas-Memory-Game-with-HTML-and-CSS',
    url: 'https://christmas-memory-game-mateo.netlify.app/',
    image:
      'https://i.ibb.co/FK9pZrG/christmas-memory-game.png',
    description: 'A functional memory game with randomized card layouts and comparison mechanics, built using only HTML and CSS using heritage.',
    tags: ['HTML', 'CSS']
  }
  ,
  {
    name: 'Rock Paper Scissors',
    repo: 'https://github.com/MateoMor/Rock-paper-scissors',
    url: 'https://mateomor.github.io/Rock-paper-scissors/',
    image:
      'https://i.ibb.co/jhYSkZc/rock-paper-scissors.png',
    description: 'A rock-paper-scissors game designed with assets and styles from Frontend Mentor. The game features smooth animations and transitions.',
    tags: ['react', 'JavaScript']
  }
]

export const skillsData = [
  {
    img: 'html5/html5-original.svg',
    name: 'HTML'
  },
  {
    img: 'css3/css3-original.svg',
    name: 'CSS'
  },
  {
    img: 'javascript/javascript-original.svg',
    name: 'JavaScript'
  },
  {
    img: 'typescript/typescript-original.svg',
    name: 'TypeScript'
  },
  {
    img: 'python/python-original.svg',
    name: 'Python'
  },
  {
    img: 'cplusplus/cplusplus-original.svg',
    name: 'C++'
  },
  {
    img: 'react/react-original.svg',
    name: 'React'
  },
  {
    img: 'tailwindcss/tailwindcss-original.svg',
    name: 'Tailwindcss'
  },
  {
    img: 'nextjs/nextjs-original.svg',
    name: 'Nextjs'
  },
  {
    img: 'nodejs/nodejs-original.svg',
    name: 'Node.js'
  },
  {
    img: 'express/express-original.svg',
    name: 'Express'
  },
  {
    img: 'nestjs/nestjs-original.svg',
    name: 'NestJS'
  },
  {
    img: 'postgresql/postgresql-original.svg',
    name: 'PostgreSQL'
  },
  {
    img: 'git/git-original.svg',
    name: 'Git'
  },
  {
    img: 'amazonwebservices/amazonwebservices-original-wordmark.svg',
    name: 'AWS'
  },
  {
    img: 'docker/docker-original.svg',
    name: 'Docker'
  },
  {
    img: 'linux/linux-original.svg',
    name: 'Linux'
  },
  {
    img: 'archlinux/archlinux-original.svg',
    name: 'Arch'
  },
  {
    img: 'bash/bash-original.svg',
    name: 'Bash'
  },
  {
    img: 'qt/qt-original.svg',
    name: 'Qt'
  }
]
