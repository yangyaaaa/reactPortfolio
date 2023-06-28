import { useEffect, useState } from "react";
import AnimatedLetters from "./AnimatedLetters";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/headerImg.jpg";
import "../App.css";

const Aboutme = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
   <div id="about-me">
    <Container style={{ marginTop:'100px', marginLeft: '300px', marginRight: 'auto' }}>
       <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
      <h1 className="about-h1">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
          idx={15}
        />
          </h1>
          <div className="container">
          <div className="text-container">
          <p>I'm a very ambitious front-end developer looking for a role in an
          international company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
          <br></br>I'm quiet confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
          </p>
          </div>
          </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
                <div>
                  <img src={headerImg} alt="Header Img" style={{ width: '200px', height: 'auto' }}/>
                </div>
          </Col>
       </Row>
    </Container>
   </div>
  )
}

export default Aboutme