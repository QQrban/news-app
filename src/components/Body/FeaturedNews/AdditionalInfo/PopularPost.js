import { useSelector } from "react-redux";

const PopularPost = () => {

    const topNews = useSelector(state => state.topNews);

    return (
        <article className="popularity">
            {topNews?.length ? topNews.slice(6, 11).map((article, i) => (
                <div onClick={() => window.open(article.url)} key={i} className="popularity-item border-bottom d-flex">
                    <p className="fw-bold popular-header">{article.title}</p>
                </div>
            )) : <div>No data</div>}
        </article>
    )
}

export default PopularPost;