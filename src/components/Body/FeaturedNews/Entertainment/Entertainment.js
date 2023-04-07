import { useState, useEffect } from 'react';
import { getNews } from '../../../../services/apiServices';

const Entertainment = () => {
    const [entertain, setEntertain] = useState(null);
    const url =
        'https://content.guardianapis.com/search?q=entertainment&from-date=2014-01-01&api-key=1e39985b-e6ab-40fa-8c60-28d971da63c4&show-fields=thumbnail';

    useEffect(() => {
        try {
            getNews(url).then((data) => {
                const newData = data.response.results.slice(0, 4).map((result) => {
                    return {
                        url: result.webUrl,
                        title: result.webTitle,
                        author: 'Guardian',
                        img: result.fields.thumbnail,
                    };
                });
                setEntertain(newData);
            });
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <section className="entertain mt-4">
            <h4 className="subtitle">
                <span>Entertainment</span>
            </h4>
            <div className="entertain-content">
                {entertain?.length ? (
                    entertain.map((article, i) => (
                        <div
                            onClick={() => window.open(article.url)}
                            key={i}
                            className="entertain-item"
                        >
                            <div>
                                <img src={article.img} alt="article" />
                                <div className="descr">
                                    <div className="p-2">
                                        <span>{article.author}</span>
                                        <h4>{article.title}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div>No data</div>
                )}
            </div>
        </section>
    );
};

export default Entertainment;
