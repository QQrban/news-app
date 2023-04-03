import AdditionalInfo from "./AdditionalInfo/AdditionalInfo"
import Entertainment from "./Entertainment/Entertainment";
import Sports from "./Sports/Sports"

const FeaturedNews = () => {
    return (
        <section className="featured-news d-flex mt-5 gap-5">
            <div className="featured-left-column">
                <Sports />
                <Entertainment />
            </div>
            <div className="featured-right-column">
                <AdditionalInfo />
            </div>
        </section>
    )
}

export default FeaturedNews;