import { useState } from 'react';
import { Navbar, Container, Nav, Image, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import home from '../assets/home.svg'
import folder from '../assets/folder.svg'
import briefcase from '../assets/briefcase.svg'
import skills from '../assets/skills.svg'
import './customnavbar.css'


function CustomNavbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const imgSize = 17;
  const renderTooltip = (text: string) => (props: any) => (
    <Tooltip id={`tooltip-${text}`} {...props}>
      {text}
    </Tooltip>
  );
  const getTooltipPlacement = () => (isExpanded ? 'right' : 'bottom');

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className="custom-nav mt-3 rounded-5 px-3 w-25 m-auto d-flex"
      onToggle={(expanded) => setIsExpanded(expanded)}
    >
      <Container fluid className='justify-content-center'>
        {/* Collapse button for small devices */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='navbar-dark' />

        {/* Collapse content container */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto d-flex justify-content-around align-items-center">

            {/* Home */}
            <OverlayTrigger
              placement={getTooltipPlacement()}
              delay={{ show: 250, hide: 300 }}
              overlay={renderTooltip('Home')}
            >
              <Nav.Link viewTransition eventKey="1" as={Link} to="/" className="mx-2">
                <Image src={home} width={imgSize} height={imgSize} alt="Home" />
              </Nav.Link>
            </OverlayTrigger>

            {/* Projects */}
            <OverlayTrigger
              placement={getTooltipPlacement()}
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip('Projects')}
            >
              <Nav.Link viewTransition eventKey="2" as={Link} to="/projects" className="mx-2">
                <Image src={folder} width={imgSize} height={imgSize} alt="Projects" />
              </Nav.Link>
            </OverlayTrigger>

            {/* Experience */}
            <OverlayTrigger
              placement={getTooltipPlacement()}
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip('Experience')}
            >
              <Nav.Link viewTransition eventKey="3" as={Link} to="/experience" className="mx-2">
                <Image src={briefcase} width={imgSize} height={imgSize} alt="Experience" />
              </Nav.Link>
            </OverlayTrigger>

            {/* Knowledge */}
            <OverlayTrigger
              placement={getTooltipPlacement()}
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip('Skills')}
            >
              <Nav.Link viewTransition eventKey="4" as={Link} to="/skills" className="mx-2">
                <Image src={skills} width={imgSize} height={imgSize} alt="Skills" />
              </Nav.Link>
            </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
