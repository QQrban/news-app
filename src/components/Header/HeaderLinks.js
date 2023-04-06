import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

const HeaderLinks = () => {
    const [expanded, setExpanded] = useState(false)

    const navigate = useNavigate();

    const handleClick = (link) => {
        navigate(link);
        setExpanded(false)
    }

    return (
        <Navbar expanded={expanded} collapseOnSelect expand="lg" >
            <Container >
                <Navbar.Brand href="#home">
                    <span className=" fs-3 fw-bold">React<span className='text-primary'>News</span></span>
                </Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto justify-content-end flex-grow-1 gap-3">
                        <Nav.Link onClick={() => handleClick('/')} >Home</Nav.Link>
                        <Nav.Link onClick={() => handleClick('/world')}>World</Nav.Link>
                        <Nav.Link onClick={() => handleClick('/business')}>Business</Nav.Link>
                        <Nav.Link onClick={() => handleClick('/sport')}>Sport</Nav.Link>
                        <Nav.Link onClick={() => handleClick('/travel')}>Travel</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeaderLinks