import { useState, useEffect } from "react";
import { getTravelNews } from "../../../../services/apiServices";
import moment from "moment";

const Travel = () => {
    const [travel, setTravel] = useState(null);

    useEffect(() => {
        try {
            getTravelNews()
                .then(data => {
                    const newData = data.response.results.map(result => {
                        return {
                            title: result.webTitle,
                            date: result.webPublicationDate,
                            url: result.webUrl,
                            img: result.fields.thumbnail,
                        }
                    });
                    setTravel(newData);
                });
        } catch (err) {
            console.log(err);
        }
    }, [])


    return (
        <section className="travel mt-3">
            <h4 className="subtitle">
                <span>Travel</span>
            </h4>
            <div className="travel-container">
                {travel?.length ? travel.slice(0, 4).map((article, i) => (
                    <div onClick={() => window.open(article.url)} key={i} className="travel-item">
                        <img src={article.img} alt="1" />
                        <div className="travel-item-text">
                            <h6>{article.title}</h6>
                            <div className="mt-3">{moment(`${article.date}`).format('DD.MM.YYYY')}</div>
                        </div>
                    </div>
                )) : <div>No data</div>}
            </div>
        </section>
    )
}

export default Travel;