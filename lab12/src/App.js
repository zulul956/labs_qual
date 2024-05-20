import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './layout/Nav';
import Services from './pages/Services';
import Products from './pages/Products';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import FAQ from './pages/FAQ';
import Contacts from './pages/Contacts';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Nav />
                <Routes>
                    <Route path='/services' element={<Services />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/about' element={<About />} /> 
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/FAQ' element={<FAQ />} />
                    <Route path='/contacts' element={<Contacts />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
