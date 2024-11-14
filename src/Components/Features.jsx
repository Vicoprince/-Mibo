import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css';

const Features = () => {
    const features = [
        { title: 'Supply', text: '1 BILLION' },
        { title: 'Taxes', text: '0%' },
        { title: 'Liquidity', text: '100% BURNED' },
        { title: 'Chain', text: 'Solana' }
      ];

  return (
    <Container id="features" className="features-section my-5" data-aos="fade-up">
      <h2 className="text-center mb-4">Tokenomics</h2>
      <Row>
        {features.map((feature, index) => (
          <Col md={4} xs={12} key={index} className="my-3" data-aos="fade-up" data-aos-delay={index * 200}>
            <Card className="card-wrapper h-100 p-3">
              <Card.Body className='card-body'>
                <Card.Title className="card-title">{feature.title}</Card.Title>
                <Card.Text>{feature.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Features