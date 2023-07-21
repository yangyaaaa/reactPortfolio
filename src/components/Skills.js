import { useEffect, useState } from "react";
import AnimatedLetters from "./AnimatedLetters";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
   <div id="skills">
    <Container style={{ marginTop:'100px', marginLeft: '300px', marginRight: 'auto' }}>
       <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
      <h1 className="about-h1">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['S', 'k', 'i', 'l', 'l', 's']}
          idx={15}
        />
          </h1>
          <div className="container">
          <div className="text-container">
          <p>
          Expert in front-end development including technologies like
            <span class="tech-tag"> HTML5</span>,
            <span class="tech-tag"> CSS3</span>,
            <span class="tech-tag"> JavaScript</span>,
            <span class="tech-tag"> Python</span>,
            <span class="tech-tag"> React</span>,
            <span class="tech-tag"> Redux</span>,
            <span class="tech-tag"> Bootstrap</span>,
            <span class="tech-tag"> React Native</span>,
            <span class="tech-tag"> Git</span>, etc.
          </p>
          <p>
            Visit my
            <a
              onclick="ga('send', {'hitType': 'event', 'eventCategory': 'Skills Page', 'eventAction': 'Link Clicked', 'eventLabel': 'Linkedin profile' });"
              target="_blank"
              href="https://www.linkedin.com/in/yangya-lackner/"
              > LinkedIn </a> profile for more details. Also you can checkout my resume on this
            <a
              target="_blank"
              href="https://github.com/yangyaaaa/reactPortfolio/blob/master/src/assets/img/Lebenslauf_yangya.pdf"
              > Link
            </a>.
          </p>
          </div>
          </div>
          </Col>
       </Row>
    </Container>
   </div>
  )
}

export default Skills