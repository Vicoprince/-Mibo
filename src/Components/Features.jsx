import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css';

const Features = () => {
    const features = [
        { title: 'Feature One', text: 'Lorem ipsum dolor sit amet.' },
        { title: 'Feature Two', text: 'Consectetur adipiscing elit.' },
        { title: 'Feature Three', text: 'Integer nec odio. Praesent libero.' }
      ];

  return (
    <Container id="features" className="features-section my-5" data-aos="fade-up">
      <h2 className="text-center mb-4">Features</h2>
      <Row>
        {features.map((feature, index) => (
          <Col md={4} xs={12} key={index} className="my-3" data-aos="fade-up" data-aos-delay={index * 200}>
            <Card className="h-100 p-3">
              <Card.Body>
                <Card.Title className="text-primary">{feature.title}</Card.Title>
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