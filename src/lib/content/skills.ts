import { getId } from '@/lib/utils/helper';
import { SkillType } from '../types/sections';

export const skillsSection: { title: string; skills: SkillType[] } = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building full-stack web applications using Reactjs with TypeScript, JavaScript, TailwindCSS, and .NET, Nodejs, and Python for backend development',
        'Developing responsive single-page applications using React.js, .NET',
        'And more, I can learn new technologies quickly and adapt to new environments',
      ],
      mainStack: [
        { name: '.NET Core', icon: 'vscode-icons:file-type-csharp' },
        { name: 'Database', icon: 'vscode-icons:file-type-sql' },
        { name: 'Nodejs', icon: 'logos:nodejs-icon' },
        { name: 'JavaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'Git', icon: 'logos:git-icon' },
        { name: 'Azure', icon: 'logos:azure' },
      ],
      subStack: [
        { name: 'React.js', icon: 'logos:react' },
        { name: 'TailwindCSS', icon: 'logos:tailwindcss-icon' },
        { name: 'TypeScript', icon: 'vscode-icons:file-type-typescript-official' },
        { name: 'Python', icon: 'logos:python' },
        { name: 'AWS', icon: 'logos:aws' },
      ],
    },
  ],
};

