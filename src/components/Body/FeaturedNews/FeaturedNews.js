import AdditionalInfo from "./AdditionalInfo/AdditionalInfo"
import Entertainment from "./Entertainment/Entertainment";
import Food from "./Food/Food";
import Science from "./Science/Science";
import Sports from "./Sports/Sports"
import Travel from "./Travel/Travel";

const FeaturedNews = () => {
    return (
        <section className="featured-news d-flex mt-5 gap-5">
            <div className="featured-left-column">
                <Sports />
                <Entertainment />
                <div className="science-food-column">
                    <Science />
                    <Food />
                </div>
                <Travel />
            </div>
            <div className="featured-right-column">
                <AdditionalInfo />
            </div>
        </section>
    )
}

export default FeaturedNews;