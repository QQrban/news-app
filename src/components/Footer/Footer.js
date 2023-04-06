import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { getFooterNews } from "../../services/apiServices";
import moment from "moment";
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    const [footerNews, setFooterNews] = useState(null);

    useEffect(() => {
        getFooterNews()
            .then(data => {
                const newData = data.response.results.slice(0, 6).map(result => {
                    return {
                        url: result.webUrl,
                        title: result.webTitle,
                        date: result.webPublicationDate,
                        img: result.fields.thumbnail
                    }
                });
                setFooterNews(newData);
                console.log(newData);
            });
    }, [])

    return (
        <footer className="footer mt-5 bg-dark text-white">
            <Container>
                <div className="footer-content">
                    <div className="footer-about">
                        <h5 className="border-bottom pb-2">About</h5>
                        <p className="mt-3">Hello, I am Kurban Ramazanov, a beginner frontend developer.</p>
                        <p >I would appreciate it if you could share your opinion or provide advice on this project.</p>
                        <p className="mt-3 mb-4">This project was built using React18 and Bootstrap5, utilizing APIs from New York Times and The Guardian.</p>
                        <a className="d-block d-flex gap-2 text-white" href="tel:+37258444846">
                            <AiOutlinePhone size={22} />
                            (+372)5844-4846
                        </a>
                        <a className="d-block d-flex gap-2 text-white" href="mailto:kurban.ramazanovv@gmail.com">
                            <AiOutlineMail size={22} />
                            kurban.ramazanovv@gmail.com
                        </a>
                        <div className="footer-links d-flex gap-4 mt-3">
                            <BsFacebook onClick={() => window.open('https://www.facebook.com/profile.php?id=100006241362203')} size={20} />
                            <BsGithub onClick={() => window.open('https://github.com/QQrban')} size={20} />
                            <BsInstagram onClick={() => window.open('https://www.instagram.com/krbn.rmznv/')} size={20} />
                            <BsLinkedin onClick={() => window.open('https://www.linkedin.com/in/kurban-ramazanov-2b50b026b/')} size={20} />
                        </div>
                    </div>
                    <div className="footer-popular">
                        <h5 className="border-bottom pb-2">Popular Posts</h5>
                        {footerNews?.length ? footerNews.slice(0, 3).map((article, i) => (
                            <div onClick={() => window.open(article.url)} key={i} className="footer-popular-item">
                                <img src={article.img} alt="poster" />
                                <div className="footer-item-text">
                                    <h6>{article.title}</h6>
                                    <span className="text-secondary">{moment(`${article.date}`).format('DD.MM.YYYY')}</span>
                                </div>
                            </div>
                        )) : <div> No data</div>}
                    </div>
                    <div className="footer-editor">
                        <h5 className="border-bottom pb-2">Editor Picks</h5>
                        {footerNews?.length ? footerNews.slice(3, 6).map((article, i) => (
                            <div onClick={() => window.open(article.url)} key={i} className="footer-editor-item">
                                <img src={article.img} alt="" />
                                <div className="footer-item-text">
                                    <h6>{article.title}</h6>
                                    <span className="text-secondary">{moment(`${article.date}`).format('DD.MM.YYYY')}</span>
                                </div>
                            </div>
                        )) : <div>No data</div>}
                    </div>
                </div>
            </Container>
        </footer >
    )
}

export default Footer;