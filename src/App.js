import './App.scss';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCategoryNews } from './services/apiServices';
import { setCategoryNews } from './services/stateService';
import Header from './components/Header/Header';
import MainContent from './components/Body/MainContent';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading';
import CategoryWorld from './components/Body/CategoryWorld';
import CategoryBusiness from './components/Body/CategoryBusiness';
import CategorySport from './components/Body/CategorySport';
import CategoryTravel from './components/Body/CategoryTravel';
import { setTopNews } from './services/stateService';
import { getNews } from './services/apiServices';

function App() {
    const topNews = useSelector((state) => state.topNews);
    const dispatch = useDispatch();

    const url =
        'https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=x4cRbv0vVnmBqQxaEPCx6rfsqo27y8ha';

    useEffect(() => {
        const fetchItems = () => {
            try {
                getNews(url).then((data) => {
                    const newData = data.results
                        .filter((result) => result.media.length !== 0)
                        .slice(0, 12)
                        .map((article) => {
                            return {
                                title: article.title,
                                author: article.byline.slice(2),
                                date: article.published_date,
                                img: article.media[0]['media-metadata'][2].url,
                                url: article.url,
                            };
                        });
                    dispatch(setTopNews(newData));
                });
            } catch (err) {
                console.log(err);
            }
        };
        setTimeout(() => {
            fetchItems();
        }, 1000);
    }, [dispatch]);

    useEffect(() => {
        getCategoryNews().then((data) => {
            dispatch(setCategoryNews(data));
        });
    }, [dispatch]);

    return (
        <div className="App">
            {topNews?.length ? (
                <>
                    <Header />
                    <Routes>
                        <Route path="/" element={<MainContent />} />
                        <Route path="/world" element={<CategoryWorld />} />
                        <Route path="/business" element={<CategoryBusiness />} />
                        <Route path="/sport" element={<CategorySport />} />
                        <Route path="/travel" element={<CategoryTravel />} />
                    </Routes>
                    <Footer />
                </>
            ) : (
                <Loading />
            )}
        </div>
    );
}

export default App;
