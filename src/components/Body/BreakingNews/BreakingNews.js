import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

const BreakingNews = () => {
    const topNews = useSelector((state) => state.topNews);

    return (
        <>
            {topNews?.length ? (
                <Container className="breaking-container p-0">
                    <div
                        onClick={() => window.open(topNews[0].url)}
                        className="main-news"
                    >
                        <img src={topNews[0].img} alt="breaking news" />
                        <div className="descr">
                            <div className="p-2">
                                <span>{topNews[0].author}</span>
                                <h4>{topNews[0].title}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="secondary-news">
                        {topNews?.length &&
                            topNews.slice(1, 5).map((article, i) => (
                                <div
                                    onClick={() => window.open(article.url)}
                                    key={i}
                                    className="secondary-item"
                                >
                                    <img src={article.img} alt="breaking news" />
                                    <div className="descr">
                                        <div className="p-2">
                                            <span>{article.author}</span>
                                            <h4>{article.title}</h4>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </Container>
            ) : (
                <div className="main-loading">Loading</div>
            )}
        </>
    );
};

export default BreakingNews;
