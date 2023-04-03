import { useEffect, useState } from "react";
import { getSportsNews } from "../../../../services/apiServices";
import moment from "moment/moment";
// import { useSelector, useDispatch } from "react-redux";
const Sports = () => {
    const [sport, setSport] = useState(null);


    useEffect(() => {
        try {
            getSportsNews()
                .then(data => {
                    const newData = data.articles.filter(article => article.urlToImage !== null)
                    setSport(newData);
                })
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
                    <div className="sports-main">
                        <div><img src={sport[0].urlToImage} alt="1" /></div>
                        <h5 className='mt-3'>{sport[0].title}</h5>
                        <span className="publ-date">{moment(`${sport[0].publishedAt}`).format('DD.MM.YYYY')}</span>
                        <p className='mt-2 w-75 fs-5'>{(sport[0].description).replace(/#\S+/g, '').replace('Subscr...', '')}</p>
                    </div>
                    <div className="sports-secondary">
                        {sport.slice(1, 4).map((article, i) => (
                            <div key={i} className="sports-item">
                                <img src={article.urlToImage} alt="1" />
                                <div className="item-text">
                                    <h6>{article.title}</h6>
                                    <p className="publ-date">{moment(`${article.publishedAt}`).format('DD.MM.YYYY')}</p>
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