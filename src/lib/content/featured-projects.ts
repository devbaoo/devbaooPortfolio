import { FeaturedProjectsSectionType } from "@/lib/types/sections";
import { getId } from "@/lib/utils/helper";

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: "Quizlingo",
      description:
        "An English learning web application focused on improving 4 core skills through an AI-powered personalized learning roadmap.",
      tasks:
        "Led a team of 5 as Team Leader & Back-end Developer to develop an adaptive learning platform that analyzes learners' performance and customizes quizzes and learning paths to match individual proficiency levels using OpenAI integration.",
      url: "https://github.com/devbaoo/BE_Quizlingo",
      img: "/Quizlingo.png",
      tags: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "OpenAI",
        "Cloudinary",
        "PayOS",
        "DigitalOcean",
      ],
    },
    {
      id: getId(),
      name: "EVCare",
      description:
        "A multi-branch electric vehicle maintenance management system with AI-powered inventory management.",
      tasks:
        "Led a team of 5 as Team Leader & FullStack Developer to build a comprehensive platform supporting staff operations including attendance tracking, work assignment, and service management across multiple branches with Gemini AI integration for inventory optimization.",
      url: "https://evcare.systems/",
      img: "/Evcare.png",
      tags: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Gemini AI",
        "Cloudinary",
        "Socket.IO",
        "PayOS",
        "DigitalOcean",
      ],
    },
    {
      id: getId(),
      name: "Contest Buddy",
      description:
        "A comprehensive competition management platform connecting organizers, participants, and teams for tech contests and hackathons.",
      tasks:
        "Full-Stack Developer building RESTful APIs with Node.js and Express.js, implementing real-time chat with Socket.io, integrating PayOS payment gateway, JWT authentication, Cloudinary file storage, and email notifications, with containerized deployment using Docker.",
      url: "https://contest-buddy.online/home", // Replace with actual URL
      img: "/contestbuddy.png", // Replace with actual image path
      tags: [
        "Node.js",
        "Express.js",
        "Socket.io",
        "JWT",
        "PayOS",
        "Cloudinary",
        "Docker",
        "MySQL", // or PostgreSQL - depending on your database
      ],
    },
    {
      id: getId(),
      name: "HairSalon Booking",
      description:
        "A platform for booking haircuts, viewing ratings & reviews, and managing staff & payroll with secure online payments.",
      tasks:
        "Leader and a back-end development using Node.js and Express.js, integrating MySQL and PostgreSQL, and implementing JWT for security. Collaborated on the front-end with React.js and Vite.js, and deployed on Firebase, Azure, Supabase, and DigitalOcean.",
      url: "https://hair-salon-vjp.azurewebsites.net/",
      img: "/hairsalon.png",
      tags: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Firebase",
        "Azure",
        "DigitalOcean",
      ],
    },
  ],
};

export default featuredProjectsSection;
