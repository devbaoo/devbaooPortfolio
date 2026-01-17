import { HeroSectionType } from "@/lib/types/sections";
import { resumeFileName } from "@/lib/utils/config";

export const heroSection: HeroSectionType = {
  subtitle: "Hi, my name is",
  title: "devbaoo.",
  tagline: "",
  description:
    "I'm a passionate Full-Stack developer with experience in React.js, JavaScript, TypeScript, and TailwindCSS. On the back-end, I work with C#, Python, and Node.js to build RESTful APIs and deploy them on various platforms.",
  specialText: "Currently available for freelance",
  cta: {
    title: "see my resume",
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
