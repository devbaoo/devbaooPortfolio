import { getId } from "@/lib/utils/helper";
import { SkillType } from "../types/sections";

export const skillsSection: { title: string; skills: SkillType[] } = {
  title: "what i do",
  skills: [
    {
      id: getId(),
      title: "full stack development",
      lottie: {
        light: "/lotties/frontend.json",
        dark: "/lotties/frontend-dark.json",
      },
      points: [
        "Building full-stack web applications using React.js with TypeScript, JavaScript, TailwindCSS, and .NET Core, Node.js, Python, and Go for backend development",
        "Developing responsive single-page applications and RESTful APIs with modern frameworks",
        "Working with various databases including SQL Server, PostgreSQL, MySQL, and MongoDB",
        "Deploying applications on cloud platforms like Azure, AWS, Firebase, and DigitalOcean with CI/CD pipelines",
      ],
      mainStack: [
        { name: ".NET Core", icon: "vscode-icons:file-type-csharp" },
        { name: "Database", icon: "vscode-icons:file-type-sql" },
        { name: "Nodejs", icon: "logos:nodejs-icon" },
        { name: "JavaScript", icon: "vscode-icons:file-type-js-official" },
        { name: "Git", icon: "logos:git-icon" },
        { name: "Azure", icon: "logos:azure" },
      ],
      subStack: [
        { name: "PostgreSQL", icon: "vscode-icons:file-type-sql" },
        { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
        { name: "Azure", icon: "logos:azure" },
        { name: "AWS", icon: "logos:aws" },
        { name: "FastAPI", icon: "simple-icons:fastapi" },
        { name: "Express.js", icon: "simple-icons:express" },
      ],
    },
  ],
};
