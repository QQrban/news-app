import { useState, useEffect } from "react";
import { getEntertainNews } from '../../../../services/apiServices';

const Entertainment = () => {
    const [entertain, setEntertain] = useState(null);

    useEffect(() => {
        try {
            getEntertainNews()
                .then(data => {
                    const newData = data.results.slice(0, 4).map(result => {
                        return {
                            url: result.url,
                            title: result.title,
                            author: result.byline,
                            img: result.multimedia[2].url
                        }
                    });
                    setEntertain(newData);
                })
        } catch (err) {
            console.log(err);
        }
    }, [])

    return (
        <section className="entertain mt-4">
            <h4 className="subtitle">
                <span>Entertainment</span>
            </h4>
            <div className="entertain-content">
                {entertain?.length ? entertain.map((article, i) => (
                    <div onClick={() => window.open(article.url)} key={i} className="entertain-item">
                        <div>
                            <img src={article.img} alt="article" />
                            <div className="descr">
                                <div className='p-2'>
                                    <span>{article.author.slice(2)}</span>
                                    <h4>{article.title}</h4>
                                </div>
                            </div>
                        </div>

                    </div>
                )) : <div>No data</div>}

            </div>
        </section>
    )
}

export default Entertainment;