import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import Mommilk from "../../Assets/Projects/Mommilk.png";
import hairsalonFE from "../../Assets/Projects/hairsalonFE.png";
import images from "../../Assets/Projects/images.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mommilk}
              isBlog={false}
              title="MomMilk Front-End Project"
              description="MomMilk is an e-commerce platform offering a wide range of milk products for pregnant mothers and babies. Users can easily search, compare, and buy milk that fits their needs. The platform uses React.js and Vite.js for the front-end, C# and API Swagger for the back-end, with MySQL and Firebase as databases. Authentication is secured with JSON Web Tokens (JWT), and the platform is deployed using Firebase and Azure. Our goal is to provide a seamless and secure shopping experience with a reliable and scalable technology stack."
              ghLink="https://github.com/devbaoo/Summer2024SWP391_NJS1805_Group2_FE"
              demoLink="https://suame88-f056d.web.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hairsalonFE}
              isBlog={false}
              title="HairSalonBooking Front-End Project"
              description="Our platform allows users to easily book haircuts based on their preferred services and stylists, view ratings and reviews from other customers, and make secure online payments. It also features a management system for staff and payroll. Built with React.js and Vite.js on the front-end, and Node.js and Express.js on the back-end, the platform uses MySQL and PostgreSQL databases, secured by JSON Web Tokens (JWT), and deployed on Firebase, Azure, Supabase, and DigitalOcean."
              ghLink="https://github.com/HairSalonBooking/HairSalonBooking_FE"
              demoLink="https://hair-salon-vjp.azurewebsites.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hairsalonFE}
              isBlog={false}
              title="HairSalonBooking Back-End Project"
              description="Our platform allows users to easily book haircuts based on their preferred services and stylists, view ratings and reviews from other customers, and make secure online payments. It also features a management system for staff and payroll. Built with React.js and Vite.js on the front-end, and Node.js and Express.js on the back-end, the platform uses MySQL and PostgreSQL databases, secured by JSON Web Tokens (JWT), and deployed on Firebase, Azure, Supabase, and DigitalOcean."
              ghLink="https://github.com/devbaoo/Backend-HairSalonBooking"
              demoLink="https://oyster-app-pc2gd.ondigitalocean.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="This is a project for managing billiards. The project is built using C#, Entity Framework. I am coding this project"
              ghLink="https://github.com/devbaoo/BilliardsManagement"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={images}
              isBlog={false}
              title="BilliardsManagement Back-End Project"
              description="This is my portfolio website. It is built using React.js and React-Bootstrap. The website is responsive and has a dark mode feature. The website is deployed on GitHub Pages."
              ghLink="https://github.com/devbaoo/Portfolio"
              demoLink="https://devbaoo.vercel.app/project"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
