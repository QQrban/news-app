import AdditionalInfo from "./AdditionalInfo/AdditionalInfo"
import Sports from "./Sports/Sports"

const FeaturedNews = () => {
    return (
        <section className="featured-news d-flex mt-5 gap-5">
            <div className="featured-left-column">
                <Sports />
            </div>
            <div className="featured-right-column w-50">
                <AdditionalInfo />
            </div>
        </section>
    )
}

export default FeaturedNews;