export const navigationLinks = [
  { label: 'Home', path: '#home' },
  { label: 'About me', path: '#about' },
  { label: 'Projects', path: '#projects' },
  { label: 'Skills', path: '#skills' },
  { label: 'Contact me', path: '#contact' }
]

export type projectType = {
  name: string
  repo: string | false
  url: string | false
  video: string | false
  image: string
  description: string
  tags: string[]
}

export const projectsData: projectType[] = [
  {
    name: 'Geographey',
    repo: 'https://github.com/MateoMor/geographey',
    url: 'https://mateomor.github.io/geographey/',
    video: 'https://youtu.be/sQG5AFefhWs?si=6ebdRVnSENl5V88E',
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
    video: 'https://youtube.com/shorts/RaMLEzvSgL4?si=woVb-8PTT2ttywo6',
    image:
      'https://i.ibb.co/0FDPHNM/qr-scanner.png',
    description: "A mobile QR scanner with history and configuration functionalities, utilizing the device's camera, storage, and vibration.",
    tags: ['react-native', 'JavaScript', 'expo']
  },
  {
    name: 'Brain Cells Segmentatation',
    repo: false,
    url: false,
    video: false,
    image:
      '/projectImages/BrainCellsSegmentation.png',
    description:
      'Computer vision software for the segmentation of cells in brain tissue micrographs using state-of-the-art models such as SAM and YOLO, developed with TensorFlow and Python.',
    tags: ['python', "TensorFlow", 'Computer vision', 'SAM', 'YOLO']
  },
  {
    name: 'Fluid Simulator',
    repo: 'https://github.com/MateoMor/Fluid-Simulator',
    url: false,
    video: 'https://youtu.be/ssrrBknyYW4?si=xIDMt1zCIRKFKCjr',
    image:
      'https://i.ibb.co/jwrcHr7/fluid-simulator.png',
    description: 'A fluid simulation app built with Qt, C++, and OpenGL, featuring interactive simulations using the SPH (Smoothed Particle Hydrodynamics) method.',
    tags: ['Qt', 'C++', 'OpenGL', 'OpenMP']
  },
  {
    name: 'Inventory Management App',
    repo: 'https://github.com/MateoMor/gestionInventarioAPP',
    url: false,
    video: false,
    image: "/projectImages/GestionInventarioAPP.png",
    description: 'A desktop inventory management application built with Java Swing, featuring user authentication, role-based access control, and a complete CRUD system for inventory management.',
    tags: ['Java', 'Swing', 'Desktop Application', 'Authentication', 'CRUD', 'OOP']
  },
  {
    name: 'Cinema App',
    repo: 'https://github.com/MateoMor/Cinema-App',
    url: 'https://shiny-lolly-8ad7ad.netlify.app/',
    video: 'https://youtu.be/j4S8Q3uaT6k?si=zX6lSlXRlYy45iRq',
    image:
      'https://i.ibb.co/k5jPp3M/cinema-app.png',
    description: 'A catalog app for movies and series with filters, searchbar and pagination, consuming an API to provide detailed information.',
    tags: ['react', 'JavaScript','react-router', 'api']
  },
  // App removed because API credits ran out
  /* {
    name: 'News App',
    repo: 'https://github.com/MateoMor/News-App',
    url: 'https://66a72fce9bd459f5d4255ee2--inquisitive-lily-e115dc.netlify.app/',
    video: false,
    image:
      'https://i.ibb.co/9qPwzQd/News-App.png',
    description: 'A news app that pulls data from a news API to deliver up-to-date information, styled with TailwindCSS, Shadcn, and V0.dev.',
    tags: ['react', 'JavaScript', 'tailwind', 'react-router', 'api', 'V0.dev']
  }, */
  {
    name: 'Christmas Memory Game with only HTML and CSS',
    repo: 'https://github.com/MateoMor/Christmas-Memory-Game-with-HTML-and-CSS',
    url: 'https://christmas-memory-game-mateo.netlify.app/',
    video: 'https://youtu.be/SsZYr95Og4o?si=pjDIIWjtHMJ2TilU',
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
    video: 'https://youtu.be/rQyBd86uWZI?si=ooPGhzVKwBhgIcGx',
    image:
      'https://i.ibb.co/jhYSkZc/rock-paper-scissors.png',
    description: 'A rock-paper-scissors game designed with assets and styles from Frontend Mentor. The game features smooth animations and transitions.',
    tags: ['react', 'JavaScript']
  }
]

