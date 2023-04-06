import { useEffect, useState } from "react";
import { getNews } from "../../../../services/apiServices";
import moment from "moment/moment";

const Sports = () => {
    const [sport, setSport] = useState(null);

    const url = 'https://api.nytimes.com/svc/news/v3/content/nyt/sports.json?api-key=x4cRbv0vVnmBqQxaEPCx6rfsqo27y8ha'

    useEffect(() => {
        try {
            getNews(url)
                .then(data => {
                    const newData = data.results.slice(0, 4).map(result => {
                        return {
                            url: result.url,
                            date: result.created_date,
                            title: result.title,
                            descr: result.abstract,
                            img: result.multimedia[2].url
                        }
                    });
                    setSport(newData);
                });
        } catch (err) {
            console.log(err);
        }
    }, [])

    return (
        <section className='sports '>
            <h4 className="subtitle">
                <span>Sports</span>
            </h4>
            {sport?.length ? (
                <div className="sports-news">
                    <div onClick={() => window.open(sport[0].url)} className="sports-main">
                        <img src={sport[0].img} alt="1" />
                        <h5 className='mt-3'>{sport[0].title}</h5>
                        <span className="publ-date text-secondary">{moment(`${sport[0].date}`).format('DD.MM.YYYY')}</span>
                        <p className='mt-2 w-75'>{sport[0].descr}</p>
                    </div>
                    <div className="sports-secondary">
                        {sport.slice(1, 4).map((article, i) => (
                            <div onClick={() => window.open(article.url)} key={i} className="sports-item">
                                <img src={article.img} alt="1" />
                                <div className="sport-item-text">
                                    <h6 className="fs-5">{article.title}</h6>
                                    <p className="publ-date text-secondary">{moment(`${article.date}`).format('DD.MM.YYYY')}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : <div>No data</div>}
        </section>
    )
}

export default Sports