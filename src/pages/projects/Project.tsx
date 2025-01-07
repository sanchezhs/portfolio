import { Col, Card, Button, Badge } from 'react-bootstrap';

interface ProjectProps {
    title: string;
    subtitle: string;
    image: string;
    link: string;
    categories: string[];
    languages: string[];
}

function Project({ title, subtitle, image, link, categories, languages }: ProjectProps) {
    return (
        <Col md={4} className="mb-4">
            <Card className="project-card shadow">
                <Card.Img variant="top" src={image} alt={title} className="project-image" />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{subtitle}</Card.Text>

                    <div className="mb-2">
                        <div>
                            {categories.map((category, index) => (
                                <Badge key={index} pill className="badge-custom-category me-1">
                                    {category}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="mb-2">
                        <div>
                            {languages.map((language, index) => (
                                <Badge key={index} pill className="badge-custom-language me-1">
                                    {language}
                                </Badge>
                            ))}
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <Button variant="primary" href={link} target="_blank" rel="noopener noreferrer">
                            Source Code
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Project;