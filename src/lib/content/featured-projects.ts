import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'HairSalon Booking',
      description: 'A platform for booking haircuts, viewing ratings & reviews, and managing staff & payroll with secure online payments.',
      tasks:
        "Leader and a back-end development using Node.js and Express.js, integrating MySQL and PostgreSQL, and implementing JWT for security. Collaborated on the front-end with React.js and Vite.js, and deployed on Firebase, Azure, Supabase, and DigitalOcean.",
      url: 'https://hair-salon-vjp.azurewebsites.net/',
      img: '/hairsalon.png',
      tags: [
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'Firebase',
        'Azure',
        'DigitalOcean',
      ],
    }, 
    {
      id: getId(),
      name: 'MomMilk',
      description: 'An e-commerce platform for milk products tailored for mothers and babies.',
      tasks:
        "Leader and a Front-End Developer using React.js and Vite.js, collaborating with back-end engineers on a C# API (Swagger), MySQL, Firebase, and JWT, with deployments on Firebase and Azure.",
      url: 'https://suame88-f056d.web.app/home',
      img: '/Mommilk.png',
      tags: [
        'React.js',
        'C#',
        'MySQL',
        'Firebase',
        'Azure',
      ],
    },
  ],
};

export default featuredProjectsSection;