export const skillsData = [
  // Core Programming Languages (Most Important)
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
    img: 'java/java-original-wordmark.svg',
    name: 'Java'
  },
  {
    img: 'cplusplus/cplusplus-original.svg',
    name: 'C++'
  },
  
  // Frontend Frameworks & Libraries (High Demand)
  {
    img: 'react/react-original.svg',
    name: 'React'
  },
  {
    img: 'nextjs/nextjs-original.svg',
    name: 'Nextjs'
  },
  {
    img: 'react/react-original.svg',
    name: 'React Native'
  },
  {
    img: 'tailwindcss/tailwindcss-original.svg',
    name: 'Tailwindcss'
  },
  
  // Backend & API Technologies
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
    img: 'nodejs/nodejs-original.svg',
    name: 'API'
  },
  
  // Databases
  {
    img: 'postgresql/postgresql-original.svg',
    name: 'PostgreSQL'
  },
  {
    img: 'mysql/mysql-original.svg',
    name: 'SQL'
  },
  
  // Cloud & DevOps (High Demand)
  {
    img: 'amazonwebservices/amazonwebservices-original-wordmark.svg',
    name: 'AWS'
  },
  {
    img: 'docker/docker-original.svg',
    name: 'Docker'
  },
  {
    img: 'amazonwebservices/amazonwebservices-original-wordmark.svg',
    name: 'AWS ECS'
  },
  {
    img: 'amazonwebservices/amazonwebservices-original-wordmark.svg',
    name: 'Amazon S3'
  },
  {
    img: 'amazonwebservices/amazonwebservices-original-wordmark.svg',
    name: 'Amazon VPC'
  },
  
  // Version Control & Development Tools (Essential)
  {
    img: 'git/git-original.svg',
    name: 'Git'
  },
  {
    img: 'github/github-original.svg',
    name: 'GitHub'
  },
  {
    img: 'postman/postman-original.svg',
    name: 'Postman'
  },
  
  // Web Fundamentals
  {
    img: 'html5/html5-original.svg',
    name: 'HTML'
  },
  {
    img: 'css3/css3-original.svg',
    name: 'CSS'
  },
  
  // Testing & Automation
  {
    img: 'selenium/selenium-original.svg',
    name: 'Selenium'
  },
  {
    img: 'selenium/selenium-original.svg',
    name: 'Appium'
  },
  
  // Data Science & ML
  {
    img: 'python/python-original.svg',
    name: 'Machine Learning'
  },
  {
    img: 'tensorflow/tensorflow-original.svg',
    name: 'TensorFlow'
  },
  {
    img: 'tensorflow/tensorflow-original.svg',
    name: 'CNN'
  },
  {
    img: 'jupyter/jupyter-original.svg',
    name: 'Jupyter Notebook'
  },
  
  // Operating Systems & Development Environment
  {
    img: 'linux/linux-original.svg',
    name: 'Linux'
  },
  {
    img: 'ubuntu/ubuntu-plain.svg',
    name: 'Ubuntu'
  },
  {
    img: 'archlinux/archlinux-original.svg',
    name: 'Arch'
  },
  {
    img: 'bash/bash-original.svg',
    name: 'Bash'
  },
  
  // Desktop Development
  {
    img: 'qt/qt-original.svg',
    name: 'Qt'
  },
  
  // Methodologies (Important but less technical)
  {
    img: 'git/git-original.svg',
    name: 'Scrum Methodology'
  }
]
