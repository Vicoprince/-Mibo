import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './App.css';

const AboutSection = () => {
  return (
    <Container fluid className="about-section py-5 text-white" id="about" data-aos="fade-up">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} data-aos="fade-up">
          <Row className="align-items-center">
            {/* Text Section */}
            <Col md={6} className="text-justify text-md-left">
              <h2 className="display-1">
                ABOUT MIBO
              </h2>
              <h3 className="mt-4">
                Name: Mibo
              </h3>
              <h5 className="mt-2">
                Origin: ECHO Laboratory on Planet Ooblec
              </h5>
              <p className="mt-4">
                Mibo was once a joyful lab experiment, brought to life by the brilliant but eccentric scientists of ECHO, a research facility orbiting the colorful planet Ooblec. Designed to be the perfect blend of quirkiness and curiosity, Mibo was created to study the mysteries of space and the whimsical phenomena of Ooblec. But when a cosmic anomaly struck, ECHO collapsed, scattering its creations across the stars. Mibo found himself adrift in the great unknown, far from the only home he ever knew.
              </p>
              <p className="mt-4">
                Now, Mibo must navigate the strange and wondrous expanse of the universe, using his boundless curiosity and clever waddle to make his way back to Ooblec. Along the journey, he dreams of reuniting with his fellow experiments—his lost brothers—who may also be drifting through space, each with their own quest to find home. Mibo's mission is one of hope, exploration, and the search for family, as he discovers the incredible secrets the universe holds and fights to bring the ECHO family back together.
              </p>
            </Col>

            {/* Image Section */}
            <Col md={6} className="text-center text-md-right">
              {/* Image of Mibo */}
              <Image 
                src="./images/mibo3.png" 
                alt="Mibo"
                fluid
                style={{ borderRadius: '10px', boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' }}
              />
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={10} lg={8} data-aos="fade-up">
          <Row className="align-items-center mt-5">
            {/* Image Section */}
            <Col md={6} className="text-center text-md-right">
              {/* Image of Mibo */}
              <Image 
                src="./images/mibo1.png" 
                alt="Mibo"
                fluid
                style={{ borderRadius: '10px', boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)' }}
              />
            </Col>

            {/* Text Section */}
            <Col md={6} className="text-justify text-md-left">
              <p className="mt-4">
              Mibo is a lab experiment who was launched into space when ECHO, the research facility on planet Ooblec, collapsed. Now drifting through the vast cosmos, he uses his curiosity and cleverness to navigate strange worlds in hopes of returning home. Mibo's mission is to reunite with his lost brothers.              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>


  )
}

export default AboutSection