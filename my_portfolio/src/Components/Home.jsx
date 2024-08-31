import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { TypeAnimation } from 'react-type-animation';
import Lottie from "lottie-react";
import animationData from '../assets/animation/Hi-ani .json';
import myImage from '../assets/Images/myimage .jpeg';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            {/* Image */}
           <div className="shining-circle">
        <img
          src={myImage}
          className="circular-image"
          alt="Shining Circular Portfolio Example"
        />
      </div>
          </Col>

          <Col>
            {/* Lottie Animation and Heading in the Same Row */}
            <Row className="align-items-center"> {/* Ensures vertical alignment */}
              <Col xs="auto"> {/* Adjust the width using Bootstrap grid */}
                <Lottie className="hi-ani" animationData={animationData} />
              </Col>
              <Col>
                <h1 className="h1-style">I am Kanchana</h1>
              </Col>
            </Row>
            <TypeAnimation
              sequence={[
                'I am a Software Engineering Intern',
    1000,
    'Aspiring to be a DevOps Engineer',
    1000,
    'With skills in Web Development',
    1000,
    'And knowledge in Cloud Computing',
    1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block', color: 'white' }}
              repeat={Infinity}
            />
             {/* Buttons */}
             <div className="button-style">
              <Button variant="outline-warning" size="sm">
                Hire Me...
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;