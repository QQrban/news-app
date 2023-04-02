import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { AiFillGithub } from 'react-icons/ai';
import moment from 'moment/moment';
import { Nav } from 'react-bootstrap';
import HeaderLinks from './HeaderLinks';

function Header() {

    return (
        <header className='shadow-sm bg-body rounded'>
            <div className='top-menu-info position-fixed top-0 bg-dark w-100'>
                <Container className='d-flex justify-content-between align-items-center'>
                    <div className='text-white'>{moment().format('dddd, MMM DD, YYYY')}</div>
                    <Nav defaultActiveKey="/home" as="ul">
                        <Nav.Item as="li">
                            <Nav.Link className='text-white' href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link className='text-white' href=''>About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link className='text-white' href='https://www.linkedin.com/in/kurban-ramazanov-2b50b026b/' target='_blank' rel="noreferrer">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </div>
            <Navbar className='mt-5'>
                <Container>
                    <Navbar.Brand className='fs-1 fw-bold l' href="#home">React <span className='text-primary'>News</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <a href="https://github.com/qqrban" target='_blank' rel="noreferrer">
                                <AiFillGithub size={60} />
                            </a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <HeaderLinks />
        </header>
    );
}

export default Header;