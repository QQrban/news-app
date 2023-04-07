import moment from "moment";

const CategoryItem = ({ article, i }) => {
    return (
        <>
            <div key={i} className="category-item">
                <img src={article.img} alt="1" />
                <div className="category-item-text border-bottom pb-1">
                    <h5>{article.title}</h5>
                    <div className="text-primary">{article.author} <span className="text-secondary">{moment(`${article.date}`).format('DD.MM.YYYY')}</span></div>
                    <p className="m-0">{article.description}</p>
                </div>
            </div>
        </>
    )
}

export default CategoryItem;