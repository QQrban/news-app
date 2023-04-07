import SocialLinks from './SocialLinks';
import PopularPost from './PopularPost';

const AdditionalInfo = () => {
    return (
        <section className="additional-info">
            <h4 className="subtitle">
                <span>Social Links</span>
            </h4>
            <SocialLinks />
            <h4 className="subtitle mt-5">
                <span>Popular Post</span>
            </h4>
            <PopularPost />
            <div className="advertisement mt-5 d-flex flex-column align-items-center justify-content-center position-relative">
                <h6>-Advertisement-</h6>
                <img
                    className="mt-1"
                    style={{ filter: 'brightness(30%)' }}
                    src="https://picsum.photos/300/400"
                    alt="advertisement"
                />
                <div className="adv-text position-absolute text-white p-1 text-center">
                    <div className="fs-3 fw-bold ">Lorem, ipsum.</div>
                    <p className="mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Volnumquam
                        qui aperiam.
                    </p>
                    <button className="border-0 bg-primary text-white mt-3 rounded p-1">
                        Purchase now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AdditionalInfo;
