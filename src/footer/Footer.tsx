import { Container, Row } from 'react-bootstrap';
import './footer.css';

function Footer() {
  return (
    <footer className="footer text-light text-center py-3 z-n1">
      <Container>
        <Row className="align-items-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Samuel Sánchez Toca. All rights reserved.
          </p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

