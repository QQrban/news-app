import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

const HeaderLinks = () => {

    return (
        <Container className='nav-sticky d-flex justify-content-between'>
            <Nav
                activeKey="/home"
                className='nav-website gap-1 d-flex align-items-center'
            >
                <Nav.Item >
                    <Nav.Link className='ps-0' href="/home">home</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link href="/home">World</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link href="/home">Business</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link href="/home">Sport</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Travel</Nav.Link>
                </Nav.Item>
            </Nav>
        </Container>
    )
}

export default HeaderLinks