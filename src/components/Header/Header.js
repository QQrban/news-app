import Container from 'react-bootstrap/Container';
import moment from 'moment/moment';
import HeaderLinks from './HeaderLinks';

function Header() {

    return (
        <header className='shadow-sm bg-body rounded'>
            <div className='top-menu-info bg-dark w-100'>
                <Container className='d-flex justify-content-between align-items-center'>
                    <div className='text-white p-1'>{moment().format('dddd, MMM DD, YYYY')}</div>
                </Container>
            </div>
            <HeaderLinks />
        </header>
    );
}

export default Header;