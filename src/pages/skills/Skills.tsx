import { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  ButtonGroup
} from 'react-bootstrap';
import {
  FaCode,       // Languages
  FaLayerGroup, // Frameworks
  FaDatabase,   // Databases
  FaTools       // Others
} from 'react-icons/fa';
import { motion } from "framer-motion";

import './Skills.css';

enum Category {
  Languages = 'Languages',
  Frameworks = 'Frameworks',
  Databases = 'Databases',
  Others = 'Others'
}

const deviconClasses: Record<string, string> = {
  // Lenguages
  JavaScript: 'devicon-javascript-plain colored',
  Python: 'devicon-python-plain-wordmark colored',
  Java: 'devicon-java-plain-wordmark colored',
  C: 'devicon-c-plain colored',
  Typescript: 'devicon-typescript-plain colored',
  Go: 'devicon-go-original-wordmark',
  R: 'devicon-r-plain colored',

  // Frameworks
  React: 'devicon-react-original colored',
  Angular: 'devicon-angularjs-plain-wordmark colored',
  'Node.js': 'devicon-nodejs-plain-wordmark colored',
  Django: 'devicon-django-plain-wordmark colored',

  // DBs
  PostgreSQL: 'devicon-postgresql-plain-wordmark colored',
  MySQL: 'devicon-mysql-plain-wordmark colored',
  MongoDB: 'devicon-mongodb-plain-wordmark colored',

  // Others
  Redis: 'devicon-redis-plain-wordmark colored',
  Git: 'devicon-git-plain-wordmark colored',
  Docker: 'devicon-docker-plain-wordmark colored',
  Kubernetes: 'devicon-kubernetes-plain colored',
  'Google Cloud': 'devicon-googlecloud-plain colored',
};

const skillsData: Record<Category, string[]> = {
  [Category.Languages]: ['Python', 'Java', 'C', 'Typescript', 'JavaScript', 'Go', 'R'],
  [Category.Frameworks]: ['React', 'Angular', 'Node.js', 'Django'],
  [Category.Databases]: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  [Category.Others]: ['Git', 'Docker', 'Kubernetes', 'Google Cloud']
};

const categoryIcons: Record<Category, JSX.Element> = {
  [Category.Languages]: <FaCode size={22} />,
  [Category.Frameworks]: <FaLayerGroup size={22} />,
  [Category.Databases]: <FaDatabase size={22} />,
  [Category.Others]: <FaTools size={22} />
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(Category.Languages);

  return (
    <Container fluid className="skills-container rounded-5 p-4">
      {/* Title Section */}
      <Row className="justify-content-center text-center py-5">
        <Col>
          <h1 className="display-4 fw-bold">My Skills</h1>
          <p className="lead">A showcase of my technical expertise</p>
        </Col>
      </Row>

      {/* Category Buttons */}
      <Row>
        <Col className="d-flex justify-content-center">
          <ButtonGroup
            aria-label="Skill categories"
            className="d-flex flex-wrap justify-content-center w-100"
          >
            {Object.values(Category).map((category) => (
              <Button
                key={category}
                variant={
                  selectedCategory === category ? 'primary' : 'outline-primary'
                }
                onClick={() => setSelectedCategory(category)}
                className="m-1 d-flex align-items-center w-100"
                style={{ flex: '1 1 auto', maxWidth: '200px' }}
              >
                {categoryIcons[category]}
                <span className="ms-2">{category}</span>
              </Button>
            ))}
          </ButtonGroup>
        </Col>
      </Row>


      {/* <Row> */}
      {/*   <Col className="d-flex justify-content-center"> */}
      {/*     <ButtonGroup aria-label="Skill categories"> */}
      {/*       {Object.values(Category).map((category) => ( */}
      {/*         <Button */}
      {/*           key={category} */}
      {/*           variant={ */}
      {/*             selectedCategory === category ? 'primary' : 'outline-primary' */}
      {/*           } */}
      {/*           onClick={() => setSelectedCategory(category)} */}
      {/*           className="mx-1 d-flex align-items-center" */}
      {/*         > */}
      {/*           {categoryIcons[category]} */}
      {/*           <span className="ms-2">{category}</span> */}
      {/*         </Button> */}
      {/*       ))} */}
      {/*     </ButtonGroup> */}
      {/*   </Col> */}
      {/* </Row> */}

      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="skills-card shadow-sm">
            <Card.Body>
              <div className="d-flex flex-wrap justify-content-center mt-3">
                {skillsData[selectedCategory].map((skill, index) => {
                  const iconClass = deviconClasses[skill];
                  const hasIcon = iconClass && iconClass.trim() !== '';

                  return (
                    <motion.div
                      key={skill}
                      className="m-2"
                      variants={cardVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{
                        delay: index * 0.1,
                        duration: 0.4,
                      }}
                    >
                      <Card
                        key={skill}
                        className="skill-card shadow-sm border m-2"
                        style={{ width: '8rem', borderRadius: '0.5rem' }}
                      >
                        <Card.Body className="text-center p-2">
                          {hasIcon ? (
                            <i className={iconClass} style={{ fontSize: '2rem' }} />
                          ) : (
                            <Card.Title as="h6" className="mt-2 mb-0">
                              {skill}
                            </Card.Title>
                          )}
                        </Card.Body>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;

