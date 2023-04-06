import { useSelector } from "react-redux";
import { Container } from 'react-bootstrap';
import moment from "moment";
import AdditionalInfo from "./FeaturedNews/AdditionalInfo/AdditionalInfo";

const CategoryBusiness = () => {

    const categoryNews = useSelector(state => state.categoryNews)

    return (
        <main className='category'>
            <h2 className='text-center border-bottom p-4 fs-1'>Travel</h2>
            <Container className="category-container mt-5">
                <div className="category-left-block">
                    {categoryNews?.length ? categoryNews[0].travel.map((article, i) => (
                        <div key={i} className="category-item">
                            <img src={article.img} alt="1" />
                            <div className="category-item-text border-bottom pb-1">
                                <h5>{article.title}</h5>
                                <div className="text-primary">{article.author} <span className="text-secondary">{moment(`${article.date}`).format('DD.MM.YYYY')}</span></div>
                                <p className="m-0">{article.description}</p>
                            </div>
                        </div>
                    )) : <div>No data</div>}
                </div>
                <div className="category-right-block">
                    <AdditionalInfo />
                </div>
            </Container>
        </main>
    )
}

export default CategoryBusiness