import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  mysql,
  canva,
  firebase,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  // threejs removed to avoid empty-tech-ball rendering
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
  {
    title: "Web App Developer",
    icon: mobile,
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "Canva", icon: canva },
  { name: "Firebase", icon: firebase },
  { name: "MySQL", icon: mysql },
];

const experiences = [
  {
    title: "UI/UX Designer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Designing intuitive interfaces and user journeys for web applications.",
      "Creating wireframes, mockups, and visual systems that improve usability.",
      "Collaborating with developers and stakeholders to turn ideas into polished experiences.",
      "Iterating on feedback to refine layouts, accessibility, and interaction details.",
    ],
  },
  {
    title: "Frontend Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jun 2022 - Dec 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Backend Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - May 2022",
    points: [
      "Building and maintaining APIs and server-side services for web applications.",
      "Working with databases, authentication flows, and data validation logic.",
      "Optimizing backend performance, reliability, and maintainability.",
      "Collaborating with frontend and product teams to deliver end-to-end features.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#383E56",
    date: "Jan 2020 - Feb 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  { name: "ABJee Travel", description: "A travel platform.", tags: [{ name: "react", color: "blue-text-gradient" }], image: "/projects/ABjeeTravel.png", live_site_link: "https://abjeetravel.com/", source_code_link: "https://github.com/" },
  { name: "A Plus Polyclinic", description: "Healthcare portal.", tags: [{ name: "react", color: "blue-text-gradient" }], image: "/projects/Apluspolyclinic.png", live_site_link: "http://apluspolyclinicasansol.netlify.app/", source_code_link: "https://github.com/" },
  { name: "Bharat Museum Tickets", description: "Ticketing system.", tags: [{ name: "react", color: "blue-text-gradient" }], image: "/projects/BharatMeuseumTickets.png", live_site_link: "https://bharat-museum-tickets.vercel.app/", source_code_link: "https://github.com/" },
  { name: "Brandexa Digital Agency", description: "Agency site.", tags: [{ name: "branding", color: "blue-text-gradient" }], image: "/projects/Brandexa.png", live_site_link: "https://brandexagrowth.com/", source_code_link: "https://github.com/" },
  { name: "Photograph Portfolio", description: "Photography showcase.", tags: [{ name: "design", color: "green-text-gradient" }], image: "/projects/PhotographPortfolio.png", live_site_link: "https://studio-meta-innovation.vercel.app/", source_code_link: "https://github.com/" },
  { name: "Student Management System", description: "School management app.", tags: [{ name: "fullstack", color: "pink-text-gradient" }], image: "/projects/StudentManagementSystem.png", live_site_link: "https://tiemsms.netlify.app/", source_code_link: "https://github.com/" },
  { name: "HealthCare", description: "Clinic / health template.", tags: [{ name: "health", color: "blue-text-gradient" }], image: "/projects/HealthCare.png", live_site_link: "https://arogyam-sathi.vercel.app/", source_code_link: "https://github.com/" },
];

export { services, technologies, experiences, testimonials, projects };
