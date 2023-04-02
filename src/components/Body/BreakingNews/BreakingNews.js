import { useEffect, useState } from 'react';
import React from 'react'
import { Container } from 'react-bootstrap';
import { getTopNews } from '../../../services/apiServices';

const BreakingNews = () => {
    const [topNews, setTopNews] = useState(null);

    useEffect(() => {
        try {
            getTopNews()
                .then(data => {
                    const newData = data.articles.slice(1, 6)
                    setTopNews(newData);
                })
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <Container className='breaking-container p-0'>
            {topNews?.length ? (
                <div className="main-news">
                    <img src={topNews[0].urlToImage} alt="1" />
                    <div className="descr">
                        <div className='p-2'>
                            <span>{topNews[0].author}</span>
                            <h4>{topNews[0].title}</h4>
                        </div>
                    </div>
                </div>
            ) : <div>Loading</div>}
            <div className='secondary-news'>
                {topNews?.length ? topNews.slice(1).map((article, i) => (
                    <div key={i} className='secondary-item'>
                        <img src={article.urlToImage} alt="1" />
                        <div className="descr">
                            <div className='p-2'>
                                <span>{article.author}</span>
                                <h4>{article.title}</h4>
                            </div>
                        </div>
                    </div>
                )) : <div>No data</div>}

            </div>
        </Container>
    )
}

export default BreakingNews