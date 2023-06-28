import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import "../App.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }}/>
          </Col>
         </Row>
          <Col size={20} sm={6}  className="text-right text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yangya-lackner/"><img src={navIcon1} alt="linkedin" /></a>
              <a href="https://github.com/yangyaaaa"><img src={navIcon3} alt="github" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
      </Container>
    </footer>
  )
}

export default Footer