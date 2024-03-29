import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AnimatedLetters from "./AnimatedLetters";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/projectImg3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div id="projects">
    <Container style={{ marginTop: '100px', marginLeft: '300px', marginRight: 'auto' }}>
       <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
      <h1 className="about-h1">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
          idx={15}
        />
          </h1>
              <div className="projectcard"> 
                <h3>Business Website</h3>
                <div> 
                 A business website with directed-force knowledge graph.
                </div>
                <img className="project-image" src={projImg1} alt= "business website"></img>
                <a href="https://github.com/yangyaaaa/websitetest" target="_blank" rel="noopener noreferrer"> 👉Check on github repository.</a>
              </div>

              <div className="projectcard"> 
                <h3>Employee Polls</h3>
                <div> 
                Employee Polls is a React-based web application that allows employees to answer 
                and create questions to stimulate engagement and interaction within a company. The application utilizes Redux for state management
                and has a leaderboard feature to incentivize participation.
                <div>
                This project also includes 10 passing unit test and one spapshot test with jest, @testing-library/react, and @testing-library/jest-dom.
                </div>
                </div>
                <img className="project-image" src={projImg4} alt= "employee polls"></img>
                <a href="https://github.com/yangyaaaa/employee-polls" target="_blank" rel="noopener noreferrer"> 👉Check on github repository.</a>
              </div>

              <div className="projectcard"> 
                <h3>Myreads App</h3>
                <div> 
                This is a bookshelf app that lets you to organize books that you have read, want to read or currently reading.
                </div>
                <img className="project-image" src={projImg2} alt= "myreads"></img>
                <a href="https://github.com/yangyaaaa/myreads" target="_blank" rel="noopener noreferrer"> 👉Check on github repository. </a>
              </div>

              <div className="projectcard"> 
                <h3>Portfolio Website</h3>
                <div> 
                My portfolio website based on React.
                </div>
                <img className="project-image" src={projImg3} alt= "portfolio"></img>
                <a href="https://github.com/yangyaaaa/reactPortfolio" target="_blank" rel="noopener noreferrer">👉Check on github repository.</a>
              </div>
      <img className="background-image-right" src={colorSharp2}></img>
    </Col>
    </Row>
  </Container>
  </div>
  )
}

export default Projects