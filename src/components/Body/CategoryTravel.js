import { useSelector } from "react-redux";
import { Container } from 'react-bootstrap';
import AdditionalInfo from "./FeaturedNews/AdditionalInfo/AdditionalInfo";
import CategoryItem from "./CategoryItem";

const CategoryBusiness = () => {

    const categoryNews = useSelector(state => state.categoryNews)

    return (
        <main className='category'>
            <h2 className='text-center border-bottom p-4 fs-1'>Travel</h2>
            <Container className="category-container mt-5">
                <div className="category-left-block">
                    {categoryNews?.length ? categoryNews[0].travel.map((article, i) => (
                        <CategoryItem article={article} i={i} />
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