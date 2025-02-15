import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'LET ME INTRODUCE MYSELF',
  // Paragraphs need to be changed from `/containers/About.tsx`
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'ReactJs',
      'TailwindCSS',
      'TypeScript',
      'JavaScript',
      'Nodejs',
      '.NET',
      'Python',
      'Golang'
    ],
  },
  hobby: {
    title: 'Apart from coding, some other activities that I love to do!',
    items: [
      'Playing Games',
      'Playing Sport',
      'Travelling',
    ],
  },
  // text: {
  //   title: 'Apart from coding, some other activities that I love to do!',
  //   items: [
  //     'Playing Games',
  //   ],
  // },
  img: '/devbaoo.jpg',
};
