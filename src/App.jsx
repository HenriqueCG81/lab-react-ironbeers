import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/HomePage';
import Beers from './components/Beers';
import NewBeer from './components/NewBeer';
import RandomBeers from './components/RandomBeers';
import Header from './components/Header';
import BeerDetails from './components/BeerDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/random-beer" element={<RandomBeers />} />
          <Route path="/new-beer" element={<NewBeer />} />
          <Route path="/beers/:_id" element={<BeerDetails />} />
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
