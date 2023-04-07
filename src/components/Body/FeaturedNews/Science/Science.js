import { useState, useEffect } from 'react';
import moment from 'moment';
import { getNews } from '../../../../services/apiServices';

const Science = () => {
    const [science, setScience] = useState(null);

    const url = 'https://api.nytimes.com/svc/news/v3/content/nyt/science.json?api-key=x4cRbv0vVnmBqQxaEPCx6rfsqo27y8ha';

    useEffect(() => {
        getNews(url).then((data) => {
            const newData = data.results.slice(0, 4).map((article) => {
                return {
                    url: article.url,
                    date: article.published_date,
                    title: article.title,
                    descr: article.abstract,
                    img: article.multimedia[2].url,
                };
            });
            setScience(newData);
        });
    }, []);

    return (
        <section className="science">
            <h4 className="subtitle">
                <span>Science</span>
            </h4>
            {science?.length ? (
                <div className="science-content dual-section">
                    <div
                        onClick={() => window.open(science[0].url)}
                        className="science-main dual-section-main"
                    >
                        <div className="dual-img-wrap">
                            <img src={science[0].img} alt="1" />
                        </div>
                        <h5 className="mt-2">{science[0].title}</h5>
                        <p className="text-secondary">
                            {moment(`${science[0].date}`).format('DD.MM.YYYY')}
                        </p>
                        <div>{science[0].descr}</div>
                    </div>
                    <div className="science-secondary dual-section-secondary">
                        {science.slice(1, 4).map((article, i) => (
                            <div
                                onClick={() => window.open(article.url)}
                                key={i}
                                className="science-item dual-section-item"
                            >
                                <img src={article.img} alt="2" />
                                <div className="dual-item-text">
                                    <h6>{article.title}</h6>
                                    <p>{moment(`${article.date}`).format('DD.MM.YYYY')}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div>No data</div>
            )}
        </section>
    );
};

export default Science;
