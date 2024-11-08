import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


const HeroSection = () => {
  return (
    <Container fluid className="hero-section text-center text-white" id='home' data-aos="fade-up">
      <Row className="hero-row justify-content-center align-items-end">
        {/* <img src='./images/mibo.png'/> */}
        <Col md={8} className="text-wrapper p-4">
          <h1 className="display-4">Mibo</h1>
          <p className="lead mt-3 mb-4">$DOGE led the meme revolution for over a decade, Now, it's $MIBO's turn to reign supreme. Mibo must navigate the strange and wondrous expanse of the universe, using his boundless curiosity and clever waddle to make his way back to Ooblec.</p>
          <Button className='hero_ctn' size="lg">Get Started</Button>
        </Col>
      </Row>
    </Container>

  )
}

export default HeroSection