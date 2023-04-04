import { useState, useEffect } from "react";
import moment from "moment";
import { getFoodNews } from "../../../../services/apiServices";

const Food = () => {
    const [food, setFood] = useState(null);

    useEffect(() => {
        getFoodNews()
            .then(data => {
                const newData = data.results.filter(result => result.multimedia !== null).slice(0, 4).map(article => {
                    return {
                        url: article.url,
                        date: article.published_date,
                        title: article.title,
                        descr: article.abstract,
                        img: article.multimedia[2].url,
                    }
                });
                setFood(newData);
            })
    }, [])


    return (
        <section className="food">
            <h4 className="subtitle">
                <span>Food</span>
            </h4>
            {food?.length ? (
                <div className="food-content dual-section">
                    <div onClick={() => window.open(food[0].url)} className="food-main dual-section-main">
                        <div className="dual-img-wrap"> <img src={food[0].img} alt="1" /></div>
                        <h5 className="mt-2">{food[0].title}.</h5>
                        <p>{moment(`${food[0].date}`).format('DD.MM.YYYY')}</p>
                        <div>{food[0].descr}</div>
                    </div>
                    <div className="food-secondary dual-section-secondary">
                        {food.slice(1, 4).map((article, i) => (
                            <div onClick={() => window.open(article.url)} key={i} className="science-item dual-section-item">
                                <img src={article.img} alt="2" />
                                <div className="dual-item-text">
                                    <h6>{article.title}</h6>
                                    <p>{moment(`${article.date}`).format('DD.MM.YYYY')}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : <div>No data</div>}
        </section>
    )
}

export default Food;