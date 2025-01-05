import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Projects.css';
import p1Img1 from '../../assets/particlesim1.png';
import p2Img1 from '../../assets/snakegame1.png';
import p3Img1 from '../../assets/solver1.png';
import p4Img1 from '../../assets/julia.png';
import p5Img1 from '../../assets/cgc.png';
import p6Img1 from '../../assets/blockchain.png';
import p7Img1 from '../../assets/nn.jpg';
import p8Img1 from '../../assets/kmeans.png';
import p9Img1 from '../../assets/httpserver.png';

let projectId = 1;
function id() {
  return projectId++;
}

const projects = [
  {
    id: id(),
    title: 'Particle Simulator',
    subtitle: 'Newtonian particle simulator written in C with support for web using WebAssembly',
    image: p1Img1,
    link: 'https://github.com/sanchezhs/particle-simulation',
  },
  {
    id: id(),
    title: 'Snake Game',
    subtitle: 'Classic snake game written in C using Raylib',
    image: p2Img1,
    link: 'https://github.com/sanchezhs/csnake',
  },
  {
    id: id(),
    title: 'Quantum Linear Programming Solver',
    subtitle: 'Quantom algorithm implementation using Qiskit for solving ILP problems written in Python',
    image: p3Img1,
    link: 'https://github.com/sanchezhs/Quantum-Linear-Programming-Solver',
  },
  {
    id: id(),
    title: 'Julia Sets',
    subtitle: 'Desktop application written in Python to compute and visualize Julia Sets',
    image: p4Img1,
    link: 'https://github.com/sanchezhs/julia-sets',
  },
  {
    id: id(),
    title: 'Graphic Calculator',
    subtitle: 'A program that parse and plot a function entered by the command line',
    image: p5Img1,
    link: 'https://github.com/sanchezhs/cgc',
  },
  {
    id: id(),
    title: 'Blockchain',
    subtitle: 'Blockchain implementation in C using Merkle Trees and SHA-513',
    image: p6Img1,
    link: 'https://github.com/sanchezhs/cblockchain',
  },
  {
    id: id(),
    title: 'Neural Network',
    subtitle: 'Neural Network implementation in C',
    image: p7Img1,
    link: 'https://github.com/sanchezhs/nn',
  },
  {
    id: id(),
    title: 'Kmeans',
    subtitle: 'Kmeans implementation in C',
    image: p8Img1,
    link: 'https://github.com/sanchezhs/kmeans',
  },
  {
    id: id(),
    title: 'HTTP Server',
    subtitle: 'HTTP Server implementation in C',
    image: p9Img1,
    link: 'https://github.com/sanchezhs/http-server',
  },
];

function Projects() {
  return (
    <Container fluid className="projects-container rounded-5 p-4">
      <Row className="justify-content-center text-center py-5">
        <Col>
          <h1 className="display-4 fw-bold">Projects</h1>
          <p className="lead">Here are some of my favorite personal projects. Click for more details!</p>
        </Col>
      </Row>

      {/* Card Section */}
      <Row className="justify-content-center">
        {projects.map((project) => (
          <Col key={project.id} md={4} className="mb-4">
            <Card className="project-card shadow">
              <Card.Img variant="top" src={project.image} alt={project.title} className="project-image" />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.subtitle}</Card.Text>
                <Button variant="primary" href={project.link} target='_blank' rel='noopener noreferrer'>
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
