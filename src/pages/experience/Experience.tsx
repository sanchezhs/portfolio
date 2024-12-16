import { Container, Row, Col, Card } from 'react-bootstrap';
import './Experience.css';

const experiences = [
  {
    id: 1,
    title: 'Associate Cloud Engineer Certification',
    company: 'Google',
    date: 'Jul 2024',
    description: `
      - Earned a certification in cloud engineering with Google Cloud technologies.
    `,
  },
  {
    id: 2,
    title: 'Software Engineer',
    company: 'The Wise Seeker',
    date: 'Jul 2023 - Nov 2024',
    description: `
      - Backend development using Python (FastAPI, SQLAlchemy, Pydantic) for building REST and gRPC APIs.
      - Frontend development with Angular and state management using NGSX.
      - Design and management of relational (MySQL, PostgreSQL) and non-relational (MongoDB) databases.
      - Refactored monolithic architecture into microservices, optimizing scalability and performance.
      - Designed and implemented a multi-objective evolutionary algorithm for exam generation.
      - Leveraged AI models for business-specific needs.
      - Data analysis with Pandas and NumPy to drive strategic decisions.
      - Google Cloud CI/CD pipelines and database management for improved reliability.
    `,
  },
  {
    id: 3,
    title: "Master’s in Software Engineering and Artificial Intelligence",
    company: 'University of Málaga',
    date: 'Oct 2023 - Present',
    description: `
- Studying advanced software engineering techniques and AI model development.
`,
  },
  {
    id: 4,
    title: 'Software Engineer',
    company: 'Babel',
    date: 'Mar 2023 - May 2023',
    description: `
      - Designed and optimized SQL queries to enhance database performance.
      - Collaborated on efficient data models for new application functionalities.
      - Supported database maintenance and troubleshooting data-related issues.
    `,
  },
  {
    id: 6,
    title: "Bachelor’s in Computer Science",
    company: 'University of Málaga',
    date: 'Oct 2019 - Jun 2023',
    description: `
      - Focused on software development, data structures, and algorithms.
      - Completed a course in Machine Learning and Data Science with Python (Jun 2022).
    `,
  },
];

function Experience() {
  return (
    <Container fluid className="experience-container rounded-5 p-4">
      <Row className="justify-content-center text-center py-5">
        <Col>
          <h1 className="display-4 fw-bold">Experience</h1>
          <p className="lead">An overview of my professional and academic milestones.</p>
        </Col>
      </Row>

      {/* Línea de tiempo */}
      <div className="timeline">
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <Card className="experience-card shadow">
              <Card.Body>
                <Card.Title className="fw-bold">{experience.title}</Card.Title>
                <Card.Subtitle className="mb-2">
                  {experience.company} | {experience.date}
                </Card.Subtitle>
                <Card.Text>{experience.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Experience;

