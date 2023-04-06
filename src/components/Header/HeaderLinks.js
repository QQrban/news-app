import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

const HeaderLinks = () => {

    const navigate = useNavigate();

    return (
        <Navbar collapseOnSelect expand="lg" >
            <Container >
                <Navbar.Brand href="#home">
                    <span className=" fs-3 fw-bold">React<span className='text-primary'>News</span></span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto justify-content-end flex-grow-1 gap-3">
                        <Nav.Link onClick={() => navigate('/')} >Home</Nav.Link>
                        <Nav.Link onClick={() => navigate('/world')}>World</Nav.Link>
                        <Nav.Link onClick={() => navigate('/business')}>Business</Nav.Link>
                        <Nav.Link onClick={() => navigate('/sport')}>Sport</Nav.Link>
                        <Nav.Link onClick={() => navigate('/travel')}>Travel</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default HeaderLinks