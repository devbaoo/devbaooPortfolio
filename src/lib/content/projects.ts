import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'portfolio',
      url: 'https://devbaoo.vercel.app/',
      repo: 'https://github.com/devbaoo/devbaooPortfolio',
      img: '/Portfolio.png',
      year: 2025,
      tags: ['React', 'Tailwind'],
    },
    {
      id: getId(),
      name: 'HairSalon Booking',
      url: 'https://hair-salon-vjp.azurewebsites.net/',
      repo: 'https://github.com/devbaoo/Backend-HairSalonBooking',
      img: '/hairsalon.png',
      year: 2024,
      tags: ['Nodejs', 'PostgreSQL'],
    },
    {
      id: getId(),
      name: 'E-commerce platform for milk products',
      url: 'https://suame88-f056d.web.app/home',
      repo: 'https://github.com/devbaoo/Mommilk',
      img: '/Mommilk.png',
      year: 2024,
      tags: ['ReactJs', 'Tailwind'],
    },
    {
      id: getId(),
      name: 'todo app',
      url: 'https://python-fastapi-9nso.onrender.com',
      repo: 'https://github.com/devbaoo/Python_FastAPI',
      img: 'https://user-images.githubusercontent.com/68834718/152794002-0e7bc583-084b-4c39-83bb-d82d5dd642b2.png',
      year: 2025,
      tags: ['Python', 'FastAPI'],
    },
    {
      id: getId(),
      name: 'dating app',
      url: 'https://dating-devbaoo.vercel.app/',
      repo: 'https://github.com/devbaoo/dating',
      img: '/dating.png',
      year: 2024,
      tags: ['Html', 'css', 'JS'],
    },
  ],
};
