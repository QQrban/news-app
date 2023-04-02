import AdditionalInfo from "./AdditionalInfo/AdditionalInfo"
import Sports from "./Sports/Sports"

const FeaturedNews = () => {
    return (
        <section className="featured-news">
            <Sports />
            <AdditionalInfo />
        </section>
    )
}

export default FeaturedNews;