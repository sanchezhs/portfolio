import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Home.css';

function Home() {
  return (
    <Container fluid className="home-container rounded-5 p-4">
      {/* Sección de bienvenida */}
      <Row className="justify-content-center text-center py-5">
        <Col className='home-title-col'>
          <h1>Samuel Sánchez</h1>
          <h2>SOFTWARE ENGINEER</h2>
        </Col>
        <Col md={8} lg={9} className='text-start'>
          <h1 className="display-4 fw-bold">About me</h1>
          <p className="lead w-75">
            I am passionate about programming and computing,
            driven by a deep curiosity for how technology can
            solve real-world problems and improve lives.
            I take immense pride in my work, finding joy in
            creating efficient, innovative, and impactful solutions.
            I thrive on challenges and see them as opportunities to grow,
            continuously pushing myself to learn new technologies, refine my skills,
            and stay at the forefront of industry advancements.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center py-3">
        <Col xs={12} className="text-center">
          <Button
            variant="primary"
            className="social-button mx-2"
            href="https://www.linkedin.com/in/samuel-s-2a2a16280/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="me-2" size={20} />
            LinkedIn
          </Button>
          <Button
            variant="dark"
            className="social-button mx-2"
            href="https://github.com/sanchezhs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="me-2" size={20} />
            GitHub
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

