import { Container, Row, Col } from "react-bootstrap";

import navIcon1 from '../assets/img/github.png';
import navIcon2 from '../assets/img/twitter.png';
import navIcon3 from '../assets/img/linkedin.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
  
          <Col size={12} sm={6}>
       
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/MayaraRocha95/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://twitter.com/MayaraARochaaa" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/mayaraaraujorocha/" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Feito por Mayara Rocha 2022</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
