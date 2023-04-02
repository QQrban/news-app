import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux';

const Loading = () => {
    const topNews = useSelector(state => state.topNews);


    if (topNews) return null;
    return (
        <div className='loading-spinner'>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            <div className='mt-2 fs-1 fw-bold'>ReactNews</div>
        </div>
    );
}

export default Loading;