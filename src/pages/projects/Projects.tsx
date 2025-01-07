import { Container, Row, Col } from 'react-bootstrap';
import Project from './Project';
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

const projects = [
  {
    title: 'Particle Simulator',
    subtitle: 'Newtonian particle simulator written in C with support for web using WebAssembly',
    image: p1Img1,
    link: 'https://github.com/sanchezhs/particle-simulation',
    categories: ['Simulation', 'Physics', 'Web Development'],
    languages: ['C', 'WebAssembly']
  },
  {
    title: 'Snake Game',
    subtitle: 'Classic snake game written in C using Raylib. This project demonstrates basic game development concepts and graphics rendering.',
    image: p2Img1,
    link: 'https://github.com/sanchezhs/csnake',
    categories: ['Game', 'Entertainment'],
    languages: ['C']
  },
  {
    title: 'Quantum Linear Programming Solver',
    subtitle: 'Quantom algorithm implementation using Qiskit for solving ILP problems written in Python',
    image: p3Img1,
    link: 'https://github.com/sanchezhs/Quantum-Linear-Programming-Solver',
    categories: ['Quantum Computing', 'Optimization', 'Web Development'],
    languages: ['Python', 'Qiskit']
  },
  {
    title: 'Julia Sets',
    subtitle: 'Desktop application written in Python to compute and visualize Julia Sets',
    image: p4Img1,
    link: 'https://github.com/sanchezhs/julia-sets',
    categories: ['Mathematics', 'Visualization', 'Desktop Application'],
    languages: ['Python']
  },
  {
    title: 'Graphic Calculator',
    subtitle: 'A program that parse and plot a function entered by the command line',
    image: p5Img1,
    link: 'https://github.com/sanchezhs/cgc',
    categories: ['Mathematics', 'Utilities', 'Command Line'],
    languages: ['C']
  },
  {
    title: 'Blockchain',
    subtitle: 'Blockchain implementation in C using Merkle Trees and SHA-513',
    image: p6Img1,
    link: 'https://github.com/sanchezhs/cblockchain',
    categories: ['Cryptography', 'Blockchain'],
    languages: ['C']
  },
  {
    title: 'Neural Network',
    subtitle: 'Neural Network implementation in C',
    image: p7Img1,
    link: 'https://github.com/sanchezhs/nn',
    categories: ['Machine Learning', 'Artificial Intelligence'],
    languages: ['C']
  },
  {
    title: 'Kmeans',
    subtitle: 'Kmeans implementation in C',
    image: p8Img1,
    link: 'https://github.com/sanchezhs/kmeans',
    categories: ['Clustering', 'Data Science'],
    languages: ['C']
  },
  {
    title: 'HTTP Server',
    subtitle: 'HTTP Server implementation in C',
    image: p9Img1,
    link: 'https://github.com/sanchezhs/http-server',
    categories: ['Networking', 'Web Development'],
    languages: ['C']
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
        {projects.map((project, id) => (
          <Project key={id} {...project} />
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
