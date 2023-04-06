import './App.scss'
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import MainContent from './components/Body/MainContent';
import Footer from './components/Footer/Footer';
import Loading from "./components/Loading";
import CategoryWorld from './components/Body/CategoryWorld';
import CategoryBusiness from './components/Body/CategoryBusiness';
import CategorySport from './components/Body/CategorySport';
import CategoryTravel from './components/Body/CategoryTravel';

function App() {

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path='/' element={<MainContent />} />
                <Route path='/world' element={<CategoryWorld />} />
                <Route path='/business' element={<CategoryBusiness />} />
                <Route path='/sport' element={<CategorySport />} />
                <Route path='/travel' element={<CategoryTravel />} />
            </Routes>
            <Footer />
            <Loading />
        </div>
    );
}

export default App;
