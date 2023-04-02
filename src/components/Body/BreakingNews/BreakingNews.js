import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { getTopNews } from '../../../services/apiServices';
import { setTopNews } from '../../../services/stateService';

const BreakingNews = () => {
    const topNews = useSelector(state => state.topNews);
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            getTopNews()
                .then(data => {
                    const newData = data.articles.slice(1, 6)
                    dispatch(setTopNews(newData))
                })
        } catch (err) {
            console.log(err);
        }
    }, [dispatch]);

    return (
        <>
            {topNews?.length ? (
                <Container className='breaking-container p-0'>
                    <div className="main-news">
                        <img src={topNews[0].urlToImage} alt="1" />
                        <div className="descr">
                            <div className='p-2'>
                                <span>{topNews[0].author}</span>
                                <h4>{topNews[0].title}</h4>
                            </div>
                        </div>
                    </div>
                    <div className='secondary-news'>
                        {topNews?.length && topNews.slice(1).map((article, i) => (
                            <div key={i} className='secondary-item'>
                                <img src={article.urlToImage} alt="1" />
                                <div className="descr">
                                    <div className='p-2'>
                                        <span>{article.author}</span>
                                        <h4>{article.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </Container>
            ) : <div className='main-loading'>Loading</div>}
        </>

    )
}

export default BreakingNews