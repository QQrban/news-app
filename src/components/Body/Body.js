import { Container } from 'react-bootstrap';
import BreakingNews from './BreakingNews/BreakingNews';
import { AiFillThunderbolt } from 'react-icons/ai'
import FeaturedNews from './FeaturedNews/FeaturedNews';

const Body = () => {

    return (
        <main>
            <div className="App">
                <Container className='mt-5'>
                    <div className='breaking-header mb-3 d-flex gap-2 align-items-center'>
                        <h1>Top News</h1>
                        <AiFillThunderbolt size={40} />
                    </div>
                    <BreakingNews />
                    <FeaturedNews />
                </Container>
            </div>
        </main>
    )
}

export default Body;