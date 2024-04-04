import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import podcast from "../../Assets/Projects/podcast.png";
import vlog from "../../Assets/Projects/vlog.png";
import jewellery from "../../Assets/Projects/jewellery.png"
import Portfolio from "../../Assets/Projects/Portfolio.png";
import CarHireXpert from "../../Assets/Projects/CarHireXpert.png";
import blog from "../../Assets/Projects/blog.png";
// import emotion from "../../Assets/Projects/emotion.png";


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
              imgPath={jewellery}
              isBlog={false}
              title="Jewellery Website"
              description="Elevate your style with our exquisite jewelry collection, crafted to perfection for every occasion.Indulge in luxury with our stunning jewelry collection, where every piece tells a story of elegance and sophistication.Fashion, jewelry trends evolve over time."
              // ghLink="https://github.com/thevivekchauhan/Vivek-Chauhan-Portfolio-"
              demoLink="https://thevivekchauhan.github.io/sonu/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={podcast}
              isBlog={false}
              title="Podcast"
              description="I create podcasts for various reasons : first is that share valuable insights, second is that building a community or connecting with individuals, third is that it is increase my confidence, forth is that Sharing knowledge and expertise on specific topics.."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://podcasts.apple.com/us/podcast/vivek-chauhan/id1526873795"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vlog}
              isBlog={false}
              title="My blog Website"
              description="A blog website is an online platform where individuals or content creators share video blogs, typically featuring personal experiences, opinions, or activities. Actually, it's my dream to make blog website. I also have a Youtube channel."
              // ghLink="https://github.com/thevivekchauhan/vlog"
              demoLink="https://vivekchauhanvlog.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Tic-Tic"
              description="I made this website because it is remind me Vivek you can't waste your time to chasing butterfly and other distraction. My parents have faith in me that I will come forward by doing good work in the world, so I should not be distracted by anything keeping that in mind."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://thevivekchauhan.github.io/self/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="My Portfolio"
              description="I created my portfolio to showcase my skills, experience, and projects to potential employers and clients, providing them with a comprehensive overview of my capabilities and achievements in a visually appealing manner. That's why I make this beautiful website."
              // ghLink="https://github.com/thevivekchauhan/Vivek-Chauhan-Portfolio-"
              demoLink="https://thevivekchauhan.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CarHireXpert}
              isBlog={false}
              title="Rent Cars"
              description="Welcome to CarHireXpert, your premier destination for hassle-free car rentals. Our platform offers a seamless booking experience. Discover the convenience and reliability of renting with CarHireXpert . Start your journey today and experience the freedom of the open road with us."
              demoLink="https://thevivekchauhan.github.io/CarHireXpert/"
            />
          </Col>

          <Col md={4} className="project-card">
            {/* <ProjectCard  
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            /> */}
            <br></br><br></br><br></br><br></br><br></br><br></br>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
